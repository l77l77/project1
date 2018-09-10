// pages/index/mustknow/mustknow.js
Page({

  data: {
    list:[
      {
        name:'检验结果正常能说明身体健康吗',
        id:'1',
        text:'各项体检化验正常是指各指标在参考范围内，但这并不能说明身体健康。一方面，任何一种体检都会有一些假阳性和假阴性存在，其中既有人体状况动态变化的因素，亦有检查设备和技术敏感性问题，常规体检存在一定“盲区”。处于亚健康状态时，各种检验结果均可为阴性，但人体有各种各样的不适感觉。',
        open:false,
      },
      {
        name:'检验结果为何也出错？',
        id:'2',
        text: '化验结果却受到多种因素的影响，包括受检者的准备（空腹与否、运动状态、服用某些药物等）、标本的种类（静脉血、手指血）、标本采集的时间（清晨、上午、下午等）、标本的运送（从一个地方采血后送去别的单位化验等）。此外，化验结果的得出还与化验室检测、数据处理、结果报告及化验单发放等多个环节有关，其中任何一个环节出现问题，都可能影响您的化验结果。',
        open:false,
      },
      {
        name:'红细胞数量越多越好吗？',
        id:'3',
        text: '贫血时红细胞减少，属于不健康状况。检查健康人手指血，当男性RBC高于5.50×1012/L，女性高于5.00×1012/L时，属于红细胞增多。红细胞数量的多少与人们居住的海拔高度也有关系。运动员特别是力量型运动员的红细胞数量也高于一般人群。通常情况下，还可因饮水过少或出汗过多等脱水因素导致暂时性红细胞增加。红细胞数量过多也不是健康状态。真性红细胞增多症属于一种血液病，病人红细胞数量和血红蛋白都高于参考范围。',
        open: false,
      },
      {
        name:'血沉加快与哪些疾病有关？',
        id:'4',
        text: '炎症性疾病；各种急性全身性或局部性感染；各种胶原性疾病；组织损伤和坏死；患有严重贫血、血液病、慢性肝炎、肝硬化、多发性骨髓瘤、甲亢、重金属中毒、恶性淋巴瘤、巨球蛋白血症、慢性肾炎等疾病。良性肿瘤一般血沉不加快或出现减慢现象，因此可以通过这个项目协助初步判断肿瘤的性质。血沉的快慢还可辅助观察病情的变化，测定血沉可大致推测疾病的发展及观察治疗效果。',
        open: false,
      },
      {
        name:'流行性感冒时应做哪些实验室检查?',
        id:'5',
        text: '流行性感冒简称流感，是流行性感冒病毒引起的常见急性呼吸道传染病，传播力强，常呈地方性流行，其特点为突然发生与迅速传播。主要临床表现为突发高热、头痛、咳嗽、咽痛、全身酸痛、乏力及呼吸道炎症等。检验项目选择：血常规，尿常规，血凝抑制试验，鼻黏膜细胞荧光抗体染色检查，中和试验，补体结合试验。',
        open: false,
      },
      {
        name:'尿中白细胞增多就是泌尿系感染吗？',
        id:'6',
        text: '尿中白细胞增多常见于泌尿系感染，但影响尿液检查的因素很多，故体检结果显示尿白细胞增多时，应从多方面分析，不能简单地做出诊断。尿液检验结果的准确性，首先取决于正确的收集标本，避免出现假阳性结果。',
        open: false,
      },
      {
        name:'尿糖阳性就是糖尿病吗？',
        id:'7',
        text: '患糖尿病时尿糖可能阳性，但尿糖阳性不一定就是糖尿病。有许多原因可引起尿糖试验阳性：食后糖尿，肾性糖尿、神经性糖尿，此外，其他疾病也会引起糖尿，如：甲状腺功能亢进、肢端肥大症、嗜铬细胞瘤、库欣氏综合征。此外肝功能障碍时，血糖升高也可见糖尿。一旦病人发现尿糖阳性，应去医院就诊，测定空腹血糖、餐后血糖，有时尚需做葡萄糖耐量试验。医生会根据这些试验结果判断尿糖阳性是否为糖尿病引起，或是由其他原因引起。',
        open: false,
      },
      {
        name:'如何能及早发现乙型肝炎',
        id:'8',
        text:'只要平时注意做到三注意，三看，一化验，就能及早发现和及时进行诊治乙型肝炎。三注意是：一要注意有无乏力，耐力差等症状；二是注意有无厌油，胃口不好，腹胀等症状；三是注意有无头昏沉，眼睛干涩等症状。三看是：一看有无面部颜色发黄及色素斑；二看有无口唇发青；三看有无乳晕颜色较深。如果发现有以上症状，我们提醒大家千万不可大意，请速到有条件的医疗单位抽血化验乙肝系列，确认有无乙型肝炎。',
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