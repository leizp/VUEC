<template>
  <div class="GirdDemo">
    <h4 class="cell">最大数五个max:5</h4>
    <gird class="gird">
        <girditem v-for="item in list" :key="item.index" :max="5" :gridItemData="item"></girditem>
    </gird>
    <h4 class="cell">最大数五个max:5,且自定义里面内容</h4>
    <gird class="gird">
        <girditem v-for="item in 5" :key="item.index" :max="3" >
          <div>
            <img src="../../assets/logo.png">
            <span>{{item}}</span>
          </div>
        </girditem>
    </gird>
   <h4 class="cell">获取商品列表</h4>
    <gird class="gird">
        <girditem v-for="item in shopList" :key="item.index" :max="2" >
          <div>
            <img :src="item.imageurl" class="shopImg">
            <span>{{item.wname}}</span>
          </div>
        </girditem>
    </gird>
  </div>
</template>

<script>
import gird from '../../components/grid/grid'
import girditem from '../../components/grid/grid-item'
import testData from './gird.test.data'
export default {
  name: 'GirdDemo',
  components: {
    gird,
    girditem
  },
  data () {
    return {
      list: testData,
      shopList: []
    }
  },
  created () {
    // console.log(this.list)
    this.getLoaclList()
  },
  beforeDestroy () {
  },
  methods: {
    async getLoaclList () {
      let that = this
      await that.$axios.get('../../../static/json/test.json')
        .then(function (res) {
          that.shopList = res.data
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../style/config.base.scss';
  .GirdDemo {
    width: 100%;
    height: 100%;
    background: $demo-background-color;
    box-sizing: border-box;
    .cell {
      padding: 10px 10px;
      box-sizing: border-box;
    }
    .gird {
      &:after {
        @include border-top-point5-line($border-color)
      }
      .shopImg{
        width: 80%;
      }
      .div{
        &:before {
          @include border-right-point5-line($border-color);
        }
        &:after {
          @include border-bottom-point5-line($border-color);
        }
      }
    }
  }
</style>
