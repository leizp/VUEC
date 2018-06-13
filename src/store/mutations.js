import {
  SYNC_SET_META_TITLE,
  SYNC_HIDE_TAB_PAGE
} from './types/index'

export const rooteMutations = {
  [SYNC_SET_META_TITLE] (state, payload) { // 改变头部标题title
    state.headerTitle = payload.title
  },
  [SYNC_HIDE_TAB_PAGE] (state, payload) { // 隐藏tabbar页面
    state.isTabPage = payload.isTabPage
  }
}
