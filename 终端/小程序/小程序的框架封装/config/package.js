
/**
 * 对小程序的api的二次封装
 */

/**
 * 下载单个或多个文件，对wx.downloadFile的封装
 * @param {string[]} urls - 所有需要下载的资源，可以是一个，可以是多个
 * @param {Object} header - 请求Header，header中不能设置Referer
 * header中需要指定合理的Content-Type字段，以保证客户端正确处理文件类型
 * @return {Promise} 封装下载操作的Promise对象
 */
function downloadFile({ urls = [], header = {} } = {}) {
  /**
   * 下载单个文件
   * @param {string} url - 所要下载资源的url
   * @return {Promise} 封装下载操作的Promise 
   */
  function createPromise(url) {
    let downloadTask = null
    const p = new Promise((resolve, reject) => {
      downloadTask = wx.downloadFile({
        url,
        header,
        success(res) {
          const { statusCode } = res
          if (statusCode === 200) {
            const { tempFilePath } = res
            resolve(tempFilePath)
          } else {
            const { errMsg } = res
            const err = `下载失败：${statusCode}-${errMsg}`
            reject(err)
          }
        },
        fail(res) {
          const err = `接口调用失败：${res}`
          reject(err)
        },
      })
    })
    // 暴露出downloadTask
    p.onProgressUpdate = function (callback) {
      downloadTask.onProgressUpdate((res) => {
        callback(res)
      })
    }
    p.abort = function () {
      downloadTask.abort()
    }
    return p
  }
  // 判断是下载一个文件还是多个文件
  const len = urls.length
  if (len === 1) {
    return new Promise((resolve, reject) => {
      // 显示下载的Loading
      //wx.showLoading({ title: '正在下载' })
      createPromise(urls[0])
        .then(tempFilePath => thenHandle(tempFilePath, resolve))
        .catch(err => catchHandle(err, reject))
    })
  }
  if (len > 1) {
    return new Promise((reslove, reject) => {
      // 显示下载的Loading
      //wx.showLoading({ title: '正在下载' })
      Promise.all(urls.map(item => createPromise(item)))
        .then(tempFilePaths => thenHandle(tempFilePaths, resolve))
        .catch(err => catchHandle(err, reject))
    })
  }
}

/**
 * 上传图片，对wx.chooseImage,wx.uploadFile的封装
 */
//上传单张图片
function singleImage({url='', fn='', needAlbum=true, needCamera=true} = {}) {
  let sourceType = [];
  if(needAlbum) {
    sourceType.push('album')
  }
  if (needCamera) {
    sourceType.push('camera')
  }
  wx.chooseImage({
    count: 1,
    sizeType: ['original', 'compressed'],
    sourceType,
    success: function(res) {
      const tempFilePaths = res.tempFilePaths;
      wx.uploadFile({
        header: {
          "Content-Type": "multipart/form-data"
        },
        url,
        filePath: tempFilePaths[0],
        name: 'file',
        success: function(res){
          fn(res)
        }
      })
    },
  })
}
//多图上传
 function muchImages({ url = '', fn = '', count=9, needAlbum = true, needCamera = true } = {}){
  let list = [];
  let sourceType = [];
  if (needAlbum) {
    sourceType.push('album')
  }
  if (needCamera) {
    sourceType.push('camera')
  }
  wx.chooseImage({
    count,
    sizeType: ['original', 'compressed'],
    sourceType,
    success: function(res) {
      const tempFilePaths = res.tempFilePaths;
      tempFilePaths.forEach(async (filePath) => {
        await wx.uploadFile({
          url,
          filePath,
          name: 'file',
          header: {
            "Content-Type": "multipart/form-data"
          },
          success: function(res){
            fn(res)
          },
          fail(res) {
            wx.showModal({
              content: res.msg,
              showCancel: false
            })
          }
        })
      })
    },
  })
}
module.exports = {
  downloadFile,
  singleImage,
  muchImages
}