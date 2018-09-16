// pages/addrManage/addrManage.js
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
    this.queryAddrs()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.hideNavigationBarLoading()
  },

  /**
   * 查询地址
   */
  queryAddrs: function () {
    var db = wx.cloud.database()
    db.collection('receiving_addr').get()
    .then(res => {
      console.log(res)
    })
  },
  
  /**
   * 新增地址
   */
  newAddr: function () {
    wx.navigateTo({
      url: '/pages/newaddr/newaddr',
    })
  }
})