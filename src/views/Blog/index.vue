<template>
  <Layout class="blog-container">
    <BlogProfileList />
    <template #right>
      <BlogCategory />
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogProfileList from "./components/BlogProfileList";
import BlogCategory from "./components/BlogCategory";
export default {
  components: {
    Layout,
    BlogProfileList,
    BlogCategory,
  },
};
</script>

<style lang="less" scoped></style>
