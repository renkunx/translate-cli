#!/usr/bin/env node
"use strict";
const commander = require('commander');
const ora = require('ora');
const log = require("./lib/logging");
const program = new commander.Command();
const { version } = require('./package.json');
const { readAsObject, writeBack } = require('./lib/file');
const { readJSConfigFile } = require('./lib/init');
const addedDiff = require("deep-object-diff").addedDiff;
const engine = require("./engine");
const utils = require('./lib/utils');

program
  .version(version, '-v,--version', 'output the current version')
  .description('Machine learning translate any language.')
  .addOption(new commander.Option('-p, --platform [name]', 'designated translation platform').default('baidu').choices(['baidu','google']))
  .addOption(new commander.Option('-t, --type [type]', 'designated translation content').default('string').choices(['string','file']))
  .addOption(new commander.Option('-f, --config [type]', 'config file').default('translate.config.js'))
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
        log.error(error_msg)
      } else {
        log.info(data.trans_result[0].dst)
      }
    }
    
  });

program.parse()

async function translateFile(from, to, translateEngine, config) {
  const spinner = ora('文件处理中...').start();
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
  while (!iterator.done){
    let result = iterator.value
    let {data} = await translateEngine.translate(result.value , 'zh', 'en', config)
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