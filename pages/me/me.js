// pages/me/me.js
import util from '../../utils/util.js'
const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'奔跑的刺猬',
    headUrl:"https://s1.ax1x.com/2018/08/17/PW85y4.jpg",
    list:[],  
    canvasWidth: 0,
    canvasHeight: 300,
    canvasDefaultVal: {
    maxVal: 0,
    totalData: 0,
    data: []
    }
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
          console.log(item.key)
        }
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var _this = this;
    wx.getSystemInfo({
      success: function(res) {
        _this.setData({
          canvasWidth: res.windowWidth - 3
        });
      },
    })
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // onReady: function () {
  
  // },
  onReady: function(res) {
    var ctx = wx.createCanvasContext("curve-img");
    var dataValue = [
      ["2-3", 42.5],
      ["5-4", 70.0],
      ["5-5", 88.0],
      ["5-6", 69.5],
      ["5-7", 37.5],
      ["5-8", 77.5],
      ["5-9", 96.0],
    ];
    //初始化 画布
    this.oncInit(ctx, dataValue);
    // 绘制图形表与数据连线
    this.onDrawingXY(ctx);
    ctx.setFillStyle ('green');
    ctx.draw();
   },
   oncInit: function(ctx, data) {
    // 设置X轴默认总值
    let totalX = 7;
    // 设置最大值、宽度、高度值
    var maxVal = 0,
      totalData = data.length;
    var cWidth = this.data.canvasWidth,
      cHeight = this.data.canvasHeight;
    for (let i = 0; i < totalData; i++) {
      let val = parseInt(data[i][1]);
      if (val > maxVal) {
        maxVal = val;
      }
    }
    maxVal+=4;
   
    // 初始化图
    ctx.setFillStyle ('green');
    ctx.beginPath();
    ctx.setLineWidth(1);
    ctx.moveTo(3, cHeight);
    ctx.lineTo(cWidth + 3, cHeight);
    ctx.stroke();
    ctx.closePath();
    // 设置全局变量
    this.setData({
      canvasDefaultVal: {
        data: data,
        maxVal: maxVal,
        maxValMean: maxVal / totalX,
        totalData: totalData,
        totalX: totalX,
        totalY: totalData,
        xMarign: cHeight / (totalX + 1),
        yMarign: cWidth / totalData
      },
      canvasHeight: cHeight
    });
   
   },
   onDrawingXY: function(ctx) {
    var xMarign = 0,
      yMarign = 0,
      data = this.data.canvasDefaultVal.data,
      mean = 0,
      meanVal = parseInt(this.data.canvasDefaultVal.maxVal),
      listX = [],
      listY = [],
      rise_val = 0;
    // 绘制 X 轴
    for (let i = 0; i < this.data.canvasDefaultVal.totalX; i++) {
      let val = 0;
      ctx.beginPath();
      meanVal = parseInt(this.data.canvasDefaultVal.maxVal) - mean;
      xMarign += parseInt(this.data.canvasDefaultVal.xMarign);
      mean += parseInt(this.data.canvasDefaultVal.maxValMean);
      ctx.fillText(meanVal, 4, xMarign);
      this.drawing(ctx, 3, xMarign, this.data.canvasWidth, xMarign);
    }
    // 计算获取 1 = ？ 的距离
    rise_val = parseFloat(this.data.canvasDefaultVal.xMarign / this.data.canvasDefaultVal.maxValMean);
   
    // 绘制 Y 轴
    for (let i = 0; i < this.data.canvasDefaultVal.totalY; i++) {
      ctx.beginPath();
      yMarign += (parseInt(this.data.canvasDefaultVal.yMarign) - 1);
      ctx.fillText(data[i][0], yMarign - 25, this.data.canvasHeight);
      // 绘制线条
      // this.drawing(ctx, yMarign, 0, yMarign, this.data.canvasHeight);
   
      // 计算绘制圆点坐标
      let x = 0;
      x = data[i][1] * rise_val;
      x = (this.data.canvasHeight) - (x+2);
      ctx.beginPath();
      ctx.arc(yMarign, x, 3, 0, Math.PI * 2, true);
      ctx.fillText(data[i][1], yMarign - 25, x + 10);
      ctx.stroke();
      ctx.closePath();
      ctx.fill();
   
      // 绘制点线条
      listX[i] = yMarign;
      listY[i] = x;
      
      ctx.beginPath();
      this.dotDrawing(ctx, listX, listY);
      ctx.stroke();
      ctx.closePath();
    }
   
   },
   drawing: function(ctx, x, y, X, Y) {
    ctx.setLineWidth(1);
    ctx.moveTo(x, y);
    ctx.lineTo(X, Y);
    ctx.stroke();
    ctx.closePath();
    ctx.setFillStyle ('green');
   },
   dotDrawing: function (ctx,xList,yList){
    for(let i=0;i<xList.length-1;i++){
      ctx.setLineWidth(1);
      ctx.moveTo(xList[i], yList[i]);
      ctx.lineTo(xList[i+1], yList[i+1]);
    }
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