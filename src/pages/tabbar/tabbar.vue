<template>
  <div class="tabBarPage">
    <h3>只显示两个</h3>
    <div class="showThree">
      <tarbar :tabbarConfig="testData[0]" v-if="isTabPage">
      </tarbar>
    </div>
    <h3>只显示三个</h3>
    <div class="showThree">
      <tarbar :tabbarConfig="testData[1]" v-if="isTabPage">
      </tarbar>
    </div>
    <h3>只显示四个</h3>
    <div class="showThree">
      <tarbar :tabbarConfig="testData[2]" v-if="isTabPage">
      </tarbar>
    </div>
    <h3>只显示五个</h3>
    <div class="showThree">
      <tarbar :tabbarConfig="testData[3]" v-if="isTabPage">
      </tarbar>
    </div>
  </div>
</template>

<script>
import Tarbar from '../../components/tabbar/tabbar'
import testData from './tabbar.test.data.js'
export default {
  name: 'tabbar',
  components: {
    Tarbar
  },
  data () {
    return {
      isTabPage: true,
      testData: testData
    }
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
<style lang="scss">
  @import '../../style/config.base.scss';
  .tabBarPage {
    width: 100%;
    height: 100%;
    background: $demo-background-color;
    box-sizing: border-box;
    h3 {
      padding-left: px2rem(15px);
      line-height: px2rem(60px);
      box-sizing: border-box;
    }
    .showThree {
      width: 100%;
      height: px2rem(100px);
      position: relative;
      &:after{
        @include border-bottom-point5-line ($border-color: #d9d9d9);
      }
    }
  }
</style>
