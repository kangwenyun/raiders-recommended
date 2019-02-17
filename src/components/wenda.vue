<template>
    <div class="wenda">
        <div class="i-main">
            <div class="mt-nav"><a href="/wenda/">问答首页</a></div>
            <div class="search-box">
                <div class="sp-input"><input type="text" value="" placeholder="提问前请先搜索，看看你的问题其他蜂蜂是否已经问过"></div><input
                    type="button" class="sp-button">
            </div>
        </div>
        <el-menu 
            :default-active="now_title" 
            @select="select_title" 
            active-text-color="#fff"
            class="bd">
            <el-menu-item index="1" :class="now_title == 1 ? 'on': ''">热门问题</el-menu-item>
            <el-menu-item index="2" :class="now_title == 2 ? 'on': ''">最新问题</el-menu-item>
            <el-menu-item index="3" :class="now_title == 3 ? 'on': ''">待回答问题</el-menu-item>
        </el-menu>
        <div v-if="now_title == 1">
            <wenda-item
                v-for="item in hot_question"
                :data="item"
                :key="item.key">
            </wenda-item>
        </div>
        <div v-else-if="now_title == 2">
            <wenda-item
                v-for="item in new_question"
                :data="item"
                :key="item.key">
            </wenda-item>
        </div>
        <div v-else>
            <wenda-item
                v-for="item in wait_question"
                :data="item"
                :key="item.key">
            </wenda-item>
        </div>
    </div>
</template>


<script>

import wenda_item from './wenda_item.vue'

export default {
    name: 'wenda',
    components: {
        "wenda-item": wenda_item
    },
    data() {
        return {
            now_title: '1',
            hot_question: [
                {
                    key: 11,
                    wenda_url: "/wenda/detail-11794417-11794446.html",
                    title: "长沙坡子街是怎么一步步成为著名美食街的？",
                    user_href: "/wenda/u/63486413/answer.html", // 头像里a标签的href
                    user_img:
                        "https://b4-q.mafengwo.net/s11/M00/D5/1D/wKgBEFr-lkiAecanAAKk1uYf7xQ174.png?imageMogr2%2Fthumbnail%2F%2190x90r%2Fgravity%2FCenter%2Fcrop%2F%2190x90%2Fquality%2F90", // 用户头像图片地址
                    guide: false,
                    img_url:
                        "https://p1-q.mafengwo.net/s11/M00/79/0F/wKgBEFsMwqaAN6jNABgdjuIXMCs644.png?imageMogr2%2Fthumbnail%2F%21140x105r%2Fgravity%2FCenter%2Fcrop%2F%21140x105%2Fquality%2F90",
                    abstract:
                        "专业的吃货，怎么可以只会吃，不懂吃背后的深刻文化？不胖在写坡子街美食的时候，也先探索查找资料，了解了一下坡子街的历史文化。感兴趣的亲，记得收藏，没事儿翻出来看看呀 ~坡子街有什么必吃的推荐↓↓http://www.mafengwo.cn/wenda/detail-5002533-11742928....",
                    tags: [
                        { name: "长沙", href: "http://www.mafengwo.cn/wenda/area-10466.html" },
                        { name: "文化", href: "http://www.mafengwo.cn/wenda/area-10466.html" }
                    ],
                    zan_num: 56,
                    mdd_href: "/wenda/area-10466.html",
                    mdd: '长沙',
                    comment_num: 2,
                    date: "2018-05-29 21:52"
                },
                {
                    key: 12,
                    wenda_url: "http://www.mafengwo.cn/wenda/detail-15573196.html",
                    title: "为什么故宫“恶搞皇帝”大家都叫好，西安“恶搞兵马俑”却被狂喷？",
                    user_href: "http://www.mafengwo.cn/wenda/u/58018810/answer.html", // 头像里a标签的href
                    user_img:
                        "https://n3-q.mafengwo.net/s11/M00/DB/7D/wKgBEFrpWCSALKV7AACpFcHK4XY21.jpeg?imageMogr2%2Fthumbnail%2F%2190x90r%2Fgravity%2FCenter%2Fcrop%2F%2190x90%2Fquality%2F90", // 用户头像图片地址
                    guide: true,
                    img_url:
                        "https://n3-q.mafengwo.net/s10/M00/FB/FC/wKgBZ1xiQ2aASLY0AAQ1lW7hNbU30.jpeg?imageMogr2%2Fthumbnail%2F%21140x105r%2Fgravity%2FCenter%2Fcrop%2F%21140x105%2Fquality%2F90",
                    abstract:
                        "文创确实是给广大历史爱好迷们带来了很大的惊喜，故宫就是一个典型的代表，它的成功不是偶然的，这种带点幽默，又有点典雅高贵的文创物们融入在我们生活中的每一处。美妆：如果你逛过故宫淘宝一定知道故宫的胶带是需要秒抢的，黑漆嵌螺钿、墨彩花鸟烫银、掐丝珐...",
                    tags: [
                        { name: "西安", href: "http://www.mafengwo.cn/wenda/area-10466.html" },
                        { name: "兵马俑", href: "http://www.mafengwo.cn/wenda/area-10466.html" },
                        { name: "故宫", href: "http://www.mafengwo.cn/wenda/area-10466.html" }
                    ],
                    zan_num: 1,
                    mdd_href: "http://www.mafengwo.cn/wenda/area-10195.html",
                    mdd: '西安',
                    comment_num: 0,
                    date: "1小时前"
                }
            ],
            new_question: [
                {
                    key: 21,
                    wenda_url: "http://www.mafengwo.cn/wenda/detail-11794417-11794446.html",
                    title: "已办好签证，芽庄入关需要带照片吗？",
                    user_href: "/wenda/u/63486413/answer.html", // 头像里a标签的href
                    user_img:
                        "https://b4-q.mafengwo.net/s11/M00/D5/1D/wKgBEFr-lkiAecanAAKk1uYf7xQ174.png?imageMogr2%2Fthumbnail%2F%2190x90r%2Fgravity%2FCenter%2Fcrop%2F%2190x90%2Fquality%2F90", // 用户头像图片地址
                    img_url:
                        "https://p1-q.mafengwo.net/s11/M00/79/0F/wKgBEFsMwqaAN6jNABgdjuIXMCs644.png?imageMogr2%2Fthumbnail%2F%21140x105r%2Fgravity%2FCenter%2Fcrop%2F%21140x105%2Fquality%2F90",
                    abstract:
                        "专业的吃货，怎么可以只会吃，不懂吃背后的深刻文化？不胖在写坡子街美食的时候，也先探索查找资料，了解了一下坡子街的历史文化。感兴趣的亲，记得收藏，没事儿翻出来看看呀 ~坡子街有什么必吃的推荐↓↓http://www.mafengwo.cn/wenda/detail-5002533-11742928....",
                    tags: [
                        { name: "长沙", href: "http://www.mafengwo.cn/wenda/area-10466.html" },
                        { name: "文化", href: "http://www.mafengwo.cn/wenda/area-10466.html" }
                    ],
                    zan_num: 56,
                    mdd_href: "/wenda/area-10466.html",
                    mdd: '长沙',
                    comment_num: 2,
                    date: "2018-05-29 21:52"
                }
            ],
            wait_question: [
                {
                    key: 31,
                    wenda_url: "http://www.mafengwo.cn/wenda/detail-11794417-11794446.html",
                    title: "没有大通证，持护照从台湾回国",
                    user_href: "/wenda/u/63486413/answer.html", // 头像里a标签的href
                    user_img:
                        "https://b4-q.mafengwo.net/s11/M00/D5/1D/wKgBEFr-lkiAecanAAKk1uYf7xQ174.png?imageMogr2%2Fthumbnail%2F%2190x90r%2Fgravity%2FCenter%2Fcrop%2F%2190x90%2Fquality%2F90", // 用户头像图片地址
                    img_url:
                        "https://p1-q.mafengwo.net/s11/M00/79/0F/wKgBEFsMwqaAN6jNABgdjuIXMCs644.png?imageMogr2%2Fthumbnail%2F%21140x105r%2Fgravity%2FCenter%2Fcrop%2F%21140x105%2Fquality%2F90",
                    abstract:
                        "专业的吃货，怎么可以只会吃，不懂吃背后的深刻文化？不胖在写坡子街美食的时候，也先探索查找资料，了解了一下坡子街的历史文化。感兴趣的亲，记得收藏，没事儿翻出来看看呀 ~坡子街有什么必吃的推荐↓↓http://www.mafengwo.cn/wenda/detail-5002533-11742928....",
                    tags: [
                        { name: "长沙", href: "http://www.mafengwo.cn/wenda/area-10466.html" },
                        { name: "文化", href: "http://www.mafengwo.cn/wenda/area-10466.html" }
                    ],
                    zan_num: 56,
                    mdd_href: "/wenda/area-10466.html",
                    mdd: '长沙',
                    comment_num: 2,
                    date: "2018-05-29 21:52"
                }
            ]
        };
    },
    created() {
        // this.load()
    },
    methods: {
        load(){
            var vm = this
            vm.$http.get(this.GLOBAL.baseUrl + '/wenda')
                    .then((response) => {
                        if (response.body.status === 200){
                            response.body.hot_question.forEach(element => {
                                var data = {
                                    key: element.key,
                                    wenda_url: element.wenda_url.split('-')[1].split('.')[0],
                                    title: element.title,
                                    user_href: element.user_href, // 头像里a标签的href
                                    user_img: element.user_img, // 用户头像图片地址
                                    guide: element.guide,
                                    img_url: element.img_url,
                                    abstract: element.abstract,
                                    tags: [],
                                    zan_num: element.zan_num,
                                    mdd_href: element.mdd_href,
                                    mdd: element.mdd,
                                    comment_num: element.comment_num,
                                    date: element.date
                                }
                                element.tags.forEach(ele => {
                                    var tag = {
                                        name: ele.name,
                                        href: ele.href
                                    }
                                    data.tags.push(tag)
                                }, this)
                                this.hot_question.push(data)
                            }, this);
                            response.body.new_question.forEach(element => {
                                var data = {
                                    key: element.key,
                                    wenda_url: element.wenda_url.split('-')[1].split('.')[0],
                                    title: element.title,
                                    user_href: element.user_href, // 头像里a标签的href
                                    user_img: element.user_img, // 用户头像图片地址
                                    guide: element.guide,
                                    img_url: element.img_url,
                                    abstract: element.abstract,
                                    tags: [],
                                    zan_num: element.zan_num,
                                    mdd_href: element.mdd_href,
                                    mdd: element.mdd,
                                    comment_num: element.comment_num,
                                    date: element.date
                                }
                                element.tags.forEach(ele => {
                                    var tag = {
                                        name: ele.name,
                                        href: ele.href
                                    }
                                    data.tags.push(tag)
                                }, this)
                                this.new_question.push(data)
                            }, this);
                            response.body.wait_question.forEach(element => {
                                var data = {
                                    key: element.key,
                                    wenda_url: element.wenda_url.split('-')[1].split('.')[0],
                                    title: element.title,
                                    user_href: element.user_href, // 头像里a标签的href
                                    user_img: element.user_img, // 用户头像图片地址
                                    guide: element.guide,
                                    img_url: element.img_url,
                                    abstract: element.abstract,
                                    tags: [],
                                    zan_num: element.zan_num,
                                    mdd_href: element.mdd_href,
                                    mdd: element.mdd,
                                    comment_num: element.comment_num,
                                    date: element.date
                                }
                                element.tags.forEach(ele => {
                                    var tag = {
                                        name: ele.name,
                                        href: ele.href
                                    }
                                    data.tags.push(tag)
                                }, this)
                                this.wait_question.push(data)
                            }, this);
                        } else {
                        this.$message({
                            message: response.body.msg,
                            type: 'error'
                        })
                        }
            },(response) => {});
        },
        select_title(index) {
            this.now_title = index
        }
    }
}
</script>
<style lang="less" scoped>
.wenda {
    width: 80%;
    margin: 70px auto;

    .i-main {
        margin-bottom: 15px;
        position: relative;
        z-index: 10;

        .mt-nav {
            padding: 20px 0;
            line-height: 30px;

            a {
                color: #666;
            }
        }

        .search-box {
            height: 60px;
            width: 685px;
            background-color: #fff;
            z-index: 2;

            .sp-input {
                float: left;
                width: 580px;
                height: 24px;
                padding: 10px 20px;
                border: 1px solid #ff9d00;
                border-radius: 4px;

                input {
                    width: 100%;
                    border: 0;
                    padding: 0;
                    font-size: 14px;
                    line-height: 24px;
                    color: #999;
                    outline: none
                }
            }

            .sp-button {
                position: static;
                float: right;
                display: block;
                width: 56px;
                height: 46px;
                border: 0;
                padding: 0;
                margin: 0;
                background: #ff9d00 url(http://css.mafengwo.net/images/mfw-ask/mfwask-2016sprite_v6.png) no-repeat;
                background-position: 14px -539px;
                border-radius: 4px;
            }
        }
    }

    .el-menu {
        border: none;
    }

    .bd {
        .el-menu-item {
            font-size: 16px;
            line-height: 32px;
            height: 32px;
        }
    }

    li {
        float: left;
    }

    .on {
        background-color: #ffa800;
        border-radius: 3px;
    }
}
</style>