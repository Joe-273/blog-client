import { getProject } from '@/api/project'
import router from '@/router'
import { showMessage } from '@/utils'

export default {
  namespaced: true,
  state: {
    loading: false,
    data: [],
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload
    },
    setData(state, payload) {
      state.data = payload
    },
  },
  actions: {
    async fetchData(ctx) {
      if (ctx.state.data.length) {
        return
      }
      try {
        console.log("object");
        ctx.commit('setLoading', true)
        const resp = await getProject()
        ctx.commit('setData', resp)

      } catch (error) {
        showMessage({
          content: '获取项目数据失败',
          type: 'error',
        })
        router.push('/404').catch(err => {
          if (err.name !== 'NavigationDuplicated') {
            throw err // 如果不是重复导航错误，则抛出
          }
        })
      } finally {
        ctx.commit('setLoading', false)
      }
    },
  },
}
