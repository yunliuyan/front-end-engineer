function login (timeout = 1000) {
  return new Promise((resolve,reject) => {
    wx.login({
      timeout,
      success: function(res) {
        if (res.code){
          resolve(res.code)
        } else {
          reject(res.msg)
        }
      },
      fail: function(res) {
        reject(res)
      }
    })
  })
}

module.exports = {
  login,
}