<template>
  <div class="demo">
    <gird >
        <girditem v-for="item in list" :key="item.index" :max="4" :gridItemData="item"></girditem>
    </gird>
  </div>
</template>

<script>
import config from './demo.config'
import gird from '../../components/grid/grid'
import girditem from '../../components/grid/grid-item'
export default {
  name: 'Demo',
  components: {
    gird,
    girditem
  },
  data () {
    return {
      list: config
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
  .demo {
    width: 100%;
    height: 100%;
    position: relative;
    background: $demo-background-color;
    box-sizing: border-box;
  }
</style>
