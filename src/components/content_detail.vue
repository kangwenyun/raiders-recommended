<template>
  <div class="content_detail">
    <content-head :data="contentHead"></content-head>
    <content-text :data="contentText"></content-text>
    <div class="detail" v-html="contentDetail">{{ contentDetail }}</div>
    <content-related></content-related>
  </div>
</template>

<script>

import content_head from './content_head.vue'
import content_text from './content_text.vue'
import content_related from './content_related.vue'

export default {
  name: 'content_detail',
  components: {
    "content-head": content_head,
    "content-text": content_text,
    "content-related": content_related,
  },
  data() {
    return {
        contentHead:{
          content_title: '还差一场雪，也许真的可以到白头。',   //游记标题
          title_img_url: "http://p3-q.mafengwo.net/s12/M00/26/FF/wKgED1wmMbyARMvZAAsHdb5BJao19.jpeg?imageMogr2%2Fstrip",  //游记标题背景图
          num_ding: 324, //顶的数量
          per_home_url: "http://www.mafengwo.cn/u/57633488.html", //点用户头像和用户名进入的链接
          per_pic_url: "http://b1-q.mafengwo.net/s12/M00/6C/2E/wKgED1we54uAdBBiAACPODu3epo99.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90",  //用户头像
          per_name: '娜娜959', //用户名
          per_grade: 'LV.41', //用户等级
          vip: true, //是否是vip
          vip_url: "http://www.mafengwo.cn/home/vip_show.php", //不需要
          vip_img_url: "http://images.mafengwo.net/images/home/vip/vip1.gif",   //不需要
          time: '2019-01-03 21:13',  //vip右侧的时间
          view: '2400/201', //时间右侧
          num_share: 8,  //已分享数量
          num_collect: 32 //收藏数
        },
        contentText:{
          time: '2018-12-16',  //出发时间
          day: '7', //出行天数
          people: '和朋友',  //人物
          cost: '2000RMB' //人均费用
        },
        contentDetail: '<p class="_j_note_content _j_seqitem" data-seq="424976778">我是个文字功底一般还有点懒的人。<br>但是时隔很久却还是很想用自己拙劣的文笔去记录这场美好的行程。<br>这第一次境外自由行。<br>很多人都说<a href="/travel-scenic-spot/mafengwo/10180.html" class="link _j_keyword_mdd" data-kw="越南" target="_blank">越南</a>很穷，很乱，很危险。<br>出发之前有很多好心的劝阻。whaterer，还是要去。<br>从决定自由行到出发不足1周的时间<br>2个女生👧说走就走<br>订机票，备衣服，换钱签证，做攻略......<br>我是个把生活过得七零八落的人，出门忘记带钥匙，取钱忘拔卡。但每次外出却像七大姑八大姨附身一样，有条不紊，面面俱到。大概就是喜爱的力量。</p>',
    };
  },
  created() {
    // this.load()
  },
  methods: {
    load(){
      var vm = this
      vm.$http.get(this.GLOBAL.baseUrl + '/' + location.href.split('/')[3])
              .then((response) => {
                if (response.body.status === 200){
                  console.log(response)
                  head = response.body.contentHead
                  this.contentHead = {
                    content_title: head.content_title,   //游记标题
                    title_img_url: head.title_img_url,  //游记标题背景图
                    num_ding: head.num_ding, //顶的数量
                    per_home_url: head.per_home_url, //点用户头像和用户名进入的链接
                    per_pic_url: head.per_pic_url,  //用户头像
                    per_name: head.per_name, //用户名
                    per_grade: head.per_grade, //用户等级
                    vip: head.vip, //是否是vip
                    vip_url: "http://www.mafengwo.cn/home/vip_show.php", //不需要
                    vip_img_url: "http://images.mafengwo.net/images/home/vip/vip1.gif",   //不需要
                    time: head.time,  //vip右侧的时间
                    view: head.view, //时间右侧
                    num_share: head.num_share,  //已分享数量
                    num_collect: head.num_collect //收藏数
                  },
                  text = response.body.contentText
                  this.contentText = {
                    time: text.time,  //出发时间
                    day: text.day, //出行天数
                    people: text.people,  //人物
                    cost: text.cost //人均费用
                  },
                  this.contentDetail = response.body.contentDetail
                } else {
                  this.$message({
                    message: response.body.msg,
                    type: 'error'
                  })
                }
      },(response) => {});
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.content_detail {
  margin-top: 70px;

  .detail {
    float: left;
    width: 70%;
    max-width: 850px;
    margin-left: 20px;
    margin-top: 20px;
  }
}
</style>