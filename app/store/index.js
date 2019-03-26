import Vue from "vue";
import Vuex from "vuex";
import database from "../data/firebase";
import historys from "./modules/historys";
// import cards from "./modules/cards";



Vue.use(Vuex);
Vue.use(database);

// const debug = process.env.NODE_ENV !== 'production'
const debug = true;

export default new Vuex.Store({
  modules: {
    historys
  },
  strict: debug,
});
