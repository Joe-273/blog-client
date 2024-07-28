<template>
  <div class="site-aside-container">
    <div class="main-container">
      <div class="body">
        <div class="avatar">
          <Avatar :imgUrl="imgUrl" />
          <p class="nameText">无敌暴龙王的小窝</p>
        </div>
        <Menu />
      </div>
      <div class="footer">
        <Contact />
        <p>备案号:xxxx</p>
      </div>
    </div>
  </div>
</template>

<script>
import Contact from "./Contact";
import Menu from "./Menu";
import Avatar from "@/components/Avatar";
import Icon from "@/components/Icon";
import imgUrl from "@/assets/404AM.png";

export default {
  components: {
    Menu,
    Contact,
    Avatar,
    Icon,
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
  width: 100%;
  position: relative;
  .main-container {
    height: 100%;
    width: 100%;
    transition: 0.25s;
    transition: opacity 0s;
    padding: 15px 5%;

    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: @dark;
    color: @white;
    .body {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      flex: 0 0 auto;
      > * {
        margin: 20px 0;
      }
      .avatar {
        .flex-center();
        flex-direction: column;
        .nameText {
          white-space: nowrap;
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
      text-align: center;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      color: @lightWords;
      white-space: nowrap;
      font-size: 12px;
      margin-top: 40px;
    }
  }
}
</style>
