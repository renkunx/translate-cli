#!/usr/bin/env node
"use strict";
const commander = require('commander');
const ora = import('ora');
const path = require('path');
const log = require("./lib/logging");
const program = new commander.Command();
const { version } = require('./package.json');
const { readAsObject, writeBack } = require('./lib/file');
const { readJSConfigFile } = require('./lib/init');
const addedDiff = require("deep-object-diff").addedDiff;
const engine = require("./engine");
const utils = require('./lib/utils');
const i18n = require('./i18n');

program
  .version(version, '-v,--version', i18n.__('output the current version'))
  .description(i18n.__('Machine learning translate any language.'))
  .addOption(new commander.Option('-p, --platform [name]', i18n.__('designated translation platform')).default('baidu').choices(['baidu','google']))
  .addOption(new commander.Option('-t, --type [type]', i18n.__('designated translation content')).default('string').choices(['string','file']))
  .addOption(new commander.Option('-f, --config [type]', i18n.__('config file')).default('translate.config.js'))
  .arguments('<from> [to]')
  .action( async(from, to='en', options) => {
    // 读取配置文件
    const configAll = readJSConfigFile(options.config)
    let translateEngine = engine[options.platform]
    const config = configAll[options.platform]
    // 未获取到配置
    if (!config) {
      return
    }
    if (options.type === 'file') {
      // 翻译文件
      translateFile(from, to, translateEngine, config);     
    } else {
      // 直接翻译
      let {data} = await translateEngine.translate(from , 'auto', to, config)
      if (data.error_msg) {
        log.error(data.error_msg)
      } else {
        log.info(data.trans_result[0].dst)
      }
    }
    
  });

program.parse()

async function translateFile(from, to, translateEngine, config) {
  const spinner = ora(i18n.__('File processing...')+'\n').start();
  // 从from文件中导出翻译对象
  let fromObject = readAsObject(from);
  // 从to文件中导出翻译对象
  let toObject = readAsObject(to);
  // 比对 from 和 to 对象的差异，返回差异对象
  let diffObj = addedDiff(toObject,fromObject);
  // 翻译差异对象
  let iterators = utils.iterateObject(diffObj);
  var iterator = iterators.next()
  // 统计对象
  let statistic = {
    counts: 0,
    characters: 0
  }

  // 要翻译的语言 如果是文件，以文件名为准
  const toLanguage = path.basename(to).split('.')[0];

  while (!iterator.done){
    let result = iterator.value
    let {data} = await translateEngine.translate(result.value , 'auto', toLanguage, config)
    if (data.error_msg) {
      log.error(error_msg)
    } else {
      utils.lodash.set(diffObj, result.key, data.trans_result[0].dst)
    }
    spinner.succeed(result.key)
    statistic.counts += 1
    statistic.characters += result.value.length
    iterator = iterators.next()
  }
  // 写入插入对象
  toObject = Object.assign(toObject,diffObj);
  // 打印统计数据
  console.table(statistic);  
  writeBack(toObject, to);
  spinner.stop();
}