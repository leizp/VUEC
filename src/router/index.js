import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tree',
      component: resolve => require(['@/pages/tree/tree.vue'], resolve) // require 异步加载组件，当页面切换到这个组件的时候使用这个组件
    }, {
      path: '/api',
      name: 'Api',
      component: resolve => require(['@/pages/api/api.vue'], resolve) // require 异步加载组件，当页面切换到这个组件的时候使用这个组件
    }
  ]
})
