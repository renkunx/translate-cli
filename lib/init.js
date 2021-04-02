const fs = require("fs")
const stringify = require("json-stable-stringify-without-jsonify")
const path = require("path")
const log = require("./logging")

/**
 * Determines sort order for object keys for json-stable-stringify
 *
 * see: https://github.com/samn/json-stable-stringify#cmp
 * @param   {Object} a The first comparison object ({key: akey, value: avalue})
 * @param   {Object} b The second comparison object ({key: bkey, value: bvalue})
 * @returns {number}   1 or -1, used in stringify cmp method
 */
 function sortByKey(a, b) {
  return a.key > b.key ? 1 : -1;
}

/**
 * Writes a configuration file in JSON format.
 * @param {Object} config The configuration object to write.
 * @param {string} filePath The filename to write to.
 * @returns {void}
 * @private
 */
 function writeJSConfigFile(config, filePath=`${process.cwd()}`) {
  let fileName = path.join(filePath,'translate.js');
  log.info(`Writing JS config file: ${fileName}`);

  const content = `module.exports = ${stringify(config, { cmp: sortByKey, space: 2 })};\n`;

  fs.writeFileSync(fileName, content, "utf8");
}

function readJSConfigFile(filePath) {
  let config = {}
  if (!fs.existsSync(filePath)) {
    log.error('配置文件未获取到')
    return
  }
  config = require(path.resolve(filePath))
  return config;
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

const init = {
  writeJSConfigFile,
  readJSConfigFile
};

module.exports = init