 <!--公用组件：CButton 组件
    /**
     * button组件
     * @module components/button
     * @desc 分装button各种使用情况
     * @author LieZuoPing
     * @date 2018年7月24日17点
     * @param {Object} [title]    - 参数说明
     * @param {String} [columns] - 参数说明
     * @example 调用示例
     *  <c-button :title="title" :columns="columns" :tableData="tableData"></c-button>
     */
-->
<template>
  <div class="vuec-button">
    <button size="default" type="button">点击事件</button>
  </div>
</template>

<script>
export default {
  name: 'CButton',
  components: {
  },
  props: {
  },
  data () {
  },
  created () {
  },
  mounted () {
  },
  activited () {
  },
  update () {
  },
  beforeRouteUpdate () {
  },
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
