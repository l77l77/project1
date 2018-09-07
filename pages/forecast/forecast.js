// pages/forecast/forecast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    egList:[
      {
        title:"有核红细胞绝对值",
        value:"0.02",
        label:"10^9/L",
        border:"true"
      },
      {
        title: "有核红细胞百分比",
        value: "0.1",
        label: "%",
        border: "true"
      },
      {
        title: "白细胞计数",
        value: "14.27",
        label: "10^9/L",
        border: "true"
      },
      {
        title: "淋巴细胞比率",
        value: "16.9",
        label: "%",
        border: "true"
      },
      {
        title: "单核细胞比率",
        value: "5.8",
        label: "%",
        border: "true"
      },
      {
        title: "嗜酸粒细胞比率",
        value: "0.3",
        label: "%",
        border: "true"
      },
      {
        title: "嗜碱粒细胞比率",
        value: "0.3",
        label: "%",
        border: "true"
      },
      {
        title: "中性粒细胞计数",
        value: "10.95",
        label: "10^9/L",
        border: "true"
      },
      {
        title: "淋巴细胞计数",
        value: "2.41",
        label: "10^9/L",
        border: "true"
      },
      {
        title: "单核细胞计数",
        value: "0.83",
        label: "10^9/L",
        border: "true"
      },
      {
        title: "嗜酸粒细胞计数",
        value: "0.04",
        label: "10^9/L",
        border: "true"
      },
      {
        title: "嗜碱粒细胞比率",
        value: "0.04",
        label: "10^9/L",
        border: "true"
      },
      {
        title: "红细胞计数",
        value: "1.94",
        label: "10^9/L",
        border: "true"
      },
      {
        title: "血红蛋白",
        value: "61",
        label: "g/L",
        border: "true"
      },
      {
        title: "红细胞比积",
        value: "0.181",
        label: "%",
        border: "true"
      },
      {
        title: "红细胞平均容量",
        value: "93.3",
        label: "fL",
        border: "true"
      },
      {
        title: "平均血红蛋白",
        value: "31.4",
        label: "pg",
        border: "true"
      },
      {
        title: "平均血红蛋白浓度",
        value: "337",
        label: "g/L",
        border: "true"
      },
      {
        title: "红细胞体积分布",
        value: "15.9",
        label: "%",
        border: "true"
      },
      {
        title: "红细胞比积",
        value: "0.181",
        label: "%",
        border: "true"
      },
      {
        title: "血小板计数",
        value: "201",
        label: "10^9/L",
        border: "true"
      },
      {
        title: "血小板比率",
        value: "0.23",
        label: "%",
        border: "true"
      },
      {
        title: "血小板平均体积",
        value: "11.3",
        label: "fL",
        border: "true"
      },
      {
        title: "血小板分布宽度",
        value: "13.2",
        label: "%",
        border: "true"
      },
      {
        title: "网织红细胞百分比",
        value: "5.02",
        label: "%",
        border: "true"
      },
      {
        title: "网织红细胞绝对值",
        value: "10^9/L",
        label: "0.0974",
        border: "true"
      },
      {
        title: "未成熟网织红细胞指数",
        value: "29",
        label: "",
        border: "true"
      },
      {
        title: "高光散网织红百分比",
        value: "12.2",
        label: "%",
        border: "true"
      },
      {
        title: "性别",
        value: "男",
        label: "",
        border: "true"
      },
    ],
    egForecast:"您的检查结果未发现错误！您的血常规一切正常！未发现有患病的风险！"
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