import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex)

// 创建对象
const store = new Vuex.Store({
  // 状态
  state: {
    number: 0,
    students: [
      {id: 110, name: "Tuzx"},
      {id: 112, name: "Utzx"},
      {id: 114, name: "Ztux"},
      {id: 116, name: "Xtuz"}
    ]
  },

  // 方法
  // 不可以进行异步操作
  mutations: {

    // Vue.set / Vue.delete
    // 可以将非响应式的元素变成响应式
    
    increment(state) {
      state.number++
    },
    decrement(state) {
      state.number--
    },
    // mutations的额外参数被称为PayLoad(载荷)
    incrementNumber(state, /* count */ payload) {
      // 普通提交风格的参数使用方法
      // state.number += count

      // 特殊提交风格的参数使用方法
      state.number += payload.count
    }
  },

  // 代替mutations进行异步操作
  actions: {
    delayIncrement(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('increment')
          console.log(payload)

          resolve("回调函数")
        }, 1000)
      })
    }
  },

  // 计算
  // 数据预处理
  getters: {
    powerNumber(state) {
      return state.number * state.number
    },
    filterStudents(state) {
      return state.students.filter(s => s.id > 112)
    },
    // 避免重复造轮子
    filterStudentsLength(state, getters) {
      return getters.filterStudents.length
    },
    // 传参
    moreIdStu(state) {
      return id => {
        return state.students.filter(s => s.id > id)
      }
    }
  },

  // 模块
  // 用于分类
  modules: {
    // 调用
    // state: ￥store.state.a....
    // mutation: 不变,所以方法名不能和外面的重复
    a: {
      state:{},
      mutations:{},
      actions:{},
      getters:{
        test(state, getters, rootState) {
          // rootState
          // 可以获取根的State
          console.log(rootState.number)
        }
      }
    }
  }
})

export default store