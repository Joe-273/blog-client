// 公共远程获取数据的代码
/**
 * 远程获取数据
 * @param {*} fn 需要调用的获取远程数据的函数
 * @param {*} defaultValue 获取数据的初始值
 * @returns
 */
export default function(fn, defaultValue = null) {
  return {
    data() {
      return {
        isLoading: true,
        data: defaultValue,
      };
    },
    async created() {
      this.data = await fn();
      this.isLoading = false;
    },
  };
}
