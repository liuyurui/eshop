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
    wx.showLoading({
      title: '努力加载中',
    })

    //请求首页数据
    wx.request({
      url: app.globalData.baseurl + '',
      data: {
        seller_id: app.globalData.seller_id
      },
      method: 'POST',
      success: function(res) {
        that.setData({
          banners: res.data.data.banners,
          subjects: res.data.data.subjects
        })

        if (res.data.data.banners.length > 1) {
          that.setData({
            autoplay: true
          })
        }
      },
      fail: function(res) {
        that.setData({
          banners: [{
            "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/banner1.png",
            "product_id": "113",
            "product_name": "【秘鲁】红提 皮薄红亮 秘鲁的小甜甜"
          }, {
            "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/banner2.png",
            "product_id": "{商品id}",
            "product_name": "{商品名称}"
          }],
          subjects: [{
            "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/subject_hot.png",
            "goods": [{
              "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot_1.png",
              "product_id": "112",
              "product_name": "【大连】油桃 果脆味甜 桃香怡人",
              "prize": "60",
              "original_prize": "63",
              "sales_num": "已售10"
            }, {
              "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot2.png",
              "product_id": "113",
              "product_name": "【秘鲁】红提 皮薄红亮 秘鲁的小甜甜",
              "prize": "160",
              "original_prize": "168",
              "sales_num": "已售783"
            }, {
              "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot3.png",
              "product_id": "113",
              "product_name": "沃柑 阳光不改 甜蜜如初",
              "prize": "3.45",
              "original_prize": "5",
              "sales_num": "已售1230"
            }]
          }, {
            "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/subject_discount.png",
            "goods": [{
              "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/discount1.png",
              "product_id": "112",
              "product_name": "【智利】蓝莓 中大果 口感脆甜 略微带酸",
              "prize": "14.3",
              "original_prize": "18",
              "sales_num": "已售87"
            }, {
              "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/discount2.png",
              "product_id": "112",
              "product_name": "【小汤山】草莓 有机种植 红颜",
              "prize": "7.5",
              "original_prize": "8",
              "sales_num": "已售287"
            }]
          }]
        })

        that.setData({
          autoplay: true
        })
      },
      complete: function() {
        wx.hideNavigationBarLoading()
        wx.hideLoading()
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