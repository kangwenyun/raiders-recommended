import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router.js'
import  VueResource  from  'vue-resource'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App), //提供一个视图给 el 挂载
}).$mount('#app')


Vue.prototype.baseUrl = function () {
  return 'http://172.18.25.255:3333';
};