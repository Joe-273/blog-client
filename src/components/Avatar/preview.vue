<template>
  <div class="test-container">
    <Icon imgUrl="https://picsum.photos/150/150" />
  </div>
</template>

<script>
import '@/styles/global.less'
import Icon from './'
export default {
  components: {
    Icon,
  },
}
</script>

<style lang="less" scoped>
@import '~@/styles/common.less';

.test-container {
  margin-top: 100px;
  .flex-center();
}
</style>
