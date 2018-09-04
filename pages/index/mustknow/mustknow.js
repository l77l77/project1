// pages/index/mustknow/mustknow.js
Page({

  data: {
    list:[
      {
        name:'健康体检项目',
        id:'1',
        text:'哈哈哈',
        open:false,
      },
      {
        name:'淋巴细胞是什么',
        id:'2',
        text: '233333333333333333333',
        open:false,
      },
      {
        name:'检查结果出错？',
        id:'3',
        text: '蒙药心脑方',
        open: false,
      },
      {
        name:'有核红细胞',
        id:'4',
        text: '当场去世',
        open: false,
      },
      {
        name:'抽血注意事项',
        id:'5',
        text: '迫真演技',
        open: false,
      },
      {
        name:'流感性感冒检查',
        id:'6',
        text: '要  素  察  觉（意味深）',
        open: false,
      },
      {
        name:'红细胞数量越多越好吗',
        id:'7',
        text: '是需要换行的屑~~~~————————————————————————————————————————屑————————————',
        open: false,
      },
      {
        name:'血沉加快与疾病',
        id:'8',
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