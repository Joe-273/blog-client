import "./mock"; // 模拟数据
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less"; // 全局样式
import router from "./router"; // 使用路由

import { showMessage } from "./utils"; // 消息弹框插件
Vue.prototype.$showMessage = showMessage;

new Vue({
  router, // 在实例中使用路由
  render: (h) => h(App),
}).$mount("#app");
