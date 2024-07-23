<template>
  <div class="test-container">
    <ImageLoader
      src="https://picsum.photos/id/273/3000/2000"
      placeholder="https://picsum.photos/id/273/150/100"
      @loaded="handlerLoaded"
    />
  </div>
</template>

<script>
import "@/style/global.less";
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
  methods: {
    handlerLoaded() {
      console.log("图片初始化结束!");
    },
  },
};
</script>

<style lang="less" scoped>
.imageloader-container {
  height: 500px;
  width: 900px;
}
</style>
