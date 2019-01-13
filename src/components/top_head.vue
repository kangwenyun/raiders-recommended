<template>
  <div class="header-wrap">
    <el-menu 
      :default-active="activeIndex" 
      class="pos" 
      mode="horizontal"
      active-text-color="#ff9d00"
      router
      @select="get_page">
      <div class="left_header">
        <img src="../assets/logo.png"/>
      </div>
      <el-menu-item index="home">首页</el-menu-item>
      <el-menu-item index="mdd">目的地</el-menu-item>
      <el-menu-item index="raiders">旅游攻略</el-menu-item>
      <el-submenu index="my" class="right_header my">
        <template slot="title"><img src="../assets/user.png"/></template>
        <el-menu-item index="1"><i class="el-icon-loading"></i>金币 {{coin}}</el-menu-item>
        <el-menu-item index="write_raiders"><i class="el-icon-edit"></i>写游记</el-menu-item>
        <el-menu-item index="myself"><i class="el-icon-goods"></i>我的</el-menu-item>
        <el-menu-item index="setting"><i class="el-icon-setting"></i>设置</el-menu-item>
        <el-menu-item index="quit"><i class="el-icon-d-arrow-right"></i>退出</el-menu-item>
      </el-submenu>
      <el-menu-item index="punch" class="right_header"><el-button class="daka">打卡</el-button></el-menu-item>
      <div class="right_header find_set">
        <div class="find_right">
          <transition name="el-zoom-in-center">
            <el-input
              v-show="show"
              placeholder="搜目的地/旅行攻略..."
              v-model="search"
              @blur="hide"
              ref="inputTop"
              suffix-icon="el-icon-search">
            </el-input>
          </transition>
        </div>
        <el-button 
          icon="el-icon-search" 
          circle 
          class="btn_search" 
          v-show="showImg" 
          @click="showInput"></el-button>
      </div>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "top_head",
    data() {
      return {
        activeIndex: 'home',
        showImg: true,
        show: false,
        search: '',
        coin: 2
      };
    },
    methods: {
      showInput () {
        this.showImg = false
        this.show = true
        this.$nextTick(function(){
          this.$refs['inputTop'].focus()
        })
      },
      hide() {
        this.showImg = true
        this.show = false
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      get_page(index){
        this.activeIndex = index
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-wrap {
    margin-top: 10px;
    position: fixed;
    z-index: 100;
    width: 100%;
    min-width: 1155px;
}

.left_header{
  float: left;
  margin: 1em 10% 0px 10%;
}
.in_header{
  display: inline-flex;
  float: left;
}
.right_header{
  display: flex;
  float: right;
  /* right: 10%; */
}

.daka{
  background: #ff9d00;
  color: #fff;
  font-size: 12px;
  border: 1px solid #ff9d00;
  height: 24px;
  line-height: 24px;
  padding: 0px 20px;
  margin-top: 17px;
}
.find_right{
  width: 100%;
  float: right;
}
.find_set{
  width: 320px;
  padding: 10px 15px;
  position: relative;
}
.btn_search{
  position: absolute;
  right: 20px;
}

.el-menu-item {
  padding: 0 15px;
}

.el-submenu__title{
  padding: 0 15px;
}

.my{
  margin-right: 10%;
}
</style>
