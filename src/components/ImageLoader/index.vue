<template>
  <div class="imageloader-container">
    <img v-if="!originImageDone" class="placeholder" :src="placeholder" />
    <img
      @load="handleImageLoad"
      :src="src"
      :style="{ opacity: originImageOpacity, transition: `${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      originImageLoaded: false, // 原图加载完成
      originImageDone: false, // 原图片过渡完成，初始化结束
    };
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 1000,
    },
  },
  methods: {
    handleImageLoad() {
      // 监听到图片加载完成
      this.originImageLoaded = true;
      // 开始计时
      setTimeout(() => {
        this.originImageDone = true;
        // 图片过渡完成，初始化结束，发送信号
        this.$emit("loaded");
      }, this.duration);
    },
  },
  computed: {
    originImageOpacity() {
      return this.originImageLoaded ? 1 : 0;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/common.less";
.imageloader-container {
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    .abs-center();
    height: 100%;
    width: 100%;
    object-fit: cover;
    &.placeholder {
      filter: blur(2em);
    }
  }
}
</style>
