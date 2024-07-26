<template>
  <!-- 显示的容器 -->
  <div @mousemove="mousemoveHandler" class="carousel-container" ref="container">
    <!-- ImageLoader组件的容器 -->
    <div :style="finalOffset" class="image-loader" ref="imgContainer">
      <ImageLoader :src="item.bigImg" :placeholder="item.midImg" :isReach="isReach" @loaded="loadedHandler" />
      <p :style="{ opacity: this.textOpacity }" class="title" ref="title">
        {{ item.title }}
      </p>
      <p :style="{ opacity: this.textOpacity }" class="description" ref="description">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
import debounce from "@/utils/debounce";
export default {
  components: {
    ImageLoader,
  },
  props: ["item", "isReach"],
  data() {
    return {
      container: null,
      imgContainer: null,
      maxOffset: null,
      mouseOffset: {
        x: null,
        y: null,
      },
      timerId: null,
      textOpacity: 0,
      textWidth: {
        title: 0,
        description: 0,
      },
    };
  },
  methods: {
    writeContainersData() {
      // 初始化:
      // 将容器实际宽高保存到组件data中
      this.container = {
        x: this.$refs.container.clientWidth,
        y: this.$refs.container.clientHeight,
      };

      this.mouseOffset.x = this.container.x / 2;
      this.mouseOffset.y = this.container.y / 2;

      this.imgContainer = {
        x: this.$refs.imgContainer.clientWidth,
        y: this.$refs.imgContainer.clientHeight,
      };
      this.maxOffset = {
        x: this.imgContainer.x - this.container.x,
        y: this.imgContainer.y - this.container.y,
      };
    },
    // 将banner恢复到中间位置
    resetBannerHandler: debounce((that) => {
      that.$refs.imgContainer.style.transition = "1.25s";
      that.mouseOffset.x = that.container.x / 2;
      that.mouseOffset.y = that.container.y / 2;
    }, 4000),
    mousemoveHandler(e) {
      if (this.timerId) return;
      if (!this.$refs.container.getBoundingClientRect()) return;

      if (this.$refs.imgContainer.style.transition !== "0.25s") {
        this.$refs.imgContainer.style.transition = "0.25s";
      }

      const containerRect = this.$refs.container.getBoundingClientRect();
      // 某些奇怪的原因,导致offset有小概率为负值
      let offsetX = Math.abs(e.x - containerRect.x);
      let offsetY = Math.abs(e.y - containerRect.y);

      // 鼠标停止移动时间超过4秒,将banner复位
      this.resetBannerHandler(this);
      // 节流
      this.timerId = setTimeout(() => {
        this.mouseOffset.x = offsetX;
        this.mouseOffset.y = offsetY;
        this.timerId = null;
      }, 40);
    },

    resizeHandler() {
      this.writeContainersData();
    },
    loadedHandler() {
      this.isReach && (this.textOpacity = 1);
      this.$refs.title.style.width = this.textWidth.title + "px";
      this.$refs.description.style.width = this.textWidth.description + "px";
    },
    // 当isReach发生改变，调用以下函数
    onIsReachChange() {
      if (!this.isReach) {
        this.textOpacity = 0;
        this.$refs.title.style.width = 0;
        this.$refs.description.style.width = 0;
      }
    },
    initTextStatus() {
      this.textWidth.title = this.$refs.title.clientWidth;
      this.textWidth.description = this.$refs.description.clientWidth;
      this.$refs.title.style.width = 0;
      this.$refs.description.style.width = 0;
    },
  },

  computed: {
    finalOffset() {
      if (!this.imgContainer && !this.container) return;
      let finalOffsetX = (this.maxOffset.x / this.container.x) * this.mouseOffset.x;
      let finalOffsetY = (this.maxOffset.y / this.container.y) * this.mouseOffset.y;
      return { transform: `translate(${-finalOffsetX}px,${-finalOffsetY}px)` };
    },
  },
  watch: {
    isReach() {
      this.onIsReachChange();
    },
  },
  mounted() {
    // 将$refs中的两个容器的宽高写入组件的data中
    this.writeContainersData();
    // 监听浏览器窗口大小变换
    window.addEventListener("resize", this.resizeHandler);
    // 获取文本的宽度
    this.initTextStatus();
    // 居中Banner图片
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandler);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/common.less";
.carousel-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .image-loader {
    // transition: 0.25s;
    overflow: hidden;
    position: absolute;
    width: 110%;
    height: 110%;
  }
  @top: 40%;
  @fontColor: darken(@dark, 15%);
  @duration: 0.4s;
  .title,
  .description {
    transition: @duration;
    position: absolute;
    white-space: nowrap;
    overflow: hidden;
    letter-spacing: 2px;
    left: 10%;
    font-size: 36px;
    font-weight: 700;
    color: darken(@white, 15%);
    top: @top;
    text-shadow: 1px 0 0 @fontColor, -1px 0 0 @fontColor, 0 1px 0 @fontColor, 0 -1px 0 @fontColor;
  }
  .description {
    transition: @duration @duration;
    top: calc(@top + 60px);
    font-size: 24px;
  }
}
</style>
