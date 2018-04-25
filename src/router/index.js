import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: '首页'
      },
      component: resolve => require(['@/pages/home/home.vue'], resolve) // require 异步加载组件，当页面切换到这个组件的时候使用这个组件
    }, {
      path: '/other',
      name: 'Other',
      meta: {
        title: '杂项测试'
      },
      component: resolve => require(['@/pages/other/other.vue'], resolve)
    }, {
      path: '/tree',
      name: 'Tree',
      meta: {
        title: 'TREE'
      },
      component: resolve => require(['@/pages/tree/tree.vue'], resolve)
    }, {
      path: '/demo',
      name: 'Demo',
      meta: {
        title: 'DEMO'
      },
      component: resolve => require(['@/pages/demo/demo.vue'], resolve)
    }, {
      path: '/aboutus',
      name: 'Aboutus',
      meta: {
        title: '关于我们'
      },
      component: resolve => require(['@/pages/aboutus/aboutus.vue'], resolve)
    }, {
      path: '/girddemo',
      name: 'GirdDemo',
      meta: {
        title: '九宫格'
      },
      component: resolve => require(['@/pages/girddemo/girddemo.vue'], resolve)
    }
  ]
})
