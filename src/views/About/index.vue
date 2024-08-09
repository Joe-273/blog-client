<template>
  <div class="about-container" v-loading="loading || !srcLoaded">
    <iframe class="main" :src="src" frameborder="0" @load="srcLoaded = true"></iframe>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      srcLoaded: false,
    }
  },
  computed: mapState('about', {
    src: 'data',
    loading: 'loading',
  }),
  created() {
    this.$store.dispatch('about/fetchData')
  },
}
</script>

<style lang="less" scoped>
.about-container {
  width: 100%;
  height: 100%;
  position: relative;
  .main {
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>
