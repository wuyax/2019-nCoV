<template>
  <div class="home-page">
     <md-button class="md-dense md-raised md-primary">测试UI</md-button>
  </div>
</template>
<script>
import axios from 'axios'
import { csvToObject } from '@/assets/js/util.js'
// https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序-推荐
export default {
  name: 'Home',
  components: {},
  model: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {
    this.getNcovData()
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    getNcovData() {
      axios
        .get('./data/ncov.csv')
        .then(res => {
          const { status, data } = res
          if (status === 200) {
            console.log(csvToObject(data))
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
