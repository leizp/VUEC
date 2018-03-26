<template>
  <div class="tree">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'Tree',
  data () {
    return {
      msg: '测试用vue递归'
    }
  },
  created () {
    console.log(this.$axios)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  $browser-default-font-size: 75px !default; // sass 跟聚设计图定义默认rem更元素，设计图的1/10
  //sass px 转rem函数
  @function px2rem($px){//$px为需要转换的字号
    @return $px / $browser-default-font-size * 1rem;
  }
  .tree {
    width: px2rem(750px);
    height: px2rem(1234px);
    border: solid 1px red;
    box-sizing: border-box;
  }
</style>
