<template>
  <div class="leave-words-area-container">
    <h3>
      <span>{{ title }}</span>
      <span class="subTitle">{{ subTitle }}</span>
    </h3>
    <DataForm v-on="$listeners" />
    <DataList :list="list" />
    <div class="loading" v-loading="isListLoading">
      <Empty v-if="list.length === 0 && !isListLoading" :text="emptyMessage" />
      <span v-else-if="list.length !== 0 && !isListLoading">
        {{ getEnd ? '噢~到底咯O(∩_∩)O~' : '' }}
      </span>
    </div>
  </div>
</template>

<script>
import DataForm from './DataForm.vue'
import DataList from './DataList.vue'
import Empty from '@/components/Empty'

export default {
  components: {
    DataForm,
    DataList,
    Empty,
  },
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    subTitle: {
      type: String,
      required: false,
      default: '',
    },
    list: {
      type: Array,
      required: false,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      required: false,
      default: false,
    },
    getEnd: {
      type: Boolean,
      required: false,
      default: false,
    },
    emptyMessage: {
      type: String,
      required: false,
      default: "空空如也"
    }
  },
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
@import '~@/styles/common.less';
.leave-words-area-container {
  h3 {
    margin: 15px 0;
    .subTitle {
      margin-left: 10px;
      font-size: 14px;
      color: @lightWords;
      font-weight: normal;
    }
  }
  .loading {
    .flex-center();
    position: relative;
    color: @gray;
    font-size: 14px;
    height: 75px;
  }
}
</style>
