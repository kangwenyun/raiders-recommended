<template>
  <div class="wenda_answer">
      <div class="answer-info">
        <div class="user-bar">
          <a class="avatar" :href="user_href" target="_blank">
            <img :src="user_img" class="photo">
          </a>
          <a class="name" :href="user_href" target="_blank">{{ user_name }}</a>
          <a class="level" href="javascript:;" target="_blank">{{ user_level}}</a>
          <a class="guide" href="/qa/expert_apply.php?type=1" target="_blank" v-show="guide">指路人</a>
        </div>
        <div class="gold" v-show="gold">
            <i></i>
            <a href="http://www.mafengwo.cn/g/i/3136909.html" target="_blank">金牌回答</a>
        </div>
      </div>
      <div v-html="answer">
          {{ answer }}
      </div>
  </div>
</template>

<script>
export default {
  name: "wenda_answer",
  props: ["data"],
  data() {
    return {
        user_href: this.data.user_href,
        user_img: this.data.user_img,
        user_name: this.data.user_name,
        user_level: this.data.user_level,
        guide: this.data.guide,
        gold: this.data.gold,
        answer: this.data.answer
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.wenda_answer {
    word-break: break-all;
    font-size: 16px;
    color: #444;
    line-height: 32px;

    a {
        color: #ff9d00;
        text-decoration: none;
        cursor: pointer;
    }

    .answer-info {
        height: 48px;
        margin-bottom: 12px;
        display: table;
        width: 100%;
        vertical-align: middle;
    }

    .user-bar {
        float: none;
        height: 48px;
        padding-left: 58px;
        line-height: 100%;
        display: table-cell;
        vertical-align: middle;
        position: relative;

        a {
            display: inline;
        }

        .avatar {
            margin-right: 10px;
            display: inline-block;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            overflow: hidden;
            vertical-align: middle;
            position: absolute;
            left: 0;
            top: 0;
        }

        .photo {
            width: 48px;
            height: 48px;
        }

        .name {
            margin-right: 5px;
            font-size: 16px;
            font-weight: 600;
        }

        .level {
            font-size: 12px;
            color: #ef523d;
            margin-right: 5px;
        }

        .guide {
            background-position: 4px -466px !important;
            background-color: #70c2b9 !important;
        }

        a.guide {
            border-color: #4fb3a8;
            padding: 0 4px 0 25px;
            border-width: 1px;
            border-style: solid;
            border-radius: 10px;
            font-size: 12px;
            font-weight: 600;
            color: #fff;
            background: url(http://css.mafengwo.net/images/mfw-ask/mfwask-2016sprite_v6.png) no-repeat;
        }
    }

    .gold {
        width: 100px;
        display: inline-block;
        border: 2px solid #fdb92c;
        background-color: #fdb92c;
        height: 26px;
        border-radius: 15px;
        color: #fff;
        line-height: 26px;
        float: right;
        margin: 9px 0;

        i {
            margin-right: 6px;
            display: block;
            float: left;
            width: 26px;
            height: 26px;
            background: url(http://css.mafengwo.net/images/wenda/mfwask-2016sprite_v9.png) no-repeat;
        }

        i {
            background-position: 0 -426px;
            background-color: #fff;
            border-radius: 13px;
        }

        a {
            color: #fff;
            font-weight: 600;
        }
    }

    img {
        border: 0;
        vertical-align: middle;
    }
}
</style>