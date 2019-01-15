<template>
  <div class="mdd">
    <div class="show-banner">
      <div class="cover">
        <a class="bigimg" :href="ziyouxing" target="_blank">
        <img :src='bgr_url'/>
        </a>
      </div>
      <div class="show-info show-info-sm">
        <div class="show-name">
        <a :href="ziyouxing" target="_blank">
            <h2>{{ title }}</h2>
        </a>
        </div>
        <p class="location">{{ abstract }}</p>
        <div class="show-links">
        <a :href="ziyouxing" target="_blank">阅读全文</a>
        </div>
      </div>
      <!--留存-->
      <el-popover
        width="400"
        trigger="hover"
        class="pop-share">
        <a class="s-weibo" title="分享到微博" href="javascript:void(0)"><i></i></a>
        <a class="s-qzone" title="分享到QQ空间" href="javascript:void(0)"><i></i></a>
        <a class="s-weixin" title="分享到微信" href="javascript:void(0)"><i></i></a>
        <el-button slot="reference" class="btn-share" icon="el-icon-search">分享</el-button>
      </el-popover>
    </div>
    <div class="place-search-panel">
      <h2>Don't fear the unknown</h2>
      <div class="get_res">
        <el-input v-model="search_input" placeholder="我想去..."></el-input>
        <el-button class="btn"><i class="icon-search"></i></el-button>
      </div>
      <div class="place-search-hot">
          <a v-for="item in place_hot" :key="item.index" :href="item.href">{{ item.place }}</a>
      </div>
    </div>
    <hot-mdd></hot-mdd>
    <now-gonglve></now-gonglve>
    <topic-choice></topic-choice>
  </div>
</template>

<script>

import hot_mdd from './hot_mdd.vue'
import now_gonglve from './now_gonglve.vue'
import topic_choice from './topic_choice.vue'

export default {
  name: 'mdd',
  data() {
    return{
        ziyouxing: '/', //大图的跳转链接
        bgr_url: require("../assets/mdd_wallpaper.jpeg"), //大图图片url地址
        title: "活动 | 马蜂窝攻略征集大赛，你跟万元户之间只差一篇攻略！",  //活动名
        abstract: "报名参加“马蜂窝第一届攻略征集大赛”＋用心介绍你最熟悉的地方＝10w高额奖金＋近百个名额的抽奖＋让你猝不及防暴露在聚光灯下的巨大曝光！戳阅读原文了解详情。",  //活动介绍
        search_input:" ", //不需要
        place_hot:[ //"输入框"下面的五个地点
            {index: 0, href: '/', place:"成都"}, // index从0还是1开始都行,href地点对应的跳转链接,place地点汉字
            {index: 1, href: '/', place:"香港"},
            {index: 2, href: '/', place:"苏州"},
            {index: 3, href: '/', place:"长沙"},
            {index: 4, href: '/', place:"新加坡"},
        ]
    };
  },
  components: {
      "hot-mdd": hot_mdd,
      "now-gonglve": now_gonglve,
      "topic-choice": topic_choice,
  }
}
</script>

<style scoped>
.mdd{
    min-width: 1100px;
    min-height: 400px;
    margin-top: -10px;
    position: sticky;
}

.show-banner {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.cover {
    background: #ccc;
}

a.bigimg {
    display: block;
    position: relative;
    overflow: hidden;
    height: 500px;
}

img {
    border: 0;
    vertical-align: middle;
    width: 100%;
    margin-top: -10%;
}

.show-info {
    margin-top: -120px;
    border-right: 7px solid #fff;
    width: 550px;
    text-shadow: 0 2px 3px rgba(0,0,0,.5);
    color: #fff;
    line-height: 1.8;
}

.show-info-notes .show-info-sm {
    width: 535px;
    height: 170px;
    margin-right: auto;
}

h2:hover {
    color: #ff9d00;
}

.show-info-notes .show-info {
    margin-top: -120px;
    padding-right: 30px;
    border-right: 7px solid #fff;
    width: 550px;
    height: 285px;
    text-shadow: 0 2px 3px rgba(0,0,0,.5);
    color: #fff;
    font-size: 16px;
    line-height: 1.8;
    white-space: normal;
    text-align: left;
    margin-right: 100px;
}

.show-banner .show-info {
    z-index: 1;
    position: absolute;
    right: 5%;
    top: 40%;
}

.show-info-notes .show-name {
    position: static;
    margin: 10px 0;
    font-size: 40px;
    line-height: 1.3;
    text-align: left;
}

.show-banner .show-name {
    position: absolute;
    font-size: 20px;
    color: #fff;
}

h2 {
    font-weight: normal;
    font-size: 30px;
    color: #fff;
    margin: 0px;
    line-height: 40px;
}

.location {
    font-size: 16px;
    margin-top: 90px;
}

.show-links {
    font-size: 18px;
    margin-top: 10px;
}

.show-links a {
    text-decoration: underline;
    color: #fff;
}

.show-links a:hover {
    color: #ff9d00;
}

.btn-share {
    display: inline-block;
    width: 78px;
    height: 23px;
    border: 1px solid #fff;
    border-radius: 3px;
    color: #fff;
    text-align: center;
    line-height: 23px;
}

.pop-share a {
    display: inline-block;
    float: left;
    width: 36px;
    height: 36px;
    border-radius: 5px;
    margin-right: 12px;
    text-align: center;
}

.show-banner .pop-share i {
    display: inline-block;
    margin-top: 8px;
    width: 26px;
    height: 22px;
    background: url(http://css.mafengwo.net/images/mdd/place/place-sprites3.png) no-repeat 0 -90px;
    vertical-align: top;
    overflow: hidden;
}

.s-weibo {
    background-color: #d84c4c;
}

.s-qzone {
    background-color: #3f8bc0;
}

.s-qzone i {
    margin-top: 7px;
    height: 23px;
    background-position: -30px -90px;
}

.s-weixin {
    margin-right: 0;
    background-color: #73a64f;
}

.s-weixin i {
    background-position: -60px -90px;
}

.place-search-panel {
    width: 400px;
    padding: 15px;
    background-color: rgba(0,0,0,.4);
    border-radius: 4px;
    position: absolute;
    top: 170px;
    right: 57%;
}

.place-search-panel h2 {
    font-size: 20px;
    color: #fff;
    margin-bottom: 15px;
    font-weight: normal;
    line-height: 1;
    font-family: "Microsoft Yahei";
}

.btn{
    background: #ff9d00;
    padding: 0 10px;
    margin-left: 5px;
    border: 0;
}

.icon-search {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url(http://images.mafengwo.net/images/header-sprites.png) no-repeat 0 -110px;
    overflow: hidden;
    vertical-align: top;
}

.get_res{
  display: flex;
  margin-top: 10px;
}

.place-search-hot {
    font-size: 14px;
    margin-top: 15px;
    line-height: 16px;
}

.place-search-hot a {
    margin-right: 10px;
    color: #fff;
    display: inline;
}
</style>
