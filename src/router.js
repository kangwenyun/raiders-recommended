import Vue from 'vue'
import Router from 'vue-router'
 
import home from './components/home.vue'
import login from './components/login.vue'
import write_raiders from './components/write_raiders.vue'
import mdd from './components/mdd.vue'
import raiders from './components/raiders.vue'
import article_detail from './components/article_detail.vue'

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
            component: home
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/write_raiders',
            component: write_raiders
        },
        {
            path: '/mdd',
            component: mdd
        },
        {
            path: '/raiders',
            component: raiders
        },
        {
            path: '/article_detail/*',
            component: article_detail
        }
    ]
})
// router.push('/');    //设置默认打开页面
// 5.导出路由
export default router
