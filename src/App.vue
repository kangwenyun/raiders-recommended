<template>
  <div id="app">
    <v-head v-if="show_top()"></v-head>
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import top_head from './components/top_head.vue'

export default {
  name: 'app',
  data() {
    return{
        
    };
  },
  components: {
    'v-head': top_head
  },
  methods: {
    show_top() {
      var arr = ['/login', '/regist']
      for(var i = 0; i < arr.length; i++){
        if(this.$route.path == arr[i]){
          return false
        }
      }
      return true
    }
  }
}
</script>

<style>
#app {
    font-family: Arial,"Lucida Grande","Microsoft Yahei","Hiragino Sans GB","Hiragino Sans GB W3",SimSun,"PingFang SC",STHeiti;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: -10px;
    position: absolute;
    width: 100%;
}

body, p, div {
    margin: 0;
    padding: 0;
    word-wrap: break-word;
    font-size: 14px;
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

li {
    list-style: none;
}

</style>
