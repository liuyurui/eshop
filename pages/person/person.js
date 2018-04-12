// pages/person/person.js
var app = getApp()
var loginUtil = require('../../utils/loginUtil.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideShareMenu()
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
    this.getUserInfo()
    loginUtil.login()
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
    
  },

  /**自定义函数开始 */
  /**
   * 获取用户信息，显示在我的
   */
  getUserInfo: function () {
    var that = this
    if (app.globalData.userInfo == null) {
      //判断是否关闭了授权
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: res => {
                app.globalData.userInfo = res.userInfo
                that.setData({
                  userInfo: app.globalData.userInfo
                })
                that.uploadUserInfo();
              }
            })
          } else {
            wx.openSetting({
              
            })
          }
        }
      })
    } else {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }
  },

  /**
   * 上传用户信息
   */
  uploadUserInfo: function () {

  },

  goAddrManage: function () {
    wx.navigateTo({
      url: '/pages/addrManage/addrManage',
    })
  }
})