// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js' // 引入flexible.js
import VueBus from 'vue-bus' // 监听事件传递，主要用于递归组件
import axios from 'axios'
import store from './store/index'
import VueWechatTitle from 'vue-wechat-title'
import VueTouch from 'vue-touch'

import {
  SYNC_SET_META_TITLE,
  SYNC_HIDE_TAB_PAGE
} from './store/types/index'
// import VConsole from '../node_modules/vconsole/dist/vconsole.min' // 手机端测试用
// let vconsole = new VConsole() // 手机端测试用
const FastClick = require('fastclick')
FastClick.attach(document.body) // 解决点击延迟问题

require('es6-promise').polyfill()
Vue.prototype.$axios = axios

Vue.use(VueWechatTitle)
Vue.use(VueTouch, {name: 'v-touch'})

router.afterEach(function (to) {
  store.commit({
    type: SYNC_SET_META_TITLE,
    title: to.meta.title
  })

  if (['/', '/aboutus', '/demo'].includes(to.path)) {
    store.commit({
      type: SYNC_HIDE_TAB_PAGE,
      isTabPage: true
    })
  } else {
    store.commit({
      type: SYNC_HIDE_TAB_PAGE,
      isTabPage: false
    })
  }
})

Vue.use(VueBus)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 这可以把 store 的实例注入所有的子组件
  store,
  // vconsole, // 移动端找bug是调用
  components: { App },
  template: '<App/>'
})
