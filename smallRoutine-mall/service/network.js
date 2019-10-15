export default function(option) {
  const baseUrl = 'http://123.207.32.32:8000/api/v1'
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + option.url,
      method: option.method || 'get',
      data: option.data || null,
      success: resolve,
      fail: reject
    })
  })
}