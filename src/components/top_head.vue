<template>
  <div class="back header-wrap">
    <el-menu 
      :default-active="activeIndex" 
      class="el-menu-demo" 
      mode="horizontal" 
      @select="handleSelect"
      active-text-color="#ff9d00"
      router>
      <div class="left_header">
        <img src="../assets/logo.png"/>
      </div>
      <el-menu-item index="home">首页</el-menu-item>
      <el-menu-item index="destination">目的地</el-menu-item>
      <el-menu-item index="raiders">旅游攻略</el-menu-item>
      <el-submenu index="my" class="right_header">
        <template slot="title"><img src="../assets/user.png"  class="my"/></template>
        <el-menu-item index="1"><i class="el-icon-loading"></i>金币 {{coin}}</el-menu-item>
        <el-menu-item index="write_raiders"><i class="el-icon-edit"></i>写游记</el-menu-item>
        <el-menu-item index="myself"><i class="el-icon-goods"></i>我的</el-menu-item>
        <el-menu-item index="setting"><i class="el-icon-setting"></i>设置</el-menu-item>
        <el-menu-item index="quit"><i class="el-icon-d-arrow-right"></i>退出</el-menu-item>
      </el-submenu>
      <el-menu-item index="punch" class="right_header"><el-button class="daka">打卡</el-button></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "top_head",
    data() {
      return {
        activeIndex: 'home',
        coin: 2
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back{
  font-size: 12px;
  color: #666;
}
.header-wrap {
    width: 1000px;
    height: 68px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    margin-top: 10px;
}
.left_header{
  display: inline-flex;
  float: left;
  margin: 1em 17px 0px 1em;
}
.in_header{
  display: inline-flex;
  float: left;
}
.right_header{
  display: flex;
  float: right;
}
.my{
  padding-right: 10px;
  color: #ff9d00;
}
.daka{
  background: #ff9d00;
  color: #fff;
  font-size: 12px;
  border: 1px solid #ff9d00;
  height: 24px;
  line-height: 24px;
  padding: 0px 20px;
  margin: 17px 10px;
}

</style>
