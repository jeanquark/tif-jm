import * as firebase from 'firebase/app'
import 'firebase/database'
import axios from 'axios'
import Noty from 'noty'
import moment from 'moment'

export const state = () => ({
    loadedUserActions: []
})

export const mutations = {
    setUserActions(state, payload) {
        // state.loadedUserActions = Object.assign({}, state.loadedUserActions, { [payload.slug]: payload })
        state.loadedUserActions = payload
    }
}

export const actions = {
    async getUserEnergy ({ rootState }) {
        try {
            return rootState.users.loadedUser.energy.value
        } catch {
            return 0
        }
    },
	fetchUserActions({ commit, rootState }) {
		// const userId = firebase.auth().currentUser.uid
		// const userId = 'zoKAPbbEQ5Q0ENXBzarjQw2WyEZ2'
		const userId = rootState.users.loadedUser.id
		// const today = '2019-04-18'
		const today = moment().format('YYYY-MM-DD')
		console.log('today: ', today)
		firebase.database().ref(`/userActions/${userId}/${today}`).on('value', function(snapshot) {
			// const userActions = []
			// for (const key in snapshot.val()) {
			// 	userActions.push({
			// 		...snapshot.val()[key],
			// 		id: key
			// 	})
			// }
			// console.log('userActions: ', userActions)
			// const userActions = snapshot.val()
            // commit('setUserActions', userActions)
            // console.log('snapshot.val(): ', snapshot.val())
            commit('setUserActions', snapshot.val())
		})
	},
	
	async updateUserActions({ commit, dispatch, rootState }, payload) {
		console.log('payload3: ', payload)
		// const actionSlug = payload
        // const userId = firebase.auth().currentUser.uid
		// const userId = 'zoKAPbbEQ5Q0ENXBzarjQw2WyEZ2'
		const userId = rootState.users.loadedUser.id
		const today = moment().format('YYYY-MM-DD')
		// console.log('userId: ', userId)

		// Update card occurences
		// firebase.database().ref(`userActions/${userId}/${today}/${payload.slug}/occurences`).transaction(count => {
		// 	return (count || 0) + 1
        // })

        firebase.database().ref(`userActions/${userId}/${today}/${payload.slug}`).transaction(value => {
            if (value) {
                return {
                    name: payload.name,
                    slug: payload.slug,
                    occurences: (value.occurences || 0) + 1
                }
            }
            return {
                name: payload.name,
                slug: payload.slug,
                occurences: 1
            }
        })
        
        const energyCost = payload.actionCosts['cost_energy']
        console.log('energyCost: ', energyCost)
        const userEnergyStock = await dispatch('getUserEnergy')
        console.log('userEnergyStock: ', userEnergyStock)
        
        firebase.database().ref(`userActions/${userId}/${today}/energy`).transaction(count => {
            return (count || userEnergyStock) - energyCost.value
        })

        for (let key in payload.actionCosts) {
            console.log('key: ', key)
            console.log(payload.actionCosts[key])
            const name = payload.actionCosts[key].name
            const value = payload.actionCosts[key].value
            const property = payload.actionCosts[key].property
            console.log('name: ', name)
            console.log('value: ', value)
            console.log('property: ', property)
            if (property != 'energy') { // User energy is a stock that is fixed for the day
                firebase.database().ref(`users/${userId}/${property}`).transaction(count => {
                    if (count) {
                        return {
                            value: (count.value || 0) - value,
                            _updated_at: moment().unix()
                        }
                    }
                })
            }
        }

        // for (let cost in Object.entries(payload.actionCosts)) {
        for (let key in payload.actionGains) {
            console.log('key: ', key)
            console.log(payload.actionGains[key])
            const name = payload.actionGains[key].name
            const value = payload.actionGains[key].value
            const property = payload.actionGains[key].property
            console.log('name: ', name)
            console.log('value: ', value)
            console.log('property: ', property)
            firebase.database().ref(`users/${userId}/${property}`).transaction(count => {
                if (count) {
                    return {
                        value: (count.value || 0) + value,
                        _updated_at: moment().unix()
                    }
                }
            })
        }
	},

    async updateUserActions2({ commit }, payload) {
        try {
            // console.log('Entering updateUserActions')
            // console.log('payload: ', payload)
            const userId = firebase.auth().currentUser.uid

            // Format data
            let array = []
            for (let slot of payload.array) {
                console.log("slot2: ", slot)
                const name = slot.name
                console.log("name: ", name)

                const object = array.find(slot => {
                    return slot.name === name
                })
                if (!object) {
                    const object = {
                        id: slot.id,
                        name: slot.name,
                        slug: slot.slug,
                        physical_gain: slot.physical_gain,
                        // social_gain: data.gain_social,
                        // special_gain: data.gain_special,
                        occurences: 1
                    }
                    array.push(object)
                } else {
                    object.occurences += 1
                    object.physical_gain += slot.physical_gain
                }
            }

            // Update card occurences
            for (let action of array) {
                console.log(action.id)
                console.log("action: ", action)
                console.log("occurences: ", action.occurences)
                var ref = firebase
                    .database()
                    .ref("userActions/" + userId + "/cards/" + action.id)
                ref.transaction(function(count) {
                    return (count || 0) + action.occurences
                })
            }

            // Update userActions node in database
            try {
                await firebase
                    .database()
                    .ref("/userActions/" + userId + "/" + payload.today)
                    .set(payload.array)
                new Noty({
                    type: "success",
                    text: "Daily actions successfully updated!",
                    timeout: 5000,
                    theme: "metroui"
                }).show()
                console.log("array: ", array)
                return array
            } catch (error) {
                new Noty({
                    type: "error",
                    text:
                        "Sorry, your actions for the day could not be updated. ",
                    timeout: 5000,
                    theme: "metroui"
                }).show()
                console.log(error)
            }
        } catch (error) {
            new Noty({
                type: "error",
                text: "Sorry, your actions for the day could not be updated",
                timeout: 5000,
                theme: "metroui"
            }).show()
            console.log(error)
        }
    }
}

export const getters = {
    loadedUserActions(state) {
        return state.loadedUserActions
    }
}
