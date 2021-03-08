<template>
<div id="app">
  <!-- 默认渲染为button -->
  <!-- tag属性可以更改渲染标签 -->
  <!-- repalce 不允许返回 -->
  <!-- 当路由连接成功后，会自动赋予router-link-activeClass -->
  <!-- 设置active-class属性可以更改router-link-active的名称 -->
  <router-link to="/home" tag="button" replace>首页</router-link>
  <router-link to="/about" replace>关于</router-link>

  <!-- 绑定变量 -->
  <router-link :to="'/user/'+userid" replace>用户</router-link>

  <!-- 传递数据 -->
  <!-- 方法一 -->
  <router-link :to="{path: '/profile', query: {name: 'Tuzx', age: 18, height: 1.8}}">档案</router-link>
  <!-- 方法二 -->
  <!-- <button @click="profileClicked">档案</button> -->

  <!-- 添加方法 -->
  <!-- <button @click="homeClicked">首页</button>
  <button @click="aboutClicked">关于</button> -->

  <!-- 保持活着 -->
  <!-- 将keep-alive所包括的内容缓存到内存，不销毁 -->
  <!-- exclude 将指定name属性的组件排除，不缓存到本地 -->
  <!-- include相反 -->
  <!-- 多个组件用,隔开 不可以加空格 -->
  <keep-alive exclude="profile">
    <!-- 展示位置 -->
    <router-view />
  </keep-alive>

  <button @click="testBtn">Test</button>
</div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    homeClicked() {
      // 跳转链接
      // replace 和 push
      // replace不可返回
      // $router获取的是当前活跃的路由
      this.$router.replace("/home").catch(err => {
        err
      })
      console.log("home")
    },
    aboutClicked() {
      this.$router.replace("/about").catch(err => {
        err
      })
      console.log("about")
    },
    profileClicked() {
      this.$router.push({
          path: "/profile",
          query: {
            name: "Tuzx",
            age: 18,  
            height: 1.88
          }
        }).catch(err => {
        err
      })
    },
    testBtn() {
      // 当前活跃路由
      console.log(this.$route)

      // 所有路由
      console.log(this.$router)
    }
  },
  data() {
    return {
      userid: "123",
    }
  }
}
</script>

<style>

</style>
