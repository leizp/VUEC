// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js' // 引入flexible.js
import VueBus from 'vue-bus' // 监听事件传递，主要用于递归组件
import axios from 'axios'
require('es6-promise').polyfill()
Vue.prototype.$axios = axios
Vue.use(VueBus)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
