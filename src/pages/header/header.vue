<template>
  <div class="vuec-header-demo">
    <h3>头部demo</h3>
    <div class="headerBox">
      <c-header headerTitle="测试"></c-header>
    </div>
  </div>
</template>

<script>
import CHeader from '../../components/header/header'
export default {
  name: 'Header',
  components: {
    CHeader
  },
  data () {
    return {
    }
  },
  created () {
  },
  beforeDestroy () {
  },
  methods: {
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../style/config.base.scss';
  .vuec-header-demo {
    width: 100%;
    height: 100%;
    background: $demo-background-color;
    box-sizing: border-box;
    h3{
      width: 100%;
      height: px2rem(60px);
      line-height: px2rem(60px);
      padding-left: px2rem(15px);
      box-sizing: border-box;
    }
    .headerBox {
      width: 100%;
      height: px2rem(100px);
      position: relative;
      box-sizing: border-box;
    }
  }
</style>
