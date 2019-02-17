<template>
  <div class="ziyouxing">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ location }}</el-breadcrumb-item>
      <el-breadcrumb-item>
        <div class="top_title">自由行攻略</div>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <div>
        <ziyouxingL :data="ziyouxingl"></ziyouxingL>
        <ziyouxingR :data="ziyouxingr"></ziyouxingR>
    </div>
    <ziyouxing-related :data="ziyouxing_related"></ziyouxing-related>
  </div>
</template>

<script>

import ziyouxingL from './ziyouxingL.vue'
import ziyouxingR from './ziyouxingR.vue'
import ziyouxing_related from './ziyouxing_related.vue'

export default {
  name: "ziyouxing",
  components: {
    "ziyouxingL": ziyouxingL,
    "ziyouxingR": ziyouxingR,
    'ziyouxing-related': ziyouxing_related
  },
  data() {
    return {
      location: "北海",
      ziyouxingl: {
        title: '中国的“蓬莱仙岛”，景色堪比巴厘岛',
        time: '2018-12-14',
        read_num: 60358,
        author_href: '/u/90102427.html',
        author_src: 'https://b4-q.mafengwo.net/s10/M00/E8/CD/wKgBZ1iZk2SAGbKsAAME0TWzCHE45.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90',
        author_name: '马小蜂',
        author_identity: '马蜂窝攻略作者',
        author_introduction: '马蜂窝APP的管家~任何问题都可以通过"设置—常见问题与反馈"告诉我哦',
        gonglveDetail: '<div class="f-block"><div class="p-section">一临近冬天，我们除了希望看到美丽的雪景，也希望能去温暖的地方避一避寒流的突袭。<br>而国内有这样一个地方，它并没有海南那么火爆，也不用花很多钱去国外去感受热带的风~<br></div></div>'
                        + '<div class="f-block"> <img class="_j_lazyload" style="height: 427px; width: 640px; background: rgb(252, 242, 220); display: block;" src="https://n1-q.mafengwo.net/s12/M00/54/46/wKgED1wTdReAYEwIAADVKddty6Y13.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90" data-src="https://n1-q.mafengwo.net/s12/M00/54/46/wKgED1wTdReAYEwIAADVKddty6Y13.jpeg?imageView2%2F2%2Fw%2F680%2Fq%2F90" data-rt-src="https://n1-q.mafengwo.net/s12/M00/54/46/wKgED1wTdReAYEwIAADVKddty6Y13.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"><span class="img-an">来自马蜂窝用户 游刃 </span></div>'
      },
      ziyouxingr: {
        comment_num: 27,
        collect_num: 1491,
        share_num: 426,
        zan_num: 2,
        catalogue: [
            { key: 1, title: "银滩公园" },
            { key: 2, title: "侨港海滩" },
            { key: 3, title: "北海老街" },
            { key: 4, title: "涠洲岛" },
            { key: 5, title: "什么季节去涠洲岛最好？" },
            { key: 6, title: "怎么去涠洲岛？" },
            { key: 7, title: "涠洲岛门票" },
            { key: 8, title: "行程推荐，想玩几天玩几天！" },
            { key: 9, title: "涠洲岛必玩的景点TOP5" }
        ],
        now_title: 1
      },
      ziyouxing_related: {
        location: "北海",
        more_href: "/gonglve/ziyouxing/mdd_10796/",
        gonglve: [
            {
                key: 1,
                related_title: '涠洲岛摄影，记住这5个好地方',
                related_href: 'https://www.mafengwo.cn/gonglve/ziyouxing/75198.html',
                related_src: 'https://p4-q.mafengwo.net/s11/M00/82/C7/wKgBEFq554mAV8sWAAXW2ghM5JM66.jpeg?imageMogr2%2Fthumbnail%2F%21300x166r%2Fgravity%2FCenter%2Fcrop%2F%21300x166%2Fquality%2F100',
                related_p1: '石螺口沙滩',
                related_p2: '石盘河海滩',
            },
            {
                key: 2,
                related_title: '广西 | 逛北海老街，看骑楼，寻找旧时光',
                related_href: '/gonglve/ziyouxing/208534.html',
                related_src: 'https://p3-q.mafengwo.net/s12/M00/C9/5A/wKgED1wAufuAFRe_AAQ6RMlY02Q43.jpeg?imageMogr2%2Fthumbnail%2F%21300x166r%2Fgravity%2FCenter%2Fcrop%2F%21300x166%2Fquality%2F100',
                related_p1: '升平街的变迁',
                related_p2: '骑楼的兴起',
            },
            {
                key: 3,
                related_title: '吃在北海，中外各式美食餐厅推荐',
                related_href: 'https://www.mafengwo.cn/gonglve/ziyouxing/73814.html',
                related_src: 'https://p1-q.mafengwo.net/s11/M00/C2/DA/wKgBEFqzXQyAKkTlAAe-nSLkz5I15.jpeg?imageMogr2%2Fthumbnail%2F%21300x166r%2Fgravity%2FCenter%2Fcrop%2F%21300x166%2Fquality%2F100',
                related_p1: '侨越世家 越南小吃店',
                related_p2: '有间冰室',
            },
            {
                key: 4,
                related_title: '涠洲岛旅行指南：在蓝绿相间的宁静中沉醉',
                related_href: 'https://www.mafengwo.cn/gonglve/ziyouxing/161707.html',
                related_src: 'https://b3-q.mafengwo.net/s12/M00/04/34/wKgED1ukXhKAKCV0ABmSNj7nORQ31.jpeg?imageMogr2%2Fthumbnail%2F%21300x166r%2Fgravity%2FCenter%2Fcrop%2F%21300x166%2Fquality%2F100',
                related_p1: '绿色梦境and蓝色狂想',
                related_p2: 'come with me，体验让你撑破肚子的爬梯',
            },
        ],
      }
    };
  },
  created() {
    this.load()
  },
  methods: {
    load() {
      var vm = this
      // '/ziyouxing?id=...'
      vm.$http.get(this.GLOBAL.baseUrl + '/' + location.href.split('/')[3], { credentials: true })
              .then((response) => {
                if (response.body.status === 200){
                  this.location = response.body.location
                  this.ziyouxingl = response.body.ziyouxingl
                  this.ziyouxingr = response.body.ziyouxingr
                  this.ziyouxing_related = response.body.ziyouxing_related
                  // response.body.gonglve.forEach(element => {
                  //   var data = {
                  //     key: element.key, 
                  //     href: element.href,
                  //     title: element.title,
                  //     src: element.src,
                  //     view: element.view
                  //   }
                  //   this.gonglve.push(data)
                  // }, this);
                } else {
                  this.$message({
                    message: response.body.message,
                    type: 'error'
                  })
                }
      },(response) => {});
    }
  }
};
</script>

<style lang="less" scoped>
.ziyouxing {
  margin: 90px auto;
  width: 1000px;

  .top_title {
    color: #ff9d00 !important;
  }
}
</style>
