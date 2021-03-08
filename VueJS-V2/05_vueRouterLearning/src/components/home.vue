<template>
<div>
  <h2>首页</h2>
  <p>我是首页</p>

  <router-link to="/home/news">新闻</router-link>
  <router-link to="/home/message">消息</router-link>
  <!-- 展示位置 -->
  <router-view />
</div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      path: '/home/news'
    }
  },
  created() {
    // home被创建时调用
  },
  destroyed() {
    // home被销毁时调用
  },

  // 只有keep-alive包括的组件才有活跃和非活跃状态
  activated() {
    // 路由切换到活跃时调用

    // 切换到活跃时，恢复之前的路径
    this.$router.push(this.path).catch(err => err)
  },
  deactivated() {
    // 路由切换到不活跃时调用
  },
  beforeRouteLeave (to, from, next) {
    // 切换路由，离开当前路由前调用

    // 可以利用该方法实现 即使离开该页面也能保持子路由不变的 需求
    // 保存离开前的路径
    this.path = this.$route.path
    next()
  } 
}
</script>

<style>

</style>
