let animationShowHeight = 300;

Page({
  data: {
    animationData: "",
    showModalStatus: false,
    imageHeight: 0,
    imageWidth: 0,

    shopCarDataList: [],
    total: 0,    //总金额
    goodsCount: 0, //数量

    productImg: [
      { 'price': '29.80', 'disc': '99%', 'desc': '金龙鱼 东北大米 蟹稻共生 盘锦大米5KG(包装更新，新老包装随机发放）', 'pic': '../../assets/images/hotsale/selected/selected-product1.jpg' },
      { 'price': '19.90', 'disc': '100%', 'desc': ' 百草味 蜜饯果干 芒果干100g/ 袋 ', 'pic': '../../assets/images/hotsale/selected/selected-product2.jpg' },
      { 'price': '21.90', 'disc': '97%', 'desc': ' 三只松鼠 蜜饯果干 零食小吃新疆特产 玫瑰红葡萄干280g/ 袋 ', 'pic': '../../assets/images/hotsale/selected/selected-product3.jpg' },
      { 'price': '39.90', 'disc': '98%', 'desc': ' 蓉李记 腊猪鼻 猪拱嘴 四川特产 老成都烟熏腊肉 卤味下酒菜 400g', 'pic': '../../assets/images/hotsale/selected/selected-product4.jpg' },
      { 'price': '48.00', 'disc': '99%', 'desc': ' 2017年春笋干笋尖新货 四川特产青川野生方竹笋干 农家笋子干货250g', 'pic': '../../assets/images/hotsale/selected/selected-product5.jpg' },
      { 'price': '49.00', 'disc': '93%', 'desc': ' 秦巴妹 天然百花土蜂蜜 农家自产结晶巢蜜550g', 'pic': '../../assets/images/hotsale/selected/selected-product6.jpg' },
      { 'price': '44.80', 'disc': '100%', 'desc': '【京东配送】农家土猪腊肠香肠500g手工七分瘦三分肥柴火烟熏腊味四川味道风味贵州赤水特产 500g', 'pic': '../../assets/images/hotsale/selected/selected-product7.jpg' },
      { 'price': '36.00', 'disc': '99%', 'desc': ' 秦巴妹（QINBAMEI） 秦巴妹 黄花菜 金针菜250g新货农家萱草脱水菜干货四川特产', 'pic': '../../assets/images/hotsale/selected/selected-product8.jpg' }
    ],
    // input默认是1  
    num: 1,
    // 使用data数据对象设置样式名  
    minusStatus: 'disabled'
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  /* 点击减号 */
  bindMinus: function () {
    var num = this.data.num;
    // 如果大于1时，才可以减  
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 点击加号 */
  bindPlus: function () {
    var num = this.data.num;
    // 不作过多考虑自增1  
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 输入框事件 */
  bindManual: function (e) {
    var num = e.detail.value;
    // 将数值与状态写回  
    this.setData({
      num: num
    });
  },
  /* 所有价格 */
  bindAllPrice:function(e){
    var num = e.detail.value;
    // 将数值与状态写回  
    this.setData({
      num: num * quantityPrice
    });
  },
  bindTimeChange: function (e) {
    var _this = this;
    if (e.detail.value > 0) {
      _this.setData({
        arrTimeIndex: e.detail.value,
        "oinfo.DeliveryTime": _this.data.arrTime[e.detail.value]
      });
    }
  },
  bindDateChange: function (e) {
    this.setData({
      "oinfo.DeliveryDate": e.detail.value
    })
  },
  friendPayTap:function(e){
    console.log("yes");
  },
  myaddrChange: function () {//触摸选择地址
    this.setData({ addrShow: true });
  },
  myaddrCancel: function () {//点击地址簿中取消按钮
    this.setData({ addrShow: false });
  },
  closeaddr: function () {//触摸遮罩层关闭地址选项
    this.setData({ addrShow: false });
  },

  onLoad: function (e) {
    var that = this;
    var arr = wx.getStorageSync('cart') || [];
    console.log(arr);

    if (arr.length > 0) {
      for (var i in arr) {
        that.data.total += Number(arr[i].goodsPrice) * Number(arr[i].count);
        that.data.goodsCount += Number(arr[i].count);
      }
      // 更新数据
      this.setData({
        total: that.data.total,
        goodsCount: that.data.goodsCount
      });
    }

    this.setData({
      shopCarDataList: arr
    })
  },
  onReady: function () {

  },
  imageLoad: function (e) {
    this.setData({ imageHeight: e.detail.height, imageWidth: e.detail.width });
  },
  showModal: function () {
    // 显示遮罩层  
    console.log("yes");
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(animationShowHeight).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  hideModal: function () {
    // 隐藏遮罩层  
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation;
    animation.translateY(animationShowHeight).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },
  onShow: function () {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        animationShowHeight = res.windowHeight;
      }
    })
  }
})