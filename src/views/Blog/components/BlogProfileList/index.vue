<template>
  <div v-loading="isLoading" class="blog-profile-list-container">
    <!-- 博客列表 -->

    <!-- 搜索框 -->
    <form class="searchBox" @submit.prevent="handleSubmit">
      <div class="searchArea keywordInput" :class="{ focus: isInputFocus }">
        <input
          maxlength="32"
          placeholder="请输入关键字"
          @focus="handleFocus($event, 'Input')"
          @blur="handleBlur($event, 'Input')"
          v-model="keyword"
          type="text"
        />
        <span class="tip">{{ keyword.length }}/32</span>
      </div>
      <div @click.prevent="handleSubmit" class="searchArea submit " :class="{ disabled: !isInputFocus }">
        <button>{{ isSubmiting ? '筛选中...' : '搜索' }}</button>
      </div>
    </form>

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
              {{ item.scanNumber }}
            </span>
            <span class="flexText">
              <Icon class="icon" type="comment" />
              {{ item.commentNumber }}
            </span>
            <RouterLink
              class="flexText"
              :to="{
                name: 'BlogCategory',
                params: {
                  categoryId: item.category ? item.category.id : -1,
                },
              }"
            >
              <Icon class="icon" type="classify" />
              {{ item.category ? item.category.name : '无分类' }}
            </RouterLink>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <Empty v-if="data.rows.length === 0 && !isLoading" text="一篇博客都找不到哟" />
    <Pager
      v-show="!isLoading"
      v-if="data.total"
      @pageChanged="pageChangedHandler"
      :limit="+routeInfo.limit"
      :current="+routeInfo.page"
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
import Empty from '@/components/Empty'

export default {
  mixins: [fetchRemoteData({ total: 0, rows: [] })],
  components: {
    Pager,
    Empty,
    Icon,
  },
  data() {
    return {
      keyword: '',
      isInputFocus: false,
      isSubmiting: false,
    }
  },
  methods: {
    formatDate,
    async fetchData() {
      const resp = await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId,
        this.routeInfo.keyword
      )
      // 将第一次请求到的所有的文章储存起来，为了后面文章分类的时候重复使用，而不需要重复请求
      return resp
    },
    handleFocus(e, type) {
      this[`is${type}Focus`] = true
    },
    handleBlur(e, type) {
      if (e.target.value) return
      this[`is${type}Focus`] = false

      if (this.keyword === '') {
        // 清空搜索的时候自动重新获取数据
        this.handleSubmit()
      }
    },
    handleSubmit() {
      if (this.keyword === '' && this.keyword === this.routeInfo.keyword) {
        return
      }
      const query = {
        page: this.routeInfo.page,
        limit: +this.routeInfo.limit,
      }
      if (this.keyword) {
        query.keyword = this.keyword
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
    pageChangedHandler(newPage) {
      const query = {
        page: newPage,
        limit: +this.routeInfo.limit,
      }
      if (this.routeInfo.keyword) {
        query.keyword = this.routeInfo.keyword
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
        const resp = await this.fetchData()
        this.data = resp
        this.isLoading = false
      },
    },
  },
  computed: {
    routeInfo() {
      const categoryId = this.$route.params.categoryId || -1
      const page = this.$route.query.page || 1
      const limit = this.$route.query.limit || 10
      const keyword = this.$route.query.keyword || ''
      return {
        categoryId,
        page,
        limit,
        keyword,
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

  @bottomGap: 30px;
  .searchBox {
    overflow: hidden;
    display: flex;
    transition: 0.2s;
    padding: 0;
    padding-bottom: @bottomGap;
    height: calc(42px + @bottomGap);
    opacity: 1;
    .submit {
      @gap: 20px;
      cursor: pointer;
      width: fit-content;
      padding-left: @gap;
      padding-right: @gap;
      margin-left: 15px;
      border: none;
      background-color: lighten(@primary, 5%);
      color: lighten(@gray, 15%);
      user-select: none;
      &:hover {
        background-color: @primary;
        color: @white;
      }
      &.disabled {
        background-color: lighten(@primary, 15%);
        color: lighten(@gray, 10%);
        cursor: not-allowed;
      }
    }
  }
  .searchArea {
    position: relative;
    transition: 0.25s;
    display: flex;
    width: 100%;
    padding: 10px 15px;
    border: 1px solid lighten(@lightWords, 10%);
    background-color: lighten(@lightWords, 30%);
    border-radius: 8px;
    color: @lightWords;
    .error {
      position: absolute;
      left: 0;
      top: calc(100% + 8px);
      color: @danger;
      font-size: 14px;
    }
    &.focus {
      color: @words;
      border: 1px solid @primary;
      background-color: transparent;
    }
    &.keywordInput {
      flex: 1;
      width: fit-content;
      .flex-center();
      input {
        width: 200px;
      }
      .tip {
        color: inherit;
        font-size: 12px;
      }
    }
    button,
    input,
    textarea {
      cursor: inherit;
      color: inherit;
      font-family: '等线';
      font-size: 16px;
      flex: 1;
      line-height: 20px;
      resize: none;
      overflow-y: hidden;
      outline: none;
      border: none;
      background-color: transparent;
    }
  }

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
          white-space: pre;
          text-wrap: wrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: darken(@words, 15%);
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
          /* 控制显示的行数 */
          line-clamp: 5;
          line-height: 22px;
        }
      }
    }
  }
}
</style>
