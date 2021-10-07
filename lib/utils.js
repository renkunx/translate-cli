const lodash = require('lodash');
const i18n = require('../i18n')
/**
 * 遍历对象，返回key值和内容
 * @param {*} object 处理对象
 * @param {*} parentKey 标记子对象位置
 */
function * iterateObject(object, parentKey=''){
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      let keyString = parentKey === '' ? key : parentKey+'.'+key
      if (typeof element === 'string' ) {
        yield {key: keyString , value:element};
      } else if ( typeof element === 'function' ) {
        yield {key: keyString , value:element()};
      } else if (typeof element === 'object') {
        yield* iterateObject(element, keyString);
      } else {
        log.error(i18n.__('unrecognizedObjectType'), typeof element)
      }
    }
  }
}

const utils = {
  iterateObject,
  lodash
};

module.exports = utils