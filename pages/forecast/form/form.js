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
            value:0.02,
          },
          {
            name:'有核红细胞百分比(%)',
            id:'01',
            value:0.1,
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
            value:14.27,
          },
          {
            name:'中性粒细胞比率(%)',
            id:'11',
            value:76.7,
          },
          {
            name:'淋巴细胞比率(%)',
            id:'12',
            value:16.9,
          },
          {
            name:'单核细胞比率(%)',
            id:'13',
            value:5.8,
          },
          {
            name:'嗜酸粒细胞比率(%)',
            id:'14',
            value:0.3,
          },
          {
            name:'嗜碱粒细胞比率(%)',
            id:'15',
            value:0.3,
          },
          {
            name:'中性粒细胞计数(10^9/L)',
            id:'16',
            value:10.95,
          },
          {
            name:'淋巴细胞计数(10^9/L)',
            id: '17',
            value: 2.41,
          },
          {
            name:'单核细胞计数(10^9/L)',
            id:'18',
            value:0.83,
          },
          {
            name:'嗜酸粒细胞计数(10^9/L)',
            id:'19',
            value:0.04,
          },
          {
            name:'嗜碱粒细胞计数(10^9/L)',
            id:'110',
            value:0.04,
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
            value: 1.94,
          },
          {
            name: '血红蛋白(g/L)',
            id:'21',
            value: 61,
          },
          {
            name:'红细胞比积(%)',
            id:'22',
            value: 0.181,
          },
          {
            name:'红细胞平均容量(FL)',
            id:'23',
            value:93.3,
          },
          {
            name:'平均血红蛋白(pg)',
            id:'24',
            value:31.4,
          },
          {
            name: '平均血红蛋白浓度(g/L)',
            id: '25',
            value: 337,
          },
          {
            name:'红细胞体积分布(%)',
            id:'26',
            value: 15.9,
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
            value:201,
          },
          {
            name:'血小板比率(%)',
            id:'31',
            value:0.23,
          },
          {
            name:'血小板平均体积(FL)',
            id:'32',
            value:11.3,
          },
          {
            name:'血小板平均分布宽度(%)',
            id:'33',
            value:13.2,
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
            value:5.02,
          },
          {
            name:'网织红细胞绝对值(10^9/L)',
            id:'41',
            value:0.0974,
          },
          {
            name:'未成熟网织红细胞指数',
            id:'42',
            value:29,
          },
          {
            name:'高光散网织红百分比(%)',
            id:'43',
            value:12.2,
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
    tkey:null,
    jsontext:null,
    forecast:"",
  },

  goToReport:function() //跳转下个页面
  {
    var tempJson=this.convertJson()
    var date = new Date()
    this.setData({ tKey: date })
    this.setData({jsontext:tempJson})
    this.doRequest(this.data.jsontext)
    wx.navigateTo({
      url: '../report/report?tKey='+this.data.tKey.getTime(),
    })
  },

  convertJson:function(){ //转换json数组
    var list=[]
    var m=1
    for(var i=0;i<this.data.list.length-1;i++)
    {
      var z=this.data.list[i].items
      for(var t in z)
      {
        list[m] =parseFloat(z[t].value)    
        m++
      }
    }
    //处理性别的问题（就他和其他存储的结构不一样)
    list[0]=parseInt(this.data.list[i].value)
    
    // var temp=list[m]
    // list[m]=list[0]
    // list[0]=temp
    return list

  },

  doRequest:function(json){
    var thisp=this
    wx.request({
      url: 'http://api.quan9.tk:8000/vtcheck',
      header:{
        'content-type': 'application/json'
      },
      method:'POST',
      data:{
        list:json
        },
      success(res){
        console.log("JSON", json)
        var text="您可能有患有"+res.data
        console.log("预测疾病",res.data)
        thisp.setData({forecast:text})
        console.log(thisp.data)
        thisp.setDataStorage()
        //res.data——病症的名字
      }
    })
  },

  setDataStorage:function(){  //向索引数组中添加本次输入数据的索引并保存data.list
    var whList = {
      itemList: this.data.list,
      report: null,
      forecast:this.data.forecast
    }
    var date=this.data.tKey
    console.log(whList)
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
    this.setData({list:this.data.list})
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