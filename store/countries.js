import * as firebase from 'firebase/app'

export const state = () => ({
	loadedCountries: []
})

export const mutations = {
	setLoadedCountries(state, payload) {
        state.loadedCountries = payload
	},
	setCountriesByConfederation (state, payload) {
		state.loadedCountries = Object.assign({}, state.loadedCountries, { [payload.confederation]: payload.countries })
	}
}

export const actions = {
	fetchCountriesByConfederation ({ commit }, payload) {
		console.log('payload2: ', payload)
		firebase.database().ref('/countries').orderByChild('confederation/slug').equalTo(payload).on('value', function (snapshot) {
			const countriesArray = []
			for (const key in snapshot.val()) {
				countriesArray.push({ ...snapshot.val()[key], id: key})
			}
			const abc = countriesArray.sort((a, b) => a.ranking - b.ranking)
			console.log('countriesArray: ', countriesArray)
			commit('setCountriesByConfederation', { confederation: payload, countries: abc })
		})
	},
	// Load all countries
	loadedCountries ({commit}) {
    	firebase.database().ref('/countries/').once('value').then(function (snapshot) {
	      	// console.log(snapshot.val())
	      	const countriesArray = []
	      	for (const key in snapshot.val()) {
	        	countriesArray.push({ ...snapshot.val()[key], id: key})
	      	}
	      	commit('setLoadedCountries', countriesArray)
	    })
  	}
}

export const getters = {
	loadedCountries(state) {
        return state.loadedCountries
    }
}