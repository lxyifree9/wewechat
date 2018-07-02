Page({

  /**
   * 页面的初始数据
   */
  data: {
    category:[],
    product:[],
    conNav:1,
    conIndex:0,
    scrollTop: 0,
    floorstatus: false,
  },
  categoryChange:function(){
    this.setData ({
      cateTop: event.touches[0].pageY,
      cateLeft: event.touches[0].pageX,
    });
  },
  ontouchCategoryTap:function(e){
    let id = e.currentTarget.dataset.id;
    let index = parseInt(e.currentTarget.dataset.idx);
    console.log(id);
    console.log(index);
    this.setData({
      conNav:id,
      conIndex:index
    })
    // console.log(this.product[index]);
  },
  linkSearchTap:function(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://www.ifree9.cn/php/ifree9/array-classify.php',
      success:function(res){
        console.log(res);
        that.setData({
          category: res.data
        })
        
      }
    })
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