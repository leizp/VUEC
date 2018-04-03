import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/pages/home/home.vue'], resolve) // require 异步加载组件，当页面切换到这个组件的时候使用这个组件
    }, {
      path: '/api',
      name: 'Api',
      component: resolve => require(['@/pages/api/api.vue'], resolve)
    }, {
      path: '/tree',
      name: 'Tree',
      component: resolve => require(['@/pages/tree/tree.vue'], resolve)
    }, {
      path: '/demo',
      name: 'Demo',
      component: resolve => require(['@/pages/demo/demo.vue'], resolve)
    }, {
      path: '/aboutus',
      name: 'Aboutus',
      component: resolve => require(['@/pages/aboutus/aboutus.vue'], resolve)
    }
  ]
})
