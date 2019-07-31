import * as firebase from 'firebase/app'
import 'firebase/database'
import Noty from 'noty'
import axios from 'axios'
import moment from 'moment'
import { resolveObject } from 'url'

export const state = () => ({
    loadedEvent: {},
    loadedEventsByDay: {},
    loadedEventsByCompetitionByRound: {},
    loadedEventActionsUserNotification: {}
})

export const mutations = {
    setEmptyEvents(state) {
        state.loadedEvents = []
    },
    setEvent(state, payload) {
        state.loadedEvent = payload
    },
    setEventsByDay(state, payload) {
        console.log('Call to setEventsByDay mutation', payload)
        state.loadedEventsByDay = payload
        // state.loadedEventsByDay = Object.assign({}, state.loadedEventsByDay, {
        //     [payload.date]: payload
        // })
    },
    setEventsByCompetitionByRound(state, payload) {
        console.log('payload2: ', payload)
        // console.log('competitionId: ', payload.competition)
        const competition = payload.competition
        console.log('competition: ', competition)
        const round = payload.round
        console.log('round: ', round)
        state.eventsByCompetitionByRound = Object.assign({}, state.eventsByCompetitionByRound, {
            [competition]: Object.assign({}, state.eventsByCompetitionByRound[competition], {
                [round]: payload.eventsArray
            })
        })
    },
    // setEventUsers(state, payload) {
    // 	state.loadedEventUsers = payload
    // },
    // addEventUser(state, payload) {
    // 	state.loadedEventUsers.push(...payload)
	// },
	setEventActionsUserNotification (state, payload) {
		console.log('payload2: ', payload)
		state.loadedEventActionsUserNotification = payload
	},
    clearEvents(state) {
        state.loadedEvents = {}
    }
}

export const actions = {
    async fetchEvent({ commit }, payload) {
        console.log('fetchEvent: ', payload)
        return new Promise((resolve, reject) => {
            try {
                firebase
                    .database()
                    .ref('/events')
                    .child(payload)
                    .on('value', function(snapshot) {
                        const event = { ...snapshot.val(), id: snapshot.key }
                        commit('setEvent', event)
                        resolve()
                    })
            } catch (error) {
                console.log('error: ', error)
                reject(error)
            }
        })
    },
    async loadedEvents({ commit }) {
        return new Promise((resolve, reject) => {
            try {
                firebase
                    .database()
                    .ref('/events_new3/')
                    .on('value', function(snapshot) {
                        const eventsArray = []
                        for (const key in snapshot.val()) {
                            eventsArray.push({
                                ...snapshot.val()[key],
                                id: key
                            })
                        }
                        commit('setEvents', eventsArray)
                        resolve(eventsArray)
                    })
            } catch (error) {
                console.log(error)
                new Noty({
                    type: 'error',
                    text: 'Events not found',
                    timeout: 5000,
                    theme: 'metroui'
                }).show()
                commit('setError', error, { root: true })
                commit('setLoading', false, { root: true })
                reject(error)
            }
        })
    },
    fetchEventsByDay({ commit }, payload) {
        try {
            console.log('fetchEventsByDay: ', payload)
            firebase
                .database()
                .ref('/events/')
                .orderByChild('date')
                .equalTo(payload)
                .on('value', function(snapshot) {
                    const eventsArray = []
                    snapshot.forEach(event => {
                        eventsArray.push({ ...event.val(), id: event.key })
                    })
                    const sortedEventsArray = eventsArray.sort((a, b) => a.timestamp - b.timestamp)
                    // const events = { date: date, events: sortedEventsArray }
                    const events = { [payload]: sortedEventsArray }
                    commit('setEventsByDay', events)
                })
        } catch (error) {
            console.log('error: ', error)
            throw error
        }
    },

    loadedCompetitionEvents({ commit }, payload) {
        // console.log('payload: ', payload)
        const competitionId = parseInt(payload.livescore_api_id)
        console.log('competitionId: ', competitionId)
        if (competitionId) {
            try {
                firebase
                    .database()
                    .ref('/events_new2/')
                    .orderByChild('competition_id')
                    .equalTo(competitionId)
                    // .orderByChild('date')
                    // .endAt('2018-11-20')
                    .limitToFirst(10)
                    .on('value', function(snapshot) {
                        const eventsArray = []
                        for (const key in snapshot.val()) {
                            eventsArray.push({
                                ...snapshot.val()[key],
                                id: key
                            })
                        }
                        console.log('eventsArray: ', eventsArray)
                        commit('setCompetitionEvents', eventsArray)
                        return eventsArray
                    })
            } catch (error) {
                console.log(error)
                new Noty({
                    type: 'error',
                    text: 'Events not found',
                    timeout: 5000,
                    theme: 'metroui'
                }).show()
                commit('setError', error, { root: true })
                commit('setLoading', false, { root: true })
                return error
            }
        }
    },
    fetchEventsByCompetitionByRound({ commit }, payload) {
        const competition = payload.competition.toString()
        const round = payload.round
        console.log('competition: ', competition)
        console.log('round: ', round)
        try {
            firebase
                .database()
                .ref('/events_new3/')
                .orderByChild('league_slug')
                .equalTo(competition)
                .on('value', function(snapshot) {
                    const eventsArray = []
                    snapshot.forEach(event => {
                        // console.log('event.val().round_short: ', event.val().round_short)
                        if (event.val().round_short == round) {
                            eventsArray.push({ ...event.val(), id: event.key })
                        }
                    })
                    eventsArray.sort((a, b) => a.timestamp - b.timestamp)
                    console.log('eventsArray: ', eventsArray)
                    commit('setEventsByCompetitionByRound', {
                        competition,
                        round,
                        eventsArray
                    })
                    // return eventsArray
                })
        } catch (error) {
            console.log(error)
            new Noty({
                type: 'error',
                text: 'Events not found',
                timeout: 5000,
                theme: 'metroui'
            }).show()
            commit('setError', error, { root: true })
            commit('setLoading', false, { root: true })
            return error
        }
    },
    // fetchEventUsers({ commit }, payload) {
    //     return new Promise((resolve, reject) => {
    // 		try {
    // 			console.log('fetchEventUsers: ', payload)
    // 			firebase
    // 				.database()
    // 				.ref('/eventUsers/')
    // 				.child(payload)
    // 				.on('value', function(snapshot) {
    // 					const eventUsersArray = []
    // 					for (const key in snapshot.val()) {
    // 						eventUsersArray.push({ ...snapshot.val()[key] })
    // 					}
    // 					console.log('eventUsersArray: ', eventUsersArray)
    // 					commit('setEventUsers', eventUsersArray)
    // 					resolve()
    // 				})

    // 		} catch (error) {
    // 			reject(error)
    // 		}
    //     })
    // },
    addUserToEvent({ commit, rootGetters }, payload) {
        try {
            console.log('addUserToEvent: ', payload)
            const user = rootGetters['users/loadedUser']
            console.log('user: ', user)
            firebase
                .database()
                .ref(`/events/${payload}/users`)
                .child(user.id)
                .set({
                    id: user.id,
                    username: user.username || null,
                    picture: user.picture || null,
                    level: user.level ? user.level.value : ''
                })
        } catch (error) {
            console.log('error: ', error)
            throw error
        }
    },
    async addActionToEvent({ commit, rootGetters }, payload) {
        try {
            console.log('addActionToEvent: ', payload)
            // const user = { id: rootGetters['users/loadedUser']['id'], username: rootGetters['users/loadedUser']['username'] }
            const user = rootGetters['users/loadedUser']

            // 1) Generate a random ID that, for ordering purposes, is the remaining seconds until December 1st, 2050 and today appended by a random number between 1 and 1000
            const newNode = 2553465600 - moment().unix() + '_' + Math.floor(Math.random() * 1000)
			// const newNode = moment().add(10, 'years').unix() - moment().unix() + '_' + Math.floor(Math.random() * 1000)
			
			// 2) Add new action to event node
			delete payload.action.id
			const min_participants_count = Math.ceil((payload.usersCount * payload.action.min_participants_percent || 0) / 100)
            await firebase
                .database()
                .ref(`/events/${payload.eventId}/actions/${newNode}`)
                .set({
                    id: newNode,
                    userId: user.id,
                    username: user.username,
					_created_at: moment().unix(),
					usersCount: 1,
					users: {
						[user.id]: {
							userId: user.id,
							username: user.username,
							picture: user.picture
						}
					},
					min_participants_count,
					// progress: 0,
					// completed: false,
                    ...payload.action
				})
				
			// 3) Also, add a listener to be notified when users join in
			firebase
                .database()
                .ref(`events/${payload.eventId}/actions/${newNode}/users`)
                .on('child_added', function(data) {
					let user = data.val()
					console.log('user: ', user)
					user.action = payload.action['name']
					console.log('CHILD ADDED! ', user)
					if (user.userId !== rootGetters['users/loadedUser'].id) {
						commit('setEventActionsUserNotification', user)
						new Noty({
							type: 'info',
							text: `${user.username} has joined your action.`,
							timeout: 5000,
							theme: 'metroui'
						}).show()
					}
				})
        } catch (error) {
            console.log('error: ', error)
            throw error
        }
    },
    joinAction({ commit, rootGetters }, payload) {
        try {
			console.log('payload: ', payload)
			const user = rootGetters['users/loadedUser']
            const userId = user.id

			// 1) Add user to action
			let updates = {}
			
			firebase.database().ref(`/events/${payload.eventId}/actions/${payload.action.id}/users`).update({
				[userId]: { userId, username: user.username, picture: user.picture }})
				
			if (payload.usersCount + 1 >= payload.action.min_participants_count) {
				firebase.database().ref(`/events/${payload.eventId}/actions/${payload.action.id}`).update({ completed: true })
			}

			firebase.database().ref().update(updates)
			
            // firebase
            //     .database()
            //     .ref(`/events/${payload.eventId}/actions/${payload.actionId}/users`)
            //     .update({ [userId]: { userId, username: user.username, picture: user.picture } })

            // 2) Update action counter
            firebase
                .database()
                .ref(`events/${payload.eventId}/actions/${payload.action.id}`)
                .transaction(function(action) {
                    if (action) {
                        if (!action.usersCount) {
                            action.usersCount = 1
                        } else {
                            action.usersCount++
                        }
                    }
                    return action
				})
			
			
        } catch (error) {
            throw error
        }
    },
    // updateEventAction({ commit }, payload) {
	// 	try {
	// 		console.log('updateEventAction: ', payload)

	// 		let updates = {}
	// 		updates[`/events/${payload.eventId}/actions/${payload.actionId}/completed`] = true
	// 		firebase
    //             .database()
    //             .ref()
	// 			.update(updates)
							
    //     } catch (error) {
    //         throw error
    //     }
	// }
}

export const getters = {
    loadedEvent(state) {
        return state.loadedEvent
    },
    loadedEventsByDay(state) {
        return state.loadedEventsByDay
    },
    loadedEventsByCompetitionByRound(state) {
        return state.loadedEventsByCompetitionByRound
    },
    // loadedEventUsers(state) {
    //     return state.loadedEventUsers
	// }
	loadedEventActionsUserNotification(state) {
		return state.loadedEventActionsUserNotification
	}
}
