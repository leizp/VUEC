<template>
  <div class="home">
    首页
  </div>
</template>

<script>
import gird from '../../components/grid/grid'
import girditem from '../../components/grid/grid-item'
export default {
  name: 'Home',
  components: {
    gird,
    girditem
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../style/config.base.scss';
  $demo-background-color: #fff;
  .home {
    width: 100%;
    height: 100%;
    background: $demo-background-color;
    // border: solid 1px red;
    box-sizing: border-box;
  }
</style>
