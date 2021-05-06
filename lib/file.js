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

  return sortObj(eval('('+fileString+')'));
}

/**
 * 对象键值排序
 * @param {*} obj 
 * @returns 
 */
function sortObj(obj) {
  return Object.keys(obj).sort().reduce(function (result, key) {
    result[key] = obj[key];
    return result;
  }, {});
}

function writeBack(obj, pathString) {
  if (!path.isAbsolute(pathString)) {
    pathString = path.resolve(basePath,pathString)
  }

  fs.accessSync(pathString, fs.constants.R_OK | fs.constants.W_OK);

  let data = `export default ${JSON.stringify(obj, null, 2)};\n`;
  fs.writeFileSync(pathString, data, {encoding: 'utf8',flag: 'w'})
}

const file = {
  readAsObject,
  writeBack,
}

module.exports = file;