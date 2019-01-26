<template>
    <div class="setting">
        <el-col :span="6">
            <el-menu
            :default-active="active_index"
            class="el-menu-vertical-demo aside"
            active-text-color="#000"
            @select="selectPage">
                <el-menu-item v-for="item in my" 
                :index=item.index :key=item.index
                :class="active_index == item.index ? 'on' : ''">
                    <i :class="item.class"></i>
                    <span slot="title">{{ item.title }}</span>
                </el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="18">
            <div class="hd">
                <strong>{{ title[active_index] }}</strong>
                <span>资料完善度
                <el-progress class="progress" :text-inside="true" :stroke-width="18" 
                :percentage="percentage" color="#bddf7d"></el-progress>
                </span>
            </div>
            <setting-info v-if="active_index == 'info'"></setting-info>
            <setting-img v-else-if="active_index == 'img'"></setting-img>
            <setting-bangding v-else-if="active_index == 'bangding'"></setting-bangding>
            <setting-secure v-else-if="active_index == 'secure'"></setting-secure>
            <setting-nest v-else-if="active_index == 'nest'"></setting-nest>
            <setting-blacklist v-else-if="active_index == 'blacklist'"></setting-blacklist>
            <setting-money v-else></setting-money>
        </el-col>
    </div>
</template>

<script>

import setting_info from './setting_info.vue'
import setting_img from './setting_img.vue'
import setting_bangding from './setting_bangding.vue'
import setting_secure from './setting_secure.vue'
import setting_nest from './setting_nest.vue'
import setting_blacklist from './setting_blacklist.vue'
import setting_money from './setting_money.vue'

export default {
  name: 'setting',
  components: {
    "setting-info": setting_info,
    "setting-img": setting_img,
    "setting-bangding": setting_bangding,
    "setting-secure": setting_secure,
    "setting-nest": setting_nest,
    "setting-blacklist": setting_blacklist,
    "setting-money": setting_money
  },
  data() {
    return{
        account: 'pu971954596@qq.com',
        title: {
            'info': '我的信息',
            'img': '我的头像',
            'bangding': '绑定设置',
            'secure': '账号安全',
            'nest': '我的窝设置',
            'blacklist': '黑名单管理',
            'money': '我的钱包',
        },
        percentage: 0,
        active_index: 'info',
        my: [
            { index: 'info', class: 'i1', title: '我的信息' },
            { index: 'img', class: 'i2', title: '我的头像' },
            { index: 'bangding', class: 'i3', title: '绑定设置' },
            { index: 'secure', class: 'i4', title: '账号安全' },
            { index: 'nest', class: 'i5', title: '我的窝设置' },
            { index: 'blacklist', class: 'i6', title: '黑名单管理' },
            { index: 'money', class: 'i7', title: '我的钱包' },
        ]
    };
  },
  created() {
    this.load()
  },
  methods:{
    load(){
        var vm = this
        vm.$http.get(this.GLOBAL.baseUrl + '/percentage?account=' + this.account)
            .then((response) => {
                console.log(response)
                if (response.body.status){
                    this.percentage = response.body.percentage
                } else {
                    this.$message({
                        message: response.body.msg,
                        type: 'error'
                    })
                }
        },(response) => {});
    },
    selectPage(index) {
        this.active_index = index
    } 
  }
}
</script>

<style scope>
.setting {
    margin: 90px auto;;
    width: 1000px;
}

.setting .hd {
    margin: 15px 0 20px 0;
    position: relative;
    border-bottom: 1px solid #eee;
}

.setting .hd strong {
    font-size: 24px;
    color: #444;
    font-weight: normal;
}

.setting .hd span {
    margin-left: 18px;
    color: #999;
}

.progress {
    margin: -25px 0 0 220px;
}

.setting .el-menu{
    border-right: none;
}

.setting .on {
    background-color: #ffa800 !important;
    color: #fff !important;
}

.setting .aside {
    width: 220px;
}

.setting .aside li {
    display: block;
    line-height: 55px;
    color: #666;
    border-radius: 3px;
    margin-bottom: 8px;
}

.setting .aside i {
    background: url(https://css.mafengwo.net/images/isettings/i_left2_@2x.png) no-repeat;
    background-size: 44px;
    width: 22px;
    height: 22px;
    display: inline-block;
    /* background: url(https://css.mafengwo.net/images/isettings/i_left4.png) no-repeat; */
    margin: 0 10px 0 24px;
    vertical-align: middle;
}

.setting .i1 {
    background-position: 0 0;
}

.setting li.on .i1 {
    background-position: -22px 0;
}

.setting .i2 {
    background-position: 0 -22px !important;
}

.setting li.on .i2 {
    background-position: -22px -22px !important;
}

.setting .i3 {
    background-position: 0 -44px !important;
}

.setting li.on .i3 {
    background-position: -22px -44px !important;
}

.setting .i4 {
    background-position: 0 -66px !important;
}

.setting li.on .i4 {
    background-position: -22px -66px !important;
}

.setting .i5 {
    background-position: 0 -154px !important;
}

.setting li.on .i5 {
    background-position: -22px -154px !important;
}

.setting .i6 {
    background-position: 0 -176px !important;
}

.setting li.on .i6 {
    background-position: -22px -176px !important;
}

.setting .i7 {
    background-position: 0 -198px !important;
}

.setting li.on .i7 {
    background-position: -22px -198px !important;
}

.el-progress--text-inside .el-progress-bar {
    padding-right: 250px;
}

</style>
