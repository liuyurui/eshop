// pages/shoppingTrolley/shoppingTrolley.js
var invoke = require('../../utils/invoke.js')
var loginUtil = require('../../utils/loginUtil.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // products: [{
    //   "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot2.png",
    //   "product_id": "113",
    //   "product_name": "【秘鲁】红提 皮薄红亮 秘鲁的小甜甜",
    //   "prize": "160",
    //   "original_prize": "168",
    //   "sales_num": "已售783",
    //   "selected": false
    // }, {
    //   "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot2.png",
    //   "product_id": "113",
    //   "product_name": "【秘鲁】红提 皮薄红亮 秘鲁的小甜甜",
    //   "prize": "160",
    //   "original_prize": "168",
    //   "sales_num": "已售783",
    //   "selected": false
    // }, {
    //   "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot2.png",
    //   "product_id": "113",
    //   "product_name": "【秘鲁】红提 皮薄红亮 秘鲁的小甜甜",
    //   "prize": "160",
    //   "original_prize": "168",
    //   "sales_num": "已售783",
    //   "selected": false
    // }, {
    //   "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot2.png",
    //   "product_id": "113",
    //   "product_name": "【秘鲁】红提 皮薄红亮 秘鲁的小甜甜",
    //   "prize": "160",
    //   "original_prize": "168",
    //   "sales_num": "已售783",
    //   "selected": false
    // }, {
    //   "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot2.png",
    //   "product_id": "113",
    //   "product_name": "【秘鲁】红提 皮薄红亮 秘鲁的小甜甜",
    //   "prize": "160",
    //   "original_prize": "168",
    //   "sales_num": "已售783",
    //   "selected": false
    // }, {
    //   "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot2.png",
    //   "product_id": "113",
    //   "product_name": "【秘鲁】红提 皮薄红亮 秘鲁的小甜甜",
    //   "prize": "160",
    //   "original_prize": "168",
    //   "sales_num": "已售783",
    //   "selected": false
    // }, {
    //   "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot2.png",
    //   "product_id": "113",
    //   "product_name": "【秘鲁】红提 皮薄红亮 秘鲁的小甜甜",
    //   "prize": "160",
    //   "original_prize": "168",
    //   "sales_num": "已售783",
    //   "selected": false
    // }, {
    //   "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot2.png",
    //   "product_id": "113",
    //   "product_name": "【秘鲁】红提 皮薄红亮 秘鲁的小甜甜",
    //   "prize": "160",
    //   "original_prize": "168",
    //   "sales_num": "已售783",
    //   "selected": false
    // }, {
    //   "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot2.png",
    //   "product_id": "113",
    //   "product_name": "【秘鲁】红提 皮薄红亮 秘鲁的小甜甜",
    //   "prize": "160",
    //   "original_prize": "168",
    //   "sales_num": "已售783",
    //   "selected": true
    // }]
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
    wx.startPullDownRefresh()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.stopPullDownRefresh()
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
    //请求购物车数据
    loginUtil.login(this.requestShoppingTrolley)
  },

  /**自定义函数开始 */
  /**
   * 跳转到商品详情页
   */
  goProductDetail: function (options) {
    var params = 'product_id=' + options.currentTarget.dataset.src.product_id
    params += '&product_name=' + options.currentTarget.dataset.src.product_name
    invoke.goProductDetail(params)
  },

  /**
   * 选中/反选商品
   */
  selectProduct: function (e) {
    var index = e.currentTarget.dataset.index
    var products = this.data.products
    products[parseInt(index)].selected = !products[parseInt(index)].selected
    this.setData({
      products: products
    })
  },

  /**
   * 删除商品
   */
  deleteProduct: function (e) {
    var index = e.currentTarget.dataset.index
    var products = this.data.products
    products.splice(parseInt(index), 1)
    console.log(products)
    this.setData({
      products: products
    })
  },

  /**
   * 去购物
   */
  goShopping: function () {
    wx.switchTab({
      url: '/pages/all/all',
    })
  },

  /**
   * 请求购物车数据
   */
  requestShoppingTrolley: function () {
    wx.stopPullDownRefresh()
  }
})