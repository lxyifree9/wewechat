var base = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots:false,
    autoplay:true,
    interval:6000,
    duration:1000,
    goodsImgList: [],
    goodsDescList: [
      { 'descTxtImg': '../../../assets/images/index/details/goodsDetails/sale.png', 'descCont': ' 爱奇果 徐香猕猴桃 12个 单果约75- 90g 自营水果', 'centerTxt': '2.26元宵汤圆超级单品日，万件汤圆1元抢！（以上优惠以活动页为准）', 'redCenterTxt': '仅限今天→','price':'13.90'},
    ],
    straightMatterList:[
      { 'star': '../../../assets/images/index/details/goodsDetails/star.png', 'buyer': '李雷and韩梅梅', 'matter': '很新鲜，连果蒂都是绿色的，一看就是刚从果园采购的，双十一买的，花了一盒的钱买了两盒，很划算！推荐！另外推荐一个存储方法：分三份，一份放冰箱冷藏，另一份放阴凉地自然软熟，第三份和苹果香蕉一起密封在塑料袋里，这样不至于一起熟了吃不了！这是陕西眉县同学教我的哦！很实用！', 'date': '2018-02-17'},
      { 'star': '../../../assets/images/index/details/goodsDetails/star.png', 'buyer': 'Hi,I`m李华', 'matter': '京东速度就是快，显示采购中，没想到第二次天就送到家了，猕猴桃有点小，不过还比较硬，可以放两天等软了，再吃。快递员还得表扬，看我不方便拿，用透明胶带做了拎手。', 'date': '2018-02-11' },
      { 'star': '../../../assets/images/index/details/goodsDetails/star.png', 'buyer': '波澜哥', 'matter': ' 太好吃了，就是少有一点硬，硬也不酸，非常好吃，一盒子一会就吃完了，太好吃了', 'date': '2018-02-09' },
      { 'star': '../../../assets/images/index/details/goodsDetails/star.png', 'buyer': '女装大佬', 'matter': '给前女友买的，买的时候还没分手，现在已经分手了，吃的很不错，估计她现在也没吃完，这个还是蛮不错的，因为她是个比较挑剔的人！', 'date': '2018-02-05' }, { 'star': '../../../assets/images/index/details/goodsDetails/star.png', 'buyer': '刘庆友', 'matter': '挺不错的猕猴桃，包装不错，个头很大，刚买来的时候挺硬，放了一段时间就能吃了。京东买东西实在是太方便了，现在超市都懒得去，全部京东下单，快递给力，品质有保障，而且京东经常有活动，价格还特别实惠。', 'date': '2018-02-01' }
    ],
    productImg: [
      { 'price': '29.80', 'disc': '99%', 'desc': '金龙鱼 东北大米 蟹稻共生 盘锦大米5KG(包装更新，新老包装随机发放）', 'pic': '../../assets/images/index/recommend/recommend-product1.jpg' },
      { 'price': '19.90', 'disc': '99%', 'desc': ' 百草味 蜜饯果干 芒果干100g/ 袋 ', 'pic': '../../assets/images/index/recommend/recommend-product2.jpg' },
      { 'price': '21.90', 'disc': '99%', 'desc': ' 三只松鼠 蜜饯果干 零食小吃新疆特产 玫瑰红葡萄干280g/ 袋 ', 'pic': '../../assets/images/index/recommend/recommend-product3.jpg' },
      { 'price': '39.90', 'disc': '99%', 'desc': ' 蓉李记 腊猪鼻 猪拱嘴 四川特产 老成都烟熏腊肉 卤味下酒菜 400g', 'pic': '../../assets/images/index/recommend/recommend-product4.jpg' },
      { 'price': '48.00', 'disc': '99%', 'desc': ' 2017年春笋干笋尖新货 四川特产青川野生方竹笋干 农家笋子干货250g', 'pic': '../../assets/images/index/recommend/recommend-product5.jpg' },
      { 'price': '49.00', 'disc': '99%', 'desc': ' 秦巴妹 天然百花土蜂蜜 农家自产结晶巢蜜550g', 'pic': '../../assets/images/index/recommend/recommend-product6.jpg' },
      { 'price': '44.80', 'disc': '99%', 'desc': '【京东配送】农家土猪腊肠香肠500g手工七分瘦三分肥柴火烟熏腊味四川味道风味贵州赤水特产 500g', 'pic': '../../assets/images/index/recommend/recommend-product7.jpg' },
      { 'price': '36.00', 'disc': '99%', 'desc': ' 秦巴妹（QINBAMEI） 秦巴妹 黄花菜 金针菜250g新货农家萱草脱水菜干货四川特产', 'pic': '../../assets/images/index/recommend/recommend-product8.jpg' }
    ]
  },
  //联系卖家
  onConnectSalerTap:function(){
    console.log("onConnectSalerTap已触发！");
    wx.navigateTo({
      url: '',
    })
  },
  //进入店铺
  onToStoreTap:function(){
    console.log("onToStoreTap已触发！");
    wx.navigateTo({
      url: '',
    })
  },
  //购物车
  onToShopcarTap: function () {
    console.log("onToShopcarTap已触发！");
    wx.switchTab({
      url: '../shopcar/shopcar',
    })
  },
  //加入购物车
  onAddToShopcarTap: function (e) {
    var _this = this;
    wx.showModal({
      title: '提示',
      content: '已经成功加入购物车!',
      showCancel: true,
      cancelText: "留在此页",
      confirmText: "去购物车",
      success: function (res) {
        if (res.confirm) {
          _this.gosc();
        }
      }
    })

    _this.setData({
      toastHidden: false
    });
    console.log(this.data.goodsImgList);
    // 遍历列表 与 购物车列表
    for (var i in this.data.goodsImgList) {
      // 列表中某一项item的id == 点击事件传递过来的id。则是被点击的项
      if (this.data.goodsImgList[i].goodsId == e.currentTarget.id) {
        // 给goodsImgList数组的当前项添加count元素，值为1，用于记录添加到购物车的数量
        this.data.goodsImgList[i].count = 1;
        // 获取购物车的缓存数组（没有数据，则赋予一个空数组）
        var arr = wx.getStorageSync('cart') || [];
        // 如果购物车有数据
        if (arr.length > 0) {
          // 遍历购物车数组
          for (var j in arr) {
            // 判断购物车内的item的id，和事件传递过来的id，是否相等
            if (arr[j].id == e.currentTarget.id) {
              // 相等的话，给count+1（即再次添加入购物车，数量+1）
              arr[j].count = arr[j].count + 1;
              // 最后，把购物车数据，存放入缓存（此处不用再给购物车数组push元素进去，因为这个是购物车有的，直接更新当前数组即可）
              try {
                wx.setStorageSync('cart', arr)
              } catch (e) {
                console.log(e)
              }
              // 返回（在if内使用return，跳出循环节约运算，节约性能）
              return;
            }
          }
          // 遍历完购物车后，没有对应的item项，把goodsImgList的当前项放入购物车数组
          arr.push(this.data.goodsImgList[i]);
        }
        // 购物车没有数据，把item项push放入当前数据（第一次存放时）
        else {
          arr.push(this.data.goodsImgList[i]);
        }
        // 最后，把购物车数据，存放入缓存
        try {
          wx.setStorageSync('cart', arr)
          // 返回（在if内使用return，跳出循环节约运算，节约性能）
          return;
        } catch (e) {
          console.log(e)
        }
      }
    }
  },
  gosc:function(){
    wx.switchTab({
      url: '../shopcar/shopcar',
    })
  },
  //立即购买
  onOrderNowTap: function () {
    console.log("onOrderNowTap已触发！");
    wx.navigateTo({
      url: 'buypage/buypage',
    })
  },






  
  /* 生命周期函数--监听页面加载*/
  onLoad: function (options) {
    var that = this;
    var ta = parseInt(options.code);
    wx.request({
      url: 'https://www.ifree9.cn/php/ifree9/goodsDetails.php?code=' + ta,
      success: function (res) {
        console.log(res);
        that.setData({
          goodsImgList:res.data
        })
      }
    })
  },

  /** 生命周期函数--监听页面初次渲染完成*/
  onReady: function () {},

  /** 生命周期函数--监听页面显示*/
  onShow: function () {},

  /** 生命周期函数--监听页面隐藏 */
  onHide: function () { },

  /*** 生命周期函数--监听页面卸载*/
  onUnload: function () { },

  /** 页面相关事件处理函数--监听用户下拉动作*/
  onPullDownRefresh: function () {},

  /** 页面上拉触底事件的处理函数 */
  onReachBottom: function () {},

  /** 用户点击右上角分享 */
  onShareAppMessage: function () { }
})