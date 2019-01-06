<template>
  <div class="raiders">
    <raiders-select class="rselect"></raiders-select>
    <div class="carousel">
      <el-carousel :interval="5000" trigger="click">
        <el-carousel-item v-for="item in dataimg" :key="item.index">
          <a :href="item.href"><img :src="item.src"/></a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <recommend-gonglve></recommend-gonglve>
  </div>
</template>

<script>

import raiders_select from './raiders_select.vue'
import recommend_gonglve from './recommend_gonglve.vue'

export default {
  name: 'raiders',
  components: {
    "raiders-select": raiders_select,
    "recommend-gonglve": recommend_gonglve
  },
  data() {
    return{
      dataimg: [{
          index: 1,
          href: 'http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10068.html',
          src: require('../assets/gonglve-1.jpeg')
        },
        {
          index: 2,
          href: 'http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10068.html',
          src: require('../assets/gonglve-2.jpeg'),
        },
        {
          index: 3,
          href: 'http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10068.html',
          src: require('../assets/gonglve-3.jpeg'),
        },
        {
          index: 4,
          href: 'http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10068.html',
          src: require('../assets/gonglve-4.jpeg'),
        },
        {
          index: 5,
          href: 'http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10068.html',
          src: require('../assets/gonglve-5.jpeg'),
        }
      ],
    };
  }
}
</script>

<style scoped>
.raiders{
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