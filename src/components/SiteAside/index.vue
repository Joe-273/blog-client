<template>
  <div class="site-aside-container">
    <div class="main-container" :class="{ closed: isClosed }">
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
    <div @click="clickHanlder" class="switch">
      <Icon class="icon" :type="isClosed ? 'arrowRight' : 'arrowLeft'" />
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
      isClosed: false,
    };
  },
  methods: {
    clickHanlder() {
      this.isClosed = !this.isClosed;
      this.$emit("switchAsideBar", this.isClosed);
    },
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
    padding: 15px;
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
    &.closed {
      opacity: 0;
      transition: opacity 0.25s 0.25s;
    }
  }
  .switch {
    background: lighten(@dark, 10%);
    position: absolute;
    height: 90px;
    width: 5px;
    border-radius: 0 50% 50% 0;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    z-index: 999;
    transition: 0.25s;
    cursor: pointer;
    overflow: hidden;
    .icon {
      .self-center();
      transition: 0.25s;
      transform: translate(calc(-50% - 10px), -50%);
      font-size: 36px;
      color: @gray;
    }
    &:hover {
      height: 45px;
      width: 25px;
      .icon {
        transform: translate(calc(-50% - 2px), -50%);
      }
    }
  }
}
</style>
