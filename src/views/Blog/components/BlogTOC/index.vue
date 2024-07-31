<template>
  <div class="blog-TOC-container">
    <div class="main">
      <h2>目录</h2>
      <RightList :data="tocWithSelect" @selected="selectedHandler" class="rightList" />
    </div>
  </div>
</template>

<script>
import RightList from "../RightList";
import { throttle } from "@/utils";
export default {
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      // 这个数据表示选中的锚点
      activeAnchor: "",
    };
  },
  methods: {
    // 设置data中activeAnchor的值为正确的值
    setSelect(container) {
      const range = 120;
      this.activeAnchor = "";
      for (const dom of this.doms) {
        if (!dom) continue;
        // dom一定存在：
        // 得到元素距离container顶部的距离
        const top = dom.getBoundingClientRect().top - container.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          this.activeAnchor = dom.id;
        } else if (top > range) {
          return;
        } else {
          this.activeAnchor = dom.id;
        }
      }
    },
    selectedHandler(item) {
      location.hash = "";
      location.hash = item.anchor;
    },
  },
  computed: {
    // 将原来的toc数组的每一项以及子项映射一个isSelected属性
    tocWithSelect() {
      const getTOC = (toc = []) => {
        return toc.map((i) => ({
          ...i,
          isSelected: i.anchor === this.activeAnchor,
          children: getTOC(i.children),
        }));
      };
      return getTOC(this.toc);
    },
    // 获取目录对应的dom元素
    doms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const i of toc) {
          doms.push(document.getElementById(i.anchor));
          i.children && i.children.length && addToDoms(i.children);
        }
        return doms;
      };
      return addToDoms(this.toc);
    },
  },
  created() {
    this.setSelectThrottle = throttle(this.setSelect, 50);
    this.$bus.$on("mainScroll", this.setSelectThrottle);
  },
  beforeDestroy() {
    this.$bus.$off("mainScroll", this.setSelectThrottle);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/common.less";
.blog-TOC-container {
  @padding: 20px;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .main {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: @padding;
    .scroll-style();
    h2 {
      user-select: none;
      margin: 10px 0;
    }
    .rightList {
      margin-top: 25px;
    }
  }
}
</style>
