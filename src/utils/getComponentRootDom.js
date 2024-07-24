import Vue from "vue";

/**
 * 获取组件的根Dom元素
 */
export default function(component, props) {
  const vm = new Vue({
    render: (h) => h(component, { props }),
  });
  vm.$mount();
  return vm.$el;
}
