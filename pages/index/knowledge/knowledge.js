// pages/index/knowledge/knowledge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        name: '每日饮水',
        id: '1',
        text: '哈哈哈',
        open: false,
      },
      {
        name: '体重指数',
        id: '2',
        text: '233333333333333333333',
        open: false,
      },
      {
        name: '腰围',
        id: '3',
        text: '蒙药心脑方',
        open: false,
      },
      {
        name: '最佳减肥速度',
        id: '4',
        text: '当场去世',
        open: false,
      },
      {
        name: '24小时尿量',
        id: '5',
        text: '迫真演技',
        open: false,
      },
      {
        name: '肥胖信号',
        id: '6',
        text: '要  素  察  觉（意味深）',
        open: false,
      },
      {
        name: '准妈妈',
        id: '7',
        text: '是需要换行的屑~~~~呵——呵——哦啊啊啊啊啊！！！噗啊啊啊啊啊啊！目  力  前  辈（指恶臭）',
        open: false,
      },
      {
        name: '每日盐摄入量',
        id: '8',
        text: '要  素  察  觉（意味深）',
        open: false,
      },
      {
        name: '正常心率',
        id: '9',
        text: '要  素  察  觉（意味深）',
        open: false,
      },
      {
        name: '血压值',
        id: '10',
        text: '要  素  察  觉（意味深）',
        open: false,
      }
    ]
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