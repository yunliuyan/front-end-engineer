const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//时间戳转时间
const time = timestamp => {
  timestamp = timestamp.toString().length < 13 ? timestamp * 1000 : timestamp
  let date = new Date(timestamp);
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
  let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
  return Y + M + D + h + m + s;
}

// 字符串是否必填校验
const checkRequestStr = (inputStr, fieldName) => {
  if (inputStr.trim() === '') {
    let info = fieldName ? fieldName + '不可为空' : '不可为空'
    wx.showToast({
      title: info,
      icon: 'none',
      mask: true,
      duration: 2000
    })
    return false
  } else {
    return true
  }
}

// 验证手机号（精确）
const checkPhone = (inputStr, fieldName) => {
  inputStr = inputStr.toString();
  if (inputStr.trim() === '') {
    let info = fieldName ? fieldName + '不可为空' : '手机号不可为空'
    wx.showToast({
      title: info,
      icon: 'none',
      mask: true,
      duration: 2000
    })
    return false
  } else {
    const regex = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/ig
    let result = regex.test(inputStr)
    if (!result) {
      let info = fieldName ? '请输入正确' + fieldName : '请输入正确手机号'
      wx.showToast({
        title: info,
        icon: 'none',
        mask: true,
        duration: 2000
      })
      return false
    }
    return true
  }
}
//验证身份证号
const checkIdCardLength = (inputStr, fieldName) => {
  inputStr = inputStr.toString();
  if (inputStr.trim() === '') {
    let info = fieldName ? fieldName + '不可为空' : '身份证不可为空'
    wx.showToast({
      title: info,
      icon: 'none',
      mask: true,
      duration: 2000
    })
    return false
  } else {
    if (inputStr.length != 18) {
      let info = fieldName ? '请输入正确' + fieldName : '请输入正确身份证号'
      wx.showToast({
        title: info,
        icon: 'none',
        mask: true,
        duration: 2000
      })
      return false
    }
    return true
  }
}
module.exports = {
  formatTime: formatTime,
  time,
  checkRequestStr,
  checkPhone,
  checkIdCardLength
}
