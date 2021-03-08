import Vue from 'vue'
import Router from 'vue-router'

// 懒加载
// 用到时再加载 加快用户加载速度
const home = () => import("../components/home")
const news = () => import("../components/homeNews")
const message = () => import("../components/homeMessage")

const about = () => import("../components/about")
const user = () => import("../components/user")
const profile = () => import("../components/profile")

// 通过Vue.use(插件)，安装插件
Vue.use(Router)

// 创建VueRouter对象
// 并将Router对象导出
export default new Router({
  // 配置路由和组件之间的应用关系
  routes: [
    // 一个对象配置一个映射关系

    // 默认值
    {
      path: '',
      // 重定向
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
      // 添加数据
      meta: {
        title: '首页'
      },
      // 嵌套路由
      children: [
        // 子路由默认值
        // {
        //   path: '',
        //   redirect: 'news'
        // },
        {
          path: 'news',
          component: news
        },
        {
          path: 'message',
          component: message
        }
      ]
    },
    {
      path: '/about',
      component: about,
      meta: {
        title: '关于'
      },

      // 路由独享守卫
      beforeRouteEnter (to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
      },
      beforeRouteUpdate (to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
      },
      beforeRouteLeave (to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
      }
    },
    {
      // 添加变量
      path: '/user/:userid',
      component: user,
      meta: {
        title: '用户'
      }
    },
    {
      path: '/profile',
      component: profile,
      meta: {
        title: '档案'
      }
    }
  ],
  // 使用html5的history模式
  mode: 'history',
  // 修改router-link-active的名称
  linkActiveClass: 'active'
})

// router.beforeEach((to, from, next) => {
//   // to and from are both route objects. must call `next`.
//   // from 跳转前的路由
//   // to 跳转后的路由
//   // matched[当前路由及其子路由]
//   // meta 自定义信息
//   document.title = to.matched[0].meta.title;
//   console.log(to);

//   // 跳转
//   next();
// })

// export default router
