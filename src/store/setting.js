import { getSetting } from '@/api/setting'
import { setTitle } from '@/utils'

export default {
  namespaced: true,
  state: {
    loading: false,
    data: null,
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
      ctx.commit('setLoading', true)
      const resp = await getSetting()
      ctx.commit('setData', resp)
      ctx.commit('setLoading', false)
      if (resp.favicon) {
        let link = document.querySelector('link[rel="shortcut icon"]')
        if (link) {
          return
        }
        link = document.createElement('link')
        link.rel = 'shortcut icon'
        link.type = 'image/x-icon'
        link.href = resp.favicon
        document.querySelector('head').appendChild(link)
      }
      if (resp.siteTitle) {
        setTitle.setSiteTitle(resp.siteTitle)
      }
    },
  },
}
