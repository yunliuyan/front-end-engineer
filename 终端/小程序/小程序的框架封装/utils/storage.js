/**
 * 对wx.setStorage()和wx.setStorageSync()的封装
 * @param {string} key - 本地缓存中的指定的key
 * @param {string|Object} data - 需要存储的内容
 * @param {boolean} isSync - 是否同步设置缓存
 * @return {void|Promise} 
 */
function setStorage(key = '', data = {}, isSync = true) {
  if(isSync) {
    return wx.setStorageSync(key, data)
  } else {
    return new Promise((resolve, reject) => {
      wx.setStorage({
        key,
        data,
        success: function(){
          resolve()
        },
        fail(res) {
          reject()
        }
      })
    })
  }
}

/**
 * 对wx.getStorage()和wx.getStorageSync()的封装
 * @param {string} key - 本地缓存中指定的key
 * @param {boolean} isSync - 是否同步获取缓存 
 * @return {string|Promise}
 */
function getStorage(key = '', isSync = true) {
  if (isSync) {
    return wx.getStorageSync(key)
  } else {
    return new Promise((resolve, reject) => {
      wx.getStorage({
        key,
        success(res) { resolve(res.data) },
        fail(res) { reject(res) }
      })
    })
  }
}


/**
 * 对wx.removeStorage()和wx.removeStorageSync()的封装
 * @param {string} key - 本地缓存中指定的key
 * @param {boolean} isSync - 是否同步移除指定的缓存
 * @return {void|Promise} 
 */
function removeStorage(key = '', isSync = true) {
  if (isSync) {
    return wx.removeStorageSync(key)
  } else {
    return new Promise((resolve, reject) => {
      wx.removeStorage({
        key,
        success() { resolve() },
        fail(res) { reject() }
      })
    })
  }
}

/**
 * 对wx.clearStorage()和wx.clearStorageSync()的封装
 * @param {boolean} isSync - 是否同步清除缓存
 * @return {void|Promise} 
 */
function clearStorage(isSync = true) {
  if (isSync) {
    wx.clearStorageSync()
  } else {
    return new Promise((resolve, reject) => {
      wx.clearStorage({
        success() { resolve() },
        fail(res) { reject(res) }
      })
    })
  }
}

/**
 * 对wx.getStorageInfo()和wx.getStorageInfoSync()的封装
 * @param {boolean} isSync - 是否同步获取缓存的信息
 * @return {Object|Promise} 
 */
function getStorageInfo(isSync = true) {
  if (isSync) {
    return wx.getStorageInfoSync()
  } else {
    return new Promise((resolve, reject) => {
      wx.getStorageInfo({
        success(res) { resolve(res) },
        fail(res) { reject(res) }
      })
    })
  }
}

module.exports = {
  setStorage,
  getStorage,
  removeStorage,
  clearStorage,
  getStorageInfo
}