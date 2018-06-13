<template>
  <div class="tree" :style="{minWidth: width}" ref="tree">
    <treenode  @on-click="tapTreeItem"></treenode>
  </div>
</template>

<script>
import treenode from '../../components/tree/tree'
import { mapState } from 'vuex'
export default {
  name: 'Tree',
  components: {
    treenode: treenode
  },
  data () {
    return {
      width: '375px'
    }
  },
  computed: mapState({ // 测试vuex 项目架构数据
    test: state => state.treeModule.test
  }),
  created () {
    this.$bus.on('on-click', this.tapTreeItem)
  },
  mounted () {
    this.width = this.$refs.tree.children[0].firstChild.clientWidth + 20 + 'px'
  },
  beforeDestroy () {
    this.$bus.off('on-click', this.tapTreeItem)
  },
  methods: {
    tapTreeItem (e) {
      console.log(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../style/config.base.scss';
  .tree {
    padding: 40px;
    height: 100%;
    overflow: scroll;
    box-sizing: border-box;
    zoom: 1;
  }
</style>
