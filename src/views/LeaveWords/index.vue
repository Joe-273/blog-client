<template>
  <div class="leave-words-container" ref="mainContainer">
    <div class="main">
      <LeaveWordsArea
        :title="'留言板'"
        :subTitle="`(${data.total})`"
        :list="data.rows"
        :isListLoading="isLoading"
        :getEnd="data.rows.length >= data.total"
        @submit="handleSubmit"
      />
    </div>
  </div>
</template>

<script>
import LeaveWordsArea from '@/components/LeaveWordsArea'
import fetchRemoteData from '@/mixins/fetchRemoteData.js'
import ToTop from '@/components/ToTop'
import { getLeaveWords, postLeaveWords } from '@/api/leaveWords'

export default {
  mixins: [fetchRemoteData({ total: 0, rows: [] })],

  components: {
    LeaveWordsArea,
    ToTop,
  },

  data() {
    return {
      limit: 10,
      page: 1,
    }
  },

  methods: {
    async fetchData() {
      return await getLeaveWords(this.page, this.limit)
    },
    async fetchMore() {
      if (this.data.rows.length >= this.data.total || this.isLoading) {
        return
      }
      this.isLoading = true
      const moreData = await getLeaveWords(this.page, this.limit)
      this.data.rows.push(...moreData.rows)
      this.page++
      this.isLoading = false
    },
    async handleSubmit(formData, callback) {
      const resp = await postLeaveWords({
        ...formData,
      })
      this.data.rows.unshift(resp)
      this.data.total++
      callback("感谢留言(●'◡'●)") //传递处理完成信号给后代组件
    },
    handleTotop() {
      this.$refs.mainContainer.scrollTop = 0
    },
    handleScroll() {
      this.$bus.$emit('mainScroll', this.$refs.mainContainer)
      const difference = Math.abs(
        this.$refs.mainContainer.scrollHeight -
          this.$refs.mainContainer.clientHeight -
          this.$refs.mainContainer.scrollTop
      )
      if (difference === 0) {
        this.fetchMore()
      }
    },
  },
  updated() {
    this.$refs.mainContainer && this.$refs.mainContainer.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    this.$refs.mainContainer.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
@import '~@/styles/common.less';
.leave-words-container {
  width: 100%;
  height: 100%;
  padding: 0 40px;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
  position: relative;
  .scroll-style();
  .main {
    padding: 40px 15%;
  }
}
</style>
