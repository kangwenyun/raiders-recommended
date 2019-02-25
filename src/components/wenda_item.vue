<template>
  <div class="wenda_item">
    <div class="title">
      <a :href="wenda_url" target="_blank">{{ title }}</a>
    </div>
    <div class="container">
      <div class="avatar">
        <a :href="user_href" target="_blank">
          <img :src="user_img">
        </a>
      </div>
      <div class="user-info">
        <a class="name" :href="user_href" target="_blank">好吃不胖</a>
        <a class="level" href="javascript:;" target="_blank">LV.18</a>
      </div>
      <div class="identity" v-show="guide">
        <a class="guide" href="http://www.mafengwo.cn/qa/expert_apply.php?type=1" target="_blank">指路人</a>
      </div>
      <div class="desc">
        <a :href="wenda_url" target="_blank" style="color: #666;">
          <img :src="img_url" v-show="type=='hot'">
          <p>{{ abstract }}</p>
        </a>
      </div>
      <el-tag v-for="tag in tags" :key="tag.name" type="info" class="tags">
        <a :href="tag.href" target="_blank">{{ tag.name }}</a>
      </el-tag>
      <div class="operate">
        <div class="zan">
          <i></i>
          {{ zan_num }}
        </div>
        <div class="mdd">
          <a :href="mdd_href" target="_blank">
            <i></i>
            {{ mdd }}
          </a>
        </div>
        <div class="cate-share">
          <a>分享</a>
        </div>
        <a :href="wenda_url" target="_blank">
          <span class="reply">评论 ({{ comment_num}})</span>
        </a>
        <span class="date">发布于{{ date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "wenda_item",
  props: ["data"],
  data() {
    return {
      wenda_url: this.data.wenda_url,
      type: this.data.type,
      title: this.data.title,
      user_href: this.data.user_href, // 头像里a标签的href
      user_img: this.data.user_img, // 用户头像图片地址
      guide: this.data.guide,
      img_url: this.data.img_url,
      abstract: this.data.abstract,
      tags: this.data.tags,
      zan_num: this.data.zan_num,
      mdd_href: this.data.mdd_href,
      mdd: this.data.mdd,
      comment_num: this.data.comment_num,
      date: this.data.date
    };
  },
  methods: {
    vote: function() {
      this.zan_num = this.zan_num + 1;
    }
  }
};
</script>
<style lang="less" scoped>
.wenda_item {
  padding: 15px 0;
  border-bottom: 1px solid #e5e5e5;
  cursor: pointer;

  .title {
    font-size: 18px;
    line-height: 30px;
    color: #333;
    margin-bottom: 12px;

    a {
      color: #333;
      font-weight: 600;
    }

    a:hover {
      color: #f3a304;
    }
  }

  .container {
    padding-left: 60px;
    position: relative;
  }

  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid #e5e5e5;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .user-info {
    width: 100%;
    height: 18px;
    line-height: 18px;
    margin-bottom: 6px;

    .name {
      margin-right: 5px;
      display: inline;
      color: #ff9d00;
      font-weight: 600;
    }

    .level {
      color: #d20000 !important;
      font-size: 10px;
      font-family: Verdana;
      font-weight: bold;
      display: inline;
    }
  }

  .identity {
    width: 100%;
    height: 20px;
    margin-top: 9px;
    margin-bottom: 12px;

    a {
        display: inline-block;
        height: 18px;
        margin-right: 4px;
        padding: 0 4px 0 20px;
        border-width: 1px;
        border-style: solid;
        border-radius: 10px;
        font-size: 12px;
        line-height: 18px;
        color: #fff;
        position: relative;
        background: url(http://css.mafengwo.net/images/mfw-ask/mfwask-2016sprite_v6.png) no-repeat;
    }

    a.guide {
        border-color: #4fb3a8;
        background-color: #70c2b9;
        background-position: 4px -464px;
        padding-left: 26px;
    }
  }

  .desc {
    line-height: 24px;
    color: #666;

    img {
      width: 150px;
      height: 100px;
      float: left;
      margin-right: 16px;
    }

    p {
      padding-top: 2px;
      overflow: hidden;
    }
  }

  .tags {
    height: 22px;
    margin-top: 14px;
    margin-right: 10px;

    a {
      display: block;
      float: left;
      padding: 0 15px;
      font-size: 12px;
      line-height: 22px;
      color: #666;
      white-space: nowrap;
    }
  }

  .el-tag {
    background-color: #f6f6f6;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    padding: 0 0px;

    a:hover {
      background-color: #ff9d00;
      color: #fff !important;
      border-radius: 10px;
      text-decoration: none;
    }
  }

  .operate {
    width: 100%;
    height: 16px;
    margin-top: 16px;
    position: relative;
    font-size: 12px;
    line-height: 16px;
    text-align: right;
    color: #999;

    a {
      color: #999;
      display: inline;
      font-size: 12px;
    }

    .zan {
      float: left;

      i {
        float: left;
        display: inline-block;
        width: 30px;
        height: 26px;
        background: url(http://css.mafengwo.net/images/wenda/like30x26.png)
          no-repeat;
        overflow: hidden;
        margin-right: 9px;
        margin-top: -5px;
        margin-bottom: -5px;
      }
    }

    .mdd {
      display: inline-block;
      padding-right: 7px;
      color: #ff9d00;

      a {
        color: #ff9d00;
      }

      i {
        width: 10px;
        height: 12px;
        background: url(http://css.mafengwo.net/images/wenda/icon-mdd.png)
          no-repeat;
        display: inline-block;
        margin-right: 6px;
        vertical-align: middle;
        position: relative;
        top: -1px;
      }
    }

    .cate-share {
      display: inline-block;
      padding: 0 10px;
      position: relative;
      border-left: 1px solid #e5e5e5;
    }

    span {
      display: inline-block;
      border-left: 1px solid #e5e5e5;
      padding: 0 7px 0 10px;
    }

    .date {
      padding-right: 0;
    }
  }
}
</style>