<template>
  <div>
    <img
      :src="imgUrl"
      :style="{
        width: imgSize + 'px',
        height: imgSize + 'px',
      }"
    />
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
    },
  },
};
</script>

<style lang="less" scoped>
img {
  object-fit: cover;
  border-radius: 50%;
  transition: 0.25s ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
  }
}
</style>
