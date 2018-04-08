//负责调起其他功能
function goShoppingTrolley() {
  wx.switchTab({
    url: '/pages/shoppingTrolley/shoppingTrolley',
  })
}

function goProductDetail(params) {
  var target = '/pages/productDetail/productDetail'
  if (params != undefined && params != null && params != '') {
    target = target + '?' + params;
  }
  wx.navigateTo({
    url: target,
  })
}

module.exports = {
  goShoppingTrolley: goShoppingTrolley,
  goProductDetail: goProductDetail
}