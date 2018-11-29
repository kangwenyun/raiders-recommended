<template>
  <div class="now_raiders">
    <div class="raiders">
        <div class="r-title"><h2>当季推荐</h2></div>
        <div class="r-navbar">
            <span class="divide">|</span>
            <span v-for="item in months" :key="item.id">
                <a href="javascript:void(0)" @mouseover="set_now_month(item.id)" :class="now_month == item.id ? 'on':''">{{ item.month }}</a>
                <span class="divide">|</span>
            </span>
        </div>
        <div class="col">
            <a v-for="item in raiders" :key="item.id" v-show="now_month == item.father_id">
                <img :src="item.src" :class="item.id < item.father_id*10 + 4 ? 'big_img' : 'small_img' "/>
                <span class="name" :class="item.id == item.father_id*10 + 7 ? 'cent_img' : ''">{{ item.name }}</span>
            </a>
        </div>
    </div>
   </div>
</template>

<script>
export default {
  name: 'now_raiders',
  data() {
    return {
        now_month: 1,
        months:[
            {id: 1, month: "1月"},
            {id: 2, month: "2月"},
            {id: 3, month: "3月"},
            {id: 4, month: "4月"},
            {id: 5, month: "5月"},
            {id: 6, month: "6月"},
            {id: 7, month: "7月"},
            {id: 8, month: "8月"},
            {id: 9, month: "9月"},
            {id: 10, month: "10月"},
            {id: 11, month: "11月"},
            {id: 12, month: "12月"}
        ],
        raiders:[
        {
            father_id: 1,
            id: 11,
            name: "香港",
            src: require("../assets/now_raiders11.jpeg")
        },
        {
            father_id: 1,
            id: 12,
            name: "三亚",
            src: require("../assets/now_raiders12.jpeg")
        },
        {
            father_id: 1,
            id: 13,
            name: "清迈",
            src: require("../assets/now_raiders13.jpeg")
        },
        {
            father_id: 1,
            id: 14,
            name: "广州",
            src: require("../assets/now_raiders14.jpeg")
        },
        {
            father_id: 1,
            id: 15,
            name: "新加坡",
            src: require("../assets/now_raiders15.jpeg")
        },
        {
            father_id: 1,
            id: 16,
            name: "哈尔滨",
            src: require("../assets/now_raiders16.jpeg")
        },
        {
            father_id: 1,
            id: 17,
            name: "更多 >",             
            src: require("../assets/now_raiders17.jpeg"),
        },
        {
            father_id: 2,
            id: 21,
            name: "普吉岛",             
            src: require("../assets/now_raiders21.jpeg"),
        },
        {
            father_id: 2,
            id: 22,
            name: "南京",             
            src: require("../assets/now_raiders22.jpeg"),
        },
        {
            father_id: 2,
            id: 23,
            name: "昆明",             
            src: require("../assets/now_raiders23.jpeg")
        },
        {
            father_id: 2,
            id: 24,
            name: "芽庄",             
            src: require("../assets/now_raiders24.jpeg")
        },
        {
            father_id: 2,
            id: 25,
            name: "新西兰",             
            src: require("../assets/now_raiders25.jpeg")
        },
        {
            father_id: 2,
            id: 26,
            name: "长滩岛",             
            src: require("../assets/now_raiders26.jpeg")
        },
        {
            father_id: 2,
            id: 27,
            name: "更多 >",             
            src: require("../assets/now_raiders27.jpeg")
        },
        {
            father_id: 3,
            id: 31,
            name: "日本",             
            src: require("../assets/now_raiders31.jpeg")
        },
        {
            father_id: 3,
            id: 32,
            name: "西安",             
            src: require("../assets/now_raiders32.jpeg")
        },
        {
            father_id: 3,
            id: 33,
            name: "重庆",             
            src: require("../assets/now_raiders33.jpeg")
        },
        {
            father_id: 3,
            id: 34,
            name: "大阪",             
            src: require("../assets/now_raiders34.jpeg")
        },
        {
            father_id: 3,
            id: 35,
            name: "杭州",             
            src: require("../assets/now_raiders35.jpeg")
        },
        {
            father_id: 3,
            id: 36,
            name: "台北",             
            src: require("../assets/now_raiders36.jpeg")
        },
        {
            father_id: 3,
            id: 37,
            name: "更多 >",             
            src: require("../assets/now_raiders37.jpeg")
        },
        {
            father_id: 4,
            id: 41,
            name: "云南",             
            src: require("../assets/now_raiders41.jpeg")
        },
        {
            father_id: 4,
            id: 42,
            name: "曼谷",             
            src: require("../assets/now_raiders42.jpeg")
        },
        {
            father_id: 4,
            id: 43,
            name: "大理",             
            src: require("../assets/now_raiders43.jpeg")
        },
        {
            father_id: 4,
            id: 44,
            name: "东京",             
            src: require("../assets/now_raiders44.jpeg")
        },
        {
            father_id: 4,
            id: 45,
            name: "澳门",             
            src: require("../assets/now_raiders45.jpeg")
        },
        {
            father_id: 4,
            id: 46,
            name: "新疆",             
            src: require("../assets/now_raiders46.jpeg")
        },
        {
            father_id: 4,
            id: 47,
            name: "更多 >",             
            src: require("../assets/now_raiders47.jpeg")
        },
        {
            father_id: 5,
            id: 51,
            name: "厦门",             
            src: require("../assets/now_raiders51.jpeg")
        },
        {
            father_id: 5,
            id: 52,
            name: "美国",             
            src: require("../assets/now_raiders52.jpeg")
        },
        {
            father_id: 5,
            id: 53,
            name: "青岛",             
            src: require("../assets/now_raiders53.jpeg")
        },
        {
            father_id: 5,
            id: 54,
            name: "张家界",             
            src: require("../assets/now_raiders54.jpeg")
        },
        {
            father_id: 5,
            id: 55,
            name: "拉萨",             
            src: require("../assets/now_raiders55.jpeg")
        },
        {
            father_id: 5,
            id: 56,
            name: "九寨沟",             
            src: require("../assets/now_raiders56.jpeg")
        },
        {
            father_id: 5,
            id: 57,
            name: "更多 >",             
            src: require("../assets/now_raiders57.jpeg")
        },
        {
            father_id: 6,
            id: 61,
            name: "台湾",             
            src: require("../assets/now_raiders61.jpeg")
        },
        {
            father_id: 6,
            id: 62,
            name: "青海",             
            src: require("../assets/now_raiders62.jpeg")
        },
        {
            father_id: 6,
            id: 63,
            name: "黑龙江",             
            src: require("../assets/now_raiders63.jpeg")
        },
        {
            father_id: 6,
            id: 64,
            name: "吉隆坡",             
            src: require("../assets/now_raiders64.jpeg")
        },
        {
            father_id: 6,
            id: 65,
            name: "北海道",             
            src: require("../assets/now_raiders65.jpeg")
        },
        {
            father_id: 6,
            id: 66,
            name: "青海湖",             
            src: require("../assets/now_raiders66.jpeg")
        },
        {
            father_id: 6,
            id: 67,
            name: "更多 >",             
            src: require("../assets/now_raiders67.jpeg")
        },
        {
            father_id: 7,
            id: 71,
            name: "西藏",             
            src: require("../assets/now_raiders71.jpeg")
        },
        {
            father_id: 7,
            id: 72,
            name: "内蒙古",             
            src: require("../assets/now_raiders72.jpeg")
        },
        {
            father_id: 7,
            id: 73,
            name: "大连",             
            src: require("../assets/now_raiders73.jpeg")
        },
        {
            father_id: 7,
            id: 74,
            name: "意大利",             
            src: require("../assets/now_raiders74.jpeg")
        },
        {
            father_id: 7,
            id: 75,
            name: "亚庇",             
            src: require("../assets/now_raiders75.jpeg")
        },
        {
            father_id: 7,
            id: 76,
            name: "凤凰古镇",             
            src: require("../assets/now_raiders76.jpeg")
        },
        {
            father_id: 7,
            id: 77,
            name: "更多 >",             
            src: require("../assets/now_raiders77.jpeg")
        },
        {
            father_id: 8,
            id: 81,
            name: "黄山",             
            src: require("../assets/now_raiders81.jpeg")
        },
        {
            father_id: 8,
            id: 82,
            name: "斯里兰卡",             
            src: require("../assets/now_raiders82.jpeg")
        },
        {
            father_id: 8,
            id: 83,
            name: "长白山",             
            src: require("../assets/now_raiders83.jpeg")
        },
        {
            father_id: 8,
            id: 84,
            name: "呼伦贝尔",             
            src: require("../assets/now_raiders84.jpeg")
        },
        {
            father_id: 8,
            id: 85,
            name: "俄罗斯",             
            src: require("../assets/now_raiders85.jpeg")
        },
        {
            father_id: 8,
            id: 86,
            name: "敦煌",             
            src: require("../assets/now_raiders86.jpeg")
        },
        {
            father_id: 8,
            id: 87,
            name: "更多 >",             
            src: require("../assets/now_raiders87.jpeg")
        },
        {
            father_id: 9,
            id: 91,
            name: "上海",             
            src: require("../assets/now_raiders91.jpeg")
        },
        {
            father_id: 9,
            id: 92,
            name: "桂林",             
            src: require("../assets/now_raiders92.jpeg")
        },
        {
            father_id: 9,
            id: 93,
            name: "长沙",             
            src: require("../assets/now_raiders93.jpeg")
        },
        {
            father_id: 9,
            id: 94,
            name: "土耳其",             
            src: require("../assets/now_raiders94.jpeg")
        },
        {
            father_id: 9,
            id: 95,
            name: "阳朔",             
            src: require("../assets/now_raiders95.jpeg")
        },
        {
            father_id: 9,
            id: 96,
            name: "西塘",             
            src: require("../assets/now_raiders96.jpeg")
        },
        {
            father_id: 9,
            id: 97,
            name: "更多 >",             
            src: require("../assets/now_raiders97.jpeg")
        },
        {
            father_id: 10,
            id: 101,
            name: "澳大利亚",             
            src: require("../assets/now_raiders101.jpeg")
        },
        {
            father_id: 10,
            id: 102,
            name: "珠海",             
            src: require("../assets/now_raiders102.jpeg")
        },
        {
            father_id: 10,
            id: 103,
            name: "香格里拉",             
            src: require("../assets/now_raiders103.jpeg")
        },
        {
            father_id: 10,
            id: 104,
            name: "垦丁",             
            src: require("../assets/now_raiders104.jpeg")
        },
        {
            father_id: 10,
            id: 105,
            name: "西班牙",             
            src: require("../assets/now_raiders105.jpeg")
        },
        {
            father_id: 10,
            id: 106,
            name: "稻城",             
            src: require("../assets/now_raiders106.jpeg")
        },
        {
            father_id: 10,
            id: 107,
            name: "更多 >",             
            src: require("../assets/now_raiders107.jpeg")
        },
        {
            father_id: 11,
            id: 111,
            name: "北京",             
            src: require("../assets/now_raiders111.jpeg")
        },
        {
            father_id: 11,
            id: 112,
            name: "柬埔寨",             
            src: require("../assets/now_raiders112.jpeg")
        },
        {
            father_id: 11,
            id: 113,
            name: "甲米",             
            src: require("../assets/now_raiders113.jpeg")
        },
        {
            father_id: 11,
            id: 114,
            name: "乌镇",             
            src: require("../assets/now_raiders114.jpeg")
        },
        {
            father_id: 11,
            id: 115,
            name: "涠洲岛",             
            src: require("../assets/now_raiders115.jpeg")
        },
        {
            father_id: 11,
            id: 116,
            name: "济南",             
            src: require("../assets/now_raiders116.jpeg")
        },
        {
            father_id: 11,
            id: 117,
            name: "更多 >",             
            src: require("../assets/now_raiders117.jpeg")
        },
        {
            father_id: 12,
            id: 121,
            name: "深圳",             
            src: require("../assets/now_raiders121.jpeg")
        },
        {
            father_id: 12,
            id: 122,
            name: "苏梅岛",             
            src: require("../assets/now_raiders122.jpeg")
        },
        {
            father_id: 12,
            id: 123,
            name: "迪拜",             
            src: require("../assets/now_raiders123.jpeg")
        },
        {
            father_id: 12,
            id: 124,
            name: "毛里求斯",             
            src: require("../assets/now_raiders124.jpeg")
        },
        {
            father_id: 12,
            id: 125,
            name: "雪乡",             
            src: require("../assets/now_raiders125.jpeg")
        },
        {
            father_id: 12,
            id: 126,
            name: "漠河",             
            src: require("../assets/now_raiders126.jpeg")
        },
        {
            father_id: 12,
            id: 127,
            name: "更多 >",             
            src: require("../assets/now_raiders127.jpeg")
        }
      ]
    }
  },
  methods: {
    set_now_month(key) {
        this.now_month = key
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