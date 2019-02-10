<template>
  <div class="ziyouxingR">
    <div class="sideR">
        <div class="side_inner">
          <div class="bar-sar">
            <a href="javascript:;" title="评论">
              <i class="i01"></i>
              <em>{{ comment_num }}</em>
            </a>
            <div>
              <a href="javascript:;" title="收藏">
                <i class="i02"></i>
                <em>{{ collect_num }}</em>
              </a>
            </div>
            <div>
              <a href="javascript:;" title="分享">
                <i class="i03"></i>
                <em>{{ share_num }}</em>
              </a>
            </div>
            <a href="javascript:;" title="点赞">
              <i class="i04"></i>
              <em>{{ zan_num }}</em>
            </a>
          </div>
          <p class="title">攻略目录</p>
          <div style="height: 710px;">
            <div class="sideR_con">
              <div class="section" v-for="item in catalogue" :key="item.key">
                <div :class="item.key < 5 ? 'top' : 'sub-list'">
                    <div :class="now_title === item.key ? 'on' : ''">
                        <i class></i>
                        <a href="javascript:;">{{ item.title }}</a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ziyouxingR',
  props: ['data'],
  data() {
    return{
        comment_num: this.data.comment_num,
        collect_num: this.data.collect_num,
        share_num: this.data.share_num,
        zan_num: this.data.zan_num,
        catalogue: this.data.catalogue,
        now_title: this.data.now_title,
    };
  },
  methods:{
  }
}
</script>

<style lang="less" scoped>
.ziyouxingR {
    .sideR {
      width: 275px;
      float: right;
      padding-top: 5px;

      .side_inner {
        background-color: #fff;
      }

      .bar-sar {
        margin-bottom: 10px;

        a {
          float: left;
          display: block;
          width: 68px;
          height: 70px;
          text-align: center;
          text-decoration: none;
          color: #333;

          i {
            display: block;
            width: 25px;
            height: 24px;
            margin: 0 auto 10px auto;
            background: url(http://css.mafengwo.net/images/local/list_sprites01.png?a=1)
              no-repeat;
          }

          .i01 {
            background-position: 0 0;
          }

          .i02 {
            background-position: -68px 0;
          }

          .i03 {
            background-position: -136px 0;
          }

          .i04 {
            background-position: -204px 0;
          }

          em {
            font-style: normal;
            font-size: 16px;
            color: #333;
          }
        }
      }

      .title {
        font-size: 18px;
        padding-bottom: 5px;
        color: #333;
        width: 275px;
        margin: 25px 0 10px;
      }

      .section {
        position: relative;
        margin-bottom: 20px;

        .top {
          font-size: 16px;
          color: #333;

          .on {
              background-image: url(/images/local/list_sprites4@2x.png);
              background-size: 210px auto;

              i {
                background-position: -30px -25px;
                left: -23px;
              }
          }

          i {
            left: -26px;
            width: 16px;
            height: 12px;
            background: url(http://css.mafengwo.net/images/local/list_sprites7.png) no-repeat -46px -25px;
            position: absolute;
            top: 5px;
          }

          a {
            color: #333;
          }
        }

        .sub-list {
            line-height: 18px;

            a {
                margin-top: 15px;
                display: block;
                color: #666;
            }
        }
      }
    }

    .sideR_con {
        padding-left: 17px;
        border-left: 1px solid #d4d4d4;
        width: 235px;
    }
}
</style>