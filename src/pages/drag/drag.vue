<template>
  <div class="dragPage">
    <drag></drag>
  </div>
</template>

<script>
import Drag from '../../components/drag/drag'
export default {
  name: 'DragPage',
  components: {
    Drag
  },
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
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
  .dragPage {
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
  }
</style>
