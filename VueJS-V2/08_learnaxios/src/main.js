import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

// // 全局配置 
// // 共同路径
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// // 请求超时
// axios.defaults.timeout = 5000 // ms

// axios({
//   url: '/home/multidata',
//   method: 'get'
// }).then(res => {
//   console.log(res)
// })

// axios({
//   url: '/home/data',
//   // url参数
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })

// axios.all([
//   axios({
//     url: '/home/multidata',
//   }),
//   axios({
//     url: '/home/data',
//     params: {
//       type: 'sell',
//       page: 5
//     }
//   })
// ]).then(axios.spread((res1, res2) => {
//   console.log(res1)
//   console.log(res2)
// }))

// // 创建axios实例
// const instance1 = axios.create({
//   // 局部配置
//   baseURL: 'http://123.207.32.32:8000',
//   timeout:5000
// })

// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res)
// })

// 封装request模块
import {request} from './network/request'

// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res)
// }, err => {
//   console.log(err)
// })

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})