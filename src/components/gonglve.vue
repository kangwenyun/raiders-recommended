<template>
  <div class="gonglve">
    <gonglve-select class="rselect"></gonglve-select>
    <div class="carousel">
      <el-carousel :interval="5000" trigger="click">
        <el-carousel-item v-for="item in dataimg" :key="item.index">
          <a :href="item.href"><img :src="item.src"/></a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <gonglve-recommend></gonglve-recommend>
  </div>
</template>

<script>

import gonglve_select from './gonglve_select.vue'
import gonglve_recommend from './gonglve_recommend.vue'

export default {
  name: 'gonglve',
  components: {
    "gonglve-select": gonglve_select,
    "gonglve-recommend": gonglve_recommend
  },
  data() {
    return{
      dataimg: [
        // {  // 右上角的轮播图
        //   index: 1,  //// 从0还是1开始都行
        //   href: 'http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10068.html', //轮播图跳转地址
        //   src: require('../assets/gonglve-1.jpeg')  //轮播图图片地址
        // },
        // {
        //   index: 2,
        //   href: 'http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10068.html',
        //   src: require('../assets/gonglve-2.jpeg'),
        // },
        // {
        //   index: 3,
        //   href: 'http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10068.html',
        //   src: require('../assets/gonglve-3.jpeg'),
        // },
        // {
        //   index: 4,
        //   href: 'http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10068.html',
        //   src: require('../assets/gonglve-4.jpeg'),
        // },
        // {
        //   index: 5,
        //   href: 'http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10068.html',
        //   src: require('../assets/gonglve-5.jpeg'),
        // }
      ],
    };
  },
  created() {
    this.load()
  },
  methods: {
    load(){
      var vm = this
      vm.$http.get(this.GLOBAL.baseUrl + '/gong_lve')
        .then((response) => {
            if (response.body.status){
              var i = 1
              response.body.dataimg.forEach(element => {
                var data = {
                    index: i,
                    href: element.href,
                    src: element.src
                }
                this.dataimg.push(data)
                i += 1
              }, this);
            } else {
                this.$message({
                  message: response.body.msg,
                  type: 'error'
                })
            }
      },(response) => {});
    }
  }
}
</script>

<style scoped>
.gonglve{
  width: 84%;
  margin-left: 5%;
}

.rselect{
  width: 400px;
  position: inherit;
  margin-top: 70px;
  margin-left: 40px;
}

.carousel{
  width: 66%;
  height: 300px;
  margin-left: 380px;
  position: relative;
  top: -235px;
}

.el-carousel {
    height: 100%;
}
</style>