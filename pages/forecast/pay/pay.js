// pages/forecast/pay/pay.js
Page({
  data: {
    goods:[
      {
        name:"皮皮虾",
        price:"25.3"
      }
    ],
    sum:0
  
  },

  tabpay:function(){
    wx.redirectTo({
      url: '../forecastResult/forecastResult',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    
    var t=0
    for (var i = 0; i < this.data.goods.length; i++) {
      t = this.data.goods[i].price + t
    }
    this.setData({sum:t})
  
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