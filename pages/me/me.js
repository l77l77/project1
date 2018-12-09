// pages/me/me.js
const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'奔跑的刺猬',
    headUrl:"https://s1.ax1x.com/2018/08/17/PW85y4.jpg",
    list:[],  
  },

  goToHistory:function(e){
    wx.navigateTo({
      url: './history/history?id=' + e.target.id,
    })
  },

  getindexList:function(){
    var indexList
    var thisp=this
    wx.getStorage({
      key: 'indexList',
      success: function(res) {
        indexList=res.data
        for (var i = 0; i < indexList.length; i++) {
          var date = indexList[i].key
          date=new Date(date)
          var str = date.getFullYear()
          str = str + "-" + (date.getMonth()+1)
          str = str + "-" + date.getDate()
          str = str + "  " + date.getHours()
          str = str + ":" + date.getMinutes()
          var list = thisp.data.list
          var item={
            key:str,
            id:date.getTime()
          }
          list.push(item)
          thisp.setData({ list: list })
        }
      },
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
    if (app.globalData.meFlashFlag)
    {
      this.setData({ list: [] })
      console.log("before",this.data.list)
      this.getindexList()
      console.log("after",this.data.list)
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    app.globalData.meFlashFlag = false  
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