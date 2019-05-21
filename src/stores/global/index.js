'use static'

const state = {
  data: ['/']
}

const actions = {
  setData ({ commit, state }, data) {
    console.log(data)
    commit({
      type: 'setData',
      data: data.payload
    })
  }
}

const mutations = {
  setData (state, payload) {
    state.data = state.data.concat(payload.data)
    console.log(state)
  }
}
export default {
  state,
  actions,
  mutations,
  namespaced: true
}
