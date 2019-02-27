<template>
  <div class="youji_text">
    <div class="travel_directory">
        <div class="tarvel_dir_list">
            <ul>
                <li class="time">出发时间<span>/</span>{{ time }}<i></i></li>
                <li class="day">出行天数<span>/</span>{{ day }}</li>
                <li class="people">人物<span>/</span>{{ people }}</li>
                <li class="cost">人均费用<span>/</span>{{ cost }}</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'youji_text',
  data() {
    return{
        time: '',
        day: '',
        people: '',
        cost: ''
    };
  },
  created() {
    this.load()
  },
  methods: {
    load(){
      var vm = this
      // 接口： /youji/id=
      var tmp = location.href.split('/')[3]
      vm.$http.get(this.GLOBAL.baseUrl + '/youji_text?' + tmp.split('?')[1], { credentials: true })
        .then((response) => {
          if (response.body.status === 200){
              var text = response.body.contentText
              time = text.time,  //出发时间
              day = text.day, //出行天数
              people = text.people,  //人物
              cost = text.cost //人均费用
          } else {
            this.$message({
              message: response.body.message,
              type: 'error'
            })
          }
      },(response) => {});
    },
  }
}
</script>

<style lang="less" scope>
.youji_text {
    width: 680px;
    position: static;
}

.travel_directory{
    border: 1px dashed #d7d7d7;
    border-radius: 4px;
    height: 120px;
    margin-top: 40px;
    margin-left: 20px;
}

.tarvel_dir_list{
    margin-left: 20px;
}

.tarvel_dir_list ul {
    width: 100%;
}

.tarvel_dir_list ul li.time {
    background-position: -22px 0;
}

.tarvel_dir_list ul li{
  background: url(http://css.mafengwo.net/images/post/new_notes/151204sprite2.png) no-repeat;
  background-size: 44px 88px;
}

.tarvel_dir_list ul li{
    width: 170px;
    margin-top: 18px;
    float: left;
    display: inline;
    font-size: 14px;
    height: 22px;
    line-height: 22px;
    color: #666;
    padding-left: 5%;
    background: url(http://css.mafengwo.net/images/post/new_notes/151204sprite1.png) no-repeat;
    cursor: pointer;
}

.tarvel_dir_list ul li span{
    color: #ff9d00;
    margin: 0 5px;
}

.tarvel_dir_list ul li.day{
  background-position: -22px -22px;
}

.tarvel_dir_list ul li.people{
  background-position: -22px -44px;
}

.tarvel_dir_list ul li.cost{
  background-position: -22px -66px;
}
</style>