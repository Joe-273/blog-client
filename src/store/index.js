import Vuex from 'vuex'
import Vue from 'vue'
import banner from './banner.js'
import setting from './setting.js'
import about from './about.js'
import project from './project.js'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    setting,
    banner,
    about,
    project,
  },
  strict: true,
})
