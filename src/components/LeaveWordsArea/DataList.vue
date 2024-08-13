<template>
  <ul class="datalist-container">
    <li v-if="item" v-for="item of list" :key="item.id" class="commentItem">
      <div class="avatar">
        <Avatar :imgUrl="item.avatar" :imgSize="56" />
      </div>
      <div class="main">
        <div class="nickName">{{ item.nickname }}</div>
        <div class="commentContent">
          {{ item.content }}
        </div>
        <div class="commentDate">
          <Icon class="icon" type="date" />
          {{ formatDate(item.createDate, true) }}
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import Avatar from '@/components/Avatar'
import Icon from '@/components/Icon'
import { formatDate } from '@/utils/'
// import imgurl from "@/assets/404AM.png";
export default {
  components: {
    Avatar,
    Icon,
  },
  methods: {
    formatDate,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
@import '~@/styles/common.less';
.datalist-container {
  .commentItem {
    display: flex;
    padding: 25px 15px 15px;
    .main {
      flex: 1 1 auto;
      border-bottom: 1px solid @gray;
      margin-left: 15px;
      .nickName {
        padding: 10px 0;
        font-size: 14px;
        line-height: 16px;
        color: @words;
      }
      .commentContent {
        width: 100%;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        color: darken(@words, 15%);
        line-clamp: 5;
        line-height: 22px;
      }
      .commentDate {
        display: flex;
        align-items: center;
        font-size: 14px;
        padding: 10px 0 15px 0;
        color: @lightWords;
        .icon {
          .icon-style();
        }
      }
    }
  }
}
</style>
