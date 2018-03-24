import * as getters from './getters'

const state = {
  slotAmount: -1,
  ballSelection: []
}

const actions = {
  setSlotAmount: ({ commit }, slotAmount) => {
    commit('setSlotAmount', slotAmount)
  },
  selectBalls: ({ commit }, payload) => {
    commit('selectBalls', payload)
  },
  deleteBalls: ({ commit }, title) => {
    commit('deleteBalls', title)
  }
}

const mutations = {
  setSlotAmount(state, slotAmount) {
    state.slotAmount = slotAmount
  },
  selectBalls(state, payload) {
    let existed = false
    for (let item of state.ballSelection) {
      if (item.title === payload.title) {
        state.ballSelection.splice(state.ballSelection.indexOf(item), 1)
        state.ballSelection.push(payload)
        existed = true
      }
    }
    if (!existed) {
      state.ballSelection.push(payload)
    }
  },
  deleteBalls(state, title) {
    for (let item of state.ballSelection) {
      if (item.title === title) {
        state.ballSelection.splice(state.ballSelection.indexOf(item), 1)
      }
    }
  }
}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
}
