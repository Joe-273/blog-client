<template>
  <i class="iconfont icon-container" :class="mapType"></i>
</template>

<script>
const mapIcon = {
  github: "icon-github1",
  error: "icon-cuowu",
  arrowDown: "icon-cc-arrow-down-circle",
  arrowLeft: "icon-cc-arrow-left-circle",
  arrowRight: "icon-cc-arrow-right-circle",
  arrowUp: "icon-github1",
  info: "icon-xinxi",
  leaveWord: "icon-liuyan",
  email: "icon-email",
  qq: "icon-qq",
  right: "icon-zhengque",
  home: "icon-zhuye",
  blog: "icon-boke",
  warn: "icon-jinggao",
  close: "icon-daochushujufuzhi",
  code: "icon-code",
  empty: "icon-kongkongde",
  about: "icon-guanyuwomen",
};
export const types = Object.keys(mapIcon);
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    mapType() {
      return mapIcon[this.type];
    },
  },
};
</script>

<style lang="less" scoped>
@import "//at.alicdn.com/t/c/font_4629566_rfwcmeqs58d.css";
</style>
