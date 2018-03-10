// pages/questionBank/list/list.js
const app = getApp();
const baseUrl = app.globalData.baseUrl;
const userInfo = app.globalData.userInfo;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { id: 0, title: "111",content:"" },
      { id: 1, title: "222" },
      { id: 2, title: "333" }
    ],
    list2: [
      { id: 2, name: "long" }, { id: 3, name: "li" }

    ]
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
    var that = this;
    wx.request({
      url: baseUrl +'/coder-hub/test',
      method: "POST",
      dataType: "json",
      data: { "userInfo": userInfo},
      success: function (r) {
        that.setData({
          list: r.data
        })
        console.log(that.data.list)
      }
    })
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