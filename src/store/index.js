import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import actions from '../actions'
import logger from 'vuex/dist/logger'


Vue.use(Vuex)

export default new Vuex.Store({
  actions: actions,
  modules: modules,
  strict: false,
  plugins: [logger()]
})
