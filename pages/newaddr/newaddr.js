// pages/newaddr/newaddr.js
var app = getApp()
var loginUtil = require('../../utils/loginUtil.js')
var name, phone

Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

  bindNameInput: function(e) {
    name = e.detail.value
  },

  bindPhoneInput: function(e) {
    phone = e.detail.value
  },

  newAddr: function () {
    var db = wx.cloud.database()
    db.collection('receiving_addr').add({
      data: {
        receiver: name,
        phone: phone
      },
      success: function (res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
      },
      fail: console.error
    })
  }
})