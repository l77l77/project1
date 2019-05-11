// pages/forecast/pay/pay.js
Page({
  data: {
    goods:[
      {
        name:"检测订单",
        price:'5.0'
      }
    ],
    sum:0.0,
    tKey:null,
  
  },

  tabpay:function(){
    wx.redirectTo({
      url: '../Analyse/Analyse?tKey='+this.data.tKey,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({tKey:options.tKey})
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
    
    var t=0.0
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