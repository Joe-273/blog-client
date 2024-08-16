// 公共远程获取数据的代码
import { showMessage } from '@/utils'

/**
 * 远程获取数据,需要自行提供一个fetchData异步函数
 * @param {*} defaultValue 获取数据的初始值
 * @returns
 */
export default function (defaultValue = null) {
  return {
    data() {
      return {
        isLoading: true,
        data: defaultValue,
      }
    },
    async created() {
      try {
        this.data = await this.fetchData()
      } catch {
      } finally {
        this.isLoading = false
      }
    },
  }
}
