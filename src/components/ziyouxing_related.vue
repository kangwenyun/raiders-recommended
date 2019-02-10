<template>
  <div class="ziyouxing_related">
    <p class="title">更多{{ location }}攻略</p>
    <a class="pro_more" :href="more_href">查看更多&gt;</a>    
    <ul>
        <li @mouseenter="enter_pic(item.key)" @mouseleave="enter=false" 
        v-for="item in gonglve" :key="item.key">
            <a target="_blank" :title="item.related_title" :href="item.related_href">
                <div class="img">
                    <img :src="item.related_src" alt="">
                </div>
                <div class="info">
                    <h3>{{ item.related_title }}</h3>
                    <div :class="enter && now_item == item.key ? 'sub' : 'no'">
                        <p>{{ item.related_p1 }}</p>                                                    
                        <p>{{ item.related_p2 }}</p>                                                                                                
                    </div>
                </div>
            </a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ziyouxing_related",
  props: ['data'],
  data() {
    return {
      enter: false,
      now_item: 0,
      location: this.data.location,
      more_href: this.data.more_href,
      gonglve: this.data.gonglve,
    //   related_title: this.data.related_title,
    //   related_href: this.data.related_href,
    //   related_src: this.data.related_src,
    //   related_p1: this.data.related_p1,
    //   related_p2: this.data.related_p2,
    };
  },
  methods: {
      enter_pic(key) {
          this.enter=true
          this.now_item = key
      }
  }
};
</script>

<style lang="less" scope>
.ziyouxing_related {
    clear: both;

    .title {
        font-size: 24px;
        color: #333;
        line-height: 55px;
        height: 55px;
    }

    .pro_more {
        float: right;
        font-size: 14px;
        color: #ff9d00;
        margin-top: -55px;
        line-height: 55px;
    }

    ul {
        padding: 0px;
        width: 1050px;

        a {
            color: #666;
        }
    }

    li {
        float: left;
        display: inline;
        width: 300px;
        height: 268px;
        margin: 0 50px 50px 0;
    }

    .img {
        height: 166px;
        width: 300px;
        overflow: hidden;
    }

    .info {
        border: 1px solid #e5e5e5;
        padding: 10px;
        background-color: #fff;
        height: 80px;

        h3 {
            margin: 0;
            font-size: 16px;
            color: #333;
            overflow: hidden;
        }

        .no {
            display:none
        }

        .sub {

            p:before {
                content: '';
                float: left;
                margin: 4px 7px 0 0;
                width: 3px;
                height: 12px;
                background-color: #ff9d00;
            }
        }
    }
}
</style>