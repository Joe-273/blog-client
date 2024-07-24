import Vue from "vue";
import App from "./App.vue";
import "./style/global.less";
import router from "./router";

import { showMessage } from "./utils";

Vue.prototype.$showMessage = showMessage;
new Vue({
  // 在实例中使用路由
  router,
  render: (h) => h(App),
}).$mount("#app");
