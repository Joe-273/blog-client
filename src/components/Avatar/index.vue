<template>
  <img
    class="avatar-container"
    :src="imgUrl"
    :style="{
      width: imgSize + 'px',
      height: imgSize + 'px',
    }"
  />
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
    imgSize: {
      type: Number,
      default: 150,
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.avatar-container {
  object-fit: cover;
  border-radius: 50%;
}
</style>
