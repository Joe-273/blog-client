<template>
  <div class="layout-container">
    <!-- ---------------- -->
    <div
      v-if="showLeft"
      class="left"
      :style="{ width: leftWidth + 'px', transition: !isResizing ? '0.25s' : '0s' }"
    >
      <slot name="left"></slot>
    </div>
    <!-- ---------------- -->
    <div
      v-if="showLeft"
      @mousedown="startResizing('left')"
      class="resizeBar leftBar"
      :class="{ closed: isLeftClosed }"
    >
      <div @click="openAsideBar('left')" class="switch">
        <Icon class="icon" type="arrowRight" />
      </div>
    </div>
    <!-- ---------------- -->
    <div class="main">
      <slot></slot>
    </div>
    <!-- ---------------- -->
    <div
      v-if="showRight"
      @mousedown="startResizing('right')"
      class="resizeBar rightBar"
      :class="{ closed: isRightClosed }"
    >
      <div @click="openAsideBar('right')" :class="{}" class="switch">
        <Icon class="icon" type="arrowLeft" />
      </div>
    </div>
    <!-- ---------------- -->
    <div
      v-if="showRight"
      class="right"
      :style="{ width: rightWidth + 'px', transition: !isResizing ? '0.25s' : '0s' }"
    >
      <slot name="right"></slot>
    </div>
    <!-- ---------------- -->
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  components: {
    Icon,
  },
  props: {
    showLeft: {
      type: Boolean,
      default: false,
    },
    showRight: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // 左栏右栏初始宽度
      leftWidth: 280,
      rightWidth: 280,

      // 辅助数据
      isResizing: false,
      activeResizer: null,
      startX: 0,
      startWidth: 0,
      isLeftClosed: false,
      isRightClosed: false,
    };
  },
  methods: {
    openAsideBar(side) {
      if (side === "left") {
        this.leftWidth = 280;
        this.isLeftClosed = false;
      } else if (side === "right") {
        this.rightWidth = 280;
        this.isRightClosed = false;
      }
    },
    startResizing(side) {
      // 拖拽过程中防止选中文本
      event.preventDefault();

      this.isResizing = true;
      this.activeResizer = side;
      this.startX = event.clientX;
      this.startWidth = side === "left" ? this.leftWidth : this.rightWidth;
      document.addEventListener("mousemove", this.resize);
      document.addEventListener("mouseup", this.stopResizing);
    },
    initWidth(asideWidthData, asideClosedFlag) {
      if (asideWidthData < 160) {
        asideWidthData = 0;
        asideClosedFlag = true;
        this.stopResizing();
      }
    },
    resize(event) {
      if (!this.isResizing) return;

      const dx = event.clientX - this.startX;
      if (this.activeResizer === "left") {
        this.leftWidth = this.startWidth + dx;
        if (this.leftWidth < 160) {
          this.leftWidth = 0;
          this.isLeftClosed = true;
          this.stopResizing();
        }
      } else if (this.activeResizer === "right") {
        this.rightWidth = this.startWidth - dx;
        if (this.rightWidth < 160) {
          this.rightWidth = 0;
          this.isRightClosed = true;
          this.stopResizing();
        }
      }
    },
    stopResizing() {
      this.isResizing = false;
      document.removeEventListener("mousemove", this.resize);
      document.removeEventListener("mouseup", this.stopResizing);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/common.less";
@color: darken(@white, 30%);

.layout-container {
  display: flex;
  overflow: hidden;

  width: 100%;
  height: 100%;

  .resizeBar {
    width: 3px;
    background-color: @color;
    cursor: e-resize;
    flex: 0 0 auto;
    position: relative;

    &.closed {
      transition: 0.25s 0.25s;
      width: 0px;

      .switch {
        width: 12px;
      }
    }

    .switch {
      overflow: hidden;
      transition: 0.25s;
      cursor: pointer;
      position: absolute;
      background-color: @color;
      width: 0;
      height: 85px;
      top: 50%;
      transform: translateY(-50%);
      color: @white;
      z-index: 999;

      .icon {
        transition: 0.25s;
        font-size: 36px;
        position: absolute;
        .abs-center();
        left: calc(50% - 20px);
      }

      &:hover {
        width: 35px;
        height: 55px;
        background-color: darken(@color, 10%);

        .icon {
          left: calc(50% - 3px);
        }
      }
    }

    @r: 8px;
    @hoverR: 35px;

    &.leftBar .switch {
      border-radius: 0 @r @r 0;
      left: 100%;

      &:hover {
        border-radius: 0 @hoverR @hoverR 0;
      }
    }

    &.rightBar .switch {
      border-radius: @r 0 0 @r;
      right: 100%;

      &:hover {
        border-radius: @hoverR 0 0 @hoverR;

        .icon {
          left: calc(50% + 3px);
        }
      }

      .icon {
        left: calc(50% + 20px);
      }
    }
  }

  .left,
  .right {
    flex: 0 0 auto;
  }

  .main {
    flex: 1 1 auto;
    overflow: hidden;
  }
}
</style>
