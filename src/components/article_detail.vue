<template>
  <div class="article_detail">
      <article-head :data="articleHead"></article-head>
      <article-text :data="articleText"></article-text>
  </div>
</template>

<script>

import article_head from './article_head.vue'
import article_text from './article_text.vue'

export default {
  name: 'article_detail',
  components: {
    "article-head": article_head,
    "article-text": article_text,
  },
  data() {
    return {
        articleHead:{
          article_title: '还差一场雪，也许真的可以到白头。',
          title_img_url: "http://p3-q.mafengwo.net/s12/M00/26/FF/wKgED1wmMbyARMvZAAsHdb5BJao19.jpeg?imageMogr2%2Fstrip",
          num_ding: 324,
          per_home_url: "http://www.mafengwo.cn/u/57633488.html",
          per_pic_url: "http://b1-q.mafengwo.net/s12/M00/6C/2E/wKgED1we54uAdBBiAACPODu3epo99.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90",
          per_name: '娜娜959',
          per_grade: 'LV.41',
          vip_url: "http://www.mafengwo.cn/home/vip_show.php",
          vip_img_url: "http://images.mafengwo.net/images/home/vip/vip1.gif",
          time: '2019-01-03 21:13',
          view: '2400/201',
          num_share: 8,
          num_collect: 32
        },
        articleText:{
          time: '2018-12-16',
          day: '7',
          people: '和朋友',
          cost: '2000RMB'
        }
    };
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article_detail{
  margin-top: 70px;
}
</style>
