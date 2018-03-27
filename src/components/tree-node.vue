<template>
  <ul class="" >
    <li v-for="(item, index) in nodeData.child" :key="item.uid">
      <div class="item" @click.stop="bindClickFather(item)">
          <span>{{item.callname}}</span>
          <img :src="item.portrait === ''? '../../../static/images/logo.png':item.portrait" alt="" >
          <span>{{item.uname}}</span>
          <div class="spouse" v-if="item.spouse.length !==0" @click.stop="bindClickMather(item.spouse)">
              <span>{{item.spouse[0].callname}}</span>
              <img :src="item.spouse[0].portrait === ''? '../../../static/images/logo.png':item.portrait" alt="" >
              <span>{{item.spouse[0].uname}}</span>
          </div>
      </div>
      <em class="lineLeft" v-if="index !== 0" :data="index"></em>
      <em class="lineright" v-if="(index) !== (nodeData.child.length-1)" :data="nodeData.child.length"></em>
      <!-- 递归组件自己 -->
      <TreeNode v-if="item.child.length !==0" :nodeData="item"></TreeNode>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TreeNode',
  props: {
    nodeData: {}
  },
  data () {
    return {
      index: 2,
      data: '../../../static/images/logo.png'
    }
  },
  methods: {
    bindClickFather (item) {
      console.log(item)
    },
    bindClickMather (item) {
      console.log(item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../style/config.base.scss';
$titleBakColor: #b1b1b1;
$treeNodeBorder: solid 1px seagreen;
$treeBorderColor: seagreen;
$itemBackgroundColor: #fff;
$spouseBorder: solid 1px pink;
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
