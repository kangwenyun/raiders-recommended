<template>
  <div class="home">
    <el-carousel :interval="5000" arrow="always" class="carousel">
      <el-carousel-item v-for="item in dataimg" :key="item.index">
        <img :src="item.src" class="header_img"/>
        <p class="txt_same txt1_pos">{{ item.txt1 }}</p><p class="txt_same txt2_pos"> {{ item.txt2 }}</p>
        <p class="txt_same txt3_pos">{{ item.txt3 }}</p>
        <el-form :inline="true" :model="search" class="txt_same form_pos">
          <el-radio-group v-model="search.radio">
            <el-radio label="1">全部</el-radio>
            <el-radio label="2">目的地</el-radio>
            <el-radio label="3">旅行攻略</el-radio>
          </el-radio-group>
          <div class="get_res">
            <el-input v-model="search.input" placeholder="搜目的地/旅行攻略"></el-input>
            <el-button icon="el-icon-search"></el-button>
          </div>
        </el-form>
      </el-carousel-item>
    </el-carousel>
    
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      dataimg: [{
          index: 1,
          src: require('../assets/1.jpeg'),
          txt1: '14',
          txt2: ' /Nov.2018',
          txt3: '5k走出国门！铁路爱好者的中俄蒙铁路大回环'
        },
        {
          index: 2,
          src: require('../assets/2.jpeg'),
          txt1: '13',
          txt2: ' /Nov.2018',
          txt3: '迎面吹来南极的风，那些独行在塔州的小时光'
        },
        {
          index: 3,
          src: require('../assets/3.jpeg'),
          txt1: '12',
          txt2: ' /Nov.2018',
          txt3: '黔东南6日漫游，这里是大山深处的世外桃源'
        },
        {
          index: 4,
          src: require('../assets/4.jpeg'),
          txt1: '11',
          txt2: ' /Nov.2018',
          txt3: '一场惊动大使馆和公司老板的旅行，徒步小白暴走尼泊尔'
        }
      ],
      search: {
        radio: '1',
        input: ''
      },
      status: 'hot'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
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
  margin-top: -10px;
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
  left: 100px;
  top: 20px;
  font-size: 30px;
}

.txt2_pos{
  position: absolute;
  left: 136px;
  top: 40px;
  font-size: 20px;
}

.txt3_pos{
  position: absolute;
  left: 100px;
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
/*
.form_pos .el-radio__inner{
  background: #ff9d00 !important;
  border-color: #ff9d00 !important;
  border: 1px solid #ff9d00 !important;
}*/

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
}

</style>
