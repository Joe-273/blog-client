<template>
  <div class="blog-detail-container" v-loading="isLoading">
    <Layout :showRight="true" class="layout" v-if="data">
      <BlogDetailContent :blogItem="data" />
      <template #right>
        <BlogTOC :toc="data.toc" />
      </template>
    </Layout>
  </div>
</template>

<script>
import fetchRemoteData from "@/mixins/fetchRemoteData.js";
import { getBlogDetail } from "@/api/blog";
import Layout from "@/components/Layout";
import BlogTOC from "./components/BlogTOC";
import BlogDetailContent from "./components/BlogDetailContent";

export default {
  mixins: [fetchRemoteData()],
  components: {
    Layout,
    BlogTOC,
    BlogDetailContent,
  },
  methods: {
    async fetchData() {
      return await getBlogDetail(this.$route.params.blogId);
    },
  },
};
</script>

<style lang="less" scoped>
.blog-detail-container {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
