import "./mock"; // 模拟数据
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less"; // 全局样式
import router from "./router"; // 使用路由

import { showMessage } from "./utils"; // 消息弹框插件
Vue.prototype.$showMessage = showMessage;

import vLoading from "./directives/loading";
Vue.directive("loading", vLoading);

new Vue({
  router, // 在实例中使用路由
  render: (h) => h(App),
}).$mount("#app");

//  测试api
// import * as blogApi from "./api/blog";
// blogApi.getBlogDetail("123").then((r) => console.log(r));
// blogApi
//   .postComment({
//     nickname: "爱坤的只因",
//     content: "评论内容，纯路人",
//     blogId: 520,
//   })
//   .then((r) => console.log(r));
// blogApi.getComment().then((r) => console.log(r));
