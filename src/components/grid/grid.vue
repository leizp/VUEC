<template>
    <div class="vuec_grid" >
      <slot></slot>
    </div>
</template>

<script>
// import prpos from './prop'
export default {
  name: 'Grid',
  props: {
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
.vuec_grid {
  display: flex;
  width: 100%;
  position: relative;
  flex-wrap: wrap;
  flex-direction: row;
  overflow: hidden;
  justify-content:flex-start;
  &:before {
    @include border-top-point5-line($border-color);
  }
  &:before {
    @include border-left-point5-line($border-color);
  }
}

</style>
