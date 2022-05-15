<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <h3>{{$store.state.message}}</h3>
  <h3>{{title}}</h3> -->
  <h3>{{fullTitle}}</h3>
   姓名: <input type="text" v-model="name">
   職位: <input type="text" v-model="job">
   <button @click="updateTitle">更新資料</button>
   <h3>{{ $store.getters.tittle }}</h3>
</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return{
    name: '',
    job: ''
    }
  },
  computed: {
    fullTitle(){
        return this.$store.getters.fullTitle
    }
  },
  methods: {
    updateTitle(){
      this.$store.commit('setTitle',{
        name: this.name,
        job: this.job
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
