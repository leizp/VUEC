export default {
  leftIcon: {
    type: Object,
    default: function () {
      return {
        leftEnterIconSrc: '../../../static/images/header/icon/titlebar_icon_back.white.svg',
        leftLeaveIconSrc: '../../../static/images/header/icon/titlebar_icon_back.black.svg'
      }
    }
  },
  headerTitle: {
    type: String,
    default: 'VUEC'
  }
}
