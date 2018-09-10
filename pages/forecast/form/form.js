// pages/forecast/form/form.js
Page({
  data: {
    list: [
      {
        name: '有核红细胞类',
        id: '0',
        open: true,
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
        name:'白细胞类',
        id:'1',
        open:false,
        items:
        [
          {
            name:'白细胞计数(10^9/L)',
            id:'10',
            value:null,
          },
          {
            name:'中性粒细胞比率(%)',
            id:'11',
            value:null,
          },
          {
            name:'淋巴细胞比率(%)',
            id:'12',
            value:null,
          },
          {
            name:'单核细胞比率(%)',
            id:'13',
            value:null,
          },
          {
            name:'嗜酸粒细胞比率(%)',
            id:'14',
            value:null,
          },
          {
            name:'嗜碱粒细胞比率(%)',
            id:'15',
            value:null,
          },
          {
            name:'中性粒细胞计数(10^9/L)',
            id:'16',
            value:null,
          },
          {
            name:'淋巴细胞计数(10^9/L)',
            id: '17',
            value: null,
          },
          {
            name:'单核细胞计数(10^9/L)',
            id:'18',
            value:null,
          },
          {
            name:'嗜酸粒细胞计数(10^9/L)',
            id:'19',
            value:null,
          },
          {
            name:'嗜碱粒细胞计数(10^9/L)',
            id:'110',
            value:null,
          },
        ]
      },

      {
        name: '红细胞类',
        id: '2',
        open: false,
        items:
        [
          {
            name: '红细胞计数(10^9/L)',
            id:'20',
            value: null,
          },
          {
            name: '血红蛋白(g/L)',
            id:'21',
            value: null,
          },
          {
            name:'红细胞比积(%)',
            id:'22',
            value: null,
          },
          {
            name:'红细胞平均容量(FL)',
            id:'23',
            value:null,
          },
          {
            name:'平均血红蛋白(pg)',
            id:'24',
            value:null,
          },
          {
            name: '平均血红蛋白浓度(g/L)',
            id: '25',
            value: null,
          },
          {
            name:'红细胞体积分布(%)',
            id:'26',
            value: null,
          },
        ],
      },


      {
        name:'血小板类',
        id:'3',
        open: false,
        items:
        [
          {
            name:'血小板计数(10^9/L)',
            id:'30',
            value:null,
          },
          {
            name:'血小板比率(%)',
            id:'31',
            value:null,
          },
          {
            name:'血小板平均体积(FL)',
            id:'32',
            value:null,
          },
          {
            name:'血小板平均分布宽度(%)',
            id:'33',
            value:null,
          },
        ]
      },

      {
        name:'网织红细胞类',
        id:'4',
        open:false,
        items:
        [
          {
            name:'网织红细胞百分比(%)',
            id:'40',
            value:null,
          },
          {
            name:'网织红细胞绝对值(10^9/L)',
            id:'41',
            value:null,
          },
          {
            name:'未成熟网织红细胞指数',
            id:'42',
            value:null,
          },
          {
            name:'高光散网织红百分比(%)',
            id:'43',
            value:null,
          }
        ]
      },

      {
        name: '性别',
        open: false,
        id:'5',
        value: 1,  //0-新生儿 1-男性 2-女性
        array: ["新生儿", "男", "女"]
      }

    ],
    tkey:null
  
  },

  goToReport:function() //跳转下个页面
  {
    this.setDataStorage()
    wx.navigateTo({
      url: '../pay/pay?tKey='+this.data.tKey.getTime(),
    })
  },

  setDataStorage:function(){  //向索引数组中添加本次输入数据的索引并保存data.list
    var date = new Date()
    this.setData({tKey:date})
    var whList = {
      itemList: this.data.list,
      report: null,
    }
    //存储索引表
    wx.getStorage({ 
      key: 'indexList',
      success: function (res) {
        var exlist = res.data
        var indexitem={
          index:date,
          key:date.getTime(),
          data:whList
        }
        exlist.push(indexitem)
        wx.setStorage({
          key: 'indexList',
          data: exlist,
        })
      },
      fail: function () {
        var indexList = [date]
        var indexList=[
          {
            index:date,
            key:date.getTime(),
            data:whList
          }
        ]
        wx.setStorage({
          key: 'indexList',
          data: indexList,
        })
      }
    })
    //每个报告的实例的key都是对应的date.toDateString()
    // var tkey = date.toDateString()
    // var whList = {
    //   itemList: this.data.list,
    //   report:null,
    //   forecast:null
    //   }
    // wx.setStorage({
    //   key: tkey,
    //   data: whList,
    // })
  },

  fieldInput:function(e){ //处理输入数据并重置在data中
    console.log(e)
    var fatherId=e.target.id[0]
    if(e.target.id.length>2)
      var itemId = e.target.id[1] + e.target.id[2]
    else
      var itemId = e.target.id[1]
    this.data.list[fatherId].items[itemId].value=e.detail
    var newlist=this.data.list
    this.setData({list:newlist})
  },

  kindToggle: function (e) {  //用于处理点击类块时的动画
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

  bindPickerChange:function(e){ //用于处理性别的picker组件并重置data
    var newlist=this.data.list
    newlist[5].value=e.detail.value
    this.setData({list:newlist})
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