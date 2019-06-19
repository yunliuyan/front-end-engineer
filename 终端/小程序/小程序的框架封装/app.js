//app.js
const regeneratorRuntime = require('./utils/regenerator-runtime/runtime.js')
const { setStorage, getStorage } = require('./utils/storage.js')
const { AUTH } = require('./config/router.js')
const { request } = require('./config/http.js')
const {
  LOGIN_TOKEN_REFRESH,
  LOGIN_OPENID_REFRESH
} = require('./config/api.js');
App({
  canIUse() {
    return getStorage('isLogin') && this.globalData.hasRefresh
  },
  getFrom(path, query) {
    for (let key in query) {
      path += path.indexOf('?') === -1 ? '?' : '&'
      path += `${key}=${query[key]}`
    }
    this.globalData.fm = '/' + path
  },
  async handleLogin() {
    //先确保跳转的页面不请求接口
    this.globalData.hasRefresh = false

    const isLogin = getStorage('isLogin')

    if(isLogin) {
      let tempToken = ''

      //基于refreshToken的tempToken的刷新
      const refreshToken = getStorage('refreshToken')
      const res = await request({
        method: 'POST',
        url: `${LOGIN_TOKEN_REFRESH}?token=${refreshToken}`,
        needToken: false,
        showLoading: false,
        hideLoading: false,
        showErrorModal: false,
        errorText: 'refreshToken刷新失败'
      }).catch(err=>console.log(err))

      if(res){
        tempToken = res.Token
      } else {
        //基于openId的tempToken刷新
        const { openId } = getStorage('userInfo');
        const { header,data } = await request({
          url: `${LOGIN_OPENID_REFRESH}?openId=${OpenId}`,
          needToken: false,
          showLoading: false,
          hideLoading: flase,
          showErrorModal: false,
          errorText: 'openId刷新失败',
          returnHeader: true
        }).catch(err=>console.log(err))

        tempToken = data.Token   
        setStorage('refreshToken', header.Authorization)
      }
      setStorage('tempToken', tempTokken)
      //跳转相对应的页面
      this.globalData.hasRefresh = true
      wx.reLaunch({
        url: this.globalData.fm,
      })
    } else {
      wx.reLaunch({
        url: AUTH,
      })
    }
  },
  onLaunch: function (options) {
    // 获取系统的信息，存入缓存中
    if (!getStorage('sysInfo', true)) {
      const sysInfo = wx.getSystemInfoSync()
      const { screenWidth, screenHeight } = sysInfo
      sysInfo.screenHeightRpx = 750 * screenHeight / screenWidth
      sysInfo.perRpx = screenWidth / 750
      setStorage('sysInfo', sysInfo)
    }

    //获得启动小程序的路径
    const { path, query } = options
    this.getFrom(path,query)

    //处理token
    this.handleLogin()
  },
  globalData: {
    userInfo: null,
    fm: '',
    hasRefresh: true,
  }
})