<template>
  <div class="vuec-grid">
    <ul>
        <li></li>
    </ul>
  </div>
</template>

<script>
import prpos from './props'
export default {
  name: 'Grid',
  props: prpos,
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
@import './grid.style';
.vuec-grid  {
}

</style>
