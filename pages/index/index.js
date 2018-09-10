//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperImg:[
      {
        id:1,
        url: 'https://i.loli.net/2018/09/04/5b8ea02cf23d2.png',
        title:"细数甲状腺自身抗体的三大罪行！"
      },
      {
        id:2,
        url: 'https://i.loli.net/2018/09/04/5b8ea02cc22b6.jpg',
        title: "这种癌让“小丸子”失去了妈妈"
      },
      {
        id:3,
        url: 'https://i.loli.net/2018/09/04/5b8ea02cf1d45.jpg',
        title: "产后大出血，RBC、Hb竟然不降反升？"
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