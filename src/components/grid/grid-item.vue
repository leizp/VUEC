<template>
  <a class="vuec-grid-item" :style="{width: `${100/max}%`}" @click.stop="fnClick(gridItemData.link)">
    <img :src="gridItemData.src" alt="Image" srcset="" v-if="gridItemData.src">
    <span v-if="gridItemData.title" >{{gridItemData.title}}</span>
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
          title: '',
          src: ``,
          link: ``,
          index: 0
        }
      }
    },
    max: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    fnClick (e) {
      this.tabitem(this.$props.gridItemData)
      if (e !== '') {
        this.$router.push({
          path: e
        })
      }
    },
    tabitem (value) {
      this.$emit('on-click', value)
    }
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
  overflow: hidden;
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
