<template>
    <div class="setting">
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
        active_index: '1',
        my: [
            { index: '1', class: 'i1', title: '我的信息' },
            { index: '2', class: 'i2', title: '我的头像' },
            { index: '3', class: 'i3', title: '绑定设置' },
            { index: '4', class: 'i4', title: '账号安全' },
            { index: '5', class: 'i5', title: '我的窝设置' },
            { index: '6', class: 'i6', title: '黑名单管理' },
            { index: '7', class: 'i7', title: '我的钱包' },
        ]
    };
  },
  methods:{
      selectPage(index){
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

.el-menu{
    border-right: none;
}

.on {
    background-color: #ffa800 !important;
    color: #fff !important;
}

.aside {
    width: 220px;
}

.aside li {
    display: block;
    line-height: 55px;
    color: #666;
    border-radius: 3px;
    margin-bottom: 8px;
}

.aside i {
    background: url(https://css.mafengwo.net/images/isettings/i_left2_@2x.png) no-repeat;
    background-size: 44px;
    width: 22px;
    height: 22px;
    display: inline-block;
    /* background: url(https://css.mafengwo.net/images/isettings/i_left4.png) no-repeat; */
    margin: 0 10px 0 24px;
    vertical-align: middle;
}

.i1 {
    background-position: 0 0;
}

li.on .i1 {
    background-position: -22px 0;
}

.i2 {
    background-position: 0 -22px !important;
}

li.on .i2 {
    background-position: -22px -22px !important;
}

.i3 {
    background-position: 0 -44px !important;
}

li.on .i3 {
    background-position: -22px -44px !important;
}

.i4 {
    background-position: 0 -66px !important;
}

li.on .i4 {
    background-position: -22px -66px !important;
}

.i5 {
    background-position: 0 -154px !important;
}

li.on .i5 {
    background-position: -22px -154px !important;
}

.i6 {
    background-position: 0 -176px !important;
}

li.on .i6 {
    background-position: -22px -176px !important;
}

.i7 {
    background-position: 0 -198px !important;
}

li.on .i7 {
    background-position: -22px -198px !important;
}

</style>
