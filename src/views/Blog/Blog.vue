<template>
  <Layout :showRight="true" class="blog-container">
    <div class="main" ref="mainContainer">
      <BlogProfileList />
      <ToTop @totop="handleTotop" />
    </div>
    <template #right>
      <BlogCategory />
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import ToTop from "@/components/ToTop";
import BlogProfileList from "./components/BlogProfileList";
import BlogCategory from "./components/BlogCategory";
export default {
  components: {
    Layout,
    BlogProfileList,
    BlogCategory,
    ToTop,
  },
  methods: {
    handleTotop() {
      this.$refs.mainContainer.scrollTop = 0;
    },
    handleScroll() {
      this.$bus.$emit("mainScroll", this.$refs.mainContainer);
    },
  },
  mounted() {
    this.$refs.mainContainer && this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$refs.mainContainer.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/common.less";
.blog-container {
  height: 100%;
  width: 100%;
  .main {
    height: 100%;
    width: 100%;
    overflow: hidden;
    scroll-behavior: smooth;
    padding: 0 40px;
    .scroll-style();
    overflow: hidden;
    overflow-y: auto;
  }
}
</style>
