<template>
  <div id="app">
    <Layout :showLeft="true">
      <template #left>
        <div class="left" :class="{ closed: isClosed }">
          <SiteAside @switchAsideBar="switchHandler"></SiteAside>
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
import { RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    Layout,
    SiteAside,
  },
  data() {
    return {
      isClosed: false,
    };
  },
  methods: {
    switchHandler(isClosed) {
      this.isClosed = isClosed;
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
    height: 100%;
    transition: 0.25s;
    .closed {
      width: 0;
    }
  }
}
</style>
