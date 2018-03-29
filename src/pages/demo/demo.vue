<template>
  <div class="demo">
    1
  </div>
</template>

<script>
export default {
  name: 'Demo',
  components: {
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
  $demo-background-color: #f1f1f1;
  .demo {
    width: 100%;
    height: 100%;
    background: $demo-background-color;
    // border: solid 1px red;
    box-sizing: border-box;
  }
</style>
