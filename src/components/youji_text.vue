<template>
  <div class="youji_text">
    <div class="travel_directory">
        <div class="tarvel_dir_list">
            <ul>
                <li class="time">出发时间<span>/</span>{{ time }}<i></i></li>
                <li class="day">出行天数<span>/</span>{{ day }} 天</li>
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
  props: ['data'],
  data() {
    return{
        time: this.data.time,
        day: this.data.day,
        people: this.data.people,
        cost: this.data.cost
    };
  },
  methods:{
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