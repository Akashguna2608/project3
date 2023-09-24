export default {
    namespaced: true,
    state() {
      return {
        count: 0,
      };
    },
    mutations: {
      increase(state) {
        state.count++;
      },
    },
    actions: {
      increase(context) {
        context.commit('increase');
      },
    },
  };
  