<template>
  <i class="iconfont icon-container" :class="mapType"></i>
</template>

<script>
const mapIcon = {
  pageView: 'icon-icon-',
  date: 'icon-riqi1',
  comment: 'icon-pinglun1',
  classify: 'icon-icon',
  github: 'icon-github1',
  error: 'icon-cuowu',
  arrowDown: 'icon-chevron_big_down',
  arrowLeft: 'icon-chevron_left',
  arrowRight: 'icon-chevron_right',
  arrowUp: 'icon-chevron_big_up',
  info: 'icon-xinxi',
  leaveWord: 'icon-liuyan',
  email: 'icon-email',
  qq: 'icon-qq',
  success: 'icon-zhengque',
  home: 'icon-zhuye',
  blog: 'icon-boke',
  wechat: 'icon-weixin',
  warn: 'icon-jinggao',
  close: 'icon-daochushujufuzhi',
  code: 'icon-code1',
  empty: 'icon-kongkongde',
  about: 'icon-guanyuwomen',
}
export const types = Object.keys(mapIcon)
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    mapType() {
      return mapIcon[this.type]
    },
  },
}
</script>

<style lang="less" scoped>
@import '//at.alicdn.com/t/c/font_4629566_fdtc2r4lszd.css';
.iconfont {
  font-size: inherit;
  color: inherit;
}
</style>
