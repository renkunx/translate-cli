#!/usr/bin/env node
"use strict";
const { Command } = require('commander');
const path = require('path');
const log = require("./lib/logging");
const program = new Command();
const { version } = require('./package.json');

program
  .version(version, '-v,--version', 'output the current version')
  .description('Machine learning translate any language.')
  .arguments('<from> <to>')
  .action((from, to) => {
    // 从from文件中导出翻译对象
    let str = ;
    // log.info(str);
    let fromObject = eval('('+str+')');
    log.info(fromObject.common);
    // 从to文件中导出翻译对象
    // let toObject = require(path.resolve(basePath,to));
    // for (const key in fromObject) {
    //   if (Object.hasOwnProperty.call(fromObject, key)) {
    //     const element = fromObject[key];
    //     log.info(element)
    //   }
    // }
    // log.info(fromObject)
    // log.info(toObject)
    // 比对 from 和 to 对象的差异，返回差异对象
    // 翻译差异对象
    // 写入插入对象

  })
  .option('-p, --platform [name]', 'designated translation platform', 'baidu');

program.parse()