<template>
  <div class="recommend_gonglve">
      <el-tabs v-model="status">
        <el-tab-pane label="推荐攻略" name="gonglve">
          <gonglve-head
            v-for="item in hot_data"
            :data="item"
            :key="item.id"
            @votes="addVote">
          </gonglve-head>
        </el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>

import gonglve_head from './gonglve_head.vue'

export default {
  name: 'recommend_gonglve',
  components: {
    "gonglve-head": gonglve_head
  },
  data() {
    return {
      status: 'gonglve',
      hot_data:[
        { id: 0, 
          icon_from: 'youji',
          from: "游记",
          gonglve_url: "/",
          num_zan: 1242,
          title: "额济纳旗的秋韵（201810自驾详细攻略）",
          img_url1: require('../assets/gonglve-head-11.jpeg'),
          img_url2: require('../assets/gonglve-head-11.jpeg'),
          img_url3: require('../assets/gonglve-head-11.jpeg'),
          // 130字+...
          abstract: "⛳⛳序言 三千年守候，只为等你来 胡杨生而千年不死、死而千年不倒、倒而千年不朽。2018年额济纳的的胡杨早黄了一周，我们适逢其时，看到最美秋韵。因一年只有20天红叶，又恰逢国庆，人满为患，但我们巧妙错峰，从未排队，还经常景区包场，每天都很震撼...",
          user_img: require('../assets/raiders-hot-user-1.jpeg'),
          user_name: "鹿女侠爱旅行",
          num_liulan: 624,
          num_pinglun: 32
        },
        { id: 1, 
          icon_from: 'ziyouxinggonglve',
          from: "自由行攻略",
          gonglve_url: "/",
          num_zan: 122,
          title: "黄山看雪景，冬天下雪自助旅游攻略",
          img_url1: require('../assets/gonglve-head-11.jpeg'),
          img_url2: require('../assets/gonglve-head-12.jpeg'),
          img_url3: require('../assets/gonglve-head-13.jpeg'),
          abstract: "“黄山四季皆胜景，惟有冬季景更佳”，冬天的黄山，有难得一见的雪景、雾淞和云海，如果不是亲眼看到，你绝对想象不出它有多美。很多想来黄山看雪景的蜂蜂都会有这样的误解，黄山冬天会不会封山？会不会很冷？山路会不会很滑？看了这篇攻略您就知道了。",
          user_img: require('../assets/raiders-hot-user-2.jpeg'),
          user_name: "叫我王道长",
          num_liulan: 625,
          num_pinglun: 3
        },
        { id: 2, 
          icon_from: 'wenda',
          from: "问答",
          gonglve_url: "/",
          num_zan: 972,
          title: "如何最快地找到跟你说走就走的那个人？",
          img_url1: require('../assets/gonglve-head-11.jpeg'),
          img_url2: '',
          img_url3: '',
          abstract: "如何最快的排除那些绝对不可能跟你说走就走的人？当然，样本里都是熟悉的人，陌生人当然不会稀里糊涂就跟你说走就走（表抬杠）。先说几个答主亲身经历的失败案例。第一次是答主大一的时候，那时候懵懂少年，绝壁单纯的不会蠢蠢欲动。一次宿舍座机响了，答主隔得近就接起来，结果话筒里传来一个甜甜的妹子的声音！简单交流后原来...",
          user_img: require('../assets/raiders-hot-user-2.jpeg'), // 随便传一个
          user_name: '',
          num_liulan: 265,
          num_pinglun: 319
        }
      ]
    };
  },
  methods: {
    addVote(vote) {
      // this.head_data.ding = vote + 1
      console.log(vote);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recommend_gonglve{
    margin: -200px 0 0 6%;
}
</style>
