import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router.js'
import VueResource  from  'vue-resource'
import global_ from './components/Global'//引用文件

Vue.prototype.GLOBAL = global_//挂载到Vue实例上面

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)

Vue.http.interceptors.push((request, next) => {//拦截器
  // 跨域携带cookie
  request.credentials = true;
  next();
});

new Vue({
  router,
  render: h => h(App), //提供一个视图给 el 挂载
}).$mount('#app')
