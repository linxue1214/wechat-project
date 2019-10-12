//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    play: true,
    dots: true,
    timeall: 5000,
    time: 2000,
    imgurl: [
      "/image/lunbo2.jpg",
      "/image/lunbo4.jpg",
      "/image/lunbo6.jpg",
    ],
 
    list: [
      {
        src: '/image/pic1.jpg',
        title: "咏蝉 高月",
        desc: "数载长眠见本真，残衣蜕尽历风尘。\n清音几曲兴衰事，涤荡人间岁岁新"
      }

    ]

  },
  //页面加载事件
  onLoad: function () {
  },

  detail: function (e) {
    //  e.currentTarget获得当前事件的标签
    //dataset获得 以data开头的属性
    var i = e.currentTarget.dataset.aa;
    wx.navigateTo({
      url: '/pages/comment/comment',
    })
  },
  onTapDayWeather() {
    wx.navigateTo({
      url: '/pages/list/list',
    })
  }



})