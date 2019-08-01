
Page({
  data: {
    routeInfo: {
      startLat: 28.218651, //起点经度 选填
      startLng: 112.91880, //起点纬度 选填
      startName: "湖南商学院", // 起点名称 选填
      endLat: 28.192305, // 终点经度必传
      endLng: 113.011417, //终点纬度 必传
      endName: "长沙火车站", //终点名称 必传
      mode: "car" //算路方式 选填
    }
  },

  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    let _page = this;
    _page.setData({
      routeInfo: {
        startLat: parseFloat(options.latStart), //起点经度 选填
        startLng: parseFloat(options.lngStart), //起点纬度 选填
        startName: options.get_address, // 起点名称 选填
        endLat: parseFloat(options.latEnd), // 终点经度必传
        endLng: parseFloat(options.lngEnd), //终点纬度 必传
        endName: options.give_address, //终点名称 必传
        mode: "car" //算路方式 选填

      }
    })
  },
  // 生命周期函数--监听页面显示
  onShow: function () {
    let plugin = requirePlugin("myPlugin");
  }
})