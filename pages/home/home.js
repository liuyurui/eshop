// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: false,
    banners: [{
      "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/banner1.png",
      "goodId": "113",
      "goodName": "【秘鲁】红提 皮薄红亮 秘鲁的小甜甜"
    }, {
      "img":"https://sapp-eshop.oss-cn-beijing.aliyuncs.com/banner2.png",
      "goodId": "{商品id}",
      "goodName": "{商品名称}"
    }],
    subjects: [{
      "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/subject_hot.png",
      "goods": [{
        "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot_1.png",
        "goodId": "112",
        "goodName": "【大连】油桃 果脆味甜 桃香怡人",
        "prize": "60",
        "originalPrize": "63",
        "sales": "已售10"
      }, {
        "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot2.png",
        "goodId": "113",
        "goodName": "【秘鲁】红提 皮薄红亮 秘鲁的小甜甜",
        "prize": "160",
        "originalPrize": "168",
        "sales": "已售783"
        }, {
        "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot3.png",
        "goodId": "113",
        "goodName": "沃柑 阳光不改 甜蜜如初",
        "prize": "3.45",
        "originalPrize": "5",
        "sales": "已售1230"
        }]
    }, {
        "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/subject_discount.png",
      "goods": [{
        "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/discount1.png",
        "goodId": "112",
        "goodName": "【智利】蓝莓 中大果 口感脆甜 略微带酸",
        "prize": "14.3",
        "originalPrize": "18",
        "sales": "已售87"
      }, {
        "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/discount2.png",
        "goodId": "112",
        "goodName": "【小汤山】草莓 有机种植 红颜",
        "prize": "7.5",
        "originalPrize": "8",
        "sales": "已售287"
      }]
    }]
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
  goGoodDetail: function(options) {
    var good = options.currentTarget.dataset.src
    wx.navigateTo({
      url: '/pages/goodDetail/goodDetail' + '?goodId=' + good.goodId + '&goodName=' + good.goodName,
    })
  }
})