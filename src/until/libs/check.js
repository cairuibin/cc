/**
 * 判断是否是邮箱地址
 * @param {String} data
 */
 const checkEmail = data => {
    const reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g
    if (reg.test(data)) return true
}

/**
* 判断是否是手机号，只要是13,14,15,16,17,18,19开头即可
* @param {String} data
*/
 const checkTelphone = data => {
    const reg = /^((\+|00)86)?1[3-9]\d{9}$/g
    if (reg.test(data)) return true
}

/**
* 判断是否是正确的网址
* @param {String} url 网址
*/
 const checkUrl = url => {
    const a = document.createElement('a')
    a.href = url
    return [
        /^(http|https):$/.test(a.protocol),
        a.host,
        a.pathname !== url,
        a.pathname !== `/${url}`
    ].find(x => !x) === undefined
}

/**
 * 判断是浏览器内核
 */
 const checkBrowser = () => {
    const u = navigator.userAgent;
    const obj = {
      trident: u.indexOf("Trident") > -1, //IE内核
      presto: u.indexOf("Presto") > -1, //opera内核
      webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
      gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
    }
    return Object.keys(obj)[Object.values(obj).indexOf(true)]
  };

  export default {
    checkEmail,
    checkTelphone,
    checkUrl,
    checkBrowser
  }