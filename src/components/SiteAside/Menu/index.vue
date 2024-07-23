<template>
  <ul class="munu-container">
    <li v-for="item in menuItemArray" :key="item.text" class="item">
      <a :href="item.link" class="aLink" :class="{ active: getCurrentPath(item) }">
        <div class="icon">
          <Icon :type="item.iconType" />
        </div>
        <span>{{ item.text }}</span>
      </a>
    </li>
  </ul>
</template>

<style lang="less" scoped>
@import "~@/style/common.less";
@import "~@/style/var.less";
.munu-container {
  margin: 30px 0;
  .item {
    transition: 0.25s;
    .aLink {
      transition: 0.25s;
      padding: 10px 20%;
      .flex-center();
      justify-content: flex-start;
      .icon {
        margin-right: 10px;
        font-size: 24px;
      }
      &.active {
        color: @primary;
      }
    }
    &:hover {
      background-color: #333;
      .aLink {
        text-shadow: 0 0 15px @white;
      }
    }
  }
}
</style>

<script>
import Icon from "@/components/Icon";
export default {
  methods: {
    getCurrentPath(item) {
      const link = item.link.toLowerCase();
      const pathname = location.pathname.toLowerCase();
      if (item.blurFilter) {
        return pathname.startsWith(link + "/");
      } else {
        return pathname === link || pathname === link + "/";
      }
    },
  },
  components: {
    Icon,
  },
  data() {
    return {
      menuItemArray: [
        {
          iconType: "home",
          text: "首页",
          link: "/",
        },
        {
          iconType: "blog",
          text: "博客",
          link: "/blog",
          blurFilter: true,
        },
        {
          iconType: "about",
          text: "关于我",
          link: "/about",
        },
        {
          iconType: "code",
          text: "项目/效果",
          link: "/project",
        },
        {
          iconType: "leaveWord",
          text: "留言板",
          link: "/leaveWord",
        },
      ],
    };
  },
};
</script>
