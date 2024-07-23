<template>
  <div class="site-aside-container">
    <Avatar class="avatar" :imgUrl="imgUrl" />
    <Menu />
    <Contact />
  </div>
</template>

<script>
import Contact from "./Contact";
import Menu from "./Menu";
import Avatar from "@/components/Avatar";
import imgUrl from "@/assets/404AM.png";

export default {
  components: {
    Menu,
    Contact,
    Avatar,
  },
  data() {
    return {
      imgUrl,
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.site-aside-container {
  height: 100%;
  padding: 5%;
  overflow-y: scroll;
  overflow-x: hidden;
  text-align: center;
  background-color: @dark;
  color: @white;
  .avatar-container {
    margin-top: 30px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
