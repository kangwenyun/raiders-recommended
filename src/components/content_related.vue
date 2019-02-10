<template>
  <div class="content_related">
    <div>
      <div class="relation_mdd">相关目的地：</div>
      <div class="mdd_info">
        <a :href="mdd.href"
          :title="mdd.title"
          target="_blank" >
          <img :src="mdd.src"
            width="240px"
            :alt="mdd.title">
          <i class="view"></i>
          <strong>{{ mdd.title }}</strong>
        </a>
      </div>
      <div class="pics_num">
        有
        <strong>{{ mdd.num }}</strong>张照片
      </div>
    </div>
    <div class="notes_gonglve">
      <div class="side_title">相关攻略</div>
      <el-carousel class="gs_content">
        <el-carousel-item v-for="item in gonglve" :key="item.key">
            <a :href="item.href"
            target="_blank"
            :title="item.title">
                <img :src="item.src">
                <div class="bg"></div>
                <span>
                <i class="view"></i>{{ item.view }}
                </span>
                <h3>{{ item.title }}</h3>
            </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="split"></div>
    <div class="notes_gonglve">
      <div class="side_title">相关游记</div>
      <el-carousel class="gs_content">
        <el-carousel-item v-for="item in youji" :key="item.key">
            <a :href="item.href"
            target="_blank"
            :title="item.title">
                <img :src="item.src">
                <div class="bg"></div>
                <span>
                <i class="view"></i>{{ item.view }}
                </span>
                <h3>{{ item.title }}</h3>
            </a>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "content_related",
  data() {
    return {
      mdd: {
        href: 'https://www.mafengwo.cn/travel-scenic-spot/mafengwo/10180.html',
        title: '越南',
        src: 'https://p2-q.mafengwo.net/s10/M00/FF/E0/wKgBZ1jnHBCAeMgOAA5o9Lrjij428.jpeg?imageMogr2%2Fthumbnail%2F%21200x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21200x150%2Fquality%2F90',
        num: '1037836'
      },
      gonglve: [
        {
            key: 11,
            href: 'https://www.mafengwo.cn/gonglve/ziyouxing/41254.html?cid=1010608',
            title: '芽庄珍珠岛游乐园 深度攻略（全面详解）',
            src: 'https://n2-q.mafengwo.net/s10/M00/38/AB/wKgBZ1oYTvKALA9vAAJV63ED4LI52.jpeg?imageMogr2%2Fthumbnail%2F%21240x160r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21240x160%2Fquality%2F90',
            view: '319868'
        },
        {
            key: 12,
            href: 'https://www.mafengwo.cn/gonglve/ziyouxing/108962.html?cid=1010608',
            title: '预算3k起,暑期海岛旅行推荐',
            src: 'https://p3-q.mafengwo.net/s11/M00/9A/B9/wKgBEFsU3ieAERFDABK2XNKoCY846.jpeg?imageMogr2%2Fthumbnail%2F%21240x160r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21240x160%2Fquality%2F90',
            view: '158334'
        },
        {
            key: 13,
            href: 'https://www.mafengwo.cn/gonglve/ziyouxing/124238.html?cid=1010608',
            title: '越南行前扫盲，超实用的胡志明+美奈+大叻攻略！',
            src: 'https://p2-q.mafengwo.net/s11/M00/02/70/wKgBEFs9-MaAT5QHAAI5EKzRHO487.jpeg?imageMogr2%2Fthumbnail%2F%21240x160r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21240x160%2Fquality%2F90',
            view: '139956'
        },
      ],
      youji: [
        {
            key: 21,
            href: 'http://www.mafengwo.cn/i/11324210.html',
            title: '越南|城市漫游记 遇见未知的美好',
            src: 'https://p2-q.mafengwo.net/s12/M00/23/AC/wKgED1wA6JaAZmh5AAuHBrrgiTs49.jpeg?imageMogr2%2Fthumbnail%2F%21240x160r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21240x160%2Fquality%2F100',
            view: '16451'
        },
        {
            key: 22,
            href: 'http://www.mafengwo.cn/i/11189294.html',
            title: '左手滴漏咖啡，右手国民米粉，我们在越南谈恋爱',
            src: 'https://b3-q.mafengwo.net/s12/M00/31/DA/wKgED1vO75KATSW_AAYLqrCFcyk08.jpeg?imageMogr2%2Fthumbnail%2F%21240x160r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21240x160%2Fquality%2F100',
            view: '15578'
        },
        {
            key: 23,
            href: 'http://www.mafengwo.cn/i/11554390.html',
            title: '越南·南【胡志明-美奈-大叻】',
            src: 'https://n2-q.mafengwo.net/s12/M00/F9/72/wKgED1woJ2yAIxMIAANXZAJWeyw53.jpeg?imageMogr2%2Fthumbnail%2F%21240x160r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21240x160%2Fquality%2F100',
            view: '619'
        },
      ]
    };
  },
  methods: {}
};
</script>

<style lang="less" scope>
.content_related {
    position: relative;
    top: 10px;
    float: right;

    .relation_mdd {
        margin-bottom: 12px;
        font-size: 14px;
    }

    .mdd_info {
        width: 240px;
        position: relative;
        height: 160px;
        overflow: hidden;

        i {
            position: absolute;
            left: 0;
            bottom: 0;
            top: 0;
            right: 0;
            background: url(http://css.mafengwo.net/images/post/new_notes/nn_v2/cover_bg.png) 0 bottom repeat-x;
        }

        strong {
            position: absolute;
            left: 10px;
            right: 10px;
            color: #fff;
            font-size: 36px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            z-index: 1;
            bottom: 12px;
            font-weight: normal;
        }
    }

    .pics_num {
        margin-top: 20px;
        margin-bottom: 20px;
        line-height: 26px;

        strong {
            font-size: 22px;
            font-family: Arial;
            margin: 0 3px;
            position: relative;
            top: 2px;
        }
    }

    .split {
        height: 40px;
    }

    .notes_gonglve{
        width: 240px;

        .side_title {
            margin-bottom: 15px;
            font-size: 16px;
            line-height: 1;
        }

        .gs_content {
            height: 160px;

            .bg {
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                background-color: #000;
                opacity: .2;
            }

            a {
                color: #fff;
            }

            span {
                position: absolute;
                left: 5px;
                top: 10px;
                font-size: 12px;
                font-family: "Microsoft Yahei";
            }

            i.view {
                display: inline-block;
                margin-right: 5px;
                width: 21px;
                height: 16px;
                background: url(http://css.mafengwo.net/images/post/new_notes/icon-view-white.png) no-repeat 0 0;
                vertical-align: middle;
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
}
</style>