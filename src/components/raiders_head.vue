<template>
  <div class="raiders_head">
    <div class="left">
         <a :href="raiders_url" target="_blank">
            <img :src="img_url" :href="raiders_url" target="_blank"/>
         </a>
    </div>
    <div class="right">
        <dl>
            <dt>
                <a :href="raiders_url" target="_blank">{{ title }}</a>
            </dt>
            <dd>
                <a :href="raiders_url" target="_blank">{{ abstract }}</a>
            </dd>
        </dl>
        <div class="tn-extra">
            <span class="tn-ding">
                {{ ding }}<a class="btn-ding" href="javascript:;" target="_blank" @click="vote"></a>
            </span>
            <span class="tn-place">
                <i></i>
                <a :href="place_url" target="_blank">{{ place }}</a>，by
            </span>
            <span class="tn-user">
                <a :href="user_url" target="_blank">
                    <img :src="user_img"/>
                    {{ user_name }}
                </a>
            </span>
            <span class="tn-nums">
                <i></i>{{ nums }}
            </span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'raiders_head',
  props: ['data'],
  data() {
    return {
        raiders_url: this.data.raiders_url,
        title: this.data.title,
        img_url: this.data.img_url,
        abstract: this.data.abstract,
        ding: this.data.ding,
        place_url: this.data.place_url,
        place: this.data.place,
        user_url: this.data.user_url,
        user_img: this.data.user_img,
        user_name: this.data.user_name,
        nums: this.data.nums
    }
  },
  watch: {
      raiders_url(newVal) {
        this.$emit('update', newVal)
      },
      title(newVal) {
        this.$emit('update', newVal)
      },
      img_url(newVal) {
        this.$emit('update', newVal)
      },
      abstract(newVal) {
        this.$emit('update', newVal)
      },
      ding(newVal) {
        this.$emit('update', newVal)
      },
      place_url(newVal) {
        this.$emit('update', newVal)
      },
      place(newVal) {
        this.$emit('update', newVal)
      },
      user_url(newVal) {
        this.$emit('update', newVal)
      },
      user_img(newVal) {
        this.$emit('update', newVal)
      },
      user_name(newVal) {
        this.$emit('update', newVal)
      },
      nums(newVal) {
        this.$emit('update', newVal)
      }
  },
  methods: {
      vote: function() {
          this.ding = this.ding + 1
          this.$emit('votes', this.ding)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.raiders_head{
    position: relative;
    padding: 10px;
    text-overflow: ellipsis;
}

.raiders_head:hover{
    background: #F3F5F8;
}

a{
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    cursor: pointer;
}

dl{
    height: 100px;
}

dt a{
    color: #000;
    white-space: nowrap;
    margin-right: 100px;
}

dd{
    margin: 0px;
    height: 60px;
}

dd a{
    height: 100%;
    color: #666;
    line-height: 20px;
    font-size: 14px;
}

a:hover{
    color: #ff9d00;
}

.left{
    width: 220px;
    float: left;
}

.right{
    margin-left: 240px;
}

dt{
    height: 26px;
    color: #333;
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 26px;
}

.tn-extra{
    height: 33px;
    overflow: hidden;
    line-height: 33px;
    color: #999;
}

.tn-extra a{
    color: #999;
}

.tn-extra span {
    display: inline-block;
}

.tn-ding {
    float: right;
    color: #ff9d00;
    font-size: 14px;
    text-align: right;
    line-height: 33px;
}

.btn-ding {
    display: inline-block;
    float: right;
    margin-left: 8px;
    width: 38px;
    height: 33px;
    background-position: -60px 0!important;
    overflow: hidden;
    background: url(http://css.mafengwo.net/images/index-sprites9.png) no-repeat;
}

.tn-place {
    margin-right: 5px;
}

.tn-place i {
    float: left;
    margin: 5px 5px 0 0;
    width: 14px;
    height: 16px;
    background-position: 0 -50px!important;
    overflow: hidden;
    background: url(http://css.mafengwo.net/images/index-sprites9.png) no-repeat;
}

.tn-place a {
    display: inline;
}

.tn-user {
    margin-left: 5px;
    margin-right: 10px;
}

.tn-user a{
    color: #ff9d00;
    display: inline;
}

.tn-user img {
    margin-right: 5px;
    width: 16px;
    height: 16px;
    overflow: hidden;
    border-radius: 50%;
    vertical-align: -3px;
}

.tn-nums {
    font-size: 14px;
    margin-left: 40px;
}

.tn-extra .tn-nums i {
    float: left;
    margin: 8px 5px 0 0;
    width: 18px;
    height: 14px;
    background-position: -30px -50px!important;
    background: url(http://css.mafengwo.net/images/index-sprites9.png) no-repeat;
}

</style>