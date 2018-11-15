<template>
  <div id="app">
    <v-head></v-head>
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import top_head from'./components/top_head.vue'

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
    'v-head': top_head
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
  margin-top: -10px;
}
body{
  margin: 0px;
  font-size: 12px;
}
</style>
