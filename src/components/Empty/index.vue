<template>
  <div class="empty-container">
    <Icon type="empty" />
    <span>{{ text }}</span>
  </div>
</template>

<script>
import Icon from "../Icon";
export default {
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/common.less";
@import "~@/styles/var.less";
.empty-container {
  color: @words;
  font-size: 60px;
  .flex-center();
  flex-direction: column;
  height: 100%;
  span {
    font-size: 16px;
    margin: 0;
    margin-top: 10px;
  }
}
</style>
