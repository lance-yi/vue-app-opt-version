'use static'
import ApiHttp from '../../utils/api'
import ApiUrl from '../../utils/commom-url'

const state = {
  listData: []
}

const getters = {
}

const mutations = {
  getData (state, payload) {
    state.listData = state.listData.concat(payload.res.data.data)
    state.page = payload.res.data.page
    state.pageNumber = Math.ceil(payload.res.data.total / payload.res.data.pageSize)
  },
  refreshData (state, payload) {
    state.listData = payload.res.data.data
  }
}

const actions = {
  loadMore ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      const { page, type } = data
      ApiHttp.get(ApiUrl.getList, page, res => {
        if (type === 'loadMore') {
          commit({
            type: 'getData',
            res: res
          })
        } else {
          commit({
            type: 'refreshData',
            res: res
          })
        }
        resolve(res)
      }, err => {
        reject(err.error)
        // Toast(res.error)
      })
    })
  },
  initData () {},
  plusPage () {}
}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
}
