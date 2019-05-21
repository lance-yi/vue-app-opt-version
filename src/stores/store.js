import Vue from 'vue'
import Vuex from 'vuex'
import global from '@/stores/global'
import list from '@/stores/list'
import createLoadingPlugin from '@/utils/vuex-loading'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    global,
    list
  },
  state: {},
  mutations: {},
  actions: {},
  plugins: [createLoadingPlugin()]
})
