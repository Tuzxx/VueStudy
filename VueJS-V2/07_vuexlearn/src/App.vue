<template>
  <div id="app">
    {{$store.getters.powerNumber}}
    <button @click="addition"> + </button>
    <button @click="subtraction"> - </button>
    <button @click="addCount(5)"> +5 </button>
    <button @click="addCount(10)"> +10 </button>
    <p>学生: {{$store.getters.filterStudents}}</p>
    <p>数量: {{$store.getters.filterStudentsLength}}</p>
    <p>大于110的学生 {{$store.getters.moreIdStu(110)}}</p>
    <number/>
  </div>
  
</template>

<script>
  import number from './components/Number'

  export default {
    name: 'App',
    components: {
      number
    },
    data() {
      return {
        
      }
    },
    methods: {
      addition() {
        // this.$store.commit('increment')

        // 提交到actions
        // this.$store.dispatch('delayIncrement' /*, 参数*/)

        // 提交到actions并回调函数
        this.$store.dispatch('delayIncrement', 'Hello World').then(message => {
          console.log(message)
        })
      },
      subtraction() {
        this.$store.commit('decrement')
      },
      addCount(count) {
        // 普通的提交风格
        // this.$store.commit('incrementNumber', count) 

        // 特殊的提交风格
        // 这种提交风格会把这个对象作为参数传递提交上去
        this.$store.commit({
          type: "incrementNumber",
          count
        })
      }
    },
  }
</script>

<style>

</style>
