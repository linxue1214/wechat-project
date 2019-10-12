const app = getApp()
Page({
  data: {
    selected: true,
    selected1: false,
    selected2:false
  },
  selected: function (e) {
    this.setData({
      selected1: false,
      selected: true,
      selected2: false
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true,
      selected2: false
    })
  },
  
  selected2: function (e) {
    this.setData({
      selected: false,
      selected2: true,
      selected1: false
    })
},

  list: [
    {
      src: '/image/pic1.jpg',
      title: "浣溪沙  作者：王维",
      desc: "山寺微茫背夕曛，鸟飞不到半山昏。\n上方孤磬定行云。\n试上高峰窥皓月，偶开天眼觑红尘。\n可怜身是眼中人。"


    },
    {
      src: '/img/portrait-3.jpg',
      title: "推荐二",
      desc: "远看山有色。信心水无声。\n春季雨华还在。人来鸟不惊"
    },
    {
      src: '/img/portrait-4.jpg',
      title: "咏蝉",
      desc: "数载长眠见本真，残衣蜕尽历风尘。\n清音几曲兴衰事，涤荡人间岁岁新。"
    }
  ],
  text:[
    {
      title: "咏蝉",
      desc: "数载长眠见本真，残衣蜕尽历风尘。\n清音几曲兴衰事，涤荡人间岁岁新。"
    }
  ]

  


 
})