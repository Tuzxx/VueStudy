<template>
  <div>
    <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img slot="item-icon" src="../assets/img/tabbar/Home.png" alt="">
      <img slot="item-icon-active" src="../assets/img/tabbar/Home_active.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="../assets/img/tabbar/Category.png" alt="">
      <img slot="item-icon-active" src="../assets/img/tabbar/Category_active.png" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="../assets/img/tabbar/Shopping.png" alt="">
      <img slot="item-icon-active" src="../assets/img/tabbar/Shopping_active.png" alt="">
      <div slot="item-text">购物</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="../assets/img/tabbar/Profile.png" alt="">
      <img slot="item-icon-active" src="../assets/img/tabbar/Profile_active.png" alt="">
      <div slot="item-text">个人</div>
    </tab-bar-item>
  </tab-bar>
  </div>
</template>

<script>
  import TabBar from "./tabbar/TabBar.vue"
  import TabBarItem from "./tabbar/TabBarItem.vue"

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  
</style>