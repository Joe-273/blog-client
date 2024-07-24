<template>
  <div class="test-container">
    <Empty text="空空如也" />
  </div>
</template>

<script>
import "@/styles/global.less";
import Empty from "./";
export default {
  components: {
    Empty,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  height: 500px;
}
</style>
