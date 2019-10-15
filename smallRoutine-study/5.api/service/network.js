export default function request(option) {
  wx.request({
    url: option.url,
    method:option.method||'get',
    data:option.data || {},
    success:function(res){
      console.log(res)
    },
    fail:function(err){
      console.log(err)
    }
  })
}