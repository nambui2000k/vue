const state = {
  drawer: true,
  items: [
    { title: "Dashboard", icon: "mdi-view-dashboard" ,linkUrl:"/"},
    { title: "Photos", icon: "mdi-image" ,linkUrl:"/photo"},
    { title: "About", icon: "mdi-help-box" ,linkUrl:"/about"},
  ],
  avatar:""
};
const getters = {
    drawer: (state) => {
    return state.drawer;
  },
  getItems: (state) => {
    return state.items;
  },
};

const mutations = {
  changeStatusDrawerOption(state) {
    state.drawer = !state.drawer;
  },
};

const actions = {
  changeStatusDrawerAction: ({ commit }) => {
    commit("changeStatusDrawerOption");
  },
};

export default { state, getters, mutations, actions };
