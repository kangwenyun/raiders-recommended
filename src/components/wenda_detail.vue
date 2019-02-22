<template>
  <div class="wenda_detail">
    <div class="detail">
      <div class="mt-nav">
        <a href="/wenda/">问答详情</a>
        > {{ title }}
      </div>
      <div class="q-content">
        <a :href="mdd_href" target="_blank" class="location">
          <i></i>
          {{ mdd }}
        </a>
        <h1>{{ title }}</h1>
        <div class="q-desc" v-html="detail">{{ detail }}</div>
        <div class="q-info1">
          <el-tag v-for="tag in tags" :key="tag.name" type="info" class="tags">
            <a :href="tag.href">{{ tag.name }}</a>
          </el-tag>
          <div class="pub-bar fr">
            <a :href="user_href" class="photo" target="_blank">
              <img :src="user_img">
            </a>
            <a class="name" :href="user_href" target="_blank">{{ user_name }}</a>
            <span class="time">
              <span>{{ time }}</span>
            </span>
          </div>
        </div>
      </div>
      <div class="q-operate">
        <div class="fr">
          <span class="atten-num">{{ liulan_num }}浏览</span>
          <span class="atten-num">
            <span class="_j_same_num">{{ guanzhu_num }}</span>人关注
          </span>
          <!-- <a class="btn-atten _j_same_question" rel="nofollow" data-status="1">
              <span>关注</span>
            </a>
          <a class="btn-answer _j_btn_goanswer" rel="nofollow">回答</a>-->
        </div>
      </div>
      <div class="answer-wrap">
        <div class="hd">
          <span>{{ num }}</span>个回答
        </div>
        <div class="answer_list">
          <wenda-answer
              v-for="item in answer_list"
              :data="item"
              :key="item.key">
          </wenda-answer>
        </div>
      </div>
    </div>
    <wenda-related></wenda-related>
  </div>
</template>

<script>

import wenda_answer from './wenda_answer.vue'
import wenda_related from './wenda_related.vue'

export default {
  name: "wenda_detail",
  components: {
      "wenda-answer": wenda_answer,
      "wenda-related": wenda_related,
  },
  data() {
    return {
      title: "春节在家呆久了爸妈会嫌你吗？有啥和谐相处之道？", // 标题
      mdd_href: "/wenda/area-21536.html", // 加粗标题前面的地点链接
      mdd: "中国", // 加粗标题前面的地点
      detail:
        '爸妈就那种你不在家盼着你回来，呆超过五天就开始嫌弃你不干活起的晚不交际，还各种催婚聊未来，你有这种感受没<br>在家久了你都怎么跟爸妈<div class="area_tags _j_tip_mdd" data-mddid="66290"><a data-cs-p="qa_mdd" class="at_link" href="/travel-scenic-spot/mafengwo/66290.html" target="_blank">和平</a> <div class="at_info" style="display:none;"></div> </div>相处？来聊聊 <br>——春节答题大赛—— <br><br>本问题收录在【拯救无趣春节】答题大赛中<br>现在参与, 不仅有机会赢取锦鲤福利（行李箱等）<br>还有 新年"猪事顺利"大礼包 在等你！<br><br>活动时间：2019.1.28—2.11<br>活动链接：<a href="https://m.mafengwo.cn/mc/activity/find_traveler/67" target="_blank">https://m.mafengwo.cn/mc/activity/find_traveler/67</a>', // 问答详情，作为一个整体
      tags: [ // 问答详情底下的标签
        // { name: "春节", href: "http://www.mafengwo.cn/wenda/area-10466.html" }, // 标签， 标签链接
        // { name: "文化", href: "http://www.mafengwo.cn/wenda/area-10466.html" }
      ],
      user_href: "/wenda/u/51213557/answer.html", // 右下角用户链接
      user_img:
        "http://p1-q.mafengwo.net/s5/M00/D3/23/wKgB3FICDHaAIB_dAAB15xkKCak34.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90", // 用户头像图片链接
      user_name: "tracymax", // 用户名
      time: "2019-01-23 20:51:38", // 时间
      liulan_num: "108762", // 浏览数
      guanzhu_num: "65", // 关注数
      num: 4527, // 多少个回答
      answer_list: [ // 回答列表
        // {
        //   key: 1, // 谁拼都行
        //   user_href: '/wenda/u/65624550/answer.html', // 用户名链接
        //   user_img: 'http://b1-q.mafengwo.net/s12/M00/D4/BE/wKgED1u3LxiAKOjzAArV9uz0yxQ69.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90', // 用户头像图片链接
        //   user_name: '行走的牙医Nini欣',  // 用户名
        //   user_level: 'LV.26', // 用户等级
        //   guide: true, // 有没有指路人标志
        //   gold: true, //有没有金牌回答标志
        //   answer: '<div class="_j_answer_html">在家待久了，爸妈會各種嫌棄，我從還沒過年到過年期間到現在，天天都被爸媽嫌棄。。。<br><br><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" style="height:525px;width:700px;background:#FCF2DC" data-src="http://p3-q.mafengwo.net/s1/M00/87/2B/wKgIC1xeLX-AVRkDABrckzBDj7s17.jpeg?imageView2%2F2%2Fw%2F700%2Fq%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL24xLXEubWFmZW5nd28ubmV0L3MxMS9NMDAvOTEvNzAvd0tnQkVGcF9faTZBUHYtZEFBQUwxMzg3aE0wNjk5LnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11" data-originalpic="http://p3-q.mafengwo.net/s1/M00/87/2B/wKgIC1xeLX-AVRkDABrckzBDj7s17.jpeg?imageView2%2F2%2Fw%2F1920%2Fq%2F100%7Cwatermark%2F1%2Fimage%2FaHR0cDovL24xLXEubWFmZW5nd28ubmV0L3MxMS9NMDAvOTEvNzAvd0tnQkVGcF9faTZBUHYtZEFBQUwxMzg3aE0wNjk5LnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11" data-file="mfwStorage1/M00/87/2B/wKgIC1xeLX-AVRkDABrckzBDj7s17.jpeg" class="_j_lazyload _js_answerPic _j_show_original">其實現在很多年輕人，都不喜歡回家待太久，尤其最討厭的就是過年。<br><br>過年就代表：必須待在家裡跟爸媽大眼瞪小眼，而自己長期住外面，作息、生活習慣都與爸媽大不相同，几几天年假使這些「不同」浮上檯面，增加自己與父母的摩擦。<br><br>加上，回到「父母的家」，自己感覺，已經三十歲的自己，好像又變回小孩，回到那個得唯父母命是從的年紀：事事要按父母的規定走；父母要靠許多詢問確認「你現在是否過得好/過得不好」，而過的好與否的標準，是父母訂定的。如果發現你不符合那些標準，「碎碎念」的招式就會出現。<br><br>討厭極了碎碎念，於是，每次回家，有时讓自己待在房間裡，能不跟父母互動就盡量不接觸，以免讓他們有機會念自己。<br><br>但是當每次出來上廁所，看著爸媽坐在客廳看電視的背影時，忍不住覺得感傷，自己不是沒有罪惡感的<br><br>何嘗不想跟爸媽聊天、講一些五四三，或講一些自己的煩惱...家是自己的避風港，不是嗎？<br><br>📢成年人愛父母的方式📢<br>父母覺得孩子冷漠，不在乎他們；<br>孩子也覺得父母不了解、不在乎自己的感受，只想要像小時候一樣掌控自己。<br><br>於是，親子之間顯得疏離，有的只是應個卯、忍耐，或是表面應和。但其實並不是不愛彼此，也在乎對方。<br><br>只是，並不了解。<br><br>年假最後一天，鼓起勇氣，第一次跟爸媽提起：「我想跟你們好好聊聊。」<br><br>可以试着跟父母表達著：「我不是不在乎你們，我也會想念你們，但是，回家，常常要面對你們對我的期望，或是說我哪裡做的不夠、不對......可是，我已經長大，我有自己的想法、有我自己的人生，我要學著對自己的人生負責...所以，你們可以學著尊重我、信任我，尊重我有我自己的生活方式，信任我可以自己負責，信任我就算做我自己、不按照你們的方式去做，也不代表我不愛你們...對我來說，我感覺到你有多尊重我，我就會知道你有多愛我。」<br><br>或許，你期待我與你相同，或與你的理想相同；當你發現我變成另外一個人，那樣陌生，你會覺得不安，覺得孤單，甚至覺得有些害怕，恐懼。<br><br>只是，我想請你，相信一件事：<br><br>我做我自己，不代表我不愛你，也不代表我就不會獲得幸福。<br><br>我做我自己，仍然可以愛你，仍然可以獲得幸福。<br><br><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" style="height:525px;width:700px;background:#FCF2DC" data-src="http://n2-q.mafengwo.net/s11/M00/AF/02/wKgBEFxeZC6AY7qeABp7ss6B_Hg93.jpeg?imageView2%2F2%2Fw%2F700%2Fq%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL24xLXEubWFmZW5nd28ubmV0L3MxMS9NMDAvOTEvNzAvd0tnQkVGcF9faTZBUHYtZEFBQUwxMzg3aE0wNjk5LnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11" data-originalpic="http://n2-q.mafengwo.net/s11/M00/AF/02/wKgBEFxeZC6AY7qeABp7ss6B_Hg93.jpeg?imageView2%2F2%2Fw%2F1920%2Fq%2F100%7Cwatermark%2F1%2Fimage%2FaHR0cDovL24xLXEubWFmZW5nd28ubmV0L3MxMS9NMDAvOTEvNzAvd0tnQkVGcF9faTZBUHYtZEFBQUwxMzg3aE0wNjk5LnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11" data-file="mfwStorage11/M00/AF/02/wKgBEFxeZC6AY7qeABp7ss6B_Hg93.jpeg" class="_j_lazyload _js_answerPic _j_show_original"><br>==========<br><br>如果你觉得TA的回答不错，快来给TA点个赞吧！<br>你的支持是对作者莫大的鼓励~</div>' // 回答的具体信息
        // }
      ]
    };
  },
  created() {
      this.load()
  },
  methods: {
    load() {
      var vm = this
      vm.$http.get(this.GLOBAL.baseUrl + '/wenda_detail?' + location.href.split('?')[1], { credentials: true })
              .then((response) => {
                  if (response.body.status === 200){
                    var tmp = response.body
                    this.title = tmp.title
                    this.mdd_href = tmp.mdd_href
                    this.mdd = tmp.mdd
                    this.detail = tmp.detail
                    this.tags = [],
                    this.user_href = tmp.user_href
                    this.user_img = tmp.user_img
                    this.user_name = tmp.user_name
                    this.time = tmp.time
                    this.liulan_num = tmp.liulan_num
                    this.guanzhu_num = tmp.guanzhu_num
                    this.num = tmp.num
                    tmp.tags.forEach(element => {
                        var data = {
                            name: element.name,
                            href: element.href
                        }
                        this.tags.push(data)
                    }, this);
                    tmp.answer_list.forEach(element => {
                        var data = {
                            key: element.key,
                            user_href: element.user_href,
                            user_img: element.user_img, // 用户头像图片地址
                            user_name: element.user_name,
                            user_level: element.user_level,
                            guide: element.guide,
                            gold: element.gold,
                            answer: element.answer.replace('style="display: none;"', '')
                        }
                        this.answer_list.push(data)
                    }, this);
                  } else {
                  this.$message({
                      message: response.body.msg,
                      type: 'error'
                  })
                  }
      },(response) => {});
    }
  }
};
</script>

<style lang="less" scoped>
.wenda_detail {
  color: #666;
  width: 80%;
  min-width: 993px;
  margin: 70px auto;

  .detail {
    float: left;
    width: 70%;
    max-width: 850px;
    min-width: 700px;
    margin-left: 20px;

    a:hover {
      color: #ff9d00 !important;
      text-decoration: underline;
    }

    .mt-nav {
      padding: 20px 0;
      line-height: 30px;

      a {
        font-weight: 600;
        color: #ff9d00;
        display: inline;
      }
    }

    .q-content {
      margin-bottom: 40px;

      .location {
        display: inline-block;
        font-size: 18px;
        color: #ff9d00;
        margin-right: 8px;
        font-weight: 600;

        i {
          float: left;
          width: 14px;
          height: 16px;
          margin: 7px 6px 0 0;
          background-position: 0 -285px !important;
        }

        i {
          background: url(http://css.mafengwo.net/images/wenda/mfwask-2016sprite_v9.png)
            no-repeat;
        }
      }

      h1 {
        display: inline;
        font-size: 18px;
        color: #333;
      }

      .q-desc {
        margin-top: 10px;

        a {
          color: #ff9d00;
          text-decoration: none;
          cursor: pointer;
        }
      }

      .q-info1 {
        margin-top: 16px;

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
            white-space: nowrap;
            color: #666;
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

        .pub-bar {
          line-height: 23px;
          margin-top: 40px;

          a {
            color: #666;
            font-size: 12px;
            display: inline;
          }

          .photo img {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            margin-right: 6px;
            vertical-align: middle;
          }

          .name {
            margin-right: 10px;
            font-size: 12px;
          }

          .time {
            font-size: 12px;
          }
        }
      }
    }

    .q-operate {
      padding-top: 18px;
      height: 36px;
      border-top: 1px solid #e5e5e5;

      .atten-num {
        font-size: 12px;
        color: #999;
        margin-right: 10px;
      }
    }

    .fr {
      float: right;
    }

    .answer-wrap {
      margin-top: 20px;

      .hd {
          padding-bottom: 5px;
          border-bottom: 1px solid #e5e5e5;
          color: #333;
      }

      .answer_list {
        margin-top: 20px;
      }
    }
  }
}
</style>
