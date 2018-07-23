<template>
  <div class="mask-demo">
    <button size="default" type="button">点击事件</button>
    <ActionSheet></ActionSheet>
  </div>
</template>

<script>
import { ActionSheet } from '../../components'
export default {
  name: 'MaskDemo',
  components: {
    ActionSheet
  },
  data () {
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
<style lang="scss" scoped>
  @import '../../style/config.base';
  .mask-demo {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
</style>
