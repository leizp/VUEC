<template>
  <div class="vuec-mask-demo" @click="fnClick" v-if="show">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ActionSheet',
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
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
    fnClick () {
      this.hideMask()
      this.$emit('on-click', this.show)
    },
    showMask () {
      if (!this.show) {
        this.show = true
      }
    },
    hideMask () {
      if (this.$props.show) {
        this.$props.show = false
      }
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../style/config.base';
  .vuec-mask-demo {
    position: fixed;
    @include locationEle(0,0,0,0);
    background: rgba(0,0,0,0.7);
    z-index: 999;
    box-sizing: border-box;
  }
</style>
