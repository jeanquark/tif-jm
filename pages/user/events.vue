<template>
    <!-- <v-app>
        <v-content> -->
            <v-container>
				<nuxt-link to="/gamemode">Back to gamemode</nuxt-link><br />
                <h2>User events</h2>
                <v-layout row wrap>
                    <v-flex xs12>
                        loadedEventsByDay: {{ loadedEventsByDay }}<br /><br />
						loadedUserTeams: {{ loadedUserTeams }}<br /><br />
						loadedUserEvents: {{ loadedUserEvents }}<br /><br />
                    </v-flex>
					<v-flex v-for="event in loadedEventsByDay[day]" :key="event.slug">
						<nuxt-link :to="`/event/${event.id}`">
							{{ event.homeTeam_name }} - 
							{{ event.visitorTeam_name }}
						</nuxt-link>
					</v-flex>
                </v-layout>
            </v-container>
        <!-- </v-content>
    </v-app> -->
</template>

<script>
	import moment from 'moment'
	export default {
		layout: 'layoutFront',
		created() {
			this.day = moment().add(5, 'days').format('YYYY-MM-DD')
			this.$store.dispatch('events/fetchEventsByDay', this.day)
		},
		data() {
			return {
				day: ''
			}
		},
		computed: {
			loadedEventsByDay() {
				return this.$store.getters['events/loadedEventsByDay']
			},
			loadedUserTeams () {
				return this.$store.getters['userTeams/loadedUserTeams']
			},
			loadedUserEvents () {
				const userEvents = []
				this.loadedUserTeams.forEach(team => {
					// userEvents.push(team)
					console.log('team: ', team)
					const teamEvent = this.$store.getters['events/loadedEventsByDay'][this.day] ? this.$store.getters['events/loadedEventsByDay'][this.day].filter(event => event.homeTeam_slug === team.slug || event.visitorTeam_slug === team.slug) : []
					console.log('teamEvent: ', teamEvent)
					if (teamEvent.length > 0) {
						userEvents.push(teamEvent)
					}
				})
				return userEvents
			},
		}
	}
</script>

<style scoped>
</style>