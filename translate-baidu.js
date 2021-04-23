/**
 * 百度翻译
 */

const md5 = require("md5")
const urllib = require("urllib")
const log = require("./lib/logging")
const config = require("./translate.local")
const salt = getRandomInt(1000001, 10000000).toString()
// APPID
const appid = config.baidu.appid
// 密钥
const appkey = config.baidu.appkey
// 请求地址
const host = "https://fanyi-api.baidu.com/api/trans/vip/translate"

/**
 * 百度翻译
 * @param {*} queryString
 * @param {*} from
 * @param {*} to
 */
const translate = (queryString, from='auto', to) => {
  if (!appid || !appkey) {
    log.error('请检查baidu翻译的appid和key设置')
  }
  const sign = md5(`${appid}${queryString}${salt}${appkey}`)
  return urllib.request(
    host,
    {
      method: "POST",
      data: {
        q: queryString,
        from,
        to,
        appid,
        salt,
        sign,
        tts: 1,
        dict: 1,
        action: 0,
      },
      contentType: "multipart/form-data",
      dataType: "json",
    }
  )
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


// translate('我叫任琨', 'zh', 'en').then(res => log.info(res.data.trans_result));

module.exports = baidu