const { getStorage } = require('../utils/storage.js')
/**
 * http请求，对wx.request()的封装
 * @param {Object} obj - 整体参数
 * @param {string} [obj.method] - 请求方法
 * @param {string} [obj.url] - 开发者服务器接口
 * @param {(string|Object|Array|ArrayBuffer)} [obj.data] - 请求的参数
 * @param {string} [obj.dataType] - 对返回值的预处理
 * @param {string} [obj.responseType] - 响应数据类型
 * @param {Object} [obj.header] - 请求的Header,header中不能设置Referer
 * @return {Promise} 返回封装异步请求的Promise对象
 */
function request({
  method = 'GET',
  url = '',
  data = {},
  dataType = 'json',
  responseType = 'text',
  header = {},
  needToken = true,
  showLoading = true,
  loadingText = '数据加载中',
  hideLoading = true,
  showSucessToast = false,
  successText = "数据加载成功",
  showErrorModal =  true,
  errorText = '数据加载失败',
  returnHeader = false,
  returnErrorCode =  false
} = {}) {
  let requestTask = null
  const p = new Promise((resolve,reject) => {
    //判断是否显示请求的Loading
    if(showLoading){
      wx.showLoading({ title: loadingText })
    }
    //判断请求是否需要带上token
    if(needToken) {
      const token = getStorage('token')

      // if(url.indexOf('?') != -1) {
      //   url = url + '&token=' + token
      // } else {
      //   url = url + '?token' + token
      // }

      url = url +  (url.index('?') === -1 ? '?token' : '&token') + token
    }
     requestTask = wx.request({
       method,
       url,
       data,
       dataType,
       responseType,
       header,
       success(res) {
         //判断是否隐藏请求的loading
         if (hideLoading) {
           wx.hideLoading()
         }
         const { statusCode, header } = res
         if(statusCode === 200){
           const { data } = res
           const { code } = data
           if (code === 0) {
             //判断是否显示请求成功的Toast
             if(showSucessToast){
               wx.showToast({
                 title: successText,
               })
             }
             if(returnHeader){
               resolve({ header,data:data.data })
             } else {
               resolve(data.data)
             }
           } else {
             const msg = `${errorText}: ${statusCode} - ${data.message || msg}`
             //判断是否显示请求成功的Modal
             if(showErrorModal){
               wx.showModal({
                 content: msg,
                 showCancel:false
               })
             }
             if(returnErrorCode) {
               reject({ code, msg })
             } else {
               reject(msg)
             }
           }
         }else{
           const msg = `${errorText}: ${statusCode}-${res.errMsg}`
           // 判断是否显示请求失败的Modal
           if (showErrorModal) wx.showModal({ content: msg, showCancel: false })
           reject(msg)
         }
       },
       fail(res) {
         if(hideLoading){
           wx.hideLoading()
         }
         //判断是否显示请求失败的Modal
         if(showErrorModal){
           wx.showModal({
             content: '哦豁，网络开小差了，再次请求试试',
             showCancel: false
           })
         }
         reject(res)
       }

     }) 
  })
  //将requestTask暴露出去
  p.abort = function() {
    requestTask.abort()
  }
  return p
}

module.exports = {
  request,
}