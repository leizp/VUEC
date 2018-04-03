<template>
  <div class="vuec-header">
    <solt name="left">
      <div class="left">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
    </solt>
    <solt name="center">
      <div class="center">demo</div>
    </solt>
    <solt name="right">
      <div class="right">demo</div>
    </solt>
  </div>
</template>

<script>
import prpos from './props'
export default {
  name: 'CHeader',
  props: prpos,
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './header.style';
.vuec-header {
  position: $position-type;
  @include locationEle(0,none,0,0);
  background:$header-background-color;
  height: $header-height;
  font-size: $header-font-size;
  color: $header-font-color;
  line-height: $header-height;
  box-sizing: border-box;
  .left {
    height: 100%;
    width: 20%;
    font-size: 14px;
    box-sizing: border-box;
    // background-image: $left-icon-src;
    // background: url($left-icon-src) no-repeat;
    // background-position: -24px center;
    // background-size: 100% 30px;
    float: left;
  }
  .center {
    height: 100%;
    box-sizing: border-box;
    float: left;
    width: 60%;
    text-align: center;
    line-height: $header-height;
  }
  .right {
    height: 100%;
    box-sizing: border-box;
    float: left;
    width: 20%;
    text-align: center;
    line-height: $header-height;
  }
}

</style>
