<template>
  <div class="home-container" ref="homeContainer" @wheel="wheelHandler">
    <ul class="main" :style="{ marginTop }">
      <li v-for="(item, index) in itemArray" :key="item.id" class="item">
        <CarouselImage :item="item" :isEnterIcon="isEnterIcon" :isReach="isReach(index)" />
      </li>
    </ul>
    <ul class="indicator">
      <li
        @click="jumpTo(index)"
        v-for="(item, index) in itemArray"
        :key="item.id"
        :class="{ active: currentIndex === index }"
      ></li>
    </ul>
    <div
      @mouseenter="mouseEnterIconHandler"
      @mouseleave="mouseLeaveIconHandler"
      @click="jumpTo(currentIndex - 1)"
      v-show="currentIndex > 0"
      class="arrowUp"
    >
      <Icon type="arrowUp" />
    </div>
    <div
      @mouseenter="mouseEnterIconHandler"
      @mouseleave="mouseLeaveIconHandler"
      @click="jumpTo(currentIndex + 1)"
      v-show="currentIndex < itemArray.length - 1"
      class="arrowDown"
    >
      <Icon type="arrowDown" />
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import CarouselImage from "./CarouselImage.vue";
import { getBanner } from "@/api/banner";

export default {
  components: {
    CarouselImage,
    Icon,
  },
  data() {
    return {
      itemArray: [],
      currentIndex: 0,
      containerHeight: 0,
      timerId: null,
      isEnterIcon: false,
    };
  },
  methods: {
    // 跳转banner图
    jumpTo(index) {
      this.currentIndex = index;
    },
    wheelHandler(e) {
      if (this.timerId) return;
      if (e.deltaY > 0 && this.currentIndex < this.itemArray.length - 1) {
        this.currentIndex++;
      }
      if (e.deltaY < 0 && this.currentIndex > 0) {
        this.currentIndex--;
      }
      this.timerId = setTimeout(() => {
        this.timerId = null;
      }, 400);
    },
    resizeHandler() {
      this.containerHeight = this.$refs.homeContainer.clientHeight;
    },
    mouseEnterIconHandler() {
      this.isEnterIcon = true;
    },
    mouseLeaveIconHandler() {
      this.isEnterIcon = false;
    },
  },
  computed: {
    marginTop() {
      return -this.currentIndex * this.containerHeight + "px";
    },
    isReach() {
      return (index) => {
        return index === this.currentIndex;
      };
    },
  },
  async created() {
    const resp = await getBanner();
    this.itemArray = resp;
  },
  mounted() {
    window.addEventListener("resize", this.resizeHandler);
    this.containerHeight = this.$refs.homeContainer.clientHeight;
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandler);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/common.less";
@import "~@/styles/var.less";
@fontSize: 48px;
@padding: 20px;
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  .main {
    transition: 0.5s;
    width: 100%;
    height: 100%;
    .item {
      width: 100%;
      height: 100%;
    }
  }
  .arrowDown,
  .arrowUp {
    cursor: pointer;
    position: absolute;
    color: @gray;
    left: 50%;
    transform: translateX(-50%);
    font-size: @fontSize;
    text-shadow: 0 0 15px @white;
  }
  .arrowUp {
    top: @padding;
    animation: popup 2s infinite;
  }
  .arrowDown {
    bottom: @padding;
    animation: popdown 2s infinite;
  }
  .indicator {
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    li {
      cursor: pointer;
      width: 12px;
      height: 12px;
      margin: 8px 0;
      background-color: lighten(@dark, 30%);
      .border-style(50%, lighten(@dark, 30%), 2px);
      &.active {
        background-color: @white;
      }
    }
  }
}
@offset: 15px;
@keyframes popup {
  0% {
    transform: translateX(-50%) translateY(-@offset);
  }
  50% {
    transform: translateX(-50%) translateY(@offset);
  }
  100% {
    transform: translateX(-50%) translateY(-@offset);
  }
}
@keyframes popdown {
  0% {
    transform: translateX(-50%) translateY(@offset);
  }
  50% {
    transform: translateX(-50%) translateY(-@offset);
  }
  100% {
    transform: translateX(-50%) translateY(@offset);
  }
}
</style>
