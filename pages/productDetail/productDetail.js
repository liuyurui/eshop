// pages/goodDetail/goodDetail.js
var invoke = require('../../utils/invoke.js')
var product_id;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidePopup: true,
    shopping_trolley_num: 0,
    banners: ["https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot_1.png", "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/discount2.png"],
    product: {
      product_name: '',
      prize: 38,
      original_prize: 40,
      sales_num: 150,
    },
    details: ["https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot3.png", "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot2.png", "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot_1.png"],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    product_id = options.product_id
    this.setData({
      'product.product_name': options.product_name,
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
   * 关闭弹窗
   */
  closePopupTap: function () {
    this.setData({
      hidePopup: true
    })
  },

  /**
   * 显示弹窗
   */
  showPopupTap: function() {
    this.setData({
      hidePopup: false
    })
  },

  /**
   * 跳转购物车
   */
  goShoppingTrolley: function() {
    invoke.goShoppingTrolley()
  },

  /**
   * 加入购物车
   */
  joinShoppingTrolley: function() {
    this.showPopupTap()
  },

  /**
   * 立即购买
   */
  buy: function() {
    this.showPopupTap()
  }
})