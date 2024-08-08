<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import '@/styles/global.less'
import Menu from './'
export default {
  components: {
    Menu,
  },
}
</script>

<style lang="less" scoped>
.test-container {
  background-color: #333;
  margin: 50px auto;
  width: 250px;
  color: #eee;
  border-radius: 8px;
  overflow: hidden;
}
</style>
