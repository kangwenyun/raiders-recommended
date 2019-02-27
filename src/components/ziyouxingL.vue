<template>
  <div class="ziyouxingL">
    <div class="sideL">
        <div class="l-topic">
          <h1>{{ title }}</h1>
          <div class="sub-tit">
            <span class="time" style="margin-left: 20px;">
              <em>阅读 {{ read_num }}</em>
            </span>
            <span class="time">
              自由行攻略
              <em>{{ time }}</em>
            </span>
          </div>
          <div class="user_list">
            <div class="author">
              <a :href="author_href" target="_blank">
                <img :src="author_src">
              </a>
            </div>
            <div class="info">
              <div class="in-t">
                <a :href="author_href" target="_blank">
                  <span class="name">{{ author_name }}</span>
                </a>
                <span class="rz">
                  <i></i>{{ author_identity }}
                </span>
              </div>
              <p>{{ author_introduction }}</p>
            </div>
            <div class="contact">
              <a :href="author_href" target="_blank">
                <i></i>
                <p>TA的窝</p>
              </a>
            </div>
          </div>
        </div>
        <div class="detail" v-html="gonglveDetail">{{ gonglveDetail }}</div>
        <div class="copyRight">
            <p style="text-align: left;">本文著作权归 @{{ author_name }} 所有，任何形式转载请联系作者。©2019 马蜂窝自由行
                <a>举报</a>
            </p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ziyouxingL',
  data() {
    return{
        title: '',
        time: '',
        read_num: '',
        author_href: '',
        author_src: '',
        author_name: '',
        author_identity: '',
        author_introduction: '',
        gonglveDetail: '',
    };
  },
  created() {
    this.load()
  },
  methods: {
    load() {
      var vm = this
      // '/ziyouxinggonglvel?id=...'
      var tmp = location.href.split('/')[3]
      vm.$http.get(this.GLOBAL.baseUrl + '/' + tmp.split('?')[0] + 'l?' + tmp.split('?')[1], { credentials: true })
              .then((response) => {
                if (response.body.status === 200){
                    var data = response.body.ziyouxingl
                    title = data.title,
                    time = data.time,
                    read_num = data.read_num,
                    author_href = data.author_href,
                    author_src = data.author_src,
                    author_name = data.author_name,
                    author_identity = data.author_identity,
                    author_introduction = data.author_introduction,
                    gonglveDetail = data.gonglveDetail
                } else {
                  this.$message({
                    message: response.body.message,
                    type: 'error'
                  })
                }
      },(response) => {});
    }
  }
}
</script>

<style lang="less" scoped>
.ziyouxingL{

    .sideL {
      width: 680px;
      float: left;

      i {
        background-size: 210px auto;
      }

      .l-topic {
        p {
          line-height: 26px;
        }

        h1 {
          font-size: 30px;
          color: #333;
          line-height: 40px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e5e5e5;
          word-wrap: break-word;
        }

        .sub-tit {
          overflow: hidden;
          color: #333;
          font-size: 14px;
          margin-bottom: 35px;

          .time {
            float: right;
            color: #999;

            em {
              font-style: normal;
              margin-left: 10px;
            }
          }
        }

        .user_list {
          padding: 16px 0 0 0;
          color: #333;
          border: 1px solid #e5e5e5;
          height: 95px;

          .author {
            margin-left: 15px;
            width: 90px;
            height: 90px;
            float: left;
            border-radius: 50%;
            overflow: hidden;

            img {
              height: 90px;
              width: 90px;
            }
          }

          .info {
            width: 440px;
            float: left;
            padding-left: 22px;

            p {
              color: #333;
              font-size: 14px;
              line-height: 20px;
              height: 40px;
              overflow: hidden;
              margin: 6px 0 8px 0;
            }
          }

          .in-t {
            color: #333;
            line-height: 20px;

            a {
              color: #ff9d00;
              display: inline;
            }

            .name {
              font-size: 16px;
            }

            .rz {
              display: inline-block;
              margin-left: 12px;
              padding: 0 5px 0 13px;
              line-height: 14px;
              border: 1px solid #ff9d00;
              color: #f2912e;
              font-size: 12px;
              border-radius: 2px;
              vertical-align: top;
              white-space: nowrap;

              i {
                position: absolute;
                margin: -4px 0 0 -24px;
                display: inline-block;
                width: 22px;
                height: 22px;
                background: url(http://css.mafengwo.net/images/local/list_sprites7.png)
                  no-repeat -100px -40px;
                overflow: hidden;
              }
            }
          }

          .contact {
            width: 110px;
            height: 96px;
            border-left: 1px solid #e5e5e5;
            float: left;
            text-align: center;

            i {
              width: 32px;
              height: 32px;
              background: url(http://css.mafengwo.net/images/local/list_sprites7.png)
                no-repeat 0 -61px;
              display: block;
              margin: 18px auto 0;
            }

            p {
              font-size: 14px;
              padding: 12px 0;
              color: #333;
            }
          }
        }
      }
    }

    .detail {
        margin-top: 20px;
        .p-section {
            font-size: 14px;
            line-height: 26px;
            margin: 13px 0 28px;
            word-break: break-all;
        }
    }

    .copyRight {
        width: 680px;
        padding-top: 45px;
        background: url(http://css.mafengwo.net/images/local/copyright.png) no-repeat center center;
        overflow: hidden;
        margin-top: 20px;

        p {
            background-color: #fff;
            line-height: 20px;
            color: #d1d1d1;
            font-size: 12px;

            a {
                display:inline;
                float: right;
                color: #999;
            }
        }
    }
}
</style>