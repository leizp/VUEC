 <!--公用组件：CButton 组件
    /**
     * 组件名称
     * @module 组件路径
     * @desc 组件描述
     * @author LieZuoPing
     * @date 2018年7月24日17点
     * @param {Object} [title]    - 参数说明
     * @param {String} [columns] - 参数说明
     * @example 调用示例
     *  <c-button :title="title" :columns="columns" :tableData="tableData"></c-button>
     */
-->
<template>
  <div class="vuec_mod_btn_warp">
    <button size="default" type="button">点击事件</button>
  </div>
</template>

<script>
export default {
  name: 'CButton',
  components: {
  },
  props: {
    title: { // 使用之前一定要检验是否存在
      type: String,
      default: 'example'
    },
    demo: {
      type: Object,
      default: () => { // 如果返回的是对象或者数据 请用函数返回
        return {
          name: `测试`,
          color: `red`
        }
      }
    }
  },
  data () { // 组件私有数据
  },
  /**
   * 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
   */
  beforeCreate () {
  },
  /**
   * 在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
   */
  created () { // 页面创建之前
  },
  /**
   * 在挂载开始之前被调用：相关的 render 函数首次被调用。
   */
  beforeMount () {
  },
  /**
   * el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内
   * 注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted：
   * mounted: function () {
   * this.$nextTick(function () {
   *    Code that will run only after the
   *    entire view has been rendered
   * })`
   */
  mounted () {
  },
  /**
   * 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
   */
  beforeUpdate () {
  },
  /**
   * keep-alive 组件激活时调用。
   */
  activited () {
  },
  /**
   * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
   * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。
   * 注意 updated 不会承诺所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以用 vm.$nextTick 替换掉 updated：
   */
  updated () {
  },
  beforeRouteUpdate () {
  },
  /**
   * 实例销毁之前调用。在这一步，实例仍然完全可用
   */
  beforeDestroy () {
  },
  methods: {
  },
  filter: {
  },
  computed: {
  },
  watch: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../style/config.base';
  .mask-demo {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
</style>
