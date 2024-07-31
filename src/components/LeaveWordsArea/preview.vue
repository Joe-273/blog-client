<template>
  <div class="test-container">
    <LeaveWordsArea />
  </div>
</template>

<script>
import "@/styles/global.less";
import LeaveWordsArea from "./";
export default {
  components: {
    LeaveWordsArea,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  height: 600px;
  width: 600px;
  margin: 0 auto;
  margin-top: 100px;
}
</style>
