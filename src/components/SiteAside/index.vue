<template>
  <div class="site-aside-container">
    <div class="main">
      <div class="avatar">
        <Avatar :imgUrl="imgUrl" />
        <p class="nameText">无敌暴龙王的小窝</p>
      </div>
      <Menu />
    </div>
    <div>
      <Contact />
      <p class="footer">备案号:xxxx</p>
    </div>
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
@import "~@/styles/var.less";
@import "~@/styles/common.less";
.site-aside-container {
  height: 100%;
  padding: 5%;
  overflow-y: scroll;
  overflow-x: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: @dark;
  color: @white;
  .main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    > * {
      margin: 20px 0;
    }
    .avatar {
      flex: 0 0 auto;
      .flex-center();
      flex-direction: column;
      .nameText {
        margin: 20px 0;
        color: @gray;
        font-size: 22px;
        font-weight: 700;
      }
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }
  .footer {
    margin: 10px 0;
    font-size: 12px;
    color: @lightWords;
  }
}
</style>
