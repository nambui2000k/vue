import Vue from "vue";
import Vuex from "vuex";
import Appbar from "./modules/Navbar"
import Home from "./modules/Home"
import Photo from "./modules/Photo"
import About from "./modules/About"
import Pets from "./modules/Pets"
import * as actions from "./actions"
import * as mutations from "./mutations"
import * as getters from "./getters"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token:localStorage.getItem("access_token") || null,
    navs: [
      {name: "Dashboard", router: "/", icon: "fas fa-tachometer-alt"},
      {name: "Applicants", router: "/applicants", icon: "fas fa-users"},
      {name: "jobs", router: "/jobs", icon: "fas fa-briefcase"},
      {name: "Calendar", router: "/calender", icon: "fas fa-calendar-alt"},
      {name: "Pets", router: "/pets", icon: "fas fa-paw"},
    ]
  },
  getters,
  mutations,
  actions,
  modules: {
    Appbar,
    Home,
    Photo,
    About,
    Pets
  },
});
