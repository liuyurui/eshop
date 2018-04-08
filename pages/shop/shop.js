// pages/shop/shop.js
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

  showImage: function (e) {
    var arr = Array();
    arr.push(e.target.dataset.src);
    wx.previewImage({
      urls: arr,
    });
  },
  call: function () {
    wx.makePhoneCall({
      phoneNumber: '18170604954',
    })
  },
  showLocation: function () {
    /*
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        wx.showModal({
          title: 'aa',
          content: 'latitude:' + res.latitude + 'longitude:' + res.longitude,
        })
      },
    })*/
    wx.openLocation({
      latitude: 26.96212,
      longitude: 114.254166,
      name: '知音琴行',
      address: '江西省永新县市政广场龙湾华庭营销中心右侧三栋4号',
    })
  }
})