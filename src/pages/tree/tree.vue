<template>
  <div class="tree" v-if="nodeData.child.length !== 0">
    <treenode  @tapFather="tapFather"></treenode>
  </div>
</template>

<script>
import treenode from '../../components/tree/tree'
import test from '../../../static/json/tree.json'
export default {
  name: 'Tree',
  components: {
    treenode: treenode
  },
  data () {
    return {
      nodeData: test[0]
    }
  },
  created () {
    this.$bus.on('tap-father', this.tapFather)
  },
  beforeDestroy () {
    this.$bus.off('tap-father', this.tapFather)
  },
  methods: {
    tapFather (e) {
      console.log(e)
    },
    fnMather (e) {
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
    border: solid 1px red;
    box-sizing: border-box;
    zoom: 1;
  }
</style>
