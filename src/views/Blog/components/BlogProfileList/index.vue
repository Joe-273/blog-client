<template>
  <div v-loading="isLoading" class="blog-profile-list-container">
    <ul v-if="!isLoading">
      <li  v-for="item in data.rows" :key="item.id">
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
              {{ item.category ? item.category.name : '无分类'}}
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
  data(){
    return{
      originData:null
    }
  },
  methods: {
    formatDate,
    async fetchData() {
        const resp =  await getBlogs(this.routeInfo.page, this.routeInfo.limit, this.routeInfo.categoryId)
        // 将第一次请求到的所有的文章储存起来，为了后面文章分类的时候重复使用，而不需要重复请求
        this.originData = {...resp}
        return resp
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
        // 因为分类获取的文章只能获取到所有文章，所以不需要重复请求
        // const resp = await this.fetchData()
        // this.data = resp

        if(this.routeInfo.categoryId !== -1){
          // 因为服务器分类获取文章的api出现问题了，所以这里写下替代方案
        // 当切换类别的时候,直接从第一次储存的originData中筛选符合条件的文章
          this.data.rows = this.originData.rows.filter(i => {
            if(i.category === null){
              return false
            }
            return i.category.id === this.routeInfo.categoryId
          })
        }else{
          this.data.rows = this.originData.rows
        }

        this.isLoading = false
      },
    },
  },
  computed: {
    routeInfo() {
      const categoryId = this.$route.params.categoryId || -1
      const page = this.$route.query.page || 1
      const limit = this.$route.query.limit || 10
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
