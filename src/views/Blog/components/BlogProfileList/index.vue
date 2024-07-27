<template>
  <div v-loading="isLoading" class="blog-profile-list-container">
    <ul v-show="!isLoading">
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <a href="">
            <img :src="item.thumb" :alt="item.title" :title="item.title" />
          </a>
        </div>
        <div class="main">
          <a href="">
            <h2>{{ item.title }}</h2>
          </a>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.commentNumber }}</span>
            <span>评论：{{ item.scanNumber }}</span>
            <a href="/blog/cate/8" class="">{{ item.category.name }}</a>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <Pager
      v-show="!isLoading"
      v-if="data.total"
      @pageChanged="pageChangedHandler"
      :limit="routeInfo.limit"
      :current="routeInfo.page"
      :total="data.total"
      :visibleNumber="7"
      class="pager"
    />
  </div>
</template>

<script>
import Pager from "@/components/Pager";
import fetchRemoteData from "@/mixins/fetchRemoteData.js";
import { getBlogs } from "@/api/blog";
import { formatDate } from "@/utils";
export default {
  mixins: [fetchRemoteData({})],
  components: {
    Pager,
  },
  methods: {
    formatDate,
    async fetchData() {
      return await getBlogs(this.routeInfo.page, this.routeInfo.limit, this.routeInfo.categoryId);
    },
    pageChangedHandler(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      if (this.routeInfo.categoryId === -1) {
        // 当前所在分类为全部的情况
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        // 当前分类处于有分类的页面
        this.$router.push({
          name: "BlogCategory",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },
  },
  watch: {
    $route: {
      async handler() {
        this.isLoading = true;
        this.data = await this.fetchData();
        this.isLoading = false;
      },
    },
  },
  computed: {
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/common.less";
.blog-profile-list-container {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  .scroll-style();
  ul {
    overflow: hidden;
    margin: 20px;
    li {
      padding: 15px;
      width: 100%;
      border-bottom: 1px solid @gray;
      display: flex;
      .thumb {
        .border-style(8px, @gray);
        flex: 0 0 auto;
        overflow: hidden;
        height: 180px;
        width: 230px;
        transition: 0.25s;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .main {
        flex: 1 1 auto;
        overflow: hidden;
        margin-left: 15px;
        height: 100%;
        h2 {
          line-height: 40px;
          white-space: nowrap;
        }
        .aside {
          white-space: nowrap;
          color: @lightWords;
          font-size: 14px;
          margin-top: 5px;
          margin-bottom: 15px;
          span {
            margin-right: 20px;
          }
        }
        .desc {
          width: 100%;
          white-space: normal;
          overflow: hidden;
          text-overflow: ellipsis;
          color: @dark;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4; /* 控制显示的行数 */
          line-clamp: 5;
          text-indent: 2em;
          line-height: 1.4;
        }
      }
    }
  }
  .pager {
    margin: 60px 0;
  }
}
</style>
