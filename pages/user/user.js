// pages/user/user.js
//获取应用实例
var app = getApp();
Page({
  data: {
    userInfo: {},
    projectSource: 'https://github.com/liuxuanqiang/wechat-weapp-mall',
    userListInfo: [{
        icon: '../../assets/images/user/iconfont-card.png',
        text: '我的代金券',
        isunread: true,
        unreadNum: 2
    }, {
        icon: '../../assets/images/user/iconfont-icontuan.png',
      text: '我的购物车',
      isunread: true,
      unreadNum: 1
    }, {
        icon: '../../assets/images/user/iconfont-shouhuodizhi.png',
      text: '收货地址'
    }, {
        icon: '../../assets/images/user/iconfont-kefu.png',
      text: '联系客服'
    }, {
        icon: '../../assets/images/user/iconfont-help.png',
      text: '常见问题'
    },
    {
      icon: '../../assets/images/user/iconfont-reset.png',
      text: '系统设置'
    }],
    orderList:[
      { 'pic': '../../assets/images/user/orderCenter/fukuan.png', 'txt': '待付款' },
      { 'pic': '../../assets/images/user/orderCenter/fenxiang.png', 'txt': '待分享' },
      { 'pic': '../../assets/images/user/orderCenter/wuliu.png', 'txt': '待发货' },
      { 'pic': '../../assets/images/user/orderCenter/shouhuo.png', 'txt': '待收货' },
      { 'pic': '../../assets/images/user/orderCenter/pingjia.png', 'txt': '待评价' }
    ],
    footContList:[
      { 'pic': '../../assets/images/user/orderCenter/youhuiquan.png', 'txt': '我的优惠券' },
      { 'pic': '../../assets/images/user/orderCenter/shoucang.png', 'txt': '我的收藏' },
      { 'pic': '../../assets/images/user/orderCenter/zuji.png', 'txt': '我的足迹' },
      { 'pic': '../../assets/images/user/orderCenter/tuikuan.png', 'txt': '退款/售后' }
    ]
  },
  //bindViewTap
  bindViewTap:function(e){
    wx.navigateTo({
      url:'editModify'
    })
  },
  onLoad: function () {
    var that = this;
    //调用应用实例的方法获取全局数据
    wx.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
