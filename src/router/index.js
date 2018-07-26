import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history', // HTML5 History 模式，去掉#
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: '首页'
      },
      component: resolve => require(['@/pages/home/home.vue'], resolve) // require 异步加载组件，当页面切换到这个组件的时候使用这个组件
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
    }, {
      path: '/tabbar',
      name: 'TabBar',
      meta: {
        title: 'TabBar'
      },
      component: resolve => require(['@/pages/tabbar/tabbar.vue'], resolve)
    }, {
      path: '/header',
      name: 'Header',
      meta: {
        title: 'Header'
      },
      component: resolve => require(['@/pages/header/header.vue'], resolve)
    }, {
      path: '/drag',
      name: 'DragPage',
      meta: {
        title: '拖拽'
      },
      component: resolve => require(['@/pages/drag/drag.vue'], resolve)
    }, {
      path: '/DragToSort',
      name: 'DragToSort',
      meta: {
        title: '拖拽排序'
      },
      component: resolve => require(['@/pages/drag/dragToSort.vue'], resolve)
    }, {
      path: '/ActionSheet',
      name: 'ActionSheet',
      meta: {
        title: 'ActionSheet'
      },
      component: resolve => require(['@/pages/actionSheet/actionSheet.vue'], resolve)
    }, {
      path: '/ButtonDemo',
      name: 'ButtonDemo',
      meta: {
        title: 'Button'
      },
      component: resolve => require(['@/pages/button/button.vue'], resolve)
    }, {
      path: '/other',
      name: 'Other',
      meta: {
        title: '杂项测试'
      },
      component: resolve => require(['@/pages/other/other.vue'], resolve)
    }
  ]
})
