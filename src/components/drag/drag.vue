 <!--公用组件：CButton 组件
    /**
     * 组件名称：拖拽组件滑动
     * @module ./components/drag/drag.vue
     * @desc  基于vue-touch的拖拽组件
     * @author LieZuoPing
     * @date  2018年7月25日10点
     * @param {Object} [title] - 参数说明
     * @param {String} [columns] - 参数说明
     * @example 调用示例
     *  <c-button :title="title" :columns="columns" :tableData="tableData"></c-button>
     */
-->
<template>
  <div class="vuec_drag_container">
    <v-touch v-on:panmove="fnMove" class="vuec_drag_list_box" :style="moveObj" ref="dragDom">拖动</v-touch>
  </div>
</template>

<script>
export default {
  name: 'Drag',
  components: {
  },
  data () {
    return {
      moveObj: {
        left: '0px',
        top: '0px'
      },
      dragInfo: {
        width: '',
        height: ''
      }
    }
  },
  created () {
  },
  mounted () {
    // 计算拖拽元素初始值得宽和高
    this.dragInfo.width = this.$refs.dragDom.hammer.element.clientWidth
    this.dragInfo.height = this.$refs.dragDom.hammer.element.clientHeight
  },
  beforeDestroy () {
  },
  methods: {
    /**
     * 拖拽开始位置记录
     */
    fnStart (e) {
      // es6 结构赋值
      let { scrollHeight, scrollLeft, scrollTop, scrollWidth } = e.touches[0].target
      this.$emit('touch-start', { scrollHeight, scrollLeft, scrollTop, scrollWidth })
    },
    /**
     * 边界检测函数
     */
    fnMove (e) {
      this.moveObj.left = `${e.center.x - this.dragInfo.width / 2}px`
      this.moveObj.top = `${e.center.y - this.dragInfo.height * 1.5}px`
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../style/config.base.scss';
  @import './drag.style';
  .vuec_drag_container {
    width: 100%;
    height: px2rem(750px);
    box-sizing: border-box;
    position: relative;
    .vuec_drag_list_box {
      width: px2rem(100px);
      height: px2rem(100px);
      box-sizing: border-box;
      text-align: center;
      color: #fff;
      background: $drag_box_background_color;
      position: absolute;
      line-height: px2rem(50px);
      border-radius: 50%;
    }
  }
</style>
