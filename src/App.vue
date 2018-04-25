<template>
  <div id="app" :class="{'noPadBottom': !isTabPage, 'hasPadBotom': isTabPage}">
    <c-header :headerTitle="documentTitle"></c-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tarbar @on-change ="tabChange" :tabbarConfig="tabbarConfig" v-if="isTabPage">
    </tarbar>
  </div>
</template>

<script>
import Tarbar from './components/tabbar/tabbar'
import CHeader from './components/header/header'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    Tarbar,
    CHeader
  },
  data () {
    return {
      tabbarConfig: [{
        title: '首页',
        default: true,
        link: '',
        path: '/',
        index: 0,
        query: {},
        enterSrc: '../../../static/images/tabbar/home-enter.png',
        leaveSrc: '../../../static/images/tabbar/home-leave.png',
        enterColor: '#1296db',
        leaveColor: '#707070'
      }, {
        title: 'DEMO',
        default: false,
        link: '',
        index: 1,
        path: '/demo',
        query: {},
        enterSrc: '../../../static/images/tabbar/demo-enter.svg',
        leaveSrc: '../../../static/images/tabbar/demo-leave.svg',
        enterColor: '#1296db',
        leaveColor: '#707070'
      }, {
        title: '关于我们',
        default: false,
        link: '',
        index: 1,
        path: '/aboutus',
        query: {},
        enterSrc: '../../../static/images/tabbar/aboutus-enter.png',
        leaveSrc: '../../../static/images/tabbar/aboutus-leave.png',
        enterColor: '#1296db',
        leaveColor: '#707070'
      }],
      isPadBottom: '0 !important'
    }
  },
  computed: {
    ...mapState({
      documentTitle: state => state.headerTitle,
      isTabPage: state => state.isTabPage
    })
  },
  created () {
  },
  methods: {
    tabChange (e) {
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
  padding-top: px2rem(100px);
}
.noPadBottom {
  padding-bottom: none !important;
}
.hasPadBotom {
  padding-bottom: px2rem(100px);
}
</style>
