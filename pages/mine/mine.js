// pages/mine/mine.js
const util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    onTapDayWeather() {
      wx.navigateTo({
        url: '/pages/logs/logs',
      })
    }

  },
  /* 
   *  跳转到我的消息页面
   */
  tomyNews: function (e) {
    wx.navigateTo({
      url: 'pages/index/index'
    })
  },
  
  onLoad: function (options) {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },



})