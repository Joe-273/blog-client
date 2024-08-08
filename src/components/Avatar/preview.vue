<template>
  <div class="test-container">
    <Icon :imgUrl="url" />
  </div>
</template>

<script>
import '@/styles/global.less'
import Icon from './'
import url from '@/assets/404AM.png'
export default {
  components: {
    Icon,
  },
  data() {
    return {
      url,
    }
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
