const fs = require('fs');
const path = require('path');
const basePath = process.cwd();

const rules = {
  '.js': [
    [/export\s+default\s+/g, ''],
    [';','']
  ]
}

/**
 * 读取文件为Object
 * @param {*} path 相对路径
 */
function readAsObject(pathString) {

  if (!path.isAbsolute(pathString)) {
    pathString = path.resolve(basePath,pathString)
  }

  fs.accessSync(pathString, fs.constants.R_OK | fs.constants.W_OK);
  let fileString = fs.readFileSync(pathString).toString();

  // 格式化
  if (rules[path.extname(pathString)]) {
    let ruleArray = rules[path.extname(pathString)];
    ruleArray.forEach(element => {
      fileString = fileString.replace(element[0], element[1]);
    });
  }

  return eval('('+fileString+')');
}

const file = {
  readAsObject
}

module.exports = file;