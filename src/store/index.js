import { createStore } from 'vuex'

export default createStore({
  // data
  state: {
    message: 'Hello Cool',
    name:'Jovy',
    age: 18,
    job: 'student'

  },
  // 就像computed
  // state會是一個物件
  getters: {
    title(state){
      return `${state.name}: ${state.job}`
    },
    // getters一定要寫在state後面
    fullTitle(state, getters){
      return `${getters.title}, ${state.age} 歲`
    }

  },
  // methods
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
