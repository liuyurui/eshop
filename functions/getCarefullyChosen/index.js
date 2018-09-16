// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  var info = {}
  const _ = db.command

  //查询banner数据
  await db.collection('carefully_chosen_banner').get()
  .then(res => {
    var ids = new Array()
    var x
    for (x in res.data) {
      ids[x] = res.data[x].product_id
    }

    //查询banner中商品信息
    return db.collection('product')
    .where({
      product_id: _.in(ids)
    })
    .get()
    .then(res1 => {
        var x, y
        for (x in res.data) {
          for (y in res1.data) {
            if (res.data[x].product_id == res1.data[y].product_id) {
              res.data[x].product_name = res1.data[y].product_name
              break
            }
          }
        }

        info.banners = res.data
        return res.data
    })
  })

  //查询主题数据
  await db.collection('carefully_chosen_subject').get()
  .then(res => {
    var ids = new Array()
    var x, y
    for (x in res.data) {
      for (y in res.data[x].products)
        ids[x] = res.data[x].products[y].product_id
    }

    //查询subject中商品信息
    return db.collection('product')
      .where({
        product_id: _.in(ids)
      })
      .get()
      .then(res1 => {
        var x, y, z
        for (x in res.data) {
          for (y in res.data[x].products)
            for (z in res1.data) {
              if (res.data[x].products[y].product_id == res1.data[z].product_id) {
                res.data[x].products[y].product_name = res1.data[z].product_name
                res.data[x].products[y].prize = res1.data[z].prize
                res.data[x].products[y].original_prize = res1.data[z].original_prize
                res.data[x].products[y].sales_num = '已售' + res1.data[z].sales_num
                break
              }
            }
        }

        info.subjects = res.data
        return res.data
      })
  })

  return info
}