// pages/forecast/Analyse/Analyse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: ['',
      '有核红细胞绝对值', '有核红细胞百分比', '白细胞计数', '中性粒细胞比率',
      '淋巴细胞比率', '单核细胞比率', '嗜酸粒细胞比率', '嗜碱粒细胞比率',
      '中性粒细胞计数', '淋巴细胞计数', '单核细胞计数', '嗜酸粒细胞计数',
      '嗜碱粒细胞计数', '红细胞计数', '血红蛋白', '红细胞比积',
      '红细胞平均容量', '平均血红蛋白', '平均血红蛋白浓度', '红细胞体积分布',
      '血小板计数', '血小板比率', '血小板平均体积', '血小板分布宽度',
      '网织红细胞百分比', '网织红细胞绝对值', '未成熟网织红细胞指数', '高光散网织红百分比'
    ],
    listData: [
      { "code": "01", "item": "有核红细胞绝对值","nomal": "0", "fact": "type1"},
      { "code": "02", "item": "有核红细胞百分比","nomal": "0", "fact": "type2"},
      { "code": "03", "item": "白细胞计数","nomal": "4-10*10^9/L", "fact": "type3" },
      { "code": "04", "item": "中性粒细胞比率", "nomal": "50-70%", "fact": "type4" },
      { "code": "05", "item": "淋巴细胞比率", "nomal": "17-50%", "fact": "type5" },
      { "code": "06", "item": "单核细胞比率", "nomal": "3-10%", "fact": "type6" },
      { "code": "07", "item": "嗜酸粒细胞比率", "nomal": "0.4%-8%", "fact": "type7"},
      { "code": "08", "item": "嗜碱粒细胞比率", "nomal": "3%-8%", "fact": "type7" },
      { "code": "09", "item": "中性粒细胞计数", "nomal": "2.0-7.5*10^9/L", "fact": "type7" },
      { "code": "10", "item": "淋巴细胞计数", "nomal": "0.8-4.0*10^9/L", "fact": "type7" },
      { "code": "11", "item": "单核细胞计数", "nomal": "0.3-0.8*10^9/L", "fact": "type7" },
      { "code": "12", "item": "嗜酸粒细胞计数", "nomal": "0.05-0.50*10^9/L", "fact": "type7" },
      { "code": "13", "item": "嗜碱粒细胞计数", "nomal": "0.12-0.8*10^9/L", "fact": "type7" },
      { "code": "14", "item": "红细胞计数", "nomal": "4.0-5.50*10^12/L", "fact": "type7" }
    ],  
    array: [{
      mode: 'scaleToFill',
      text: '数据分析模型'
    }],
    src:'image/1.png',
    tKey:null,
    indexData: null,
//    show:false
    
  },
 /* export default{
    i18n: {
     'zh-CN': {
        position: '弹出位置',
     button1: '右侧弹出',
        button2: '关闭弹层',
     },
  data(){
    return {
      show: false
    };
  },*/
   /**
   * 返回forecast页面
   */
  goToHome: function () {
    wx.switchTab({
      url: '../forecast',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ tKey: options.tKey })
    this.getForecast()
    this.requestReportSituation()
  },
   /**
   * 生命周期函数--监听页面加载
   */
  onClose(){
    this.setData({show:false});
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