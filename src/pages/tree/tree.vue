<template>
  <div class="tree" v-if="nodeData.child.length !== 0">
    <treenode :nodeData="nodeData"></treenode>
  </div>
</template>

<script>
import treenode from '../../components/tree-node'
import test from '../../../static/json/tree.json'
console.log(test)
export default {
  name: 'Tree',
  components: {
    treenode: treenode
  },
  data () {
    return {
      nodeData: test[0]
      // nodeData: {
      //   uname: '主仁興',
      //   portrait: '../../../static/images/logo.png',
      //   callname: '我'
      // }
    }
  },
  created () {
    console.log(this.nodeData.child.length)
    // console.log(this.$axios)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../style/config.base.scss';
  .tree {
    width:100000px;
    padding: 40px;
    height: 100%;
    overflow: scroll;
    border: solid 1px red;
    box-sizing: border-box;
    zoom: 1;
  }
</style>
