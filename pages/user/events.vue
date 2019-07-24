<template>
	<v-container>
		<nuxt-link to="/gamemode">Back to gamemode</nuxt-link><br />
		<h2>User events</h2>
		<v-layout row wrap>
			<v-flex xs12>
				loadedAllEventsByDay: {{ loadedAllEventsByDay }}<br /><br />
				loadedUserEventsByDay: {{ loadedUserEventsByDay }}<br /><br />
				loadedUserTeams: {{ loadedUserTeams }}<br /><br />
			</v-flex>
			UserTeams : <br />
			<div v-for="team in loadedUserTeams" :key="team.slug">
				{{ team.name }} - 
			</div>
			<!-- <v-flex v-for="event in loadedEventsByDay[day]" :key="event.slug">
				<nuxt-link :to="`/event/${event.id}`">
					{{ event.homeTeam_name }} - 
					{{ event.visitorTeam_name }}
				</nuxt-link>
			</v-flex> -->
		</v-layout>

		<v-layout row wrap>
			<v-flex xs12>
				<!-- Days tabs -->
				<v-tabs color="yellow" dark slider-color="blue" fixed-tabs v-model="active_day_tab">
					<v-tab v-for="(day, index) in days" :key="index" ripple style="cursor: pointer;">
						{{ displayDate(day) }}
					</v-tab>
					<v-tab-item v-for="(day, index) in days" :key="index" :transition="false" :reverse-transition="false">
						<!-- MY EVENTS -->
						<v-expansion-panel class="elevation-0" :value="0">
							<v-expansion-panel-content class="orange">
								<div slot="header" class="white--text text-xs-center">
									MY EVENTS
								</div>
								<v-icon slot="actions" color="white">$vuetify.icons.expand</v-icon>
								<v-data-table :items="loadedUserEventsByDay" class="elevation-0" hide-actions hide-headers>
									<template v-slot:items="props">
										<v-layout align-center class="row" @click="goToEventPage(props.item.id)">
											<v-flex xs4 class="text-xs-left">
												{{ props.item.homeTeam_name }}
												{{ props.item.homeTeam_goals }}
											</v-flex>
											<v-flex xs4 class="text-xs-center">
												{{ props.item.time }}<br />
												{{ props.item.competition_name }}
											</v-flex>
											<v-flex xs4 class="text-xs-right">
												{{ props.item.visitorTeam_goals }}
												{{ props.item.visitorTeam_name }}
											</v-flex>
										</v-layout>
									</template>
								</v-data-table>
							</v-expansion-panel-content>
						</v-expansion-panel>
						<!-- ALL EVENTS -->
						<v-expansion-panel class="elevation-0" :value="0">
							<v-expansion-panel-content class="orange">
								<div slot="header" class="white--text text-xs-center">
									ALL EVENTS
								</div>
								<v-icon slot="actions" color="white">$vuetify.icons.expand</v-icon>
								<v-data-table :items="loadedAllEventsByDay" class="elevation-0" hide-actions hide-headers>
									<template v-slot:items="props">
										<v-layout align-center style="height: 40px; border: 1px solid #000;">
											<v-flex xs4 class="text-xs-left">
												{{ props.item.homeTeam_name }}
												{{ props.item.homeTeam_goals }}
											</v-flex>
											<v-flex xs4 class="text-xs-center">
												{{ props.item.time }}<br />
												{{ props.item.competition_name }}
											</v-flex>
											<v-flex xs4 class="text-xs-right">
												{{ props.item.visitorTeam_goals }}
												{{ props.item.visitorTeam_name }}
											</v-flex>
										</v-layout>
									</template>
								</v-data-table>
							</v-expansion-panel-content>
						</v-expansion-panel>
					</v-tab-item>
				</v-tabs>
			</v-flex>
		</v-layout>

		
	</v-container>
</template>

<script>
	import moment from 'moment'
	export default {
		layout: 'layoutFront',
		created() {
			const today = moment().format('YYYY-MM-DD')
			this.$store.dispatch('events/fetchEventsByDay', today)
		},
		data() {
			return {
				days: ['-3', '-2', '-1', '0', '1', '2', '3', '4', '5'],
				active_day_tab: 3,
			}
		},
		computed: {
			loadedUserTeams () {
				return this.$store.getters['userTeams/loadedUserTeams']
			},
			loadedAllEventsByDay() {
				console.log('loadedAllEventsByDay')
				// const day = moment().add(this.active_day_tab, 'days').format('YYYY-MM-DD')
				// console.log('day: ', day)
				const day = moment().add(this.days[this.active_day_tab], 'days').format('YYYY-MM-DD')
				this.$store.dispatch('events/fetchEventsByDay', day)
				return this.$store.getters['events/loadedEventsByDay'][day]
			},
			loadedUserEventsByDay () {
				const userEvents = []
				if (this.loadedAllEventsByDay && this.loadedAllEventsByDay.length) {
					this.loadedUserTeams.forEach(team => {
						const teamEvent = this.loadedAllEventsByDay.find(event => event.homeTeam_slug === team.slug || event.visitorTeam_slug === team.slug)
						if (teamEvent && !userEvents.find(event => event.id === teamEvent.id)) {
							userEvents.push(teamEvent)
						}
					})
				}
				console.log('userEvents: ', userEvents)
				return userEvents
			},
		},
		methods: {
			displayDate (day) {
				return moment().add(day, 'days').format('ddd, MMMM DD')
			},
			convertToLocalTime (timestamp) {
				const utcDiff = new Date().getTimezoneOffset()
                console.log('utcDiff: ', utcDiff)
                // console.log('moment.unix(timestamp): ', moment.unix(timestamp))
                // return moment.unix(timestamp).format("HH:mm")
				if (utcDiff > 0) {
					return moment.unix(timestamp).add(utcDiff, 'minutes').format("HH:mm")
				} else {
					return moment.unix(timestamp).subtract(utcDiff, 'minutes').format("HH:mm")
				}
			},
			goToEventPage (eventId) {
				this.$router.push(`/event/${eventId}`)
			}
		}
	}
</script>

<style scoped>
	.row {
		height: 40px;
		border: 1px solid #000;
	}
	.row:hover {
		cursor: pointer;
	}
</style>