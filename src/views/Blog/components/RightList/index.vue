<template>
  <ul class="right-list-container">
    <li v-for="(item, index) in data" :key="index">
      <span class="title" @click="clickHandler(item)" :class="{ selected: item.isSelected }">
        {{ item.name }}
        <span v-if="item.blogCount || false" class="desc">{{ item.blogCount }}篇</span>
      </span>

      <RightList v-if="!!item.children && item.children.length" :data="item.children" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    clickHandler(item) {
      if (!item.isSelected) {
        this.$emit("selected", item);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/common.less";
.right-list-container {
  list-style: none;
  padding: 0;
  line-height: 40px;
  .title {
    display: block;
    white-space: nowrap;
    padding-left: 15px;
    height: 40px;
    font-size: 16px;
    color: @words;
    font-weight: 700;
    cursor: pointer;
    user-select: none;
    transition: 0.25s;
    border-radius: 4px;
    &:hover {
      background-color: lighten(@gray, 15%);
    }
    &.selected {
      background-color: lighten(@gray, 10%);
      cursor: auto;
      color: @primary;
      .desc {
        color: @primary;
      }
    }
    .desc {
      font-weight: normal;
      margin-left: 5px;
      font-size: 12px;
      color: @lightWords;
    }
  }
  .right-list-container {
    margin-left: 20px;
  }
}
</style>
