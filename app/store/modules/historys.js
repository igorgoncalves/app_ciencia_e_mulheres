import historiesCollection from "../../data/Historia2.json";

let collections_ref;

const state = {
  histories: {},
};

export const getters = {
  allStories: state => () => {
    return state.histories || [];
  },
  getStory: state => id => {
    return state.histories[id] || [];
  },
  getScenario: state => (idHistory, idScenario) => {
    return state.histories[idHistory].cenarios[idScenario] || [];
  }
};

export const mutations = {
  sethistories(state, payload){
    state.histories = payload
  }
};

export const actions = {
  fetchCollections({ commit }) {
    commit("sethistories",  JSON.parse(JSON.stringify(historiesCollection)))
  }
}

export default {
  state,
  getters,
  mutations,
  actions
};
