<template>
  <div class="tab-bar-item" @click="itemClicked">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
    <!-- <img src="../../assets/img/tabbar/Home.png" alt="">
    <div>主页</div> -->
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    data() {
      return {
        // isActive: false
      }
    },
    computed: {
      isActive() {
        return !this.$route.path.indexOf(this.path)
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClicked() {
        this.$router.replace(this.path)
      }
    },
    props: {
      path: String,
      activeColor: {
        type: String,
        default: "red"
      }
    }
  }
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    font-size: 14px;

    /* tabbar的一般高度 */
    height: 49px;
  }

  .tab-bar-item img {
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  .active {
    color: #d81e06;
  }
</style>