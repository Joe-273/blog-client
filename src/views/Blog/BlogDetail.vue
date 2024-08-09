<template>
  <div class="blog-detail-container" v-loading="isLoading">
    <Layout :showRight="true" class="layout" v-if="!isLoading">
      <div class="main" ref="mainContainer">
        <BlogDetailContent :blogItem="data" />
        <BlogComment class="commentArea" v-if="data" />
        <ToTop @totop="handleToTop" />
      </div>
      <template #right>
        <BlogTOC :toc="data.toc" />
      </template>
    </Layout>
  </div>
</template>

<script>
import fetchRemoteData from '@/mixins/fetchRemoteData.js'
import { getBlogDetail } from '@/api/blog'
import Layout from '@/components/Layout'
import BlogTOC from './components/BlogTOC'
import BlogDetailContent from './components/BlogDetailContent'
import BlogComment from './components/BlogComment'
import ToTop from '@/components/ToTop'
import { setTitle } from '@/utils'

export default {
  mixins: [fetchRemoteData({})],
  components: {
    Layout,
    BlogTOC,
    BlogDetailContent,
    BlogComment,
    ToTop,
  },
  methods: {
    handleToTop() {
      this.$refs.mainContainer.scrollTop = 0
    },
    async fetchData() {
      let resp = await getBlogDetail(this.$route.params.blogId)
      resp = null
      if (!resp) {
        this.$router.push(`${this.$route.fullPath}/404`)
        return
      }
      setTitle.setRouteTitle(resp.title)
      return resp
    },
    handleScroll() {
      this.$bus.$emit('mainScroll', this.$refs.mainContainer)
    },
  },
  updated() {
    this.$refs.mainContainer && this.$refs.mainContainer.addEventListener('scroll', this.handleScroll)
    const hash = location.hash
    location.hash = ''
    setTimeout(() => {
      location.hash = hash
    }, 50)
  },
  beforeDestroy() {
    this.$refs.mainContainer && this.$refs.mainContainer.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
@import '~@/styles/common.less';
.blog-detail-container {
  position: relative;
  height: 100%;
  width: 100%;
  .main {
    scroll-behavior: smooth;
    padding: 0 5%;
    position: relative;
    .scroll-style();
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    width: 100%;
    .commentArea {
      padding: 0 15px;
      padding-top: 25px;
      margin-top: 75px;
    }
  }
}
</style>
