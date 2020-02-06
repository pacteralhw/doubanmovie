// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

//引入request-promise模块
var rp = require('request-promise');

// 云函数入口函数
exports.main = async (event, context) => {

  //const wxContext = cloud.getWXContext()
return rp(`http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${event.start}&count=${event.count}`)
        .then(function (res) {
          console.log(res);
           return res;
        })
        .catch(function (err) {
            console.error(err);
        });

  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
}