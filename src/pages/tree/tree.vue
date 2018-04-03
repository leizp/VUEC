<template>
  <div class="tree" >
    <treenode  @on-click="tapTreeItem"></treenode>
  </div>
</template>

<script>
import treenode from '../../components/tree/tree'

export default {
  name: 'Tree',
  components: {
    treenode: treenode
  },
  data () {
    return {
    }
  },
  created () {
    this.$bus.on('on-click', this.tapTreeItem)
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
