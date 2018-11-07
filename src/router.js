import Vue from 'vue'
import Router from 'vue-router'
 
import hello from './components/HelloWorld.vue'
import login from './components/login.vue'
 
// 2.通过Vue的use方法注入Router
Vue.use(Router)
// 3.创建 router 实例，然后传 `routes` 配置
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: hello
        },
        {
            path: '/hello',
            component: hello
        },
        {
            path: '/login',
            component: login
        }
    ]
})
// 5.导出路由
export default router
