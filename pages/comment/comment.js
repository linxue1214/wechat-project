// pages/comment/comment.js
const app = getApp()
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
  formSubmit: function (e) {
    console.log(app.globalData.userInfo.nickName);
    wx.showToast({
      title: '评论成功',
      icon: 'success',
      duration: 3000
    })
    var that = this;
    var liuyantext = e.detail.value.liuyantext; //获取表单所有name=liuyantext的值 
    console.log('视频id' + that.data.id);
    console.log('留言number:' + that.data.number);
    wx.request({
      url: '',
    })({
      url: 'https://xxxx/comment',
      // url: '/pages/index/index',
      data: {
        content: liuyantext,
        number: that.data.number,
        id: that.data.id
      },

      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // console.log(res.data)
        that.setData({
          showOrHidden: true,
          re: res.data,
          keyValue: '',
          photo2: res.data.result.comment.photo,
          nickname2: res.data.result.comment.nickname,
          date2: res.data.result.comment.date,
          comment2: res.data.result.comment.comment
        })
        wx.hideToast();
        console.log(res);

      }

    })
  },
})