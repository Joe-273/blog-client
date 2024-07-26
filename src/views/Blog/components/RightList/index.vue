<template>
  <ul class="right-list-container">
    <li v-for="(item, index) in data" :key="index">
      <span @click="clickHandler(item)" :class="{ selected: item.isSelected }">{{ item.name }}</span>
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
      console.log(item);
      this.$emit("selected", item);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.right-list-container {
  list-style: none;
  line-height: 40px;
  padding: 0;
  span {
    color: @words;
    font-size: 18px;
    cursor: pointer;
    user-select: none;
    &.selected {
      color: @primary;
    }
  }
  .right-list-container {
    margin-left: 20px;
  }
}
</style>
