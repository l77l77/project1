// pages/forecast/form/form.js
Page({
  data: {
    list: [
      {
        name: '有核红细胞类',
        id: '0',
        open: false,
        items:
        [
          {
            name:'有核红细胞绝对值(10^9/L)',
            id:'00',
            value:null,
          },
          {
            name:'有核红细胞百分比(%)',
            id:'01',
            value:null,
          }
        ],
      },

      {
        name: '红细胞类',
        id: '1',
        open: false,
        items:
          [
            {
              name: '红细胞绝对值(10^9/L)',
              id:'10',
              value: null,
            },
            {
              name: '红细胞百分比(%)',
              id:'11',
              value: null,
            }
          ],
      },

    ]
  
  },

  goToReport:function()
  {
    wx.navigateTo({
      url: '../report/report',
    })
  },

  fieldInput:function(e){
    console.log(e)
    var fatherId=e.target.id[0]
    var itemId = e.target.id[1]
    this.data.list[fatherId].items[itemId].value=e.detail
    var newlist=this.data.list
    this.setData({list:newlist})
  },




  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
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