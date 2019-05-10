//index.js
//获取应用实例
const app = getApp()

let plugin = requirePlugin("myPlugin")
let routeInfo = {
  startLat: 39.90469,    //起点纬度 选填
  startLng: 116.40717,    //起点经度 选填
  startName: "我的位置",   // 起点名称 选填
  endLat: 39.94055,    // 终点纬度必传
  endLng: 116.43207,  //终点经度 必传
  endName: "来福士购物中心",  //终点名称 必传
  mode:'car'  //算路方式 选填
},

Page({
  data: {
    routeInfo: routeInfo
  },
  
  
})
