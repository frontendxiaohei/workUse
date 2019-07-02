// api.js
const API_BASE_URL = '';
const request = (url, data) => { 
  let _url = API_BASE_URL  + url;
  return new Promise((resolve, reject) => {
    wx.request({
      url: _url,
      method: "get",
      data: data,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success(request) {
        resolve(request.data)
        
      },
      fail(error) {
        reject(error)
      }
    })
  });
}


