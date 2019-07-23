import * as firebase from 'firebase/app'
import 'firebase/database'
import Noty from 'noty'
import axios from 'axios'
import moment from 'moment'
import { resolveObject } from 'url';

export const state = () => ({
	loadedEvent: {},
    loadedEventsByDay: {},
	loadedEventsByCompetitionByRound: {},
	// loadedEventUsers: []
})

export const mutations = {
    setEmptyEvents(state) {
        state.loadedEvents = []
	},
	setEvent (state, payload) {
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
        state.eventsByCompetitionByRound = Object.assign(
            {},
            state.eventsByCompetitionByRound,
            {
                [competition]: Object.assign(
                    {},
                    state.eventsByCompetitionByRound[competition],
                    { [round]: payload.eventsArray }
                )
            }
        )
    },
    // setEventUsers(state, payload) {
	// 	state.loadedEventUsers = payload
	// },
	// addEventUser(state, payload) {
	// 	state.loadedEventUsers.push(...payload)
	// },
    clearEvents(state) {
        state.loadedEvents = {}
	},
}

export const actions = {
	async fetchEvent({ commit }, payload) {
		console.log('fetchEvent: ', payload)
		return new Promise((resolve, reject) => {
			try {
				firebase.database().ref('/events').child(payload).on('value', function(snapshot) {
					const event = {...snapshot.val(), id: snapshot.key}
					commit('setEvent', event)
					resolve()
				})
			} catch(error) {
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
			const date = payload
			firebase
				.database()
				.ref('/events/')
				.orderByChild('date')
				.equalTo(date)
				.on('value', function(snapshot) {
					const eventsArray = []
					snapshot.forEach(event => {
						eventsArray.push({ ...event.val(), id: event.key })
					})
					const sortedEventsArray = eventsArray.sort(
						(a, b) => a.timestamp - b.timestamp
					)
					// const events = { date: date, events: sortedEventsArray }
					const events = { [date]: sortedEventsArray }
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
	addActionToEvent({ commit }, payload) {
		try {
			console.log('addActionToEvent: ', payload)
			firebase
				.database()
				.ref(`/events/${payload.eventId}/actions`)
				.push(payload.action)
		} catch (error) {
			console.log('error: ', error)
			throw error
		}	
	},
}

export const getters = {
	loadedEvent (state) {
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
}
