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
    piclist:[
      {src:'image/book1.jpg'},
      {src: 'image/book1.jpg'},
      {src: 'image/book1.jpg'},
      {src: 'image/book1.jpg'}
    ],
    list: [
      {
        src: '/image/pic1.jpg',
        title: "赠吴秀林东归 [宋]林景熙",
        desc: "几夜高堂梦，不知山水长。\n西风归雁荡，落日过乌伤。\n断影云空白，孤心草欲黄。\n终邻负甘旨，泪洒蓼莪章。"
      },
      {
        src: '/image/pic3.jpg',
        title: "鼓吹曲辞 [唐]李白",
        desc: "我思仙人，乃在碧海之东隅。\n海寒多天风，白波连山倒蓬壶。\n长鲸喷涌不可涉，抚心茫茫泪如珠。\n西来青鸟东飞去，愿寄一书谢麻姑。"
      },
     
      {
        src: '/image/pic2.jpg',
        title: "越人歌 佚名",
        desc: "今夕何夕兮，搴舟中流。\n今日何日兮，得与王子同舟。\n蒙羞被好兮，不訾诟耻。\n心几烦而不绝兮，得知王子。\n山有木兮木有枝，心悦君兮君不知。"
      }
     
    ]

  },
  //页面加载事件
  onLoad: function () {
   
      this.setData({
        search: this.search.bind(this)
      })
    },
    search: function (value) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([{ text: '搜索结果', value: 1 }, { text: '搜索结果2', value: 2 }])
        }, 200)
      })
    },
    selectResult: function (e) {
      console.log('select result', e.detail)
  },
  onShareAppMessage: function () {
    return {
      title: "我们一起读诗吧",
      disc: "知己难求",
      path: "/pages/index/index"
    }
  }
  ,fun:function(){
    wx.navigateTo({
      url:'/pages/login/login'
    })
    wx.switchTab({
      url:'/pages/res/res'
    })
  },
  detail:function(e){
  //  e.currentTarget获得当前事件的标签
  //dataset获得 以data开头的属性
    var i=e.currentTarget.dataset.aa;
    wx.navigateTo({
      url: '/pages/detail/detail?index='+i,
    })
    
  },
  onTapDayWeather(){
    wx.navigateTo({
      url: '/pages/list/list',
    })
  },
  publish() {
    wx.navigateTo({
      url: '/pages/publish/publish',
    })
  },
  commend() {
    wx.navigateTo({
      url: '/pages/commend/commend',
    })
  },
  original() {
    wx.navigateTo({
      url: '/pages/original/original',
    })
  }

  

})