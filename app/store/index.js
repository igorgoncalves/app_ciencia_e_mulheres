import Vue from "vue";
import Vuex from "vuex";
import historys from "./modules/historys";
// import cards from "./modules/cards";



Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== 'production'
const debug = true;

export default new Vuex.Store({
  modules: {
    historys
  },
  strict: debug,
});
