#!/usr/bin/env node
"use strict";
const { Command } = require('commander');
const log = require("./lib/logging");
const program = new Command();
const { version } = require('./package.json');
const { readAsObject } = require('./lib/file');
const addedDiff = require("deep-object-diff").addedDiff;
const baidu = require("./translate-baidu");
const utils = require('./lib/utils')

program
  .version(version, '-v,--version', 'output the current version')
  .description('Machine learning translate any language.')
  .arguments('<from> <to>')
  .action( async(from, to) => {
    // 从from文件中导出翻译对象
    let fromObject = readAsObject(from);
    // 从to文件中导出翻译对象
    let toObject = readAsObject(to);
    // 比对 from 和 to 对象的差异，返回差异对象
    let diffObj = addedDiff(toObject,fromObject);
    // 翻译差异对象
    function translate() {
      baidu.translate(element , 'zh', 'en').then(res => {
        log.info(res.data.trans_result);
        object[key] = res.data.trans_result[0].dst;
      })
    }
    diffObj = await utils.iterateObject(diffObj, (object, key , element) => {
      utils.lodash.throttle( translate, 1*1000);
    });
    // 写入插入对象
    toObject = Object.assign(toObject,diffObj);
    log.info(toObject);

  })
  .option('-p, --platform [name]', 'designated translation platform', 'baidu');

program.parse()