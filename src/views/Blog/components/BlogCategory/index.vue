<template>
  <div class="blog-catrgory-container" v-loading="isLoading">
    <h2>博客类别</h2>
    <RightList :data="list" @selected="selectedHandler" />
  </div>
</template>

<script>
import RightList from "../RightList";
import fetchRemoteData from "@/mixins/fetchRemoteData";
import { getBlogCatrgories } from "@/api/blog.js";
export default {
  mixins: [fetchRemoteData([])],
  components: {
    RightList,
  },
  methods: {
    async fetchData() {
      return await getBlogCatrgories();
    },
    selectedHandler(item) {
      console.log(item);
      const query = {
        page: 1,
        limit: this.limit,
      };
      if (item.id === -1) {
        // 如果点击的分类为全部
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        // 如果点击的分类不为全部
        this.$router.push({
          name: "BlogCategory",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
  computed: {
    categoryId() {
      return this.$route.params.categoryId !== undefined ? +this.$route.params.categoryId : -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      const totalBlogsCount = this.data.reduce((result, item) => result + item.blogCount, 0);
      const composeResult = [
        // 总博客数量
        { name: "全部", id: -1, blogCount: totalBlogsCount },
        ...this.data,
      ];
      return composeResult.map((item) => ({
        ...item,
        isSelected: item.id === this.categoryId,
      }));
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/common.less";
.blog-catrgory-container {
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  width: 260px;
  padding: 20px;
  height: 100%;
  .scroll-style();
  h2 {
    margin-bottom: 15px;
  }
}
</style>
