<template>
  <div class="imageloader-container">
    <img class="placeholder" :src="placeholder" />
    <img
      @load="handleImageLoad"
      :src="src"
      :style="{ opacity: originImageOpacity, transition: `${duration}ms ease-in-out` }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      originImageLoaded: false, // 原图加载完成
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
    isReach: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  methods: {
    handleImageLoad() {
      // 监听到图片加载完成
      this.originImageLoaded = true;
      setTimeout(() => {
        if (!this.isReach) return;
        // 图片加载完成时，isReach为true的会发送信号
        this.$emit("loaded");
      }, this.duration);
    },
    onIsReachChange() {
      // 当isReach变换时，会调用该函数，重新判断是否应该发送信号
      this.handleImageLoad();
    },
  },
  computed: {
    originImageOpacity() {
      return this.originImageLoaded && this.isReach ? 1 : 0;
    },
  },
  watch: {
    isReach() {
      this.onIsReachChange();
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/common.less";
.imageloader-container {
  height: 100%;
  width: 100%;
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
