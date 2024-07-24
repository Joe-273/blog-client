<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="less" scoped>
.layout-container {
  display: flex;
  width: 100%;
  height: 100%;
  .left,
  .right {
    flex: 0 0 auto;
  }
  .main {
    flex: 1 1 auto;
    overflow: hidden;
  }
}
</style>
