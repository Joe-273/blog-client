import { Store, install } from 'vuex'
import Vue from 'vue'
import banner from './banner.js'
import setting from './setting.js'
import about from './about.js'
import project from './project.js'

if (!window.Vuex) {
  install(Vue)
}

export default new Store({
  modules: {
    setting,
    banner,
    about,
    project,
  },
  strict: true,
})
