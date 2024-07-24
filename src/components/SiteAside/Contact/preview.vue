<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import "@/style/global.less";

import Contact from "./";
export default {
  components: {
    Contact,
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/common.less";
.test-container {
  margin: 100px;
  display: inline-block;
  width: 250px;
  .border-style();
  background-color: #333;
  color: #eee;
}
</style>
