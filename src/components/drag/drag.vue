<template>
  <div class="Drag">
    <div class="drag-list">
      <div class="dragBox" :style="moveObj" @touchstart="fnStart" @touchmove="fnMove" ref="dragDom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Drag',
  components: {
  },
  data () {
    return {
      moveObj: {
        left: 0,
        top: 0
      },
      dragInfo: {
        width: '',
        height: ''
      }
    }
  },
  created () {
  },
  mounted () {
    console.log(this.$refs.dragDom.clientHeight, this.$refs.dragDom.clientWidth)
    this.dragInfo.width = this.$refs.dragDom.clientWidth
    this.dragInfo.height = this.$refs.dragDom.clientHeight
  },
  beforeDestroy () {
  },
  methods: {
    fnStart (e) {
      console.log(e)
    },
    fnMove (e) {
      // console.log(e.touches[0].clientX, e.touches[0].clientY)
      this.moveObj.left = `${e.touches[0].clientX - (this.dragInfo.width / 2)}px`
      this.moveObj.top = `${e.touches[0].clientY - (this.dragInfo.height + this.dragInfo.height / 2)}px`
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../style/config.base.scss';
  @import './drag.style';
  .Drag {
    width: 100%;
    height: px2rem(750px);
    background: $demo-background-color;
    box-sizing: border-box;
    .drag-list {
      width: 100%;
      height: px2rem(750px);
      background: $drag-warp-background-color;
      box-sizing: border-box;
      position: relative;
      .dragBox {
        width: px2rem(100px);
        height: px2rem(100px);
        box-sizing: border-box;
        background: $drag-box-background-color;
        // border-radius: 50%;
        position: absolute;
      }
    }
  }
</style>
