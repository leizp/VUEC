 <!--公用组件：CButton 组件
    /**
     * 组件名称：DragToSort (拖拽排序组件)
     * @module ./components/drag/drag.vue
     * @desc  基于vue-touch的拖拽排序
     * @author LieZuoPing
     * @date  2018年7月25日10点
     * @param - 参数说明请看README.md
     * @example 调用示例
     *  <drag-sort :title="title" :columns="columns" :tableData="tableData"></drag-sort>
     */
-->
<template>
  <div class="vuec_dtsc">
    <div class="vuec_dtsc_wrap">
      <v-touch
        v-for="item in maxNum" :key="item.index"
        :class="`vuec_dtsc_wrap_unit  vuec_dwu_${item.index}`"
        @press="fnPress(item.index)"
        @panmove="fnMove"
        @panstart="fnStart(item.index)"
        :style="moveArr[item].styleObj"
        ref="dragDom"
      >1</v-touch>
    </div>
  </div>
    <!-- <v-touch v-on:panmove="fnMove" class="vuec_drag_list_box" :style="moveObj" ref="dragDom">拖动</v-touch> -->
</template>

<script>
export default {
  name: 'DragSort',
  components: {
  },
  props: {
    maxNum: {
      type: Number,
      default: 16
    }
  },
  data () {
    return {
      moveObj: {
        left: '0px',
        top: '0px'
      },
      dragInfo: {
        width: '',
        height: ''
      },
      moveArr: [{
        id: 0,
        index: 0,
        className: `vuec_dwu_${this.moveArr[0].id}`,
        styleObj: {
          'animation-name': this.animName,
          'left': `${this.left[0]}px`,
          'top': `${this.top[0]}px`,
          'z-index': this.zindex[0]
        },
        content: '1'
      }],
      animName: '',
      left: [],
      top: [],
      dragId: '',
      zindex: [1, 1, 1, 1, 1, 1, 1, 1, 1]
    }
  },
  created () {
  },
  mounted () {
    // 计算拖拽元素初始值得宽和高
    this.dragInfo.width = this.$refs.dragDom.hammer.element.clientWidth
    this.dragInfo.height = this.$refs.dragDom.hammer.element.clientHeight
    for (let i = 0; i < 8; i++) {
      let topValue = 10
      if (i <= 5) {
        let leftValue = 10
        leftValue += i * this.dragInfo.width + 5 * i
        this.top.push(topValue)
        this.left.push(leftValue)
      } else {
        let leftValue = 10
        leftValue += (i - 6) * this.dragInfo.width + 5 * (i - 6)
        let topNextValue = topValue * 2 + this.dragInfo.height
        this.top.push(topNextValue)
        this.left.push(leftValue)
      }
    }
  },
  beforeDestroy () {
  },
  methods: {
    /**
     * 计算需要拖拽的数组属性
     */
    calculateMoveArr () {
    },
    /**
     * 长安闪亮,
     */
    fnPress (index) {
      this.animName = 'borderLight'
      console.log(index)
      this.zindex[index] = 2
    },
    fnStart (index) {
      this.dragId = index
    },
    fnMove (event) {
      this.left[this.dragId] = event.center.x - this.dragInfo.width / 2
      this.top[this.dragId] = event.center.y - this.dragInfo.height * 1.5
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import './dragToSort';
  .vuec_dtsc {
    width: $vuec_dtsc_width;
    height: $vuec_dtsc_height;
    .vuec_dtsc_wrap {
      width: 100%;
      height: px2rem(400px);
      box-sizing: border-box;
      padding: px2rem(10px);
      border: solid 1px #d9d9d9;
      position: relative;
      .vuec_dtsc_wrap_unit {
        width: px2rem(100px);
        height: px2rem(100px);
        margin: px2rem(10px) px2rem(10px);
        line-height: px2rem(100px);
        text-align: center;
        border-radius: px2rem(15px);
        float:left;
        position: absolute;
        color: #fff;
        animation-duration: 3s;
        animation-iteration-count: infinite;
      }
      // 生成背景色随机
      @for $i from 1 through 8 {
        .vuec_dwu_#{$i} {
          background: colorRandom();
        }
      }
    }
  }
</style>
