// pages/home/home.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData)
    var that = this
    wx.showNavigationBarLoading()

    //请求首页数据
    const db = wx.cloud.database()

    wx.cloud.callFunction({
      // 云函数名称
      name: 'getCarefullyChosen',
      // 传给云函数的参数
      complete: res => {
        console.log(res)
        if (res.result.banners.length > 1) {
          that.setData({
            autoplay: true
          })
        } else {
          that.setData({
            autoplay: false
          })
        }

        that.setData({
          banners: res.result.banners,
          subjects: res.result.subjects
        })

        wx.hideNavigationBarLoading()
      }
    })
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
  
  },

  /**自定义函数开始 */
  /**
   * 跳转商品详情页
   */
  goProductDetail: function(options) {
    var product = options.currentTarget.dataset.src
    wx.navigateTo({
      url: '/pages/productDetail/productDetail' + '?product_id=' + product.product_id + '&product_name=' + product.product_name,
    })
  }
})