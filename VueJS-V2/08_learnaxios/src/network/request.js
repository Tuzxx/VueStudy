// 封装axios
import axios from 'axios'

// export function request(config, success, failure) {
//   // 创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   // 发送真正的网络请求
//   instance(config)
//   .then(res => {
//     // console.log(res)
//     success(res)
//   })
//   .catch(err => {
//     // console.log(err)
//     failure(err)
//   })

// }

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 拦截器
  // 请求拦截器
  instance.interceptors.request.use(config => {
    console.log(config)

    // 必须返回
    return config
  }, err => {
    console.log(err)
  })

  // 响应拦截器  
  instance.interceptors.response.use(res => {
    // console.log(config)
    return res.data
  }, err => {
    console.log(err)
  })

  return instance(config)
}