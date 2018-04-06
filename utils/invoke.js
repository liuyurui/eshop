//负责调起其他功能
function goShoppingTrolley() {
  wx.switchTab({
    url: '/pages/shoppingTrolley/shoppingTrolley',
  })
}

module.exports = {
  goShoppingTrolley: goShoppingTrolley
}