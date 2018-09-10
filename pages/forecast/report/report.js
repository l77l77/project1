// pages/forecast/report/report.js
Page({

  
  data: {
    report:{
      situation: '您检验项中的',
      reason: '可能是大量出汗、连续呕吐、反复腹泻、大面积烧伤或者糖尿病酮症酸中毒及尿崩症造成，另外还有可能是因为某些肿瘤及真性红细胞增多症',
      forecast:'你可能得了溶血性贫血'
    },
    flag:true,
    testA: [1                   //1-正常  2-偏高  3-偏低
      , 1, 1, 2, 2, 3, 1, 3
      , 3, 2, 1, 2, 3, 3, 3
      , 3, 3, 1, 1, 1, 1, 1,
      1, 1, 3, 2, 3, 3, 2],
    list: ['',
      '有核红细胞绝对值', '有核红细胞百分比', '白细胞计数','中性粒细胞比率',
      '淋巴细胞比率', '单核细胞比率', '嗜酸粒细胞比率','嗜碱粒细胞比率',
      '中性粒细胞计数', '淋巴细胞计数', '单核细胞计数','嗜酸粒细胞计数',
      '嗜碱粒细胞计数', '红细胞计数', '血红蛋白','红细胞比积',
      '红细胞平均容量', '平均血红蛋白', '平均血红蛋白浓度','红细胞体积分布',
      '血小板计数', '血小板比率', '血小板平均体积','血小板分布宽度',
      '网织红细胞百分比', '网织红细胞绝对值', '未成熟网织红细胞指数','高光散网织红百分比'
    ],
    tKey:null
    
  },

  goHome:function()
  {
    wx.switchTab({
      url: '../forecast',
    })
  },

  makeSituation:function(a)   //根据后端返回的123数组生成报告情况（各检验项偏高/偏低）
  {
    var up=[]
    var down=[]
    var newsituation = this.data.report.situation
    for(var i=1;i<a.length;i++)
    {
      if(a[i]==2)
        up.push(this.data.list[i])
      if(a[i]==3)
        down.push(this.data.list[i])
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
    var newreport=this.data.report
    newreport.situation=newsituation
    this.setData({report: newreport})
  },

  setDataStorage: function (){  //向当前指定的缓存中存入情况，原因和预测
    var thisp=this
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
    this.makeSituation(this.data.testA)
    this.setData({tKey:options.tKey})
    this.setDataStorage()
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