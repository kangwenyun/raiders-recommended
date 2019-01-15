<template>
    <div class="gonglve_select">
        <div class="gonglve-nav">
            <div class="nav-item" v-for="item in gonglve_nav" :key="item.key">
                <div class="nav-title" @mouseover="now_key = item.key" 
                    @mouseout="now_key = -1">
                    <h3 :class="now_key == item.key ? 'h3-active' : ''">{{ item.title }}</h3>
                    <b class="gn-arrow" :class="now_key == item.key ? 'gn-arrow-active' : ''"></b>
                </div>
                <div class="nav-panel" :class="item.key < 4 ? 'rank-panel' : 'category-panel'" 
                    @mouseover="now_key = item.key" @mouseout="now_key = -1"
                    v-show="now_key == item.key">
                    <li v-show="item.key < 4" v-for="it in item.content" :key="it.key">
                        <em class="rank-num" :class="it.num < 4 ? 'top3' : ''">{{ it.num }}</em>
                        <strong><a href="/gonglve/mdd-10746.html" target="_blank"  
                            :class="it.num < 4 ? 'top3' : ''">{{ it.title }}</a></strong>
                        <a href="/gonglve/mdd-10746.html" target="_blank" class="fnt">{{ it.desc }}</a>
                    </li>
                    <li v-show="item.key == 4" v-for="it in item.topics" :key="it.key">
                        <dl>
                            <dt><font style="vertical-align: inherit;">{{ it.topic }}</font></dt>
                            <dd v-for="i in it.places" :key="i.key"><a title=i.place href="/gonglve/zt-359.html" target="_blank">
                                <font class="fnt">{{ i.place }}</font>
                            </a></dd>
                        </dl>
                    </li>
                </div>
            </div>
        </div>
        <div class="input_like">
            <span></span>
            <input type="text" placeholder="请输入想去的地方，如:香港"/>
        </div>
        <div class="app_d">
            <a href="http://imfw.cn/l/654850" target="_blank">
                <img src="http://images.mafengwo.net/images/app/m/logo_gonglve_v6.png?v=20150825" alt="" class="down_img"/>
            </a>
            <div class="domn_in" @mouseover="show_img = true" @mouseout="show_img = false">
                <h4><a href="http://imfw.cn/l/654850" target="_blank">马蜂窝自由行APP下载</a></h4>
                <div class="down" v-show="show_img">
                    <img style="z-index:100" src="https://p3-q.mafengwo.net/s12/M00/17/80/wKgED1vb_fqAeZq0AAAxwHmnAuc675.png" />
                </div>
                <p>
                    <a style="cursor: auto;">iPhone版</a>
                    <span>|</span><a style="cursor: auto;">Android版</a>
                    <span>|</span><a style="cursor: auto;">iPad版</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'gonglve_select',
  data() {
    return{
        now_key : -1 ,
        show_img : false ,
        gonglve_nav:[
            {
                key: 1, 
                title: '海外冬季目的地精选',
                content:[
                    {
                        key: 11,
                        num: 1,
                        title: '北海道',
                        desc: '在皑皑白雪中泡温泉'
                    },
                    {
                        key: 12,
                        num: 2,
                        title: '冰岛',
                        desc: '亲近极北之地的莫测极光'
                    },
                    {
                        key: 13,
                        num: 3,
                        title: '澳大利亚',
                        desc: '在南半球过个暖洋洋的圣诞'
                    },
                    {
                        key: 14,
                        num: 4,
                        title: '洛杉矶',
                        desc: '阳光加州，避寒圣地'
                    },
                    {
                        key: 15,
                        num: 5,
                        title: '新加坡',
                        desc: '活力四射的花园之城'
                    },
                    {
                        key: 16,
                        num: 6,
                        title: '斯里兰卡',
                        desc: '便利签证，异域风情'
                    },
                    {
                        key: 17,
                        num: 7,
                        title: '帕劳',
                        desc: '潜水者的朝圣地'
                    },
                    {
                        key: 18,
                        num: 8,
                        title: '缅甸',
                        desc: '踏上佛国净化之旅'
                    },
                    {
                        key: 19,
                        num: 9,
                        title: '菲律宾',
                        desc: '徜徉海岛间，潜入深海中'
                    },
                    {
                        key: 110,
                        num: 10,
                        title: '迪拜',
                        desc: '沙漠中的奇迹之城'
                    }
                ]
            },
            {
                key : 2, 
                title: '国内冬季目的地推荐',
                content:[
                    {
                        key: 21,
                        num: 1,
                        title: '漠河',
                        desc: '至寒圣地的极光约会'
                    },
                    {
                        key: 22,
                        num: 2,
                        title: '黄山',
                        desc: '银装素裹秒杀菲林季'
                    },
                    {
                        key: 23,
                        num: 3,
                        title: '海螺沟',
                        desc: '冰川温泉的童话世界'
                    },
                    {
                        key: 24,
                        num: 4,
                        title: '壶口瀑布',
                        desc: '绝美的冰瀑玉壶奇观'
                    },
                    {
                        key: 25,
                        num: 5,
                        title: '西岭雪山',
                        desc: '成都周边最大滑雪场'
                    },
                    {
                        key: 26,
                        num: 6,
                        title: '西双版纳',
                        desc: '聆听欣赏原生态歌舞'
                    },
                    {
                        key: 27,
                        num: 7,
                        title: '霞浦',
                        desc: '红枫白荻的交相辉映'
                    },
                    {
                        key: 28,
                        num: 8,
                        title: '广州',
                        desc: '相约一起喝粤式早茶'
                    },
                    {
                        key: 29,
                        num: 9,
                        title: '高雄',
                        desc: '暖冬初阳遇最美台湾'
                    },
                    {
                        key: 210,
                        num: 10,
                        title: '三亚',
                        desc: '去热带海滩逃离寒冬'
                    }
                ]
            },
            {
                key : 3, 
                title : '奔向海岛',
                content:[
                    {
                        key: 31,
                        num: 1,
                        title: '象岛',
                        desc: '腻了普吉，来象岛玩个深度'
                    },
                    {
                        key: 32,
                        num: 2,
                        title: '巴厘岛',
                        desc: '巴厘岛免签啦'
                    },
                    {
                        key: 33,
                        num: 3,
                        title: '毛里求斯',
                        desc: '印度洋上的海上明珠'
                    },
                    {
                        key: 34,
                        num: 4,
                        title: '塞班岛',
                        desc: '错“季”出行，也有惊喜'
                    },
                    {
                        key: 35,
                        num: 5,
                        title: '长滩岛',
                        desc: '潜水与蜜月的天堂'
                    },
                    {
                        key: 36,
                        num: 6,
                        title: '圣托里尼',
                        desc: '蓝白之城映衬着海风吹拂'
                    },
                    {
                        key: 37,
                        num: 7,
                        title: '沙美岛',
                        desc: '如果你厌倦了芭提雅'
                    },
                    {
                        key: 38,
                        num: 8,
                        title: '杜马盖地',
                        desc: '找小丑鱼做客去！'
                    },
                    {
                        key: 39,
                        num: 9,
                        title: '兰卡威',
                        desc: '海钓、潜水，看蓝天'
                    },
                    {
                        key: 310,
                        num: 10,
                        title: '沙巴',
                        desc: '这里有世界上最美的落日'
                    }
                ]
            },
            {
                key : 4, 
                title : '主题推荐',
                topics:[
                    {
                        key : 41,
                        topic : '骑行',
                        places : [
                            { key : 411, place : '海南' },
                            { key : 412, place : '青海湖' },
                            { key : 413, place : '敦煌' },
                            { key : 414, place : '漠河' },
                            { key : 415, place : '台湾' },
                            { key : 416, place : '北京' },
                            { key : 417, place : '杭州' },
                            { key : 418, place : '双廊' },
                            { key : 419, place : '婺源' },
                            { key : 4110, place : '阿尔山' },
                            { key : 4111, place : '法国' },
                            { key : 4112, place : '厦门' },
                            { key : 4113, place : '阳朔' },
                            { key : 4114, place : '香格里拉' },
                            { key : 4115, place : '太湖' },
                            { key : 4116, place : '西藏' },
                            { key : 4117, place : '大理' },
                            { key : 4118, place : '成都' },
                            { key : 4119, place : '乌鲁木齐' },
                        ]
                    },
                    {
                        key : 42,
                        topic : '潜水',
                        places : [
                            { key : 421, place : '沙巴' },
                            { key : 422, place : '三亚' },
                            { key : 423, place : '斐济' },
                            { key : 424, place : '巴厘岛' },
                            { key : 425, place : '长滩岛' },
                            { key : 426, place : '马尔代夫' },
                            { key : 427, place : '苏梅岛' },
                            { key : 428, place : '普吉岛' },
                            { key : 429, place : '夏威夷' },
                            { key : 4210, place : '巴拉望' },
                            { key : 4211, place : '马来西亚' },
                            { key : 4212, place : '兰卡威' },
                            { key : 4213, place : '埃及' },
                            { key : 4214, place : '印度尼西亚' },
                            { key : 4215, place : '泰国' }
                        ]
                    },
                    {
                        key : 43,
                        topic : '徒步',
                        places : [
                            { key : 431, place : '尼泊尔' },
                            { key : 432, place : '虎跳峡' },
                            { key : 433, place : '喀纳斯' },
                            { key : 434, place : '墨脱' },
                            { key : 435, place : '小五台' },
                            { key : 436, place : '贡嘎雪山' },
                            { key : 437, place : '海坨山' },
                            { key : 438, place : '海螺沟' },
                            { key : 439, place : '雨崩' },
                            { key : 4310, place : '三峡' },
                            { key : 4311, place : '阳朔' },
                            { key : 4312, place : '新都桥' },
                            { key : 4313, place : '楠溪江' },
                            { key : 4314, place : '梅里雪山' },
                            { key : 4315, place : '野三坡' },
                            { key : 4316, place : '西双版纳' }
                        ]
                    },
                    {
                        key : 44,
                        topic : '登山',
                        places : [
                            { key : 441, place : '珠穆朗玛峰' },
                            { key : 442, place : '乞力马扎罗' },
                            { key : 443, place : '牛背山' },
                            { key : 444, place : '太白山' },
                            { key : 445, place : '四姑娘山' },
                            { key : 446, place : '雁荡山' },
                            { key : 447, place : '云台山' },
                            { key : 448, place : '三清山' },
                            { key : 449, place : '普陀山' },
                            { key : 4410, place : '庐山' },
                            { key : 4411, place : '海陀山' },
                            { key : 4412, place : '小五台' },
                            { key : 4413, place : '华山' },
                            { key : 4414, place : '泰山' },
                            { key : 4415, place : '黄山' },
                            { key : 4416, place : '武功山' }
                        ]
                    }
                ]
            }
        ]
    };
  }
}
</script>

<style scoped>
.gonglve-nav{
    float: left;
    left: 25px;
    width: 280px;
    border: 1px solid #ddd;
    box-shadow: 0 0.5px 2px rgba(0,0,0,0.1);
    position: relative;
    z-index: 10;
    margin-top: 15px;
}

.nav-title{
    height: 40px;
    padding: 0 15px;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    line-height: 40px;
    font-size: 14px;
    color: #666;
    cursor: default;
    position: relative;
    z-index: 2;
}

h3 {
    font-weight: normal;
    margin: 0;
}

.h3-active{
    color: #ff9d00;
}

.gn-arrow{
    background-image: url(http://css.mafengwo.net/images/gonglve/new-gl-icon6@2x.png);
    background-size: 60px auto;
}

.gn-arrow-active{
    background: url(http://css.mafengwo.net/images/gonglve/new-gl-icon6.png) no-repeat -30px -40px !important;
}

.nav-title .gn-arrow {
    position: absolute;
    right: 25px;
    top: 15px;
    width: 6px;
    height: 10px;
    background: url(http://css.mafengwo.net/images/gonglve/new-gl-icon6.png) no-repeat -20px -40px;
    overflow: hidden;
}

.nav-panel {
    position: absolute;
    left: 280px;
    top: -1px;
    width: 345px;
    height: 338px;
    border: 1px solid #ddd;
    background-color: #fff;
    /* display: none; */
    box-shadow: 0 3px 2px rgba(0,0,0,.1);
}

.rank-panel ol {
    position: absolute;
    z-index: 2;
    padding: 15px 10px;
    width: 280px;
    line-height: 30px;
}

ol {
    list-style: none;
    padding: 0;
    margin: 0;
}

.rank-panel li {
    height: 30px;
    overflow: hidden;
}

.nav-panel a {
    color: #999;
    display: inline;
    margin-left: 10px;
}

.nav-panel a:hover{
    color: #ff9d00;
}

.top3{
    color: #ff9d00 !important;
}

.rank-num{
    float: left;
    width: 30px;
    font-size: 20px;
    font-family: Letter Gothic Std, Verdana, Geneva, sans-serif;
    text-align: center;
    color: #aaa;
    font-weight: bold;
}

.category-panel {
    padding-left: 60px;
    padding-right: 20px;
}

.category-panel dt {
    float: left;
    margin-left: -50px;
    font-weight: bold;
    line-height: 25px;
    font-size: 14px;
    color: #666;
}

.category-panel dd {
    float: left;
    height: 25px;
}

dl {
    height: 70px;
}

li {
    list-style-type:none;
}

.fnt{
    font-size: 13px;
}

.input_like {
    position: relative;
    top: 195px;
    border: 2px #FFA800 solid;
    width: 278px;
    height: 40px;
    margin-left: 25px;
}

.input_like input {
    position: relative;
    top: -178px;
    height: 32px;
    width: 232px;
    border-color: transparent;
    font-size: 14px;
    outline:none;
}

.input_like span {
    position: relative;
    top: -178px;
    float: left;
    height: 27px;
    width: 29px;
    background: url(http://css.mafengwo.net/images/gonglve/new-gl-icon6.png) -20px -60px no-repeat;
    margin-top: 7px;
    margin-left: 8px;
    font-size: 14px;
}

.el-input__inner{
    border-radius: 0 !important;
}

.app_d {
    position: relative;
    top: 80px;
    border-bottom: 1px #E3E3E3 solid;
    width: 278px;
    margin-left: 25px;
    padding-bottom: 30px;
}

a {
    display: inline;
}

.domn_in {
    width: 200px;
    margin-left: 65px;
    margin-top: -50px;
}

.domn_in h4 {
    font-size: 16px;
    line-height: 18px;
    font-weight: normal;
    margin-top: 5px;
    margin-bottom: 12px;
}

h4 a {
    color: #ff9d00;
}

h4 a:hover {
    outline: 0;
    text-decoration: underline;
    color: #ff8a00;
}

.domn_in p {
    margin-top: 8px;
}

.domn_in p a {
    float: left;
    color: #666;
    line-height: 14px;
}

.domn_in p span {
    float: left;
    color: #D8D8D8;
    height: 12px;
    width: 2px;
    line-height: 14px;
    padding: 0px 5px;
    overflow: hidden;
}

.down {
    position: absolute;
    left: 70px;
    top: 20px;
    z-index: 100;
    width: 130px;
}

.down_img {
    height: 50px;
    width: 50px;
    position: relative;
    left: -40px;
}
</style>