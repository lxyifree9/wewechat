//const util = require("../../utils/util.js");
Page({
  data:{
    goodList: [],
    productList: [],

    iscart: false,
    cart: [], //数据
    count: 1,   //商品数量默认是1
    total: +0,    //总金额
    goodsCount: 0 //数量
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  /* 减数 */
  delCount: function (e) {
    console.log(e.currentTarget);
    console.log(this.data.total);
    // 获取购物车该商品的数量
    // [获取设置在该btn的id,即list的index值]
    if (this.data.cart[e.currentTarget.id.substring(3)].count <= 1) {
      return;
    }
    // 商品总数量-1
    this.data.goodsCount -= 1;
    // 总价钱 减去 对应项的价钱单价
    this.data.total -= Number(this.data.cart[e.currentTarget.id.substring(3)].goodsPrice);
    // 购物车主体数据对应的项的数量-1  并赋给主体数据对应的项内
    this.data.cart[e.currentTarget.id.substring(3)].count = --this.data.cart[e.currentTarget.id.substring(3)].count;
    // 更新data数据对象
    this.setData({
      cart: this.data.cart,
      total: this.data.total,
      goodsCount: this.data.goodsCount
    })
    // 主体数据重新赋入缓存内
    try {
      wx.setStorageSync('cart', this.data.cart)
    } catch (e) {
      console.log(e)
    }
  },
  /* 加数 */
  addCount: function (e) {
    // 商品总数量+1
    this.data.goodsCount += 1;
    // 总价钱 加上 对应项的价钱单价
    this.data.total += Number(this.data.cart[e.currentTarget.id.substring(3)].goodsPrice);
    // 购物车主体数据对应的项的数量+1  并赋给主体数据对应的项内
    this.data.cart[e.currentTarget.id.substring(3)].count = ++this.data.cart[e.currentTarget.id.substring(3)].count;
    // 更新data数据对象
    this.setData({
      cart: this.data.cart,
      total: this.data.total,
      goodsCount: this.data.goodsCount
    })
    // 主体数据重新赋入缓存内
    try {
      wx.setStorageSync('cart', this.data.cart)
    } catch (e) {
      console.log(e)
    }
  },
  /* 删除item */
  delGoods: function (e) {
    // 商品总数量  减去  对应删除项的数量
    this.data.goodsCount = this.data.goodsCount - this.data.cart[e.currentTarget.id.substring(3)].count;
    // 总价钱  减去  对应删除项的单价*数量
    this.data.total -= this.data.cart[e.currentTarget.id.substring(3)].price * this.data.cart[e.currentTarget.id.substring(3)].count;
    // 主体数据的数组移除该项
    this.data.cart.splice(e.currentTarget.id.substring(3), 1);
    // 更新data数据对象
    this.setData({
      cart: this.data.cart,
      total: this.data.total,
      goodsCount: this.data.goodsCount
    })
    // 主体数据重新赋入缓存内
    try {
      wx.setStorageSync('cart', this.data.cart)
    } catch (e) {
      console.log(e)
    }
  },
  onLoad:function(){
    // var that = this;
    // wx.request({
    //   url: 'https://www.ifree9.cn/php/ifree9/array-shopcar.php',
    //   success:function(res){
    //     console.log(res);
    //     that.setData({
    //       goodsList:res.data,
    //       productList:res.data

    //     })
    //   }
    // })
  },
  onReady:function(){

  },
  onShow:function(){
    var that = this;
    // 获取产品展示页保存的缓存数据（购物车的缓存数组，没有数据，则赋予一个空数组）
    var arr = wx.getStorageSync('cart') || [];
    // 有数据的话，就遍历数据，计算总金额 和 总数量
    console.log(arr);
    if (arr.length > 0) {
      for (var i in arr) {
        that.data.total += Number(arr[i].goodsPrice) * Number(arr[i].count);
        that.data.goodsCount += Number(arr[i].count);
      }
      // 更新数据
      this.setData({
        iscart: true,
        cart: arr,
        total: that.data.total,
        goodsCount: that.data.goodsCount
      });
    }
  },
  onHide: function () {
    // 清除数据
    this.setData({
      iscart: false,
      cart: [], //数据
      total: 0,    //总金额
      goodsCount: 0 //数量
    });
  },
  settleTap:function(e){
    var arr = wx.getStorageSync('cart') || [];
    console.log(arr);
    console.log(e);
    // 遍历列表 与 购物车列表
    for (var i in this.data.cart) {
      // 列表中某一项item的id == 点击事件传递过来的id。则是被点击的项
      if (this.data.cart[i].goodsId == e.currentTarget.id) {
        // 给cart数组的当前项添加count元素，值为1，用于记录添加到购物车的数量
        this.data.cart[i].count = 1;
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
          // 遍历完购物车后，没有对应的item项，把cart的当前项放入购物车数组
          arr.push(this.data.cart[i]);
        }
        // 购物车没有数据，把item项push放入当前数据（第一次存放时）
        else {
          arr.push(this.data.cart[i]);
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


    wx.navigateTo({
      url: '../goodsDetails/buypage/buypage',
    })
  }
})