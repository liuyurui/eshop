function login(options) {
  var app = getApp()
  var that = this;
  var token = app.globalData.token;
  if (token != null) {
    //校验token
  } else {
    //首次登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          wx.request({
            url: app.globalData.baseurl + 'login',
            data: {
              code: res.code
            },
            method: 'POST',
            success: res => {
              app.globalData.token = res.token
              wx.setStorageSync('token', app.globalData.token)
            }
          })
        }
      }
    })  
  }
}

module.exports = {
  login: login
}