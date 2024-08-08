import { getBanner } from '@/api/banner'

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
      ctx.commit('setLoading', true)
      const resp = await getBanner()
      ctx.commit('setData', resp)
      ctx.commit('setLoading', false)
    },
  },
}
