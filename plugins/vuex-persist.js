import VuexPersistence from "vuex-persist";

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
		reducer: state => ({
			// user: state.user,
			userTeams: state.userTeams
		})
    }).plugin(store);
  });
};
