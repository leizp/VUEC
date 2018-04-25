import vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)

const state = {
  headerTitle: '首页', // 切换标CHeader 标题栏
  isTabPage: true // 是否显示底部tabbar 导航栏
}

export default new Vuex.Store({
  state,
  mutations: {
    changeDocumentTitle (state, payload) {
      state.headerTitle = payload.title
    },
    hideTabPage (state, payload) {
      state.isTabPage = payload.isTabPage
    }
  }
})
