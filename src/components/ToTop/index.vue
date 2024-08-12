<template>
  <div class="to-top-container" :class="{ show }">
    <div @click="handleClick" class="main" :style="{ 'margin-right': right + 'px' }">
      <span>▲</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  props: {
    right: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    handleClick() {
      this.$emit('totop')
    },
    handleScroll(dom) {
      this.show = false
      if (dom.scrollTop >= dom.clientHeight) {
        this.show = true
      }
    },
  },
  created() {
    this.$bus.$on('mainScroll', this.handleScroll)
  },
  beforeDestroy() {
    this.$bus.$off('mainScroll', this.handleScroll)
  },
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
@import '~@/styles/common.less';
@r:45px;
.to-top-container {
  transition: 0.25s;
  display: flex;
  justify-content: flex-end; /* 使子元素靠右对齐 */
  position: sticky;
  transform: scale(0);
  opacity: 0;
  bottom: 20%;
  width: 100%;
  -webkit-transform-origin-x: calc(100% + 40px);
  &.show {
    transform: scale(1);
    opacity: 1;
  }
  .main {
    width: @r;
    height: @r;
    border-radius: 50%;
    border: 1px solid lighten(@dark,10%);
    background-color: lighten(@dark,10%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-size: 16px;
    color: @gray;
    cursor: pointer;
    opacity: 0.35;
    transition: 0.25s;
    z-index: 999;
    &:hover {
      opacity: 1;
      color: @white;

    }
  }
}
</style>
