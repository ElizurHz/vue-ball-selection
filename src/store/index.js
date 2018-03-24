import Vue from 'vue'
import Vuex from 'vuex'
import ballSelection from './ball-selection'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ballSelection
  }
})
