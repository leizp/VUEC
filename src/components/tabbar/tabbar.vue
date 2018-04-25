<template>
  <div class="vuec-tabbar">
    <ul>
        <li class="vuec-tabar-item"
        v-for="(item, index) in tabbarConfig"
        :key="index" :id="index"
        :style= "{width: `${Number.parseInt(100/tabbarConfig.length)}%`}"
        @click.stop="onChange(index, item.default)"
        >
        <slot :name="`tabbarItem${item.index}`">
          <img :src="`${item.default === true ? item.enterSrc: item.leaveSrc}`" alt="图标" srcset="" class="tabbar-icon" slots="image">
          <span class="tarbar-name" :style="{color: `${item.default === true ? item.enterColor: item.leaveColor}`}">{{item.title}}</span>
        </slot>
        </li>
    </ul>
  </div>
</template>

<script>
import prpos from './props'
console.log(prpos)
export default {
  name: 'Tabbar',
  props: prpos,
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    // 切换tabbar改变样式和跳转页面
    onChange (index, isSelect) {
      // this.$emit('on-change', index)
      let vm = this
      // console.log(`当前的选项是：${index}`)
      if (!isSelect) {
        for (let data of this.$props.tabbarConfig) {
          data.default = false
        }
        this.$props.tabbarConfig[index].default = true
        this.$router.push({
          path: vm.$props.tabbarConfig[index].path,
          query: vm.$props.tabbarConfig[index].query
        })
      }
      this.changeTarbar(index)
    },
    // 对外暴露出来的方法，每次切换时父组件可以拿到当前组件的信息
    changeTarbar (index) {
      this.$emit('on-change', this.$props.tabbarConfig[index])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './tabbar-style';
.vuec-tabbar {
  position: $position-type;
  @include locationEle(none,0,0,0);
  background: #fff;
  width:100%;
  box-sizing: border-box;
  height: px2rem($tabbar-height);
  ul {
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    flex-wrap: nowrap;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    position: relative;
    &:before {
      @include border-top-point5-line ($border-color);
    }
    .vuec-tabar-item {
      height: 100%;
      box-sizing: border-box;
      padding: px2rem(10px) px2rem(30px);
      text-align: center;
      position: relative;
      &:after {
        @include border-left-point5-line;
      }
      .tabbar-icon {
        width: $tabbar-icon-width;
        display: block;
        margin: 0 auto;
      }
      .tarbar-name {
        display: block;
        font-size: px2rem($tabbar-font-size);
      }
    }
    .vuec-tabar-item:first-of-type {
      &:after {
        display: none;
      }
    }
  }
}

</style>
