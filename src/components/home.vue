<template>
  <div class="home">
    <el-carousel :interval="5000" arrow="always" class="carousel">
      <el-carousel-item v-for="item in dataimg" :key="item.index">
        <img :src="item.src" class="header_img"/>
        <p class="txt_same txt1_pos">{{ item.txt1 }}</p><p class="txt_same txt2_pos"> {{ item.txt2 }}</p>
        <p class="txt_same txt3_pos">{{ item.txt3 }}</p>
        <el-form :inline="true" :model="search" class="txt_same form_pos">
          <el-radio-group v-model="search.radio">
            <el-radio v-for="item in radio" :key="item.label" :label="item.label">{{ item.msg }}</el-radio>
          </el-radio-group>
          <div class="get_res">
            <el-input v-model="search.input" :placeholder="ph[search.radio]"></el-input>
            <el-button icon="el-icon-search"></el-button>
          </div>
        </el-form>
      </el-carousel-item>
    </el-carousel>
    <div class="raiders">
      <el-tabs v-model="status">
        <div class="selected_content">
          <el-tag closable type="danger" @close="close_filter" v-show="tag_show"> {{tag_name}} </el-tag>
        </div>
        <el-tab-pane label="热门游记" name="hot">
          <raiders-head
            v-for="item in hot_data"
            :data="item"
            :key="item.id"
            @votes="addVote">
          </raiders-head>
        </el-tab-pane>
        <el-tab-pane label="最新发表" name="new">
          <raiders-head
            v-for="item in new_data"
            :data="item"
            :key="item.id"
            @votes="addVote">
          </raiders-head>
        </el-tab-pane>
      </el-tabs>
      <div class="right_up">
        <el-button size="small" circle class="filter" @click="filterShow">筛</el-button>
        <raiders-filter v-show="filter_show"
          @place="get_place">
        </raiders-filter>
        <a :href="write_url" class="btn-add" target="_blank"><i class="el-icon-edit"></i>写游记</a>
      </div>
    </div>
  </div>
</template>

<script>

import raiders_head from './raiders_head.vue'
import raiders_filter from './raiders_filter.vue'

export default {
  name: 'home',
  components: {
    "raiders-head": raiders_head,
    "raiders-filter": raiders_filter
  },
  data() {
    return {
      dataimg: [{
          index: 1,
          src: require('../assets/header-1.jpeg'),
          txt1: '14',
          txt2: ' /Nov.2018',
          txt3: '5k走出国门！铁路爱好者的中俄蒙铁路大回环'
        },
        {
          index: 2,
          src: require('../assets/header-2.jpeg'),
          txt1: '13',
          txt2: ' /Nov.2018',
          txt3: '迎面吹来南极的风，那些独行在塔州的小时光'
        },
        {
          index: 3,
          src: require('../assets/header-3.jpeg'),
          txt1: '12',
          txt2: ' /Nov.2018',
          txt3: '黔东南6日漫游，这里是大山深处的世外桃源'
        },
        {
          index: 4,
          src: require('../assets/header-4.jpeg'),
          txt1: '11',
          txt2: ' /Nov.2018',
          txt3: '一场惊动大使馆和公司老板的旅行，徒步小白暴走尼泊尔'
        }
      ],
      search: {
        radio: 0,
        input: ''
      },
      radio: [
        {label:0, msg:"全部"},
        {label:1, msg:"目的地"},
        {label:2, msg:"旅游攻略"}
      ],
      ph: ["搜目的地/旅行攻略...", "我要去...", "我想找..."],
      status: 'hot',
      tag_show: false,
      tag_name: "日本",
      hot_data:[
        { id: 0, 
          raiders_url: "./article_detail/111",
          title: "走遍东京~欢乐又充实~东京十日亲子乐园游~含迪士尼+不二雄+面超、杯面博物馆+托马斯乐园攻略~",
          img_url: require('../assets/raiders-hot-1.jpeg'),
          abstract: "日本 ，久负盛名的亲子游圣地，很早以前就想带娃去~每每把他提上日程，又都因为复杂的公共交通、繁多的游乐项目最终选择了放弃...”等等、再等等、等孩子再大一点吧“我的心里总是这样想，希望孩子大一些、能玩的多一些、体力充沛一些、抗病抗造能力再强一些，于是就这样终于捱到了四岁！在经历了 新加坡 、 阿联酋 两地城市游转型以后，我想应该是时候，我们该出发了！",
          ding: 41,
          place_url: "www.baidu.com",
          place: "顺德",
          user_url: "www.baidu.com",
          user_img: require('../assets/raiders-hot-user-1.jpeg'),
          user_name: "鹿女侠爱旅行",
          nums: "490/2"
        },
        { id: 1, 
          raiders_url: "www.baidu.com",
          title: "北海道 | 十二月的晴空飞雪",
          img_url: require('../assets/raiders-hot-2.jpeg'),
          abstract: "北海道 的十二月，气温在零度左右，还未有北方冬天本该有的寒冷，却已是一副白雪皑皑 银装素裹的景色。于是这一趟旅行的的雪/夜/阳光/还有她，成了我印象中最温暖的冬天。",
          ding: 121,
          place_url: "www.baidu.com",
          place: "北海道",
          user_url: "www.baidu.com",
          user_img: require('../assets/raiders-hot-user-2.jpeg'),
          user_name: "叫我王道长",
          nums: "1020/20"
        }
      ],
      new_data:[
        { id: 0, 
          raiders_url: "www.baidu.com",
          title: "猴年逛自贡灯会",
          img_url: require('../assets/raiders-new-1.jpeg'),
          abstract: "16年猴年回老婆老家—— 自贡 ，按照惯例去看灯会。 今年来 自贡 看灯会的人太多了，多到都不让进城了，只让川C牌照的车子进城，其他车辆一律不得入城，按照交警要求停在路边，然后乘坐便民",
          ding: 0,
          place_url: "www.baidu.com",
          place: "自贡",
          user_url: "www.baidu.com",
          user_img: require('../assets/raiders-new-user-1.jpeg'),
          user_name: " 浮生错的人",
          nums: "1/0"
        },
        { id: 1, 
          raiders_url: "www.baidu.com",
          title: "色达——一场冒险而佛系的朝圣之旅（自助游）",
          img_url: require('../assets/raiders-new-2.jpeg'),
          abstract: "出游前的准备 色达 的平均海拔在4000米左右，在距 色达 县城20余公里处，有一条山沟叫喇荣沟，顺沟上行数里，就是举世闻名的五明佛学院。佛学院四面环山，空气相对来说没有平原中流通。加上",
          ding: 4,
          place_url: "www.baidu.com",
          place: "色达",
          user_url: "www.baidu.com",
          user_img: require('../assets/raiders-new-user-2.jpeg'),
          user_name: "摩羯座",
          nums: "162/20"
        }
      ],
      write_url: "/write_raiders",
      filter_show: false
    };
  },
  methods: {
    addVote(vote) {
      // this.head_data.ding = vote + 1
      console.log(vote);
    },
    filterShow() {
      this.filter_show = true
    },
    close_filter() {
      this.tag_show = false
    },
    get_place(place) {
      this.filter_show = false
      if(place != -1){
        this.tag_show = true
        this.tag_name = place
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-carousel__container{
  height: 100%;
}
</style>
<style scoped>
.home{
  margin-top: 70px;
}
.carousel{
  width: 100%;
  height: 450px;
}
.el-carousel__container{
  height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.header_img{
  width: 100%;
  height: 100%;
  z-index: 1;
}

.txt_same{
  z-index: 2;
  color: #fff;
}

.txt1_pos{
  position: absolute;
  left: 125px;
  top: 20px;
  font-size: 30px;
}

.txt2_pos{
  position: absolute;
  left: 160px;
  top: 30px;
  font-size: 20px;
}

.txt3_pos{
  position: absolute;
  left: 125px;
  top: 60px;
  font-size: 20px;
}

.form_pos{
  position: absolute;
  left: 35%;
  bottom: 50px;
  color: #fff;
  background-color: rgba(0,0,0,.6);
  border-radius: 4px;
  padding: 10px;
  width: 30%;
  min-width: 300px;
}

.search_group{
  position: relative;
  top: 2px;
}

.el-radio{
  color: #fff;
}

.get_res{
  display: flex;
  margin-top: 10px;
}

.el-button{
  background: #ff9d00;
  border: 1px solid #ff9d00;
  margin-left: 5px;
}

.raiders{
  width: 1000px;
  margin: 0 auto;
  position: relative;
}

.right_up{
    float: right;
    position: absolute;
    top: 10px;
    left: 50px;
    right: 0px;
    z-index: 3;
}

.filter{
  font-size: 10px;
  color: #666;
  background: #fff;
  border: 1px solid #666;
}

.btn-add{
  width: 140px;
  height: 41px;
  background-color: #ff9d00;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  float: right;
  font-size: 16px;
  line-height: 41px;
}

.selected_content{
  margin: 0 0 5px 10px;
}

</style>
