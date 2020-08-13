/**
 * 格式化文件单位
 * @param {String || Number} size  文件大小(kb)
 */
 const fileFormatSize = size => {
    var i
    var unit = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
    for (i = 0; i < unit.length && size >= 1024; i++) {
      size /= 1024
    }
    return (Math.round(size * 100) / 100 || 0) + unit[i]
  }
  
  export default {
    fileFormatSize
  }