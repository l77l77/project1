// pages/forecast/report/report.js
const app=getApp()

Page({
  data: {
    report:{
      situation: '您检验项中的',
      reason: '可能是红细胞膜缺陷，或者是自身免疫性溶血性贫血（AIHA）、新生儿溶血、血型不合的输血、药物性溶贫等免疫因素，也可能是由于机械因素：人工心脏瓣膜、心瓣膜钙化狭窄、弥散性血管内凝血（DIC）、血栓性血小板减少性紫癜（TTP）、行军性血红蛋白尿、大面积烧伤等、化学因素：蛇毒、苯肼等；感染因素、疟疾、支原体肺炎、传染性单核细胞增多症等'
    },
    forecast: '',
    flag:0,
    cmplist:null,
    // testA: [1                   //1-正常  2-偏高  3-偏低
    //   , 1, 1, 2, 2, 3, 1, 3
    //   , 3, 2, 1, 2, 3, 3, 3
    //   , 3, 3, 1, 1, 1, 1, 1,
    //   1, 1, 3, 2, 3, 3, 2],
    list: ['',
      '有核红细胞绝对值', '有核红细胞百分比', '白细胞计数','中性粒细胞比率',
      '淋巴细胞比率', '单核细胞比率', '嗜酸粒细胞比率','嗜碱粒细胞比率',
      '中性粒细胞计数', '淋巴细胞计数', '单核细胞计数','嗜酸粒细胞计数',
      '嗜碱粒细胞计数', '红细胞计数', '血红蛋白','红细胞比积',
      '红细胞平均容量', '平均血红蛋白', '平均血红蛋白浓度','红细胞体积分布',
      '血小板计数', '血小板比率', '血小板平均体积','血小板分布宽度',
      '网织红细胞百分比', '网织红细胞绝对值', '未成熟网织红细胞指数','高光散网织红百分比'
    ],
    tKey:null,
    indexData:null
    
  },
  gopay:function()
  {
    app.globalData.meFlashFlag = true
    wx.navigateTo({
      url: '/pages/forecast/pay/pay',
    })
  },

  convertJson: function (dataItem) { //转换json数组,dataItem为indexList.data[*],为findCurrentData返回结果
    var list = []
    var m = 1
    for (var i = 0; i < dataItem.data.itemList.length - 1; i++) {
      var z = dataItem.data.itemList[i].items
      for (var t in z) {
        list[m] = parseFloat(z[t].value)
        m++
      }
    }
    //处理性别的问题（就他和其他存储的结构不一样)
    list[0] = parseInt(dataItem.data.itemList[i].value)
    return list

  },

  requestReportSituation:function(){
    var JSONtext=""
    var thisp=this
    wx.getStorage({
      key: 'indexList',
      success: function (res){
        var NowItem=thisp.findCurrentData(res.data,thisp.data.tKey)
        JSONtext=thisp.convertJson(NowItem)
        console.log("cmp JSON", JSONtext)
        wx.request({
          url: 'http://api.quan9.tk:8000/cmp',
          header: {
            'content-type': 'application/json'
          },
          method: 'POST',
          data: {
            list: JSONtext
          },
          success(res) {
            var cmpstring =String(res.data)
            var cmplist=cmpstring.split(',')
            console.log("success cmp request",cmplist)
            thisp.makeSituation(cmplist,thisp)
          }
        })
        wx.request({
          url: 'http://api.quan9.tk:8000/examine',
          header: {
            'content-type': 'application/json'
          },
          method: 'POST',
          data: {
            list: JSONtext
          },
          success(res)
          {
            console.log("审核",res)
            thisp.setData({flag:res.data})
          }
        })
      },
    })


  },

  findCurrentData:function(indexData,tKey){
    for (var i = 0; i < indexData.length; i++) {
      if (indexData[i].key == tKey) {
        return indexData[i]
      }
    }
  },

  makeSituation:function(a,thisp)   //根据后端返回的123数组生成报告情况（各检验项偏高/偏低）
  {
    var up=[]
    var down=[]
    var newsituation = thisp.data.report.situation
    for(var i=1;i<a.length;i++)
    {
      if(a[i]==2)
        up.push(thisp.data.list[i])
      if(a[i]==3)
        down.push(thisp.data.list[i])
    }
    for (var i = 0; i < up.length;i++)
    {
      if(i==up.length-1)
        newsituation = newsituation + up[i]
      else
        newsituation = newsituation+up[i]+","
    }
    newsituation=newsituation+"相较正常值偏高; \n"
    for (var i = 0; i < down.length; i++) {
      if(i==down.length-1)
        newsituation = newsituation + down[i]
      else
        newsituation = newsituation + down[i] + ","
    }
    newsituation = newsituation + "相较正常值偏低。"
    var newreport=thisp.data.report
    newreport.situation=newsituation
    thisp.setData({report: newreport})
    thisp.setDataStorage(thisp)
  },

  getForecast:function(){ //取出预测，放置到data.forecast里
    var thisp=this
    wx.getStorage({
      key: 'indexList',
      success: function(res) {
        var index=res.data
        var nowItem=thisp.findCurrentData(index, thisp.data.tKey)
        console.log("NowWeHave", nowItem)
        var forecastText = nowItem.data.forecast
        thisp.setData({ forecast: forecastText })
      },
    })
  },

  setDataStorage: function (thisp){  //向当前指定的缓存中存入情况，原因(report)
    wx.getStorage({
      key: 'indexList',
      success: function(res) {
        var index=res.data
        for(var i=0;i<index.length;i++)
        {
          if(index[i].key==thisp.data.tKey)
            index[i].data.report=thisp.data.report
        }
        wx.setStorage({
          key: 'indexList',
          data: index,
        })
      },
      fail:function(res){
        console.log(res)
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({tKey:options.tKey})
    this.getForecast()
    this.requestReportSituation()
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