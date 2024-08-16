<template>
  <div
    class="avatar-container"
    :style="{
      width: imgSize + 5 + 'px',
      height: imgSize + 5 + 'px',
    }"
  >
    <img :src="imgUrl" />
  </div>
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
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.avatar-container {
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  img {
    object-fit: cover;
    width: 100%;
  }
}
</style>
