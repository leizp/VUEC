<template>
  <div class="demo">
    <gird >
        <girditem v-for="item in list" :key="item.index" :width="33.33" :gridItemData="item"></girditem>
    </gird>
  </div>
</template>

<script>
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
      list: [{
        title: 'Tree',
        src: `../../static/images/logo.png`,
        link: `/tree`,
        index: 1
      }, {
        title: '测试',
        src: `../../static/images/logo.png`,
        link: ``,
        index: 2
      }, {
        title: '测试',
        src: `../../static/images/logo.png`,
        link: ``,
        index: 3
      }, {
        title: '测试',
        src: `../../static/images/logo.png`,
        link: ``,
        index: 4
      }, {
        title: 'Tree',
        src: `../../static/images/logo.png`,
        link: `/tree`,
        index: 5
      }, {
        title: '测试',
        src: `../../static/images/logo.png`,
        link: ``,
        index: 6
      }, {
        title: '测试',
        src: `../../static/images/logo.png`,
        link: ``,
        index: 7
      }, {
        title: '测试',
        src: `../../static/images/logo.png`,
        link: ``,
        index: 8
      }, {
        title: 'Tree',
        src: `../../static/images/logo.png`,
        link: `/tree`,
        index: 9
      }, {
        title: '测试',
        src: `../../static/images/logo.png`,
        link: ``,
        index: 10
      }, {
        title: '测试',
        src: `../../static/images/logo.png`,
        link: ``,
        index: 11
      }, {
        title: '测试',
        src: `../../static/images/logo.png`,
        link: ``,
        index: 12
      }, {
        title: 'Tree',
        src: `../../static/images/logo.png`,
        link: `/tree`,
        index: 13
      }, {
        title: '测试',
        src: `../../static/images/logo.png`,
        link: ``,
        index: 14
      }, {
        title: '测试',
        src: `../../static/images/logo.png`,
        link: ``,
        index: 15
      }, {
        title: '测试',
        src: `../../static/images/logo.png`,
        link: ``,
        index: 16
      }]
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
  .demo {
    width: 100%;
    height: 100%;
    background: $demo-background-color;
    // border: solid 1px red;
    box-sizing: border-box;
  }
</style>
