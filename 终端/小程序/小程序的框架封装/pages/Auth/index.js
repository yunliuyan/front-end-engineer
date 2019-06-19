// pages/Auth/index.js
const app = getApp();
const { APP_ID } = require('../../config/common.js');
const { request } = require('../../config/http.js');
const { login } = require('../../utils/openLogin.js');
const { setStorage } = require('../../utils/storage.js');
const {
  LOGIN_WECHAT_LOGIN,
  LOGIN_WECHAT_GET_USERINFO,
  LOGIN_APP_REGISTER_LOGIN
} = require('../../config/api.js');
const regeneratorRuntime = require('../../utils/regenerator-runtime/runtime.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  async getUserInfo(e) {
    const { session_key } = this.data
    if(!session_key) {
      return wx.showToast({
        title: '登录失败，重新授权试试~',
        icon: 'none'
      })
    }
    const { encryptedData, iv } = e.detail

    //获取用户的微信信息
    const weChatUserInfo = await request({
      method: 'POST',
      url: LOGIN_WECHAT_GET_USERINFO,
      data: {
        encryptedData,
        iv,
        appId: APP_ID,
        sessionKey: session_key
      },
      needToken: false,
      showLoadind: false,
      hideLoading: false,
      errorText: '登录失败'
    })

    //进行用户注册或登录，将返回的信息储存在本地缓存
    const { openId, avatarUrl, nickName } = wechatUserInfo
    const { header, data } = await request({
      method: 'POST',
      url: LOGIN_APP_REGISTER_LOGIN,
      data: {
        nickName,
        appId: APP_ID,
        openid: openId,
        headImg: avatarUrl
      },
      needToken: false,
      loadingText: '正在登录',
      returnHeader: true,
      errorText: '登录失败'
    })
    setStorage('sessionKey', session_key)
    setStorage('tempToken', data.Token)
    setStorage('refreshToken', header.Authorization)
    setStorage('userInfo', data.UserInfo)
    setStorage('isLogin', true)
  },
  /**
   * 生命周期函数--监听页面加载  
   */
  async onLoad(options) {
    //请求微信接口wx.login,获取code
    const code = await login();
    console.log(code)
    const { session_key } = await request({
      method: 'POST',
      url: `${LOGIN_WECHAT_LOGIN}?appId=${APP_ID}&code=${code}`,
      needToken: false,
      showLoading: false,
      showErrorModal: false
    }).catch(()=>{
      console.log('调用wx.login失败')
    })
    this.data.session_key = session_key;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})