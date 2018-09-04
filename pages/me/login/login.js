// pages/me/login/login.js
const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    headUrl: 'https://s1.ax1x.com/2018/08/17/PW85y4.jpg',
    userinput:{
      id:null,
      password:null
    }
  
  },

  login:function(){
    app.appData.loginflag=true
    wx.switchTab({
      url: '../me',
    })
  },

  idInput:function(e){
    console.log(e)
    var input={
      id:e.detail,
      password:this.data.userinput.password
    }
    this.setData({userinput:input})
  },

  passwordInput:function(e){
    var input = {
      password: e.detail,
      id:this.data.userinput.id
    }
    this.setData({ userinput: input })
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