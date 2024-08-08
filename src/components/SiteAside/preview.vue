<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
import '@/styles/global.less'
import SiteAside from './'
export default {
  components: {
    SiteAside,
  },
}
</script>

<style lang="less" scoped>
.test-container {
  width: 250px;
  height: 1000px;
  margin: 0 auto;
  margin-top: 50px;
}
</style>
