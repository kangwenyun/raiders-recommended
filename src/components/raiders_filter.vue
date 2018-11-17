<template>
  <div class="raiders_filter">
    <div class="tn-dropdown-pop">
        <a class="close" href="javascript:void(0);" @click="hide">×</a>
        <div class="section">
            <div class="label">目的地</div>
            <div class="section-cont">
                <div class="mui-search">
                    <input v-model="place" class="mui-search-inp" type="text" placeholder="输入你想查看的目的地">
                </div>
            </div>
            <div class="hot-place">
              <el-button v-model="place_id" style="display: none"></el-button>
              <a href="javascript:void(0);" class="place"
                :class="on && place_id == item.id ? 'on' : ' '"
                v-for="item in places" :key="item.id"
                @click="set_place(item.id)">{{ item.place }}</a>
            </div>
        </div>
        <div class="section">
          <div class="label">兴趣</div>
          <div class="section-cont" v-for="item in data" 
            :class="item.id%2==1 ? 'to-right':' '"
            :key="item.id" @click="set_place(item.id)">
            <div class="left">
              <a href="javascript:void(0);">
                  <img :src="item.img_url" href="javascript:void(0);"/>
              </a>
            </div>
            <div class="right">
                <dl>
                    <dt>
                        <a href="javascript:void(0);">{{ item.title }}</a>
                    </dt>
                    <dd>
                        <a href="javascript:void(0);">{{ item.abstract }}</a>
                    </dd>
                </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  // place_id为0代表输入框，1-8代表目的地选择，9-16代表星期
export default {
  name: 'raiders_filter',
  // props: ['data'],
  data() {
    return {
      place:"",
      on: false,
      place_id: -1,
      places:[
        {id: 1, place: "斯里兰卡"},
        {id: 2, place: "济州岛"},
        {id: 3, place: "香港"},
        {id: 4, place: "北京"},
        {id: 5, place: "云南"},
        {id: 6, place: "泰国"},
        {id: 7, place: "青海湖"},
        {id: 8, place: "日本"},
      ],
      data:[
        {
          id: 9,
          img_url: require('../assets/interest-2.jpeg'),
          title: "带着对象",
          abstract: "去虐狗",
        },
        {
          id: 10,
          img_url: require('../assets/interest-1.jpeg'),
          title: "吃遍天下",
          abstract: "无敌手",
        },
        {
          id: 11,
          img_url: require('../assets/interest-4.jpeg'),
          title: "带着孩子",
          abstract: "看世界",
        },
        {
          id: 12,
          img_url: require('../assets/interest-3.jpeg'),
          title: "姑娘漂亮",
          abstract: "就是美",
        },
        {
          id: 13,
          img_url: require('../assets/interest-6.jpeg'),
          title: "带着父母",
          abstract: "去远方",
        },
        {
          id: 14,
          img_url: require('../assets/interest-5.jpeg'),
          title: "登山徒步",
          abstract: "用脚走",
        },
        {
          id: 15,
          img_url: require('../assets/interest-8.jpeg'),
          title: "短途周末",
          abstract: "散散心",
        },
        {
          id: 16,
          img_url: require('../assets/interest-7.jpeg'),
          title: "独自一人",
          abstract: "最自由",
        }
      ]
    }
  },
  methods: {
    set_place(id) {
        this.on = true
        this.place_id = id
        var place_arr = [this.place, this.places[0].place, this.places[1].place, 
          this.places[2].place, this.places[3].place, this.places[4].place,
          this.places[5].place, this.places[6].place, this.places[7].place, 
          this.data[0].title, this.data[1].title, this.data[2].title,
          this.data[3].title, this.data[4].title, this.data[5].title, 
          this.data[6].title, this.data[7].title]
        this.$emit('place', place_arr[id])
    },
    hide() {
        this.$emit('place', -1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.raiders_filter{
  z-index: 3;
  float: left;
  position: absolute;
  top: 60px;
  left: 0px;
}

.tn-dropdown-pop {
    position: absolute;
    z-index: 10;
    margin: -21px 0 0 -20px;
    width: 830px;
    padding: 2px 0;
    border: 1px solid #e5e5e5;
    background-color: #fff;
    box-shadow: 0 3px 3px rgba(0,0,0,.15);
}

.close {
    font-family: serif,verdana,Arial,"Lucida Grande","Microsoft Yahei","Hiragino Sans GB","Hiragino Sans GB W3",SimSun,STHeiti;
    width: 16px;
    height: 16px;
    position: absolute;
    right: 6px;
    top: 6px;
    line-height: 14px;
    border: 1px solid #e8e8e8;
    color: #ccc;
    overflow: hidden;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    background: #fff;
}

.section {
    margin: 40px 30px;
}

.label {
    float: left;
    width: 80px;
    text-align: right;
    font-size: 20px;
    color: #333;
    line-height: 24px;
}

.section-cont {
    margin-left: 100px;
}

.mui-search {
    width: 550px;
    position: relative;
    margin-bottom: 15px;
}

.mui-search-inp {
    width: 500px;
    padding: 0 35px 0 15px;
    border: 1px solid #efefef;
    background-color: #efefef;
    height: 45px;
    border-radius: 4px;
    line-height: 45px;
    font-size: 18px;
    vertical-align: top;
}

.hot-place {
    font-size: 14px;
    margin-left: 100px;
}

.hot-place a {
    display: inline-block;
    margin-right: 30px;
    color: #666;
}

.hot-place a:hover {
    color: #ff4d00;
}

.place {
  display: inline;
}

.on {
    background-color: #ff9d00;
    color: #fff !important;
    border-radius: 10px;
    padding: 0 5px;
}

.left{
    float: left;
}

.right{
    margin-left: 130px;
}

.to-right{
  float: right;
}

.to-right .right{
    margin-top: -15px;
}

a{
  font-size: 18px;
}

dt a {
    margin-right: 110px;
    font-size: 20px;
    width: 90px;
}

img{
  width: 130px;
  margin-right: 15px;
}

</style>