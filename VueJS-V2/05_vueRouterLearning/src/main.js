import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// beforeEach 全局前置守卫
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  // from 跳转前的路由
  // to 跳转后的路由
  // matched[当前路由及其子路由]
  // meta 自定义信息
  document.title = to.matched[0].meta.title;
  // console.log(to);

  // 跳转
  next();
})

// 全局后置钩子
// 跳转后触发，无需调用next()
// router.afterEach((to, from) => {
//   console.log("我从 " + from.matched[0].meta.title + " 来，到 " + to.matched[0].meta.title + " 去")
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',

  // 使用路由
  router,
  render: h => h(App)
})
