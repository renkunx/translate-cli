const lodash = require('lodash');
/**
 * 遍历对象，并对对象值进行回调处理
 * @param {*} object 处理对象
 * @param {*} dealValuefunction 对象值的处理函数
 */
const iterateObject = async (object, dealValuefunction = ()=>{}) => {
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      if (typeof element === 'string' ) {
        await dealValuefunction(object, key , element);
      } else if ( typeof element === 'function' ) {
        await dealValuefunction(object, key , element());
      } else if (typeof element === 'object') {
        iterateObject(element, dealValuefunction);
      } else {
        log.error('未识别的对象类型', typeof element)
      }
    }
  }
  return object;
}

const utils = {
  iterateObject,
  lodash
};

module.exports = utils