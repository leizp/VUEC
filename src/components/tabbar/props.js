export default {
  tabbarConfig: {
    type: Array,
    default: function () {
      return [{
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
        title: '详情页',
        default: false,
        link: '',
        index: 1,
        path: '/tree',
        query: {},
        enterSrc: '../../../static/images/tabbar/home-enter.png',
        leaveSrc: '../../../static/images/tabbar/home-leave.png',
        enterColor: '#1296db',
        leaveColor: '#707070'
      }, {
        title: '个人中心',
        default: false,
        link: '',
        index: 2,
        path: '/api',
        query: {},
        enterSrc: '../../../static/images/tabbar/home-enter.png',
        leaveSrc: '../../../static/images/tabbar/home-leave.png',
        enterColor: '#1296db',
        leaveColor: '#707070'
      }]
    }
  }
}
