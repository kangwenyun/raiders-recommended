<template>
  <div id="app">
    <v-head></v-head>
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import top_head from './components/top_head.vue'

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
  color: #2c3e50;
  margin-top: -10px;
}

body, p, div {
    margin: 0;
    padding: 0;
    word-wrap: break-word;
    font-size: 12px;
}

img {
    border: 0;
}

a{
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    cursor: pointer;
}

dl{
    height: 100px;
}

dt{
    height: 26px;
    color: #333;
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 26px;
}

dt a{
    color: #000;
    white-space: nowrap;
    margin-right: 100px;
}

dd{
    margin: 0px;
    height: 60px;
}

dd a{
    height: 100%;
    color: #666;
    line-height: 20px;
    font-size: 14px;
}

a:hover{
    color: #ff9d00;
}

</style>
