import moment from 'moment'
import * as firebase from 'firebase/app'
import 'firebase/database'

export const strict = false

export const state = () => ({
    userTeams: []
})

export const mutations = {
    setUserTeams(state, payload) {
        state.userTeams = payload
    }
}

export const actions = {
    fetchUserTeams({ commit, rootGetters }) {
		return new Promise((resolve, reject) => {
			const userId = rootGetters['users/loadedUser'].id
			try {
				firebase.database().ref(`userTeams/${userId}`).on('value', function (snapshot) {
					commit('setUserTeams', snapshot.val())
					resolve()
				})
			} catch (error) {
				reject(error)
			}
		})
    },
    updateUserTeams({ commit, rootGetters }, payload) {
		try {
			console.log('updateUserTeams: ', payload)
			const userId = rootGetters['users/loadedUser'].id
			firebase.database().ref(`userTeams/${userId}/${payload.slug}`).update({
				name: payload.name,
				slug: payload.slug,
				image: payload.image,
				country: payload.country,
				_updated_at: moment().unix()
			})
		} catch (error) {
			throw error
		}
    }
}

export const getters = {
    loadedUserTeams(state) {
        return state.userTeams
    }
}
