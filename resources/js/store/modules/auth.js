const state = {
	auth: {
		isAuthenticated: false,
	},
	user: null
}

const getters = {
	isAuthenticated: state => state.auth.isAuthenticated,
	user: (state) => state.user
}

const actions = {
	user(context, user) {
		context.commit('user', user);
}
}

const mutations = {
	TOGGLE_AUTH(state, data) {
		state.auth.isAuthenticated = data
	},
	user(state, user) {
		state.user = user
	} 
	
}

export default {
	state,
	getters,
	actions,
	mutations
}