#!/usr/bin/env node
"use strict";
const { Command } = require('commander');
const log = require("./lib/logging")
const program = new Command();

const { version } = require('./package.json');
program
  .version(version, '-v,--version', 'output the current version')
  .description('Machine learning translate any language by Baidu api.')
  .command('init', 'init translate service')
  .command('run', 'start service, or all if no name supplied');

program.parse()