<template>
  <div class="blog-TOC-container">
    <div class="main">
      <h2>目录</h2>
      <RightList :data="toc" @selected="selectedHandler" class="rightList" />
    </div>
  </div>
</template>

<script>
import RightList from "../RightList";
import fetchRemoteData from "@/mixins/fetchRemoteData";
import { getBlogCatrgories } from "@/api/blog.js";
export default {
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array,
      required: true,
    },
  },
  methods: {
    selectedHandler(item) {
      console.log(item);
    },
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
    overflow-y: scroll;
    overflow-x: hidden;
    padding: @padding;
    .scroll-style();
    h2 {
      user-select: none;
      position: absolute;
      top: @padding;
      left: @padding;
      margin: 10px 0;
    }
    .rightList {
      margin-top: 60px;
    }
  }
}
</style>
