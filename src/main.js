// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Vuex from 'vuex'
import store from './store'
//import axios from 'axios';

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(store)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
// 路由跳转
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
  
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  ElementUI,
  router,
  store,
  template: '<App/>',
  components: { App }
})
