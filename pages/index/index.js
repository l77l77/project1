//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperImg:[
      {
        id:1,
        url: 'https://i.loli.net/2018/09/04/5b8ea02cf23d2.png',
        title:"拿什么读懂你，我的“乙肝两对半”"
      },
      {
        id:2,
        url: 'https://i.loli.net/2018/09/04/5b8ea02cc22b6.jpg',
        title: "D姓双胞胎与凝血家族的那些陈年往事"
      },
      {
        id:3,
        url: 'https://i.loli.net/2018/09/04/5b8ea02cf1d45.jpg',
        title: "一文读懂肝纤四项的临床意义！"
      },
    ]
  },

  goToKnowledge:function(){
    wx.navigateTo({
      url: './knowledge/knowledge',
      success: function(res) {},
      fail: function(res) {},
    })
  },

  goToMustKnow: function () {
    wx.navigateTo({
      url: './mustknow/mustknow',
      success: function (res) { },
      fail: function (res) { },
    })
  },

  goToGuide:function(){
    wx.navigateTo({
      url: './imgArticle/imgArticle?id=guide',
    })
  },

  onItemClick: function(e){
    wx.navigateTo({
      url: './imgArticle/imgArticle?id='+e.target.id,
    })
  }
})