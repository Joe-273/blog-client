<template>
  <div id="blog-comment-container" class="blog-comment-container">
    <LeaveWordsArea
      :title="'评论列表'"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      :getEnd="data.rows.length >= data.total"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import LeaveWordsArea from '@/components/LeaveWordsArea'
import fetchRemoteData from '@/mixins/fetchRemoteData.js'
import { getComment, postComment } from '@/api/blog'

export default {
  mixins: [fetchRemoteData({ total: 0, rows: [] })],
  components: {
    LeaveWordsArea,
  },
  data() {
    return {
      limit: 10,
      page: 1,
    }
  },
  methods: {
    async fetchData() {
      return await getComment(this.page, this.limit, this.$route.params.blogId)
    },
    async fetchMore() {
      if (this.data.rows.length >= this.data.total || this.isLoading) return
      this.isLoading = true
      const moreData = await getComment(this.page, this.limit, this.$route.params.blogId)
      this.data.rows.push(...moreData.rows)
      this.page++
      this.isLoading = false
    },
    async handleSubmit(formData, callback) {
      const resp = await postComment({
        blogId: this.$route.params.blogId,
        ...formData,
      })
      this.data.rows.unshift(resp)
      this.data.total++
      callback('评论成功(●ˇ∀ˇ●)') //传递处理完成信号给后代组件
    },
    handleScroll(dom) {
      const difference = Math.abs(dom.scrollHeight - dom.clientHeight - dom.scrollTop)
      if (difference === 0) this.fetchMore()
    },
  },
  created() {
    this.$bus.$on('mainScroll', this.handleScroll)
  },
  beforeDestroy() {
    this.$bus.$off('mainScroll', this.handleScroll)
  },
}
</script>

<style lang="less" scoped>
.blog-comment-container {
  position: relative;
}
</style>
