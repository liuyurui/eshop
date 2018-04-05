// pages/goodDetail/goodDetail.js
var goodId;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: ["https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot_1.png", "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/discount2.png"],
    good: {
      goodName: '',
      prize: 38,
      originalPrize: 40,
      sales: 150,
    },
    details: ["https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot3.png", "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot2.png", "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot_1.png"],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    goodId = options.goodId
    this.setData({
      'good.goodName': options.goodName,
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
  
  }
})