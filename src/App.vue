<template>
  <div id="app">
    <v-header></v-header>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import header from'./components/header.vue'

// const ERR_OK =0

export default {
  name: 'app',
  data() {
    return{
    };
  },
  // created() {
  //   this.$http.get('/api/goods').then((response) => {
  //     response = response.body;
  //     if(response.errno=== ERR_OK) {
  //       this.goods= response.data;
  //     }
  //   },(response) => {});
  // },
  components: {
    'v-header': header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
