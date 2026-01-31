import { createStore } from 'vuex'

export default createStore({
  getters: {
    // doubleCount: (state) => state.count * 2,
    // validate_isAuthenticated: (state) => {
    //   state.global_isAuthenticated = localStorage.getItem('isAuthenticated') != 'false'
    // },
  },
  state: {
    theme: 'dark',
    // global_isAuthenticated: false,
  },
  mutations: {
    updateTheme(state, payload) {
      state.theme = payload
    },
  },
  actions: {
    UPDATE_THEME(context, payload) {
      context.commit('updateTheme', payload)
    },
  },
})
