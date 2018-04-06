// pages/all/all.js
var app = getApp()
var classifys = new Map()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current_classify: 0,
    classify: [{
      name: "所有商品",
      product_type: "all"
    }, {
      name: "民谣吉他",
      product_type: "gita"
    }, {
      name: "钢琴",
      product_type: "gangqin"
    }, {
      name: "古筝",
      product_type: "guzhen"
    }, {
      name: "二胡",
      product_type: "erhu"
    }, {
      name: "笛子",
      product_type: "dizi"
    }, {
      name: "其他乐器",
      product_type: "other"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classifys.set('all', [{
      "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot2.png",
      "product_id": "113",
      "product_name": "【秘鲁】红提 皮薄红亮 秘鲁的小甜甜",
      "prize": "160",
      "original_prize": "168",
      "sales_num": "已售783"
    }, {
      "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot2.png",
      "product_id": "113",
      "product_name": "【秘鲁】红提 皮薄红亮 秘鲁的小甜甜",
      "prize": "160",
      "original_prize": "168",
      "sales_num": "已售783"
    }, {
      "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot2.png",
      "product_id": "113",
      "product_name": "【秘鲁】红提 皮薄红亮 秘鲁的小甜甜",
      "prize": "160",
      "original_prize": "168",
      "sales_num": "已售783"
    }, {
      "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot2.png",
      "product_id": "113",
      "product_name": "【秘鲁】红提 皮薄红亮 秘鲁的小甜甜",
      "prize": "160",
      "original_prize": "168",
      "sales_num": "已售783"
    }, {
      "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot2.png",
      "product_id": "113",
      "product_name": "【秘鲁】红提 皮薄红亮 秘鲁的小甜甜",
      "prize": "160",
      "original_prize": "168",
      "sales_num": "已售783"
    }, {
      "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot2.png",
      "product_id": "113",
      "product_name": "【秘鲁】红提 皮薄红亮 秘鲁的小甜甜",
      "prize": "160",
      "original_prize": "168",
      "sales_num": "已售783"
    }, {
      "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot2.png",
      "product_id": "113",
      "product_name": "【秘鲁】红提 皮薄红亮 秘鲁的小甜甜",
      "prize": "160",
      "original_prize": "168",
      "sales_num": "已售783"
    }, {
      "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot2.png",
      "product_id": "113",
      "product_name": "【秘鲁】红提 皮薄红亮 秘鲁的小甜甜",
      "prize": "160",
      "original_prize": "168",
      "sales_num": "已售783"
    }, {
      "img": "https://sapp-eshop.oss-cn-beijing.aliyuncs.com/hot2.png",
      "product_id": "113",
      "product_name": "【秘鲁】红提 皮薄红亮 秘鲁的小甜甜",
      "prize": "160",
      "original_prize": "168",
      "sales_num": "已售783"
    }])
    this.setData({
      classify_products: classifys.get('all')
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
  selectClassify: function (res) {
    var dataset = res.currentTarget.dataset
    if (dataset.index == this.data.current_classify) {
      return;
    }
    console.log(dataset)
    this.setData({
      current_classify: dataset.index
    })

    var classify_item = classifys.get(dataset.src.product_type)
    if (classify_item == undefined) {
      this.setData({
        classify_products: null
      })
      wx.request({
        url: app.globalData.baseurl + 'abc',
        data: {
          seller_id: app.globalData.seller_id
        },
        method: 'POST',
        success: function(res) {

        },
        fail: function(res) {

        },
        complete: function(res) {
          
        }
      })
    } else {
      this.setData({
        classify_products: classify_item
      })
    }
  },

  /**
   * 跳转详情页
   */
  goProductDetail: function (options) {
    var product = options.currentTarget.dataset.src
    wx.navigateTo({
      url: '/pages/productDetail/productDetail' + '?product_id=' + product.product_id + '&product_name=' + product.product_name,
    })
  }
})