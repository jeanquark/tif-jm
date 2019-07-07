import * as firebase from 'firebase/app'
import 'firebase/database'

export const state = () => ({
	loadedTeam: {}
})

export const mutations = {
	setTeam (state, payload) {
		console.log('payload: ', payload)
		return state.loadedTeam = payload
	}
}

export const actions = {
	async fetchTeam ( { commit }, payload) {
		const team = await firebase.database().ref('/teams').child(payload).once('value')
		console.log('team action: ', team.val())
		commit('setTeam', team.val())
		return team.val()
	}
}

export const getters = {
	loadedTeam (state) {
		return state.loadedTeam
	}
}