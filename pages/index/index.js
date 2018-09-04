//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperImg:[
      'http://suo.im/4Sc8zX',
      'http://suo.im/5fvlKD',
      'http://suo.im/57eyOv'
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
  }
})
