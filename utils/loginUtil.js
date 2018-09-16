var logining = false;
var lastCallback = null

/**
 * 登录逻辑，同时只会存在一个wx.login，callback会保存最后一个login请求的，之前的callback作废
 */
function login(callback) {
  var app = getApp()
  var that = this;
  var token = app.globalData.token;
  if (token != null) {
    //校验token
    if (typeof(callback) == 'function') {
      callback()
    }
  } else {
    //首次登录
    var that = this
    this.lastCallback = callback
    if (!logining) {
      logining = true
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          if (res.code) {
            wx.request({
              url: app.globalData.baseurl + 'user/login',
              data: {
                code: res.code,
                seller_id: app.globalData.seller_id
              },
              method: 'POST',
              success: res => {
                app.globalData.token = res.data.token
                wx.setStorageSync('token', app.globalData.token)
              },
              complete: res => {
                if (typeof (that.lastCallback) == 'function') {
                  that.lastCallback()
                }
                logining = false
                console.log(app.globalData.baseurl + 'user/login:')
                console.log(res)
              }
            })
          } else {
            if (typeof (that.lastCallback) == 'function') {
              that.lastCallback()
            }
            logining = false
          }
        },
        fail: res => {
          if (typeof (that.lastCallback) == 'function') {
            that.lastCallback()
          }
          logining = false
        }
      })  
    }
  }
}

module.exports = {
  login: login
}