//const util = require("../../utils/util.js");
Page({
  data: {
    goodList:[],
    scrollTop: 0,
    floorstatus: false,
    hotsaleDataList:[],
    
  },
  goTop: function (e) {
    this.setData({
      scrollTop: 0
    })
  },
  scroll: function (e) {
    console.log(e.detail.scrollTop);
    if (e.detail.scrollTop > 300) {
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
  onLoad:function(){
    var that = this;
    wx.request({
      url: 'https://www.ifree9.cn/php/ifree9/array-hotsale.php',
      success:function(res){
        console.log(res);
        that.setData({
          hotsaleDataList:res.data
        })
      }
    })
  }
})