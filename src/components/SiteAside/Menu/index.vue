<template>
  <ul class="munu-container">
    <li v-for="item in menuItemArray" :key="item.link" class="item">
      <RouterLink
        active-class="active"
        :exact="item.exactFilter"
        :to="{ name: item.routerName }"
        class="aLink"
      >
        <div class="icon">
          <Icon :type="item.iconType" />
        </div>
        <span>{{ item.text }}</span>
      </RouterLink>
    </li>
  </ul>
</template>

<style lang="less" scoped>
@import "~@/style/common.less";
@import "~@/style/var.less";
.munu-container {
  width: 100%;
  .item {
    position: relative;
    transition: 0.25s;
    .aLink {
      .border-style(4px;transparent);
      font-size: 18px;
      padding: 15px 0;
      .flex-center();
      .icon {
        position: absolute;
        left: 20%;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .active,
    &:hover {
      background-color: @words;
      text-shadow: 0 0 15px @white;
    }
  }
}
</style>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      menuItemArray: [
        {
          iconType: "home",
          text: "首页",
          routerName: "Home",
          exactFilter: true,
        },
        {
          iconType: "blog",
          text: "博客",
          routerName: "Blog",
          exactFilter: false, //激活样式不需要精确匹配
        },
        {
          iconType: "about",
          text: "关于我",
          routerName: "About",
          exactFilter: true,
        },
        {
          iconType: "code",
          text: "项目/效果",
          routerName: "Project",
          exactFilter: true,
        },
        {
          iconType: "leaveWord",
          text: "留言板",
          routerName: "LeaveWords",
          exactFilter: true,
        },
      ],
    };
  },
};
</script>
