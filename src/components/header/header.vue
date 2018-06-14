<template>
  <div class="vuec-cheader">
    <slot name="vuec-header-left">
      <div class="left"  @click="goBack">
        <img :src="leftIconSrc" alt="back" srcset="">
        <span>返回</span>
      </div>
    </slot>
    <slot name="vuec-header-center">
      <div class="center">{{headerTitle}}</div>
    </slot>
    <slot name="vuec-header-right">
      <div class="right">
        <img src="../../../static/images/header/right-order-icon.svg" alt="" srcset="">
      </div>
    </slot>
  </div>
</template>

<script>
import prpos from './props'
export default {
  name: 'CHeader',
  props: prpos,
  data () {
    return {
      leftIconSrc: this.$props.leftIcon.leftEnterIconSrc
    }
  },
  created () {
    // console.log(this.$props)
  },
  methods: {
    goBack () {
      this.$router ? this.$router.back() : window.history.back()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './header.style';
.vuec-cheader {
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
    float: left;
    padding: px2rem(20px) px2rem(10px);
    img {
      width: 25px;
      height: 100%;
      float: left;
    }
    span {
      float: left;
      font-size: 16px;
      line-height: ($header-height - px2rem(40px));
    }
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
    padding: px2rem(20px) px2rem(10px);
    line-height: $header-height;
    img {
      width: px2rem(60px);
    }
  }
}

</style>
