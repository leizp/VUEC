
<template>
  <div class="vuec_demo_dtsc_page">
    <div class="vddp_wrap">
      <DragToSort :maxNum=20>
        <!-- <div class="" slot="unit">
          111
        </div> -->
      </DragToSort>
    </div>
  </div>
</template>

<script>
import { DragToSort } from '../../components'
export default {
  name: 'DragPage',
  components: {
    DragToSort
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
  .vuec_demo_dtsc_page {
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
    .vddp_wrap {
      width: 100%;
      height: 400px;
      box-sizing: border-box;
    }
  }
</style>
