<template>
  <div class="youji_head">
    <div class="head_img">
        <img :src="title_img_url">
    </div>
    <div>
        <div class="title_bg"></div>
        <div class="view_info">
            <div class="vi_con">
                <h1  class="headtext lh80">{{ youji_title }}</h1>
            </div>
        </div>
    </div>
    <div class="vt_center">
        <div class="ding" @click="ding">
            <a role="button" title="顶">顶</a>
            <div class="num">{{ num_ding }}</div>
        </div>
        <div class="person">
            <a :href="per_home_url" target="_blank" class="per_pic">
                <img :src="per_pic_url" alt="" style="width: 120px;height: 120px;">
            </a>
            <a :href="per_home_url" target="_blank" class="per_name" :title="per_name">{{ per_name }}</a>
            <a :href="per_home_url" target="_blank" class="per_grade" :title="per_grade">{{ per_grade }}</a>
            <a href="http://www.mafengwo.cn/home/vip_show.php" target="_blank" class="vip_img" v-show="vip">
                <img src="http://images.mafengwo.net/images/home/vip/vip1.gif" alt="">
            </a>
            <div class="vc_time">
                <span class="time">{{ time }}</span>
                <span class="ico_view">
                    <i></i>{{view}}
                </span>
            </div>
        </div>
        <div class="bar_share">
            <div class="bs_share">
                <a href="javascript:;" title="分享" class="bs_btn">
                    <i></i>
                    <span>{{ num_share }}</span>
                    <strong>分享</strong>
                </a>
            </div>
            <div class="bs_collect">
                <a href="javascript:;" title="收藏" class="bs_btn" :class="collect ? 'collected' : ''" @click="collect = collect ? false : true">
                    <i></i>
                    <span>{{ num_collect }}</span>
                    <strong>收藏</strong>
                </a>
            </div>
        </div>
    </div>
    <div class="bottom_line"></div>
  </div>
</template>

<script>
export default {
  name: 'youji_head',
  props: {
      data: {}
  },
  data() {
    return{
        youji_title: this.data.youji_title,
        title_img_url: this.data.title_img_url,
        num_ding: this.data.num_ding,
        per_home_url: this.data.per_home_url,
        per_pic_url: this.data.per_pic_url,
        per_name: this.data.per_name,
        per_grade: this.data.per_grade,
        vip: this.data.vip,
        time: this.data.time,
        view: this.data.view,
        num_share: this.data.num_share,
        num_collect: this.data.num_collect,
        collect: false
    };
  },
  methods:{
      ding(){
          this.num_ding += 1
      }
  }
}
</script>

<style scope>
.head_img{
    overflow: hidden;
    width: 100%;
    height: 100%;
}

.head_img img{
    width: 100%;
}

.title_bg{
    height: 100px;
    background: url(http://css.mafengwo.net/images/post/new_notes/nn_v2/title_bg.png) 0 bottom repeat-x;
    position: absolute;
    left: 0;
    right: 0;
    top: 292px;
    opacity: .5;
}

.view_info {
    width: 100%;
    height: 125px;
    position: absolute;
    top: 290px;
}

.vi_con {
    width: 830px;
    padding: 0 0 10px 150px;
    margin: 0 auto;
    color: #fff;
}

.vi_con h1.lh80 {
    line-height: 80px;
}

.vi_con h1 {
    width: 710px;
    height: 80px;
    font-size: 26px;
    line-height: 38px;
    overflow: hidden;
}

.vt_center {
    width: 1000px;
    margin: 0 auto;
}

.ding{
    position: absolute;
    right: 50%;
    top: 315px;
    margin-right: -460px;
    color: #fff;
    z-index: 4;
    text-align: center;
}

.ding a {
    width: 37px;
    height: 33px;
    text-align: center;
    line-height: 35px;
    background: url(http://css.mafengwo.net/images/post/new_notes/sprite_v35.png) -293px -236px no-repeat;
    font-size: 18px;
    color: #fff;
    text-shadow: 1px 0 1px #fcaf54;
}

.num {
    font-weight: bold;
    font-family: Verdana,Arial,Helvetica,STHeiti;
    margin-top: 5px;
}

.person {
    padding: 15px 0 0 150px;
    position: relative;
}

.person a {
    display: inline-block;
    margin-right: 15px;
}

.person a.per_pic {
    position: absolute;
    top: -80px;
    left: 0;
}

.person a.per_pic img {
    border-radius: 50%;
}

.person a.per_name {
    color: #ff7200;
    font-weight: normal;
    margin-bottom: -5px;
}

.person a.per_grade {
    color: #ea3c1a;
    font-family: Verdana,Arial,Helvetica,STHeiti;
    font-size: 10px;
    font-weight: bold;
    text-decoration: none;
    margin-bottom: -2px;
}

.vip_img{
    margin-left: -5px;
    margin-bottom: -5px;
}

.vc_time{
    color: #acacac;
    display: inline;
    margin-left: 10px;
    font-family: Verdana,Arial,Helvetica,STHeiti;
}

.vc_time span {
    display: inline-block;
    margin-right: 10px;
}

.vc_time span i {
    width: 18px;
    height: 14px;
    display: inline-block;
    background: url(http://css.mafengwo.net/images/post/new_notes/sprite_v35.png) -51px -327px no-repeat;
    margin-right: 4px;
    vertical-align: -2px;
}

.bar_share {
    float: right;
    width: 245px;
    margin-top: -35px;
}

.bs_collect, .bs_share {
    float: right;
    width: 120px;
    height: 65px;
    text-align: center;
    border-left: 1px solid #e8e8e6;
    padding-top: 20px;
}

.bs_share {
    border-right: 1px solid #e8e8e6;
}

a.bs_btn {
    color: #666;
    position: relative;
}

.bar_share a.bs_btn i {
    background: url(http://css.mafengwo.net/images/post/new_notes/notes-share-collect@2x.png) no-repeat;
    background-size: 100px auto;
    width: 25px;
    height: 24px;
    display: block;
    margin: 0 auto 7px;
}

.bs_share a.bs_btn i {
    background-position: -60px 0;
}

.bs_collect a.bs_btn i {
    background-position: 0 0;
}

.collected i{
    background-position: -30px 0 !important;
}

.bottom_line{
    border-bottom: 1px solid #d7d7d7;
    box-shadow: 0 2px 0 rgba(0,0,0,0.05);
    margin-top: 50px;
}
</style>
