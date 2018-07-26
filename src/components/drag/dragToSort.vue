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
    <div class="vuec_dtsc_wrap" ref="dragWrap" @click.self="fnCancelMove">
      <div class="vuec_dtsc_wrap_unit"
        v-for="item in moveArr" :key="item.index"
        :id="item.id"
        :style="modStyle"
      >
        {{item.index}}
        <v-touch class="vdwu_touch"
          :style="item.styleObj"
          @press="fnPress(item.index)"
          @panstart="fnStart(item.index)"
          @panmove="fnMove"
          @panend="fnMoveEnd"
          >
            {{item.index}}
          </v-touch>
      </div>
    </div>
  </div>
</template>

<script>
import testData from './test'
export default {
  name: 'DragSort',
  components: {
  },
  props: {
  },
  data () {
    return {
      moveArr: testData.moveArr, // 每个可以拖拽元素的数组
      modStyle: testData.styleObj, // 每个拖拽元素的公共样式
      optionArr: [], // 每个固定元素的{offsetLeft， offsetTop} 数据集合
      moveOptionArr: [],
      moveEndIndex: '',
      dragId: 0, // 选中的拖拽元素id
      lock: false, // 是否开始拖拽，默认锁定，长按开始，双击锁定
      move: {
        x: 0,
        y: 0
      }
    }
  },
  created () {
  },
  mounted () {
    this.calculateOptionArr()
    this.calculateRowAndCol()
    this.moveOptionArr = [...this.optionArr]
  },
  beforeDestroy () {
  },
  methods: {
    /**
     * 计算每个元素的位置区域, 及位置，offsetLeft， offsetTop
     */
    calculateOptionArr () {
      let dragDomArr = this.$refs.dragWrap.childNodes
      for (let item of dragDomArr) {
        let { offsetLeft, offsetTop } = item
        this.optionArr.push({ offsetLeft, offsetTop })
        this.moveArr[Number(item.id)].styleObj.left = `${item.offsetLeft}px`
        this.moveArr[Number(item.id)].styleObj.top = `${item.offsetTop}px`
      }
    },
    /**
     * 计算有多少行row，多少列col
     * @param Array [{}]
     */
    calculateRowAndCol (arr) {
      let col = [] // 列
      let row = [] // 行
      for (let item of arr) {
        col.push(item.offsetLeft)
+       row.push(item.offsetLeft)
      }
    },
    /**
     * 长安闪亮,
     */
    fnPress (index) {
      this.lock = true
      this.modStyle.animationName = 'borderLight'
    },
    /**
     * 拖拽开始记录拖拽的index
     */
    fnStart (index) {
      // 每次拖拽前，清空
      this.move = {
        x: 0,
        y: 0
      }
      if (!this.lock) {
        return
      }
      this.dragId = index
      this.move.x = this.moveOptionArr[this.dragId].offsetLeft
      this.move.y = this.moveOptionArr[this.dragId].offsetTop
    },
    /**
     * 拖拽移动
     */
    fnMove (event) {
      if (!this.lock) {
        return false
      }

      let x = this.move.x + event.deltaX
      let y = this.move.y + event.deltaY
      let sX = this.$refs.dragWrap.offsetWidth
      let sY = this.$refs.dragWrap.offsetHeight
      // 拖拽的时候需要做边界检测
      if (event.center.x <= event.target.clientWidth / 2) { // 左边界
        x = 0
      }
      if (event.center.x >= (sX - event.target.clientWidth / 2)) { // 右边界
        x = sX - event.target.clientWidth
      }
      if (event.center.y <= event.target.clientHeight / 2) { // 上边界
        y = 0
      }
      if (event.center.y >= (sY + event.target.clientHeight / 2)) { // 下边界
        y = sY - event.target.clientHeight
      }
      this.moveArr[this.dragId].styleObj = {
        'animation-name': 'borderLight',
        'opacity': 0.6,
        'z-index': 8888,
        'left': `${x}px`,
        'top': `${y}px`
      }
      this.moveOptionArr[this.dragId].offsetLeft = x
      this.moveOptionArr[this.dragId].offsetTop = y
    },
    /**
     * 拖拽结束，计算当前的位置，并且重新排序数组
     */
    fnMoveEnd (e) {
      if (!this.lock) {
        return
      }
      let arr = [] // 原来位置距离
      let dragDomArr = this.$refs.dragWrap.childNodes
      for (let item of dragDomArr) {
        let { offsetLeft, offsetTop } = item
        arr.push({ offsetLeft, offsetTop })
      }
      console.log(arr)
      let x = e.center.x - e.target.offsetWidth / 2
      let y = e.center.y - e.target.offsetHeight / 2
      let w = e.target.offsetWidth
      let h = e.target.offsetHeight
      let len = arr.length
      console.log(x, y)
      // 判断需要如何排序
      for (let i = 0; i < len; i++) {
        // 首先判断是移动到了第几排
        // if (y < )
      }
    },
    /**
     * 取消排序
     */
    fnCancelMove () {
      this.animName = ''
      this.lock = false
      this.modStyle = {
        'animation-name': ''
      }
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
      border: solid 1px #d9d9d9;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      overflow: hidden;
      justify-content:flex-start;
      position: relative;
      .vuec_dtsc_wrap_unit {
        width: px2rem(100px);
        height: px2rem(100px);
        line-height: px2rem(100px);
        text-align: center;
        box-sizing: border-box;
        background: pink;
        margin: px2rem(12px);
        animation-duration: 3s;
        animation-iteration-count: infinite;
        color: #fff;
        .vdwu_touch {
          width: px2rem(100px);
          height: px2rem(100px);
          box-sizing: border-box;
          position: absolute;
          z-index: 3;
          background: rgb(192, 255, 211);
          text-align: center;
          color: #fff;
          opacity: 0.6;
          animation-duration: 3s;
          animation-iteration-count: infinite;
        }
      }
    }
  }
</style>
