<template>
  <a :to="gridItemData.link" class="vuec-grid-item" :style="{width: `${width}%`}">
    <img :src="gridItemData.src" alt="Image" srcset="">
    <span>{{gridItemData.title}}</span>
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'GridItem',
  props: {
    gridItemData: {
      type: Object,
      default: function () {
        return {
          title: '测试',
          src: `../../static/images/logo.png`,
          link: ``,
          index: 0
        }
      }
    },
    width: {
      type: Number,
      default: 100
    }
  },
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
@import '../../style/config.base';
@import './grid.style';
.vuec-grid-item {
  padding: $grid-item-padding;
  box-sizing: border-box;
  background:$grid-item-background-color;
  text-align: center;
  width: 100%;
  display: block;
  text-decoration: none;
  font-size: $font-size;
  color: $font-color;
  position: relative;
  &:before {
    @include border-right-point5-line($border-color);
  }
  &:after {
    @include border-bottom-point5-line($border-color);
  }
  &:hover{
    background: $grid-item-hover-background-color;
    color: red;
  }
  img {
    display: block;
    width: $gird-item-img-width;
    margin: 0 auto;
  }
}

</style>
