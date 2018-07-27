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
        {{item.id}}
        <v-touch class="vdwu_touch"
          :style="item.styleObj"
          @press="fnPress(item.index)"
          @panstart="fnStart(item.index)"
          @panmove="fnMove"
          @panend="fnMoveEnd"
          >
            {{item.id}}
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
      resetData: '',
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
      let colArr = [] // 列
      let rowArr = [] // 行
      for (let item of arr) {
        colArr.push(item.offsetLeft)
        rowArr.push(item.offsetTop)
      }
      // 去重排序，计算函数和列数， Set数据唯一性， Array.form 可以把对象转换为数组
      colArr = Array.from(new Set(colArr))
      rowArr = Array.from(new Set(rowArr))
      return {rowArr, colArr}
    },
    /**
     * calculate
     */
    calculateRelIndex (x, y, arr) {
      let { colArr, rowArr } = this.calculateRowAndCol(arr)
      let col = colArr.length // 列数
      let atRow = 0
      let atCol = 0
      // 判断在第几行
      for (let i = 0; i < rowArr.length - 1; i++) {
        if (y > rowArr[i] && y < rowArr[i + 1]) {
          atRow = i
        }
        if (y > rowArr[rowArr.length - 1]) {
          atRow = rowArr.length - 1
        }
        if (y < rowArr[0]) {
          atRow = 0
        }
      }
      // 判断在第几列
      for (let i = 0; i < colArr.length - 1; i++) {
        if (x > colArr[i] && x < colArr[i + 1]) {
          atCol = i
        }
        if (x > colArr[colArr.length - 1]) {
          atCol = colArr.length - 1
        }
        if (x < colArr[0]) {
          atCol = 0
        }
      }
      let replaceIndex = atRow * col + atCol
      console.log('行：', atRow, '列：', atCol)
      return replaceIndex
    },
    /**
     * 目标数组重新排序
     * @param Number: index
     */
    renewSort (index) {
      let dragArr = this.moveArr[this.dragId]
      let targetArr = this.moveArr[index]
      this.moveArr[this.dragId].styleObj = {
        'animation-name': '',
        'opacity': 0.9,
        'z-index': 3,
        'left': targetArr.styleObj.left,
        'top': targetArr.styleObj.top
      }
      this.moveArr[index].styleObj = {
        'animation-name': '',
        'opacity': 0.9,
        'z-index': 3,
        'left': `${this.resetData[this.dragId].offsetLeft}px`,
        'top': `${this.resetData[this.dragId].offsetTop}px`
      }
      this.moveArr[index] = dragArr
      this.moveArr[this.dragId] = targetArr
      this.lock = false
      this.modStyle.animationName = ''
      this.dragId = ''
      this.move = {
        x: 0,
        y: 0
      }
      this.moveOptionArr = [...this.resetData]
    },
    /**
     * 长安闪亮,
     */
    fnPress (index) {
      console.log(0)
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
      console.log(`x:${x}, y: ${y},moveX: ${this.move.x},moveY: ${this.move.y},event.deltaX: ${event.deltaX}, event.deltaY:${event.deltaY}`)
      this.moveArr[this.dragId].styleObj = {
        'animation-name': 'borderLight',
        'opacity': 0.6,
        'z-index': 100,
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
      this.resetData = arr
      let w = e.target.offsetWidth
      let h = e.target.offsetHeight
      let x = e.target.offsetLeft + w / 2// 拖拽的元素移动x点
      let y = e.target.offsetTop + h / 2 // 拖拽的元素移动y点
      let targetIndex = this.calculateRelIndex(x, y, arr)
      if (targetIndex > this.moveArr.length) {
        targetIndex = this.moveArr.length
      }
      this.renewSort(targetIndex)
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
