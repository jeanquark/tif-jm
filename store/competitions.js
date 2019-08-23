import * as firebase from 'firebase/app'
import 'firebase/database'
import Noty from 'noty'
import axios from 'axios'
import slugify from '../helpers/slugify.js'
import moment from 'moment'

export const state = () => ({
    loadedCompetitions: [],
    loadedCompetitionsByCountry: []
})

export const mutations = {
    setEmptyCompetitions(state) {
        state.loadedCompetitions = []
    },
    setCompetitions(state, payload) {
        state.loadedCompetitions = payload
    },
    setCompetitionsByCountry(state, payload) {
        // state.loadedCompetitions = payload
        state.loadedCompetitionsByCountry = Object.assign({}, state.loadedCompetitionsByCountry, {
            [payload.country]: payload.competitions
        })
    },
    createCompetition(state, payload) {
        state.loadedCompetitions.push(payload)
    }
    // updateCompetition (state, payload) {
    //     state.loadedCompetitions = payload
    // },
    // deleteCompetition (state, competitionId) {
    //     const loadedCompetitions = state.loadedCompetitions
    //     state.loadedCompetitions.splice(loadedCompetitions.findIndex(competition => competition.id === competitionId), 1)
    // }
}

export const actions = {
    fetchCompetitionsByCountry({ commit }, payload) {
        return new Promise(resolve => {
            firebase
                .database()
                .ref('/competitions')
                .orderByChild(`countries/${payload}/slug`)
                .equalTo(payload)
                .on('value', function(snapshot) {
                    const competitionsArray = []
                    for (const key in snapshot.val()) {
                        if (snapshot.val()[key].active === true) {
                            competitionsArray.push({
                                ...snapshot.val()[key],
                                id: key
                            })
                        }
                    }
                    const orderedCompetitions = competitionsArray.sort((a, b) => a.ranking_country - b.ranking_country)
                    commit('setCompetitionsByCountry', {
                        country: payload,
                        competitions: orderedCompetitions
                    })
                    resolve()
                })
        })
    },
    // Fetch all competitions
    fetchCompetitions({ commit }) {
        console.log('fetchCompetitions')
        firebase
            .database()
            .ref('/competitions/')
            .on('value', function(snapshot) {
                const competitionsArray = []
                for (const key in snapshot.val()) {
                    competitionsArray.push({
                        ...snapshot.val()[key],
                        id: key
                    })
                }
                commit('setCompetitions', competitionsArray)
            })
    },

    // Create a new competition
    async createCompetition({ commit }, payload) {
        try {
            // commit('setLoading', true, { root: true })
            console.log('payload: ', payload)


            // 1) Define key from competition slug
            const newCompetitionKey = slugify(payload.country) + '_' + slugify(payload.name) + '_' + parseInt(payload.season) + '_' + (parseInt(payload.season) + 1)
            console.log('newCompetitionKey: ', newCompetitionKey)

			// 2) Define countries object
            const countries = {}
            countries[slugify(payload.country)] = {
                name: payload.country,
                slug: slugify(payload.country)
            }

            // 3) Create competition node
            let updates = {}

            const newCompetition = {
                active: false,
                activity: {
                    name: 'Sport',
                    slug: 'sport'
                },
                category: {
                    name: 'Football',
                    slug: 'football'
                },
                apifootball_id: payload.league_id,
                apifootball_country: payload.country,
                apifootball_name: payload.name,
                apifootball_season: payload.season,
                season_start: payload.season_start,
                season_end: payload.season_end,
                name: payload.name,
                slug: newCompetitionKey,
                countries,
                image: `${slugify(payload.country)}_${slugify(payload.name)}.png`,
                season: `${payload.season} - ${parseInt(payload.season) + 1}`,
                _created_at: moment().unix(),
                _updated_at: moment().unix()
            }
            updates[`/competitions/${newCompetitionKey}`] = newCompetition
            console.log('newCompetition: ', newCompetition)

            // 4) Retrieve all fixtures of the competition
            const leagueId = newCompetition.apifootball_id
            const competitionEvents = await axios.get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/league/${leagueId}`, {
                headers: {
                    Accept: 'application/json',
                    'X-RapidAPI-Key': process.env.APIFOOTBALL_KEY
                }
            })
            console.log('competitionEvents: ', competitionEvents)

            // 5) Retrieve all events, all game statistics and all players statistics related to each fixture
            for (let event of competitionEvents.data.api.fixtures) {
				const eventId = event.fixture_id


                // 5.1) Update events node
                updates[`/events/${eventId}`] = event


                // 5.2) Update eventEvents node
                const eventEvents = await axios.get(`https://api-football-v1.p.rapidapi.com/v2/events/${eventId}`, {
                    headers: {
                        Accept: 'application/json',
                        'X-RapidAPI-Key': process.env.APIFOOTBALL_KEY
                    }
                })
				const events = eventEvents.data.api.events
                updates[`/eventEvents/${eventId}`] = events

                // 5.3) Update eventGameStatistics node
                const eventGameStatistics = await axios.get(`https://api-football-v1.p.rapidapi.com/v2/statistics/fixture/${eventId}`, {
                    headers: {
                        Accept: 'application/json',
                        'X-RapidAPI-Key': process.env.APIFOOTBALL_KEY
                    }
                })
                const gameStatistics = eventGameStatistics.data.api.statistics
                const statisticsObject = {}
                Object.keys(gameStatistics).forEach(statistic => {
                    statisticsObject[slugify(statistic)] = {
                        name: statistic,
                        slug: slugify(statistic),
                        ...gameStatistics[statistic]
                    }
                })
                updates[`/eventGameStatistics/${eventId}`] = statisticsObject            

                // 5.4) Update event/playerStatistics node
                const eventPlayersStatistics = await axios.get(`https://api-football-v1.p.rapidapi.com/v2/players/fixture/${eventId}`, {
                    headers: {
                        Accept: 'application/json',
                        'X-RapidAPI-Key': process.env.APIFOOTBALL_KEY
                    }
                })
                const playersStatistics = eventPlayersStatistics.data.api.players
                updates[`/eventPlayersStatistics/${eventId}`] = playersStatistics
            }
            console.log('updates: ', updates)


            await firebase
                .database()
                .ref()
            	.update(updates)
        } catch (error) {
            console.log('error: ', error)
            throw error
        }
    },
    async fetchTeamsByCompetition({ commit }, payload) {
        try {
            // console.log('fetchTeamsByCompetition', payload)
            const league_id = payload.apifootball_id
            // const league_id = payload
            const fetchedTeams = await axios.get(`https://api-football-v1.p.rapidapi.com/v2/teams/league/${league_id}`, {
                headers: {
                    Accept: 'application/json',
                    'X-RapidAPI-Key': process.env.APIFOOTBALL_KEY
                }
            })
            console.log('fetchedTeams: ', fetchedTeams)
            let updates = {}
            fetchedTeams.data.api.teams.forEach(team => {
                const teamSlug = slugify(team.name)
                team['slug'] = teamSlug
                team['apifootball_id'] = team.team_id
                team['apifootball_name'] = team.name
                team['competitions'] = Object.assign({}, team['competitions'], {
                    [payload.slug]: true
                })
                team['image'] = `${teamSlug}.png`
                delete team['logo']
                delete team['team_id']
                updates[`/teams/${teamSlug}`] = team
            })
            // console.log('updates: ', updates)
            await firebase
                .database()
                .ref()
                .update(updates)
            return
        } catch (error) {
            console.log('error: ', error)
            throw error
        }
    },

    // Update a competition
    async toggleCompetitionActiveStatus({ commit, dispatch }, payload) {
        try {
            console.log(payload)
            payload['_updated_at'] = moment().unix()

            let updates = {}
            // 1) Update all events that are part of the competition
            const competitionEvents = await firebase
                .database()
                .ref('/events')
                .orderByChild('competition_slug')
                .equalTo(payload.slug)
                .once('value')
            competitionEvents.forEach(event => {
                // console.log('event.val(): ', event.val())
                if (event.val().competition_active) {
                    updates[`/events/${event.key}/competition_active`] = false
                } else {
                    updates[`/events/${event.key}/competition_active`] = true
                }
            })
            // 2) Update competitions node
            updates[`/competitions/${payload.slug}`] = payload

            await firebase
                .database()
                .ref()
                .update(updates)

            // dispatch('loadedCompetitions')
        } catch (error) {
            throw error
        }
    },
    // Delete a competition
    async deleteCompetition({ commit }, payload) {
        try {
            console.log('payload: ', payload)
            const competition = payload
            let updates = {}

            // 1) Delete competition for each team that takes part of the competition in teams node
            const teamsArray = []
            const snapshot = await firebase
                .database()
                .ref('/teams/')
                .orderByChild(`competitions/${competition.id}`)
                .equalTo(true)
                .once('value')

            snapshot.forEach(team => {
                teamsArray.push({
                    id: team.key,
                    ...team.val()
                })
            })
            console.log('teamsArray: ', teamsArray)
            teamsArray.forEach(team => {
                updates[`/teams/${team.id}/competitions/${competition.id}`] = null
            })

            // 2) Delete competition in competitions node
            updates[`/competitions/${competition.id}`] = null

            console.log('updates: ', updates)
            await firebase
                .database()
                .ref()
                .update(updates)
            return
        } catch (error) {
            console.log('error: ', error)
            throw error
        }
    }
}

export const getters = {
    loadedCompetitions(state) {
        return state.loadedCompetitions
    },
    loadedCompetitionsByCountry(state) {
        return state.loadedCompetitionsByCountry
    }
}
