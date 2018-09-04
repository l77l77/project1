//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperImg:[
      {
        id:1,
        url: 'https://i.loli.net/2018/09/04/5b8ea02cf23d2.png',
        title:"我是第一篇文章的标题"
      },
      {
        id:2,
        url: 'https://i.loli.net/2018/09/04/5b8ea02cc22b6.jpg',
        title: "我是第二篇文章的标题"
      },
      {
        id:3,
        url: 'https://i.loli.net/2018/09/04/5b8ea02cf1d45.jpg',
        title: "我是第三篇文章的标题"
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

  onItemClick: function(e){
    wx.navigateTo({
      url: './imgArticle/imgArticle?id='+e.target.id,
    })
  }
})