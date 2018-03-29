<template>
  <div id="app">
    <tarbar @on-change ="tabChange" :tabbarConfig="tabbarConfig">
    </tarbar>
    <router-view />
  </div>
</template>

<script>
import Tarbar from './components/tabbar/tabbar'
export default {
  name: 'App',
  components: {
    Tarbar
  },
  data () {
    return {
      tabbarConfig: [{
        title: '首页',
        default: true,
        link: '',
        name: 'Demo',
        index: 0,
        query: {},
        enterSrc: '../../../static/images/tabbar/home-enter.png',
        leaveSrc: '../../../static/images/tabbar/home-leave.png',
        enterColor: '#1296db',
        leaveColor: '#707070'
      }, {
        title: '详情页',
        default: false,
        link: '',
        index: 1,
        name: 'Tree',
        query: {},
        enterSrc: '../../../static/images/tabbar/home-enter.png',
        leaveSrc: '../../../static/images/tabbar/home-leave.png',
        enterColor: '#1296db',
        leaveColor: '#707070'
      }]
    }
  },
  methods: {
    tabChange (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss">
@import './style/reset.css';
@import './style/config.base.scss';
html,body,#app {
  font-family: '微软雅黑';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
#app {
  padding-bottom: px2rem(100px);
}
</style>
