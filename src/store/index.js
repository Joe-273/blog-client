import Vuex from 'vuex'
import Vue from 'vue'
import banner from './banner.js'
import setting from './setting.js'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    setting,
    banner,
  },
  strict: true,
})
