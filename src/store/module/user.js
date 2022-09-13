
export default
{
  namespaced: true,
  state: {
    user: JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : null,
    authenticated: JSON.parse(localStorage.getItem("authenticated")) ? JSON.parse(localStorage.getItem("authenticated")) : false,
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setAuthenticated(state, payload) {
      state.authenticated = payload;
    },
  },
  actions: {
    changeAuthenticated({ commit}, payload) {
      commit("setAuthenticated", payload.authenticated);
      commit("setUser", payload);
    }
  },
}