import Vue from 'vue'
import Router from 'vue-router'
 
import home from './components/home.vue'
import mdd from './components/mdd.vue'
import gonglve from './components/gonglve.vue'
import login from './components/login.vue'
import regist from './components/regist.vue'
import write_gonglve from './components/write_gonglve.vue'
import youji_detail from './components/youji_detail.vue'
import setting from './components/setting.vue'
import reset from './components/reset_passwd.vue'
import ziyouxing from './components/ziyouxing.vue'
import wenda from './components/wenda.vue'
import wenda_detail from './components/wenda_detail.vue'

// 2.通过Vue的use方法注入Router
Vue.use(Router)
// 3.创建 router 实例，然后传 `routes` 配置
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: home
        },
        {
            path: '/home',
            component: home,
            name: home
        },
        {
            path: '/mdd',
            component: mdd,
            name: mdd
        },
        {
            path: '/gonglve',
            component: gonglve
        },
        {
            path: '/login',
            component: login,
            name: 'login' // 用于页面间传递参数
        },
        {
            path: '/regist',
            component: regist,
            name: 'regist'
        },
        {
            path: '/write_gonglve',
            component: write_gonglve
        },
        {
            path: '/youji*',
            component: youji_detail
        },
        {
            path: '/setting',
            component: setting
        },
        {
            path: '/reset*',
            component: reset
        },
        {
            path: '/ziyouxinggonglve*',
            component: ziyouxing
        },
        {
            path: '/wenda',
            component: wenda
        },
        {
            path: '/wenda_detail*',
            component: wenda_detail
        }
    ]
})
// router.push('/');    //设置默认打开页面
// 5.导出路由
export default router

