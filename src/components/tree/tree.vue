<template>
  <ul class="vuec-tree">
    <li v-for="(item, index) in nodeData.child" :key="item.id">
      <div class="item" @click.stop ="tapFather(item)">
          <span>{{item.title}}</span>
          <img :src="item.portrait === ''? '../../../static/images/logo.png':item.portrait" alt="" >
          <span>{{item.name}}</span>
          <div class="spouse" v-if="item.spouse.length !==0" @click.stop="tapMather(item.spouse)">
              <span>{{item.spouse[0].title}}</span>
              <img :src="item.spouse[0].portrait === ''? '../../../static/images/logo.png':item.portrait" alt="" >
              <span>{{item.spouse[0].name}}</span>
          </div>
      </div>
      <em class="lineLeft" v-if="index !== 0" :data="index"></em>
      <em class="lineright" v-if="(index) !== (nodeData.child.length-1)" :data="nodeData.child.length"></em>
      <!-- 递归组件自己 -->
      <Tree v-if="item.child.length !==0" :nodeData="item"></Tree>
    </li>
  </ul>
</template>

<script>
import defaultProps from './props'
export default {
  name: 'Tree',
  props: {
    nodeData: {
      type: Object,
      default: function () {
        return defaultProps[0]
      }
    }
  },
  data () {
    return {
      index: 2,
      data: '../../../static/images/logo.png'
    }
  },
  created () {
    // console.log(this.$props.nodeData)
  },
  methods: {
    tapFather (item) {
      this.$bus.emit('tap-father', item)
    },
    tapMather (item) {
      this.$bus.emit('tap-mather', item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './tree.style';
ul {
    display: flex;
    margin: 10px 30px;
    flex-direction: row ;
    margin: 0 auto;
    width:100%;
    box-sizing: border-box;
    flex-wrap: nowrap;
    position: relative;
    justify-content:center;
  li {
    box-sizing: border-box;
    display: flex;
    padding: 0 px2rem(70px);
    flex-direction: column ;
    text-align: center;
    position: relative;
    .item, .spouse{
      display: block;
      margin: 0 auto;
      background: $itemBackgroundColor;
      border: $treeNodeBorder;
      margin-bottom: px2rem(60px);
      span{
        width: px2rem(120px);
        height: px2rem(40px);
        display: block;
      }
      img{
        width: px2rem(120px);
        height: px2rem(80px);
        display: block;
      }
    }
    .item {
      position: relative;
      background: $itemBackgroundColor;
    }
    .spouse {
      position: absolute;
      left: px2rem(140px);
      border: $spouseBorder;
      top:0;
    }
    .spouse::after{
      content: ' ';
      display:block;
      position: absolute;
      width: px2rem(20px);
      height: 3px;
      background: $treeBorderColor;
      left: px2rem(-20px);
      z-index: -1;
      top:px2rem(80px);
    }
    .item::after {
      content: ' ';
      display:block;
      position: absolute;
      width: 3px;
      height: px2rem(34px);
      background: $treeBorderColor;
      left: px2rem(58px);
      z-index: -1;
      bottom:px2rem(-34px);
    }
    .item::before {
      content: ' ';
      display: block;
      position: absolute;
      width: 3px;
      height: px2rem(34px);
      background: $treeBorderColor;
      left: px2rem(58px);
      z-index: -1;
      top: px2rem(-34px);
    }
    .lineLeft,.lineright {
      display: block;
      position: absolute;
      height: 3px;
      background: $treeBorderColor;
      z-index: -1;
      right: 50%;
      top: px2rem(-34px);
      left: px2rem(-30px);
    }
    .lineright {
      right: px2rem(30px);
      left: 50%;
      background: $treeBorderColor;
    }
  }
}

</style>
