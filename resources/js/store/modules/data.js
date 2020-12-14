const state = {
	data: []
}

const getters = {
	data: state => state.data,
}

const actions = {

}

const mutations = {
	setData(state, data) {
    state.data = data
  }
	
}

export default {
	state,
	getters,
	actions,
	mutations
}