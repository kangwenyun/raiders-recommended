<template>
  <div class="gonglve_head">
    <a :href="gonglve_url" target="_blank">
        <div class="from">
            <i :class="'icon-' + from_pinyin"></i>来自 <span class="from_detail">{{ from_hanzi }}</span>
        </div>
        <div class="bt-ding">
            <span style="color:#ff9d00"> {{num_zan}} </span> 
            <span> {{ m(from_pinyin)}} </span>
            <i :class=" from_pinyin == 'ziyouxinggonglve' ? 'icon-cart' : 'icon-hand'" @click="vote"></i>
        </div>
        <div class="title">{{ title }}</div>
        <div v-show="from_pinyin != 'ziyouxinggonglve'" style="height:130px">
           <div class="left">
                <img :src="img_url1" :href="gonglve_url" target="_blank"/>
            </div> 
            <div class="right abstract">
                {{ abstract }}
            </div>
        </div>
        <div v-show="from_pinyin == 'ziyouxinggonglve'">
            <div class="abstract">
                {{ abstract }}
            </div>
            <div>
                <img :src="img_url1" :href="gonglve_url" target="_blank"/>
                <img :src="img_url2" :href="gonglve_url" target="_blank" class="img_center"/>
                <img :src="img_url3" :href="gonglve_url" target="_blank"/>
            </div>
        </div>
        <div class="tn-extra">
            <span class="tn-user" v-show="from_pinyin == 'youji'">
                <img :src="user_img"/>{{ user_name }}
            </span>
            <span class="tn-liulan">{{ num_liulan }}
            </span>
            <span class="tn-pinglun" v-show="from_pinyin != 'ziyouxinggonglve'">{{ num_pinglun }}
            </span>
        </div>
    </a>
    <div class="hr"></div>
  </div>
</template>

<script>
export default {
  name: 'gonglve_head',
  props: ['data'],
  data() {
    return {
        from_pinyin: this.data.from_pinyin,
        from_hanzi: this.data.from_hanzi,
        gonglve_url: this.data.gonglve_url,
        num_zan: this.data.num_zan,
        title: this.data.title,
        img_url1: this.data.img_url1,
        img_url2: this.data.img_url2,
        img_url3: this.data.img_url3,
        abstract: this.data.abstract,
        user_img: this.data.user_img,
        user_name: this.data.user_name,
        num_liulan: this.data.num_liulan,
        num_pinglun: this.data.num_pinglun,
    }
  },
  methods: {
      m(key) {
          let res = ''
          switch(key){
            case 'youji':
                res = "蜂蜂顶"
                break
            case 'ziyouxinggonglve':
                res = "蜂蜂体验过"
                break
            case 'guanfangzhanghao':
                res = "蜂蜂喜欢"
                break
            case 'wenda':
                res = "蜂蜂赞"
                break
          }
          return res
      },
      vote() {
          this.num_zan = this.num_zan + 1
          this.$emit('votes', this.num_zan)
      }
  },
  watch: {
      gonglve_url(newVal) {
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
      user_img(newVal) {
        this.$emit('update', newVal)
      },
      user_name(newVal) {
        this.$emit('update', newVal)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gonglve_head{
    position: relative;
    padding: 10px;
    text-overflow: ellipsis;
}

.gonglve_head:hover{
    background: #F3F5F8;
}

.from{
    color: #666;
    margin-bottom: 10px;
}

.from i{
    float: left;
    margin-right: 10px;
    width: 20px;
    height: 20px;
    background: url(http://css.mafengwo.net/images/gonglve/new-gl-icon6.png) no-repeat 0 0;
    overflow: hidden;
}

.icon-wenda {
    background-position: 0 0 !important;
}

.icon-ziyouxinggonglve {
    background-position: 0 -20px !important;
}

.icon-guanfangzhanghao {
    background-position: 0 -60px !important;
}

.icon-youji {
    background-position: 0 -80px !important;
}

.from_detail{
    color: #ff9d00;
}

.bt-ding{
    float: right;
    padding: 0 15px;
    line-height: 30px;
    border: 1px solid #ff9d00;
    border-radius: 15px;
    color: #666;
    margin-top: -30px;
    z-index: 10;
}

.icon-hand{
    display: inline-block;
    margin-left: 10px;
    width: 15px;
    height: 15px;
    background: url(http://css.mafengwo.net/images/gonglve/new-gl-icon6.png) no-repeat -40px -40px;
    overflow: hidden;
    vertical-align: -2px;
}

.icon-cart{
    display: inline-block;
    margin-left: 5px;
    width: 15px;
    height: 18px;
    background: url(http://css.mafengwo.net/images/gonglve/new-gl-icon6.png) no-repeat -20px -116px;
    overflow: hidden;
    vertical-align: -5px;
}

.title{
    margin-bottom: 15px;
    font-size: 20px;
    color: #333;
}

.title:hover{
    color: #ff9d00;
}

.left{
    width: 220px;
    float: left;
}

.right{
    margin-left: 240px;
    padding-top: 15px;
}

.abstract{
    color: #666;
    margin-bottom: 10px;
}

.img_center{
    margin: 0 15px;
}
/* 
.right:hover{
    color: #666;
} */

.tn-extra{
    height: 33px;
    overflow: hidden;
    line-height: 33px;
    color: #999;
    float: right;
    margin-top: 5px;
}


.tn-extra span {
    display: inline-block;
}

.tn-extra i {
    float: left;
    margin: 8px 5px 0 0;
    width: 18px;
    height: 14px;
    background-position: -30px -50px!important;
    background: url(http://css.mafengwo.net/images/index-sprites9.png) no-repeat;
}

.tn-user {
    margin-left: 5px;
    margin-right: 10px;
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

.tn-liulan{
    color: #999;
}

.tn-pinglun{
    margin-left: 10px;
}

.hr {
    margin-top: 10px;
    height: 1px;
    background-color: #e5e5e5;
    overflow: hidden;
}
</style>