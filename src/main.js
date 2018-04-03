// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
import FastClick from 'fastclick' // 引入flexible.js
import VueBus from 'vue-bus' // 监听事件传递，主要用于递归组件
import axios from 'axios'
import VConsole from '../node_modules/vconsole/dist/vconsole.min' // 手机端测试用
let vconsole = new VConsole() // 手机端测试用
FastClick.attach(document.body) // 解决点击延迟问题

require('es6-promise').polyfill()
Vue.prototype.$axios = axios
Vue.use(VueBus)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vconsole,
  components: { App },
  template: '<App/>'
})
