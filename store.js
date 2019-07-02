import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },

  },
  actions: {

  },
  getters: {
    isLogin: state => {
      return !!state.token; // 转换为布尔值
    },
  }
});
store.subscribe((mutation,state) => {
  switch (mutation) {
    case "setToken":
      localStorage.setItem("token", JSON.stringify(state.token))
      break;
    case "addCart":
      localStorage.setItem("cart",JSON.stringify(state.cart))
  }
})
export default store;
