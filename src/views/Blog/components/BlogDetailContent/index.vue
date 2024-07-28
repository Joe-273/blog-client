<template>
  <div class="blog-detail-content-container">
    <h1>{{ blogItem.title }}</h1>
    <div class="aside">
      <span class="flexText">
        <Icon class="icon" type="date" />
        {{ formatDate(blogItem.createDate) }}
      </span>
      <span class="flexText">
        <Icon class="icon" type="pageView" />
        {{ blogItem.scanNumber }}
      </span class="flexText">
      <a class="flexText">
        <Icon class="icon" type="comment" />
        {{ blogItem.commentNumber }}
      </a>
      <a class="flexText">
        <Icon class="icon" type="classify" />
        {{ blogItem.category.name }}
      </a>
    </div>
    <div v-html="blogItem.htmlContent" class="htmlContent markdown-body"></div>
  </div>
</template>

<script>
import { formatDate } from "@/utils";
import "highlight.js/styles/github.css";
import "@/styles/markdown.css";
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  props: {
    blogItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/common.less";
.blog-detail-content-container {
  padding: 30px;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  .scroll-style();
  h1 {
    margin: 10px 0 15px 0;
  }
  .htmlContent {
    margin-top: 15px;
  }
  .aside {
    padding-bottom: 15px;
    border-bottom: 1px solid @gray;
    margin-bottom: 30px;
    font-size: 14px;
    color: @lightWords;
    display: flex;
    .flexText {
      margin-right: 25px;
      display: flex;
      align-items: center;
      .icon {
        font-size: 20px;
        padding-right: 5px;
      }
    }
  }
}
</style>
