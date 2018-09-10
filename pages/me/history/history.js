// pages/me/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:null,
    list:[]
  
  },


  getData:function(options){
    var thisp = this
    wx.getStorage({
      key: 'indexList',
      success: function (res) {
        var whList = res.data
        for (var i = 0; i < whList.length; i++) {
          if (whList[i].key == options.id)
            thisp.setData({ data: whList[i] })
        }
        thisp.makelist(thisp)
      },
      fail: function (res) {
        console.log(res)
      }
    })
  },

  makelist:function(thisp){
    var dataf=thisp.data.data
    var data=dataf.data.itemList
    var listt=[]
    for(var i=0;i<data.length;i++)
    {
      var l=data[i].items.length
      for (var j = 0; j<l;j++)
      {
        var item={
          name:data[i].items[j].name,
          value: data[i].items[j].value,
        }
        listt.push(item)
        thisp.setData({list:listt})
      }
    }
  },

  goHome: function () {
    wx.switchTab({
      url: '../me',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
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
  
  }
})