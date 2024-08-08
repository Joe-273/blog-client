<template>
  <div v-loading="isLoading" class="blog-profile-list-container">
    <ul v-if="!isLoading">
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <RouterLink
            :to="{
              name: 'BlogDetail',
              params: {
                blogId: item.id,
              },
            }"
          >
            <img v-lazyload="item.thumb" :alt="item.title" :title="item.title" />
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink
            :to="{
              name: 'BlogDetail',
              params: {
                blogId: item.id,
              },
            }"
          >
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span class="flexText">
              <Icon class="icon" type="date" />
              {{ formatDate(item.createDate) }}
            </span>
            <span class="flexText">
              <Icon class="icon" type="pageView" />
              {{ item.commentNumber }}
            </span>
            <span class="flexText">
              <Icon class="icon" type="comment" />
              {{ item.scanNumber }}
            </span>
            <RouterLink
              class="flexText"
              :to="{
                name: 'BlogCategory',
                params: {
                  categoryId: item.category.id,
                },
              }"
            >
              <Icon class="icon" type="classify" />
              {{ item.category.name }}
            </RouterLink>
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
import Pager from '@/components/Pager'
import fetchRemoteData from '@/mixins/fetchRemoteData.js'
import { getBlogs } from '@/api/blog'
import { formatDate } from '@/utils'
import Icon from '@/components/Icon'

export default {
  mixins: [fetchRemoteData({})],
  components: {
    Pager,
    Icon,
  },
  methods: {
    formatDate,
    async fetchData() {
      return await getBlogs(this.routeInfo.page, this.routeInfo.limit, this.routeInfo.categoryId)
    },
    pageChangedHandler(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      }
      if (this.routeInfo.categoryId === -1) {
        // 当前所在分类为全部的情况
        this.$router.push({
          name: 'Blog',
          query,
        })
      } else {
        // 当前分类处于有分类的页面
        this.$router.push({
          name: 'BlogCategory',
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        })
      }
    },
  },
  watch: {
    $route: {
      async handler() {
        this.isLoading = true
        this.data = await this.fetchData()
        this.isLoading = false
      },
    },
  },
  computed: {
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1
      const page = +this.$route.query.page || 1
      const limit = +this.$route.query.limit || 10
      return {
        categoryId,
        page,
        limit,
      }
    },
  },
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
@import '~@/styles/common.less';
.blog-profile-list-container {
  padding-top: 40px;
  ul {
    li {
      padding: 15px;
      padding-top: 25px;
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
        .desc {
          width: 100%;
          white-space: normal;
          overflow: hidden;
          text-overflow: ellipsis;
          color: darken(@words, 15%);
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4; /* 控制显示的行数 */
          line-clamp: 5;
          text-indent: 2em;
          line-height: 22px;
        }
      }
    }
  }
}
</style>
