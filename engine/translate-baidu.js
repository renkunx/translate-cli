/**
 * 百度翻译
 */

const md5 = require("md5")
const axios = require("axios")
const FormData = require("form-data")
const log = require("../lib/logging")
const salt = getRandomInt(1000001, 10000000).toString()

// 请求地址
const host = "https://fanyi-api.baidu.com/api/trans/vip/translate"

/**
 * 百度翻译
 * @param {*} queryString
 * @param {*} from
 * @param {*} to
 */
const translate = (queryString, from='auto', to, config) => {
  // APPID
  const appid = config.appid
  // 密钥
  const appkey = config.appkey
  if (!appid || !appkey) {
    log.error('请检查baidu翻译的appid和key设置')
  }
  const sign = md5(`${appid}${queryString}${salt}${appkey}`)
  var data = new FormData();
  data.append('q', queryString);
  data.append('from', from);
  data.append('to', to);
  data.append('appid', appid);
  data.append('salt', salt);
  data.append('sign', sign);
  data.append('tts', '1');
  data.append('dict', '1');
  return axios.post(host, data, {headers: {...data.getHeaders()}});
}

// 得到一个两数之间的随机整数
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min //不含最大值，含最小值
}

const baidu = {
  translate
}

module.exports = baidu