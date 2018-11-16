<template>
  <div class="raiders_filter">
    <div class="tn-dropdown-pop">
        <a class="close" href="javascript:void(0);">×</a>
        <div class="section">
            <div class="label">目的地</div>
            <div class="section-cont">
                <div class="mui-search">
                    <input class="mui-search-inp" type="text" placeholder="输入你想查看的目的地">
                </div>
            </div>
            <div class="hot-place">
              <a href="javascript:void(0);">{{ hot_1 }}</a>
              <a href="javascript:void(0);">{{ hot_2 }}</a>
              <a href="javascript:void(0);">{{ hot_3 }}</a>
              <a href="javascript:void(0);">{{ hot_4 }}</a>
              <a href="javascript:void(0);">{{ hot_5 }}</a>
              <a href="javascript:void(0);">{{ hot_6 }}</a>
              <a href="javascript:void(0);">{{ hot_7 }}</a>
              <a href="javascript:void(0);">{{ hot_8 }}</a>
            </div>
        </div>
        <div class="section">
          <div class="label">兴趣</div>
          <div class="section-cont" v-for="item in data">
            <div :class="item.id%2==0 ? 'to-right':' '">
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
    </div>
</template>

<script>
export default {
  name: 'raiders_filter',
  // props: ['data'],
  data() {
    return {
        hot_1: "斯里兰卡",
        hot_2: "济州岛",
        hot_3: "香港",
        hot_4: "北京",
        hot_5: "云南",
        hot_6: "泰国",
        hot_7: "青海湖",
        hot_8: "日本",
        data:[
          {
            id: 0,
            img_url: require('../assets/interest-2.jpeg'),
            title: "带着对象",
            abstract: "去虐狗",
          },
          {
            id: 1,
            img_url: require('../assets/interest-1.jpeg'),
            title: "吃遍天下",
            abstract: "无敌手",
          },
          {
            id: 2,
            img_url: require('../assets/interest-4.jpeg'),
            title: "带着孩子",
            abstract: "看世界",
          },
          {
            id: 3,
            img_url: require('../assets/interest-3.jpeg'),
            title: "姑娘漂亮",
            abstract: "就是美",
          },
          {
            id: 4,
            img_url: require('../assets/interest-6.jpeg'),
            title: "带着父母",
            abstract: "去远方",
          },
          {
            id: 5,
            img_url: require('../assets/interest-5.jpeg'),
            title: "登山徒步",
            abstract: "用脚走",
          },
          {
            id: 6,
            img_url: require('../assets/interest-8.jpeg'),
            title: "短途周末",
            abstract: "散散心",
          },
          {
            id: 7,
            img_url: require('../assets/interest-7.jpeg'),
            title: "独自一人",
            abstract: "最自由",
          }
        ]
    }
  },
  methods: {
    // vote: function() {
    //     this.ding = this.ding + 1
    //     this.$emit('votes', this.ding)
    // }
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
    width: 718px;
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
    width: 56px;
    text-align: right;
    font-size: 16px;
    color: #333;
    line-height: 24px;
}

.section-cont {
    margin-left: 86px;
}

.mui-search {
    width: 400px;
    position: relative;
    margin-bottom: 15px;
}

.mui-search-inp {
    width: 348px;
    padding: 0 35px 0 15px;
    border: 1px solid #efefef;
    background-color: #efefef;
    height: 38px;
    border-radius: 4px;
    line-height: 38px;
    font-size: 14px;
    vertical-align: top;
}

.hot-place {
    font-size: 14px;
    margin-left: 86px;
}

.hot-place a {
    display: inline-block;
    margin-right: 10px;
    color: #666;
}

.left{
    float: left;
}

.right{
    margin-left: 120px;
}

.to-right{
  float: right;
}

.to-right .right{
    margin-top: -15px;
}

img{
  width: 110px;
}

</style>