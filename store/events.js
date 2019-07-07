import * as firebase from 'firebase/app'
import 'firebase/database'
import Noty from 'noty'
import axios from 'axios'
import moment from 'moment'

export const state = () => ({
    // loadedEvents: [],
    loadedEvents: {},
    // loadedEventUsers: [],
    // loadedLiveEvents: [],
    // loadedCompetitionEvents: []
    eventsByCompetitionByRound: {}
})

export const mutations = {
    setEmptyEvents(state) {
        state.loadedEvents = []
    },
    // setEvents(state, payload) {
    //     state.loadedEvents = payload
    // },
    setEvents (state, payload) {
        // console.log('Call to setEvents mutation', payload)
        state.loadedEvents = Object.assign({}, state.loadedEvents, { [payload.date]: payload })
    },
    setEventsByCompetitionByRound (state, payload) {
        console.log('payload2: ', payload)
        // console.log('competitionId: ', payload.competition)
        const competition = payload.competition
        console.log('competition: ', competition)
        const round = payload.round
        console.log('round: ', round)
        state.eventsByCompetitionByRound = Object.assign({}, state.eventsByCompetitionByRound, { [competition]: Object.assign({}, state.eventsByCompetitionByRound[competition], { [round]: payload.eventsArray }) })
    },
    // addEvents(state, payload) {
    //     state.loadedEvents.push(...payload)
    // },
    // setCompetitionEvents(state, payload) {
    //     state.loadedCompetitionEvents = payload
    // },
    // setEventUsers(state, payload) {
    //     state.loadedEventUsers = payload
    // },
    // setLiveEvents(state, payload) {
    //     state.loadedLiveEvents = payload
    // },
    // createEvent(state, payload) {
    //     state.loadedEvents.push(payload)
    //     state.loadedUserEvents.push(payload)
    // },
    // deleteEvent(state, id) {
    //     const loadedEvents = state.loadedEvents
    //     state.loadedEvents.splice(
    //         loadedEvents.findIndex(event => event.id === id),
    //         1
    //     )
    // }
    clearEvents (state) {
        state.loadedEvents = {}
    }
}

export const actions = {
    // Load all events
    // loadedEvents ({commit}) {
    //     firebase.database().ref('/events_new2/').on('value', function (snapshot) {
    //         const eventsArray = []
    //         for (const key in snapshot.val()) {
    //             eventsArray.push({ ...snapshot.val()[key], id: key})
    //         }

    //         commit('setEvents', eventsArray)
    //         console.log('eventsArray: ', eventsArray)

    //     })
    //     return eventsArray
    // },

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
    // loadedEventsAndCompetitionsByDay ({ commit }, payload) {
    //     const date = payload
    //     console.log('date: ', date)
    //     return new Promise((resolve, reject) => {
    //         try {
    //             // firebase
    //             //     .database()
    //             //     .ref("/events/")
    //             //     .orderByChild('date')
    //             //     .equalTo(date)
    //             //     .on("value", function(snapshot) {
    //             //         const eventsArray = []
    //             //         const competitionsArray = []
    //             //         for (const key1 in snapshot.val()) {
    //             //             eventsArray.push({
    //             //                 ...snapshot.val()[key],
    //             //                 id: key
    //             //             })
    //             //         }
    //             //         // commit("addEvents", eventsArray)
    //             //         commit("setEvents", eventsArray)
    //             //         resolve(eventsArray)
    //             //     })
    //             firebase
    //                 .database()
    //                 .ref("/events/")
    //                 .orderByChild('date')
    //                 .equalTo(date)
    //                 .on("value", function(snapshot) {
    //                     const eventsArray = []
    //                     // const competitionsArray = ['english_premier_league_2018_2019', 'swiss_super_league_2018_2019']
    //                     const competitionsArray2 = [
    //                         {
    //                             "name": "La Liga",
    //                             "slug": "spanish_la_liga_2018_2019"
    //                         },
    //                         {
    //                             "name": "Premier League",
    //                             "slug": "english_premier_league_2018_2019"
    //                         },
    //                         {
    //                             "name": "Serie A",
    //                             "slug": "italian_serie_a_2018_2019"
    //                         },
    //                         {
    //                             "name": "Bundesliga",
    //                             "slug": "german_bundesliga_2018_2019"
    //                         },
    //                         {
    //                             "name": "Ligue 1",
    //                             "slug": "french_ligue1_2018_2019"
    //                         },
    //                         {
    //                             "name": "Super League",
    //                             "slug": "swiss_super_league_2018_2019"
    //                         }
    //                     ]
    //                     const competitionsArray = []
    //                     snapshot.forEach((event) => {
    //                         eventsArray.push({...event.val(), id: event.key})
    //                         const competitionSlug = event.val().competition ? event.val().competition.slug : null
    //                         if (competitionSlug && !competitionsArray.find(competition => (competition.slug === event.val().competition.slug))) {
    //                             competitionsArray.push(event.val().competition)
    //                         }
    //                     })
    //                     console.log('eventsArray: ', eventsArray)
    //                     console.log('competitionsArray: ', competitionsArray)
    //                     commit('setEvents', eventsArray)
    //                     commit('competitions/setCompetitions', competitionsArray, { root: true })
    //                     resolve(eventsArray)
    //                 })
    //         } catch (error) {
    //             console.log(error)
    //             new Noty({
    //                 type: "error",
    //                 text: "Events not found",
    //                 timeout: 5000,
    //                 theme: "metroui"
    //             }).show()
    //             commit("setError", error, { root: true })
    //             commit("setLoading", false, { root: true })
    //             reject(error)
    //         }
    //     })
    // },
    fetchEventsByDay ({ commit }, payload) {
        const date = payload

        firebase
            .database()
            .ref('/events_new3/')
            .orderByChild('date')
            .equalTo(date)
            .on('value', function(snapshot) {
                const eventsArray = []
                snapshot.forEach((event) => {
                    eventsArray.push({...event.val(), id: event.key}) 
                })
                const sortedEventsArray = eventsArray.sort((a, b) => a.timestamp - b.timestamp)
                const events = {date: date, events: sortedEventsArray}
                commit('setEvents', events)
            })
    },
    // async loadedEventsByDay2 ({ commit }, payload) {
    //     try {
    //         console.log('loadedDailyEvents action called')
    //         const date = payload
    //         console.log('date: ', date)
    //         // return

    //         const snapshot = await firebase.database().ref('/events/').orderByChild('date').equalTo(date).on('value', function(){})
    //         const eventsArray = []
    //         snapshot.forEach((event) => {
    //             eventsArray.push({...event.val(), id: event.key})
    //         })
    //         console.log('eventsArray: ', eventsArray)
    //         commit('addEvents', eventsArray)
            
    //         return eventsArray
    //     }
    //     catch(error) {
    //         console.log('error: ', error)
    //     }
    // },
    loadedCompetitionEvents({ commit }, payload) {
        // console.log('payload: ', payload)
        const competitionId = parseInt(payload.livescore_api_id)
        console.log("competitionId: ", competitionId)
        if (competitionId) {
            try {
                firebase
                    .database()
                    .ref("/events_new2/")
                    .orderByChild("competition_id")
                    .equalTo(competitionId)
                    // .orderByChild('date')
                    // .endAt('2018-11-20')
                    .limitToFirst(10)
                    .on("value", function(snapshot) {
                        const eventsArray = []
                        for (const key in snapshot.val()) {
                            eventsArray.push({
                                ...snapshot.val()[key],
                                id: key
                            })
                        }
                        console.log("eventsArray: ", eventsArray)
                        commit("setCompetitionEvents", eventsArray)
                        return eventsArray
                    })
            } catch (error) {
                console.log(error)
                new Noty({
                    type: "error",
                    text: "Events not found",
                    timeout: 5000,
                    theme: "metroui"
                }).show()
                commit("setError", error, { root: true })
                commit("setLoading", false, { root: true })
                return error
            }
        }

        // return new Promise((resolve, reject) => {
        //     try {
        //         firebase.database().ref('/events_new2/')
        //             .orderByChild('competition_id')
        //             .equalTo(46)
        //             .limitToLast(2)
        //             .on('value', function (snapshot) {
        //                 const eventsArray = []
        //                 for (const key in snapshot.val()) {
        //                     eventsArray.push({ ...snapshot.val()[key], id: key})
        //                 }
        //                 commit('setCompetitionEvents', eventsArray)
        //                 resolve(eventsArray)
        //             })

        //     }
        //     catch(error) {
        //         console.log(error)
        //         new Noty({type: 'error', text: 'Events not found', timeout: 5000, theme: 'metroui'}).show()
        //         commit('setError', error, { root: true })
        //         commit('setLoading', false, { root: true })
        //         reject(error)
        //     }
        // })
    },

    fetchEventsByCompetitionByRound ({ commit }, payload) {
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
                    snapshot.forEach((event) => {
                        // console.log('event.val().round_short: ', event.val().round_short)
                        if (event.val().round_short == round) {
                            eventsArray.push({...event.val(), id: event.key})
                        }
                        
                    })
                    eventsArray.sort((a, b) => a.timestamp - b.timestamp)
                    console.log('eventsArray: ', eventsArray)
                    commit("setEventsByCompetitionByRound", { competition, round, eventsArray })
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

    loadedEventUsers({ commit }, payload) {
        // try {
        //     // console.log('payload: ', payload)
        //     firebase
        //         .database()
        //         .ref("/eventUsers/")
        //         .child(payload.id)
        //         .on("value", function(snapshot) {
        //             const usersArray = []
        //             for (const key in snapshot.val()) {
        //                 usersArray.push({ ...snapshot.val()[key] })
        //             }
        //             // console.log(postsArray)
        //             commit("setEventUsers", usersArray)
        //         })
        // } catch (error) {
        //     console.log(error)
        // }
    },

    loadedLiveEvents({ commit }) {
        // try {
        //     firebase
        //         .database()
        //         .ref("/events_new/")
        //         .orderByChild("status")
        //         .equalTo("live")
        //         .on("value", function(snapshot) {
        //             // console.log(snapshot.val())
        //             const liveEventsArray = []
        //             for (const key in snapshot.val()) {
        //                 liveEventsArray.push({ ...snapshot.val()[key] })
        //             }
        //             // console.log(postsArray)
        //             commit("setLiveEvents", liveEventsArray)
        //         })
        // } catch (error) {
        //     console.log(error)
        // }
    },

    // Create a new event
    createEvent({ commit, getters }, payload) {
        // commit("setLoading", true, { root: true })

        // // Generate new unique key
        // const newEventKey = firebase
        //     .database()
        //     .ref()
        //     .child("/events_new/")
        //     .push().key

        // let updates = {}
        // updates["/events_new/" + newEventKey] = payload

        // firebase
        //     .database()
        //     .ref()
        //     .update(updates)
        //     .then(() => {
        //         new Noty({
        //             type: "success",
        //             text:
        //                 "Événement " +
        //                 payload.name +
        //                 " enregistré avec succès!",
        //             timeout: 5000,
        //             theme: "metroui"
        //         }).show()
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         commit("setError", error, { root: true })
        //         new Noty({
        //             type: "error",
        //             text: "Événement non enregistré. Erreur: " + error,
        //             timeout: 5000,
        //             theme: "metroui"
        //         }).show()
        //     })
    },

    // Update an event
    updateEvent({ commit, dispatch }, payload) {
        // commit("setLoading", true, { root: true })
        // console.log(payload)

        // let updates = {}
        // updates["/events_new/"] = payload

        // firebase
        //     .database()
        //     .ref()
        //     .update(updates)
        //     .then(() => {
        //         // dispatch('loadedEvents');
        //         commit("setLoading", false, { root: true })
        //         new Noty({
        //             type: "success",
        //             text:
        //                 'Changements dans le noeud "events" effectués avec succès!',
        //             timeout: 5000,
        //             theme: "metroui"
        //         }).show()
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         commit("setLoading", false, { root: true })
        //         commit("setError", error, { root: true })
        //         new Noty({
        //             type: "error",
        //             text: "Changements non effectués. Erreur: " + error,
        //             timeout: 5000,
        //             theme: "metroui"
        //         }).show()
        //     })
    },


    // Delete an event
    deleteEvent({ commit }, eventId) {
        // commit("setLoading", true, { root: true })
        // firebase
        //     .database()
        //     .ref("/events_new/" + eventId)
        //     .remove()
        //     .then(() => {
        //         // commit('deleteEvent', eventId)
        //         commit("setLoading", false, { root: true })
        //         new Noty({
        //             type: "success",
        //             text: "Événement supprimé avec succès!",
        //             timeout: 5000,
        //             theme: "metroui"
        //         }).show()
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         new Noty({
        //             type: "error",
        //             text:
        //                 "Erreur lors de la suppression de l'événement. " +
        //                 error,
        //             timeout: 5000,
        //             theme: "metroui"
        //         }).show()
        //     })
    }
}

export const getters = {
    loadedEvents (state) {
        return state.loadedEvents
    },
    // loadedCompetitionEvents(state) {
    //     return state.loadedCompetitionEvents
    // },
    // loadedEventUsers(state) {
    //     return state.loadedEventUsers
    // },
    // loadedLiveEvents(state) {
    //     return state.loadedLiveEvents
    // }
    loadedEventsByCompetitionByRound (state) {
        return state.eventsByCompetitionByRound
        // return state.loadedCompetitions
    }
}
