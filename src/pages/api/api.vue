<template>
  <div class="api" >
    <h2 class="title">{{pageTitle}}</h2>
    <div>
      <span>{{computedData}}</span>
      <span  @click="fnChangeA">{{getsetComputed}}</span>
    </div>
    <div class="title" @click="fnChangeB">{{b}}</div>
  </div>
</template>

<script>
export default {
  name: 'Api',
  components: {
  },
  data () {
    return {
      pageTitle: 'Vue API 学习',
      a: 2,
      b: {
        a: 0
      }
    }
  },
  created () {
    this.getsetComputed = 4
  },
  watch: {
    a: function (val, oldVal) {
      console.log(val, oldVal)
    },
    'b.a': {
      handler: function (val, oldVal) {
        console.log(val, oldVal)
      },
      deep: true
    }
  },
  computed: {
    computedData () { // 仅仅读取
      return 3 * 5
    },
    getsetComputed: {
      get () {
        return this.a * 5
      },
      set (v) {
        this.a = v
      }
    }
  },
  beforeDestroy () {
  },
  methods: {
    fnChangeA () {
      this.a += 1
    },
    fnChangeB () {
      this.b.a += 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../style/config.base.scss';
  $pageBackgroundColor: antiquewhite;
  $pageBorder: solid 1px #d1d1d1;
  $pageFamily: '微软雅黑';
  $fontSize: px2rem(16px);
  .api {
    width: px2rem(750px);
    height: 100%;
    font-family: $pageFamily;
    overflow: scroll;
    background: $pageBackgroundColor;
    font-size: $fontSize;
    box-sizing: border-box;
    zoom: 1;
    .title {
      width: 100%;
      height: px2rem(60px);
      text-align: center;
      border-bottom:  $pageBorder;
      line-height: px2rem(60px);
    }
  }
</style>
