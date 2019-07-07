import * as firebase from 'firebase/app'

export const state = () => ({
	loadedBirthyear: []
})

export const mutations = {
	setLoadedBirthyear(state, payload) {
        state.loadedBirthyear = payload
    }
}

export const actions = {
	// Load all birthyear
	loadedBirthyear ({commit}) {
    	firebase.database().ref('/birthyear/').once('value').then(function (snapshot) {
	      	// console.log(snapshot.val())
	      	const birthyearArray = []
	      	for (const key in snapshot.val()) {
	        	birthyearArray.push({ ...snapshot.val()[key], id: key})
	      	}
	      	commit('setLoadedBirthyear', birthyearArray)
	    })
  	}
}

export const getters = {
	loadedBirthyear(state) {
        return state.loadedBirthyear
    }
}