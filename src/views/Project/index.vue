<template>
  <div class="project-conatiner" ref="mainContainer" v-loading="loading">
    <ul class="content">
      <li class="item" v-for="item in data" :key="item.id">
        <a :href="item.url ? item.url : `javascript:void(0)`" class="thumb">
          <img v-lazyload="item.thumb" alt="" />
        </a>
        <div class="main">
          <div class="link">
            <a :href="item.url ? item.url : `javascript:void(0)`">
              <h2>{{ item.name }}</h2>
            </a>
            <a :href="item.github" target="_blank">
              <h3>Github</h3>
            </a>
          </div>
          <div class="desc">
            <p v-for="(desc, i) in item.description">{{ desc }}</p>
          </div>
        </div>
      </li>
    </ul>
    <ToTop @totop="handleTotop" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ToTop from '@/components/ToTop'

export default {
  components: {
    ToTop,
  },
  computed: mapState('project', ['loading', 'data']),
  methods: {
    handleTotop() {
      this.$refs.mainContainer.scrollTop = 0
    },
    handleScroll() {
      this.$bus.$emit('mainScroll', this.$refs.mainContainer)
    },
  },
  created() {
    this.$store.dispatch('project/fetchData')
  },
  mounted() {
    console.log(this.$refs)
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
.project-conatiner {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
  padding: 0 40px;
  scroll-behavior: smooth;
  .scroll-style();
  .content {
    padding-top: 40px;
    .item {
      display: flex;
      margin: 15px;
      padding: 15px;
      transition: 0.25s;
      transform: scale(1);
      .border-style(8px, @gray);
      &:hover {
        box-shadow: 0 0 25px -15px @dark;
        transform: scale(1.02);
      }
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
        .link {
          display: flex;
          margin-bottom: 15px;
          h2 {
            line-height: 40px;
            white-space: nowrap;
            margin-right: 15px;
          }
          h3 {
            font-size: 16px;
            line-height: 40px;
            padding-top: 5px;
            color: @lightWords;
            letter-spacing: 1px;
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
