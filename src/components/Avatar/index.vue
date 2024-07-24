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
@import "~@/style/var.less";
.avatar-container {
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid @lightWords;
  transition: 0.25s ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 25px @words;
  }
}
</style>
