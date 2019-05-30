const state = {
  language: 'zhCN',
  vue: "vue",
  antd: "antd"
};

const getters = {};

const mutations = {
  _set(state, msg) {
    state[msg.key] = msg.val;
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
