// pages/forecast/forecast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    egList:[
      {
        title:"血小板计数(10^9/L)",
        value:"350",
        label:"100-300",
        border:"true"
      },
      {
        title: "白细胞计数(10^9/L)",
        value: "12.26",
        label: "4-10",
        border: "true"
      },
      {
        title: "红细胞计数(10^9/L)",
        value: "7.66",
        label: "3.5-5.5",
        border: "true"
      },
      {
        title: "血红蛋白计数(10^9/L)",
        value: "102",
        label: "110-160",
        border: "true"
      }
    ]
  },

  goToForm:function()
  {
    wx.navigateTo({
      url: './form/form',
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.egList.length - 1)
    this.data.egList[this.data.egList.length - 1].border = 'false'
  
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