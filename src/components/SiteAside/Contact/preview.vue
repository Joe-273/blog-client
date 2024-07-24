<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import "@/styles/global.less";

import Contact from "./";
export default {
  components: {
    Contact,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/common.less";
.test-container {
  margin: 100px;
  display: inline-block;
  width: 250px;
  .border-style();
  background-color: #333;
  color: #eee;
}
</style>
