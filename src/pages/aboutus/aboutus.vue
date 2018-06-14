<template>
  <div class="aboutus">
      <div>邮箱：leizuoping_lxl@163.com</div>
      <div>
        <img src="../../assets/logo.png" alt="" srcset="">
      </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
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
    tapGirdItem (e) {
      console.log(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../style/config.base.scss';
  $demo-background-color: #fff;
  .aboutus {
    width: 100%;
    height: 100%;
    background: $demo-background-color;
    box-sizing: border-box;
  }
</style>
