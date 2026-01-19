import { createStore } from 'vuex'

export default createStore({
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
  state: {
    theme: 'dark',
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
