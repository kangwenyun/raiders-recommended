<template>
  <div class="top_head">
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
      <el-menu-item index="gonglve">旅游攻略</el-menu-item>
      <el-submenu index="my" class="my" v-show="login">
        <template slot="title"><img :src=user_img></template>
        <el-menu-item index="1"><i class="el-icon-loading"></i>金币 {{coin}}</el-menu-item>
        <el-menu-item index="write_gonglve"><i class="el-icon-edit"></i>写游记</el-menu-item>
        <el-menu-item index="myself"><i class="el-icon-goods"></i>我的</el-menu-item>
        <el-menu-item index="setting"><i class="el-icon-setting"></i>设置</el-menu-item>
        <el-menu-item index="quit"><i class="el-icon-d-arrow-right"></i>退出</el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="right_header" v-if="login">
      <div class="find_set">
        <transition name="el-zoom-in-center">
          <el-input
            v-show="show"
            placeholder="搜目的地/旅行攻略..."
            v-model="search"
            @blur="hide"
            ref="inputTop"
            suffix-icon="el-icon-search"/>
        </transition>
        <el-button 
          icon="el-icon-search" 
          circle 
          class="btn_search" 
          v-show="showImg" 
          @click="showInput"/>
      </div>
      <el-button class="daka">打卡</el-button>
    </div>
    <div v-else class="login-out">
      <a class="weibo-login" href="https://passport.mafengwo.cn/weibo" title="微博登录"></a>
      <a class="qq-login" href="https://passport.mafengwo.cn/qq" title="QQ登录"></a>
      <a class="weixin-login" href="https://passport.mafengwo.cn/wechat" title="微信登录"></a>
      <a title="登录马蜂窝" href="" @click="login_now('login')">登录</a>
      <span class="split">|</span>
      <a href="" title="注册帐号" @click="login_now('regist')">注册</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "top_head",
    data() {
      return {
        login: true,
        user_img: require("../assets/user.png"),
        activeIndex: this.$router.path,
        showImg: true,
        show: false,
        search: '',
        coin: 2
      };
    },
    methods: {
      get_account(){
        // console.log('000:', this.$route)
        // var account = this.$route.query.account
        // console.log("account:", account)
        // if(account){
        //   this.login = true
        //   //发请求
        //   this.user_img = require("../assets/user.png")
        // }
      },
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
      get_page(index){
        this.activeIndex = index
      },
      login_now(val){
        this.$router.push({
          path: '/login',
          query: {
            page: val
          }
        })
      }
    },
    created() {
      this.get_account()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top_head {
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
  position: relative;
  top: -60px;
  right: 315px;
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
  right: 20px;
}

.btn_search{
  position: absolute;
  right: 15px;
}

.el-menu-item {
  padding: 0 15px;
}

.el-submenu__title{
  padding: 0 15px;
}

.my{
  margin-right: 200px;
  float: right;
}

.login-out{
  padding: 17px 0;
  color: #c9c9c9;
  float: right;
  position: relative;
  top: -60px;
  right: 236px;
}

.login-out a{
  display: inline-block;
  line-height: 14px;
}

.weibo-login, .qq-login, .weixin-login{
  margin-right: 6px;
  width: 26px;
  height: 26px;
  background-position: 0 -50px!important;
  overflow: hidden;
  vertical-align: -7px;
  background: url(https://css.mafengwo.net/images/header-sprites15@2x.png) no-repeat;
  background-size: 200px;
}

.qq-login {
  background-position: -30px -50px!important;
}

.weixin-login {
  background-position: 0 -165px!important;
}

.split {
  margin: 0 10px;
  vertical-align: 3px;
}

a {
  background-color: transparent;
  text-decoration: none;
  color: #ff9d00;
  cursor: pointer;
}
</style>
