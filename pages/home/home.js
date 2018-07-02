// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    scrollTop: 0,
    floorstatus: false,
    currentTopItem: "0",
    swiperHeight: "0",
    topScrollList: [
      { current: 0, swichName: "首页" },
      { current: 1, swichName: "水果" },
      { current: 2, swichName: "肉食" },
      { current: 3, swichName: "果脯" },
      { current: 4, swichName: "辣条" },
      { current: 5, swichName: "坚果" },
      { current: 6, swichName: "特产" },
      { current: 7, swichName: "休闲" },
      { current: 8, swichName: "营养" },
      { current: 9, swichName: "其他" }
    ], //首页横向导航
    homeDataList: [],
    conNavList: []
   
  },
  //首页横向导航，点击跳转相应品类的商品页
  swichNav:function(e){
    var cur = e.target.dataset.current;
    console.log(cur);
    if (this.data.currentTab == cur) { return false; }
    else {
      var that = this;
      wx.request({
        url: 'https://www.ifree9.cn/php/ifree9/array2.php',
        success:function(res){
          console.log(res);
          that.setData({
            currentTab: cur,
            conNavList:res.data
          })
        }
      })
        
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://www.ifree9.cn/php/ifree9/array.php',
      success: function (res) {
        console.log(res);
        that.setData({
          homeDataList: res.data
        })
      }
    })
  },
  //点击商品后 进入详情
  onGoodsDetailsTap: function (e) {
    
    var kind = e.currentTarget.id;
    console.log(kind);
    wx.navigateTo({
      url: '../goodsDetails/goodsDetails?code='+kind,
    })
    
  },
  //返回顶部
  goTop: function (e) {
    this.setData({
      scrollTop: 0
    })
  },
  scroll: function (e) {
    //console.log(e.detail.scrollTop);
    if (e.detail.scrollTop > 350) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },
  getMore: function () {

  },
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
    var cur = e.target.dataset.current;
  },
  checkCor: function () {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
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
    wx.startPullDownRefresh({
      
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.startPullDownRefresh({

    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '零食销售微信小程序的设计与实现',
      desc: '四川理工学院毕业设计论文',
      path: '/pages/uhome/home'
    }
  }
})