/**
 * 全局替换某个字符为另一个字符
 * @param {String} str 字符
 * @param {String} valueOne 包含的字符
 * @param {String} valueTwo 要替换的字符,选填
 */
 const strReplace = (str, valueOne, valueTwo) => {
    return str.replace(new RegExp(valueOne,'g'), valueTwo)
  }

  export default {
    strReplace
  }
  