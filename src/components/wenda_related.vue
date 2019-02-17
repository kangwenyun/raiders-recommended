<template>
  <div class="wenda_related">
    <div class="notes_activity">
      <el-carousel class="activity">
        <el-carousel-item v-for="item in activity" :key="item.key">
            <a :href="item.href"
            target="_blank"
            :title="item.title">
                <img :src="item.src">
                <h3>{{ item.title }}</h3>
            </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="related">
      <div class="related_title">相关问题</div>
        <ul>
          <li v-for="item in related_questions" :key="item.key">
            <a :href="item.href" 
               :titile="item.title">{{ item.title }}
            </a> 
            <span>{{ item.answer }}</span>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "wenda_related",
  data() {
    return {
      activity: [
        {
            key: 11,
            href: 'http://www.mafengwo.cn/i/11229838.html',
            src: 'http://p2-q.mafengwo.net/s12/M00/BA/6B/wKgED1v3qo6AZ_5BAADecMeJWIo38.jpeg',
        },
        {
            key: 12,
            href: 'http://www.mafengwo.cn/wenda/detail-12948661-13121180.html',
            src: 'http://n4-q.mafengwo.net/s12/M00/AD/19/wKgED1u7Dz2Af3AGAADIIpXjeuo88.jpeg'
        },
        {
            key: 13,
            href: '',
            src: ''
        },
      ],
      related_questions: [
        {
            key: 21,
            href: '/wenda/detail-602133.html',
            title: '长沙坡子街美食一条街好吃吗？长沙坡子街美食一条街味道如何？',
            answer: '2 回答'
        },
        {
            key: 22,
            href: '/wenda/detail-602133.html',
            title: '长沙坡子街美食一条街菜怎么样',
            answer: '1 回答'
        },
        {
            key: 23,
            href: '/wenda/detail-602133.html',
            title: '去长沙坡子街，有什么值得推荐的美食？',
            answer: '40 回答'
        },
      ]
    };
  },
  created() {
    // this.load()
  },
  methods: {
    load() {
      var vm = this
      vm.$http.get(this.GLOBAL.baseUrl + '/wenda_related?' + location.href.split('?')[1], { credentials: true })
              .then((response) => {
                if (response.body.status === 200){
                  response.body.activity.forEach(element => {
                    var data = {
                      key: element.key, 
                      href: element.href,
                      src: element.src,
                    }
                    this.activity.push(data)
                  }, this);
                  response.body.related_questions.forEach(element => {
                    var data = {
                      key: element.key, 
                      href: element.href,
                      title: element.title,
                      answer: element.answer
                    }
                    this.related_questions.push(data)
                  }, this);
                } else {
                  this.$message({
                    message: response.body.message,
                    type: 'error'
                  })
                }
      },(response) => {});
    }
  }
};
</script>

<style lang="less" scope>
.wenda_related {
    position: relative;
    top: 20px;
    left: 20px;
    float: right;
    width: 260px;

    a {
        color: #ff9d00;
        text-decoration: none;
        cursor: pointer;
    }

    .notes_activity{
        width: 240px;

        .activity {
            height: 160px;

            a {
                color: #fff;
            }

            h3 {
                position: absolute;
                left: 7px;
                right: 7px;
                bottom: 5px;
                font-size: 16px;
                line-height: 20px;
            }
        }
    }

    .related {
      margin-top: 24px;

      .related_title {
        margin-bottom: 12px;
        font-size: 16px;
      }

      ul {
        padding: 0;
        font-weight: 600;
      }

      li {
        margin-bottom: 10px;

        a {
          font-size: 13px;
        }

        span {
          color: #999;
        }
      }
    }
}
</style>