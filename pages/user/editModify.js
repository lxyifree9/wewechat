Page({

  /**
   * 页面的初始数据
   */
  data: {
    userMsgList:[
      { 
        leftTxt: '我的头像', 
        avatar: 'https://www.ifree9.cn/uploads/static/header_cry_icon.png', 
        sword: 'https://www.ifree9.cn/uploads/static/icon-arrowdown.png',
        avatarJudge:1
      }, {
        leftTxt: '用户名',
        avatar: 'Baise_Toi_',
        sword: 'https://www.ifree9.cn/uploads/static/icon-arrowdown.png',
        avatarJudge: 0
      }, {
        leftTxt: '出生年月',
        avatar: '1994-07-24',
        sword: 'https://www.ifree9.cn/uploads/static/icon-arrowdown.png',
        avatarJudge: 0
      }, {
        leftTxt: '手机号码',
        avatar: '158****8823',
        sword: 'https://www.ifree9.cn/uploads/static/icon-arrowdown.png',
        avatarJudge: 0
      }, {
        leftTxt: '登陆密码',
        avatar: 'L*************16',
        sword: 'https://www.ifree9.cn/uploads/static/icon-arrowdown.png',
        avatarJudge: 0
      }, {
        leftTxt: '支付密码',
        avatar: '******',
        sword: 'https://www.ifree9.cn/uploads/static/icon-arrowdown.png',
        avatarJudge: 0
      }, {
        leftTxt: '收货地址',
        avatar: '四川省 成都市 双流区 剑南大道',
        sword: 'https://www.ifree9.cn/uploads/static/icon-arrowdown.png',
        avatarJudge: 0
      }, {
        leftTxt: '实名认证',
        avatar: '李旭尧',
        sword: 'https://www.ifree9.cn/uploads/static/icon-arrowdown.png',
        avatarJudge: 0
      }, {
        leftTxt: '升级VIP',
        avatar: '您已是黄金VIP会员',
        sword: 'https://www.ifree9.cn/uploads/static/icon-arrowdown.png',
        avatarJudge:0
      }
    ]
  },
  //退出登录,到达登陆界面
  bindLoginTap:function(e){
    // wx.redirectTo({
    //   url: '../login/login',
    // }),
    wx.reLaunch({
      url: '../login/login',
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