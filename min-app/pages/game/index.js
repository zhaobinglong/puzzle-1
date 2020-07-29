
Page({
  data: {
    url:''
  },
  onLoad: function(e) {
     const url = 'https://examlab.cn/puzzle/dist/index.html'
     console.log(url)
     this.setData({
      url:url
     })
  },

})