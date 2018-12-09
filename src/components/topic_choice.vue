<template>
  <div class="topic_choice">
    <div class="r-title"><h2>主题精选</h2></div>
    <div class="r-navbar">
        <span class="divide">|</span>
        <span v-for="item in topics" :key="item.id">
            <a href="javascript:void(0)" @mouseover="set_now_topic(item.id)" :class="now_topic == item.id ? 'on':''">{{ item.topic }}</a>
            <span class="divide">|</span>
        </span>
    </div>
    <div class="col">
        <a v-for="item in raiders" :key="item.id" v-show="now_topic == item.father_id">
            <img :src="item.src" class="small_img"/>
            <span class="name" :class="item.id == item.father_id*10 + 7 ? 'cent_img' : ''">{{ item.name }}</span>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'now_raiders',
  data() {
    return {
        now_topic: 1,
        topics:[
            {id: 1, topic: "全年适宜"},
            {id: 2, topic: "季节"},
            {id: 3, topic: "出行方式"},
            {id: 4, topic: "节假日"}
        ],
        raiders:[
        {
            father_id: 1,
            id: 11,
            name: "免签",
            src: require("../assets/topic11.jpeg")
        },
        {
            father_id: 1,
            id: 12,
            name: "人文历史",
            src: require("../assets/topic12.jpeg")
        },
        {
            father_id: 1,
            id: 13,
            name: "拍片圣地",
            src: require("../assets/topic13.jpeg")
        },
        {
            father_id: 1,
            id: 14,
            name: "自然风景",
            src: require("../assets/topic14.jpeg")
        },
        {
            father_id: 1,
            id: 15,
            name: "小众",
            src: require("../assets/topic15.jpeg")
        },
        {
            father_id: 1,
            id: 16,
            name: "登山",
            src: require("../assets/topic16.jpeg")
        },
        {
            father_id: 1,
            id: 17,
            name: "潜水",             
            src: require("../assets/topic17.jpeg"),
        },
        {
            father_id: 1,
            id: 18,
            name: "古镇",             
            src: require("../assets/topic18.jpeg"),
        },
        {
            father_id: 1,
            id: 19,
            name: "动物",             
            src: require("../assets/topic19.jpeg"),
        },
        {
            father_id: 1,
            id: 110,
            name: "逃离雾霾",             
            src: require("../assets/topic110.jpeg")
        },
        {
            father_id: 1,
            id: 111,
            name: "购物",             
            src: require("../assets/topic111.jpeg")
        },
        {
            father_id: 1,
            id: 112,
            name: "美食",             
            src: require("../assets/topic112.jpeg")
        },
        {
            father_id: 2,
            id: 21,
            name: "草原",             
            src: require("../assets/topic21.jpeg")
        },
        {
            father_id: 2,
            id: 22,
            name: "星空",             
            src: require("../assets/topic22.jpeg")
        },
        {
            father_id: 2,
            id: 23,
            name: "赏花",             
            src: require("../assets/topic23.jpeg")
        },
        {
            father_id: 2,
            id: 24,
            name: "雪景",             
            src: require("../assets/topic24.jpeg")
        },
        {
            father_id: 2,
            id: 25,
            name: "海岛",             
            src: require("../assets/topic25.jpeg")
        },
        {
            father_id: 2,
            id: 26,
            name: "极限运动",             
            src: require("../assets/topic26.jpeg")
        },
        {
            father_id: 2,
            id: 27,
            name: "滑雪",             
            src: require("../assets/topic27.jpeg")
        },
        {
            father_id: 2,
            id: 28,
            name: "温泉",             
            src: require("../assets/topic28.jpeg")
        },
        {
            father_id: 2,
            id: 29,
            name: "当地节庆",             
            src: require("../assets/topic29.jpeg")
        },
        {
            father_id: 2,
            id: 210,
            name: "温暖地点",             
            src: require("../assets/topic210.jpeg")
        },
        {
            father_id: 2,
            id: 211,
            name: "避暑",             
            src: require("../assets/topic211.jpeg")
        },
        {
            father_id: 2,
            id: 212,
            name: "极光",             
            src: require("../assets/topic212.jpeg")
        },
        {
            father_id: 3,
            id: 31,
            name: "徒步",             
            src: require("../assets/topic31.jpeg")
        },
        {
            father_id: 3,
            id: 32,
            name: "自驾",             
            src: require("../assets/topic32.jpeg")
        },
        {
            father_id: 3,
            id: 33,
            name: "游轮",             
            src: require("../assets/topic33.jpeg")
        },
        {
            father_id: 3,
            id: 34,
            name: "骑行",             
            src: require("../assets/topic34.jpeg")
        },
        {
            father_id: 3,
            id: 35,
            name: "蜜月",             
            src: require("../assets/topic35.jpeg")
        },
        {
            father_id: 3,
            id: 36,
            name: "亲子游",             
            src: require("../assets/topic36.jpeg")
        },
        {
            father_id: 3,
            id: 37,
            name: "带父母",             
            src: require("../assets/topic37.jpeg")
        },
        {
            father_id: 3,
            id: 38,
            name: "一个人",             
            src: require("../assets/topic38.jpeg")
        },
        {
            father_id: 3,
            id: 39,
            name: "好朋友",             
            src: require("../assets/topic39.jpeg")
        },
        {
            father_id: 4,
            id: 41,
            name: "元旦",             
            src: require("../assets/topic41.jpeg")
        },
        {
            father_id: 4,
            id: 42,
            name: "春节",             
            src: require("../assets/topic42.jpeg")
        },
        {
            father_id: 4,
            id: 43,
            name: "清明",             
            src: require("../assets/topic43.jpeg")
        },
        {
            father_id: 4,
            id: 44,
            name: "五一",             
            src: require("../assets/topic44.jpeg")
        },
        {
            father_id: 4,
            id: 45,
            name: "端午",             
            src: require("../assets/topic45.jpeg")
        },
        {
            father_id: 4,
            id: 46,
            name: "中秋",             
            src: require("../assets/topic46.jpeg")
        },
        {
            father_id: 4,
            id: 47,
            name: "国庆",             
            src: require("../assets/topic47.jpeg")
        },
        {
            father_id: 4,
            id: 48,
            name: "寒假",             
            src: require("../assets/topic48.jpeg")
        },
        {
            father_id: 4,
            id: 49,
            name: "暑假",             
            src: require("../assets/topic49.jpeg")
        }
      ]
    }
  },
  methods: {
    set_now_topic(key) {
        this.now_topic = key
    },
  }
}
</script>

<style scoped>
.now_raiders {
    background-color: #fafafa;
    width: 100%;
}

.raiders {
    padding: 40px 0;
    width: 1000px;
    margin: 0 auto;
}

.r-title {
    margin-bottom: 35px;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
}

.r-title h2 {
    margin-bottom: 8px;
    font-size: 26px;
    font-weight: normal;
    color: #333;
    line-height: 26px;
}

.r-navbar {
    margin: -10px 0 30px;
    text-align: center;
    font-size: 18px;
    color: #eee;
    line-height: 22px;
}

.divide {
    display: inline-block;
    margin-top: 3px;
    width: 1px;
    height: 15px;
    background-color: #eee;
    overflow: hidden;
    line-height: 100px;
    vertical-align: top;
}

/*选中的目的地active*/
.on {
    padding-bottom: 12px;
    color: #ff9d00 !important;
    border-bottom: 3px solid #ff9d00;
}

.r-navbar a {
    color: #333;
    display: inline-block;
    margin: 0 25px;
    vertical-align: top;
}

.col {
    width: 100%;
}

.big_img{
    width: 323px;
    height: 220px;
}

.small_img{
    width: 240px;
    height: 220px;
}

.cent_img{
    height: 220px;
    line-height: 220px;
    left: 100px !important;
}

a{
    display: inline;
    position: relative;
    margin-right: 10px;
}

.name{
    position: absolute;
    left: 10px;
    bottom: 10px;
    color: #fff;
    font-size: 20px;
}

</style>