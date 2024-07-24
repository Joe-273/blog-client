<template>
  <div>
    <h1 ref="shouye">首页</h1>
    <button @click="clickHandler">点我</button>
  </div>
</template>

<script>
export default {
  methods: {
    clickHandler() {
      this.$showMessage({
        content: "这是一个大大大大的弹出哦",
        container: this.$refs.shouye,
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
