import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tree',
      component: resolve => require(['@/pages/tree/tree.vue'], resolve)
    }
  ]
})
