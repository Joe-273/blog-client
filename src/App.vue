<template>
  <div id="app">
    <Layout>
      <template #left>
        <div class="left">
          <SiteAside></SiteAside>
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
};
</script>

<style lang="less" scoped>
@import "~@/style/common.less";
#app {
  .self-fill(fixed);
  .left {
    width: 280px;
    height: 100%;
    background-color: lightcoral;
  }
}
</style>
