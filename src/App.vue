<template>
  <div id="app">
    <Layout>
      <template #left>
        <div class="left" :class="{ switched: !isAsideClosed }">
          <SiteAside></SiteAside>
          <div class="switchButton" @click="switchAsideHandler">
            <Icon class="icon" :type="isAsideClosed ? 'arrowLeft' : 'arrowRight'" />
          </div>
          <div class="overlap"></div>
        </div>
      </template>
      <template>
        <RouterView></RouterView>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";
import Icon from "@/components/Icon";
import { RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    Layout,
    SiteAside,
    Icon,
  },
  data() {
    return {
      isAsideClosed: false,
    };
  },
  methods: {
    switchAsideHandler() {
      this.isAsideClosed = !this.isAsideClosed;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/common.less";
@import "~@/styles/var.less";
#app {
  .self-fill(fixed);
  background-color: @white;
  .left {
    width: 280px;
    height: 100%;
    transition: 0.25s;
    position: relative;
    &.switched {
      width: 0;
    }
    @r: 8px;
    .switchButton {
      position: absolute;
      width: 5px;
      height: 90px;
      background-color: lighten(@dark, 10%);
      z-index: 999;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 0 @r @r 0;
      cursor: pointer;
      transition: 0.25s;
      overflow: hidden;
      .icon {
        transition: 0.25s 0.1s;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 5px;
        color: @gray;
        font-size: 28px;
      }
      &:hover {
        width: 25px;
        height: 50px;
        border-radius: 0 16px 16px 0;
        .icon {
          transform: translateY(-50%) translateX(5px);
        }
      }
    }
  }
}
</style>
