// import './mock' // 模拟数据
import Vue from 'vue'
import App from './App.vue'
import './styles/global.less' // 全局样式
import router from './router' // 使用路由

import { showMessage } from './utils' // 消息弹框插件
Vue.prototype.$showMessage = showMessage

import vLoading from './directives/loading'
Vue.directive('loading', vLoading)

import vLazyLoad from './directives/lazyload'
Vue.directive('lazyload', vLazyLoad)

import store from './store'
store.dispatch('setting/fetchData')

// 事件总线
/**
 * 监听事件：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 * - 滚动条的dom元素
 */
Vue.prototype.$bus = new Vue({})

new Vue({
  store, // 使用仓库
  router, // 在实例中使用路由
  render: (h) => h(App),
}).$mount('#app')
