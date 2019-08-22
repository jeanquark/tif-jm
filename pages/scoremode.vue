<template>
    <v-container fluid fill-height style="padding: 0px; max-width: 1017px;">
        <v-layout align-center justify-center>
            <v-flex xs12 style="background: #EEEEEE;">

                <scoremode-header />

                <!-- loadedAllEventsByDay: {{ loadedAllEventsByDay }}<br /><br /> -->
                <!-- loading: {{ loading }}<br /><br /> -->
                <!-- eventsByDay: {{ eventsByDay }}<br /><br /> -->
                <!-- loadedCompetitionsByCountry: {{ loadedCompetitionsByCountry }}<br /><br /> -->
                <!-- selectedConfederation: {{ selectedConfederation }}<br /><br /> -->
                <!-- selectedCountry: {{ selectedCountry }}<br /><br /> -->
                <!-- selectedCompetition.slug: {{ selectedCompetition.slug }}<br /><br /> -->
                <!-- active_round_tab: {{ active_round_tab }}<br /><br /> -->
                <!-- loadedEventsByDay: {{ loadedEventsByDay }}<br /><br /> -->
                <!-- loadedEventsByCompetitionByRound: {{ loadedEventsByCompetitionByRound }}<br /><br /> -->
                <!-- <v-btn small class="success" @click="toggleEvents">{{ eventsByDay ? 'Events by round' : 'Events by day' }}</v-btn> -->
                <v-layout row justify-center class="my-2">
                    <v-btn small class="primary" :disabled="eventsByDay" @click.stop="selectEventsByDay">By day</v-btn>
                    <v-btn small class="primary" :disabled="eventsByRound" @click.stop="selectEventsByRound">By round</v-btn>
                </v-layout>

                <v-layout row wrap justify-center style="border: 2px solid green; height: 1000px;" v-if="eventsByRound">
                    <v-flex xs12>
                        <!-- <v-tabs color="yellow" dark slider-color="blue" fixed-tabs v-model="active_day_tab">
                            <v-tab v-for="(round, index) in rounds" :key="index" ripple style="cursor: pointer;">
                                {{ round }}
                            </v-tab>
                            <v-tab-item v-for="(round, index) in rounds" :key="index" :transition="false" :reverse-transition="false">
								{{ round }}
                            </v-tab-item>
                        </v-tabs> -->

                        <!-- Confederations tabs -->
                        <v-tabs color="yellow" dark slider-color="blue" fixed-tabs v-model="active_confederation_tab" @change="changeConfederation()">
                            <v-tab v-for="(confederation, index) in confederations" :key="index" ripple style="cursor: pointer;">
                                <v-img :src="`/images/confederations/${confederation.image}`" :aspect-ratio="1" :max-width="50"></v-img>
                            </v-tab>
                        </v-tabs>

                        <!-- Countries tabs -->
                        <v-tabs color="amber" dark slider-color="blue" fixed-tabs v-model="active_country_tab" style="display: inline;" @change="changeCountry()" v-if="selectedConfederation">
                            <v-tab v-for="(country, index) in loadedCountriesByConfederation[selectedConfederation.slug]" :key="index" ripple style="cursor: pointer;">
                                <img :src="`/images/countries/${country.image}`" width="40px" />
                            </v-tab>
                        </v-tabs>

                        <!-- Competitions tabs -->
                        <v-tabs color="orange" dark slider-color="blue" fixed-tabs v-model="active_competition_tab" style="display: inline;" @change="changeCompetition()" v-if="selectedCountry && loadedCompetitionsByCountry[selectedCountry.slug] && loadedCompetitionsByCountry[selectedCountry.slug].length > 0">
                            <v-tab v-for="(competition, index) in loadedCompetitionsByCountry[selectedCountry.slug]" :key="index" ripple style="cursor: pointer;">
                                {{ competition.name }}
                            </v-tab>
                        </v-tabs>

                        <!-- Rounds tabs -->
                        <v-tabs color="red" dark slider-color="blue" fixed-tabs v-model="active_round_tab" style="display: inline;" @change="changeRound()" v-if="selectedCompetition">
                            <v-tab v-for="(round, index) in selectedCompetition.rounds" :key="index" ripple style="cursor: pointer;">
                                {{ round }}
                            </v-tab>
                            <v-tab-item v-for="(round, index) in selectedCompetition.rounds" :key="index" :transition="false" :reverse-transition="false">
                                <v-data-table :items="loadedEventsByCompetitionByRound" class="elevation-0" hide-actions hide-headers v-if="!loading">
                                    <template v-slot:items="props">
                                        <v-layout align-center class="tableRow" :class="[props.index % 2 === 0 ? 'background-grey' : '']" @click="goToEventPage(props.item.id)">
                                            <v-flex xs4 class="">
                                                <v-layout justify-start align-center class="ml-2">
                                                    <span class="mr-2">{{ props.item.homeTeam_name }}</span>
                                                    <v-img :src="`/images/teams/${props.item.homeTeam_slug}.png`" :lazy-src="`/images/teams/${props.item.homeTeam_slug}.png`" max-width="40"></v-img>
                                                    round: {{ props.item.round_short }}
                                                </v-layout>
                                            </v-flex>
                                            <v-flex xs4 class="text-xs-center">
                                                {{ props.item.date | moment('LL') }} at {{ props.item.time }}<br />
                                                {{ props.item.competition_name }}
                                            </v-flex>
                                            <v-flex xs4 class="">
                                                <v-layout justify-end align-center class="mr-2">
                                                    <v-img :src="`/images/teams/${props.item.visitorTeam_slug}.png`" :lazy-src="`/images/teams/${props.item.visitorTeam_slug}.png`" max-width="40"></v-img>
                                                    <span class="ml-2">{{ props.item.visitorTeam_name }}</span>
                                                </v-layout>
                                            </v-flex>
                                        </v-layout>
                                    </template>
                                </v-data-table>
                                <content-loader :height="130" :width="400" :speed="0" primaryColor="#ffffff" secondaryColor="#ffffff">
                                    <rect x="-5" y="19" rx="4" ry="4" width="413.71" height="19" />
                                    <rect x="-3" y="56" rx="4" ry="4" width="405.76" height="19" />
                                    <rect x="-2" y="88" rx="4" ry="4" width="405.76" height="19" />
                                    <rect x="-2" y="122" rx="4" ry="4" width="405.76" height="19" />
                                    <rect x="-2" y="156" rx="4" ry="4" width="405.76" height="19" />
                                    <rect x="-2" y="190" rx="4" ry="4" width="405.76" height="19" />
                                    <rect x="0" y="224" rx="4" ry="4" width="405.76" height="19" />
                                    <rect x="-14" y="257" rx="4" ry="4" width="417.69" height="19" />
                                    <rect x="-1" y="293" rx="4" ry="4" width="405.76" height="19" />
                                </content-loader>
                            </v-tab-item>
                        </v-tabs>
                    </v-flex>
                </v-layout>

                <v-layout row wrap justify-center style="border: 2px solid green; height: 1000px;" v-if="eventsByDay">
                    <v-flex xs12>
                        <v-tabs color="yellow" dark slider-color="blue" fixed-tabs :center-active-tab="true" @change="changeDay()" v-model="active_day_tab">
                            <v-tab v-for="(day, index) in days" :key="index" ripple style="cursor: pointer;">
                                {{ displayDate(day) }}
                            </v-tab>
                            <v-tab-item v-for="(day, index) in days" :key="index" :transition="false" :reverse-transition="false">
                                <v-data-table :items="loadedEventsByDay" class="elevation-0" hide-actions hide-headers v-if="!loading">
                                    <template v-slot:items="props">
                                        <v-layout align-center class="tableRow" :class="[props.index % 2 === 0 ? 'background-grey' : '']" @click="goToEventPage(props.item.id)">
                                            <v-flex xs4 class="">
                                                <v-layout justify-start align-center class="ml-2">
                                                    <span class="mr-2">{{ props.item.homeTeam_name }}</span>
                                                    <v-img :src="`/images/teams/${props.item.homeTeam_slug}.png`" :lazy-src="`/images/teams/${props.item.homeTeam_slug}.png`" max-width="40"></v-img>
                                                </v-layout>
                                            </v-flex>
                                            <v-flex xs4 class="text-xs-center">
                                                {{ props.item.time }}<br />
                                                {{ props.item.competition_name }}
                                            </v-flex>
                                            <v-flex xs4 class="">
                                                <v-layout justify-end align-center class="mr-2">
                                                    <v-img :src="`/images/teams/${props.item.visitorTeam_slug}.png`" :lazy-src="`/images/teams/${props.item.visitorTeam_slug}.png`" max-width="40"></v-img>
                                                    <span class="ml-2">{{ props.item.visitorTeam_name }}</span>
                                                </v-layout>
                                            </v-flex>
                                        </v-layout>
                                    </template>
                                </v-data-table>
                                <content-loader :height="100" :width="400" :speed="0" primaryColor="#eaeaea" secondaryColor="#ffffff">
                                    <rect x="-5" y="19" rx="4" ry="4" width="413.71" height="17.86" />
                                    <rect x="-3" y="56" rx="4" ry="4" width="405.76" height="17.86" />
                                    <rect x="-2" y="88" rx="4" ry="4" width="405.76" height="17.86" />
                                    <rect x="-2" y="122" rx="4" ry="4" width="405.76" height="17.86" />
                                    <rect x="-2" y="156" rx="4" ry="4" width="405.76" height="17.86" />
                                    <rect x="-2" y="190" rx="4" ry="4" width="405.76" height="17.86" />
                                    <rect x="0" y="224" rx="4" ry="4" width="405.76" height="17.86" />
                                    <rect x="-14" y="257" rx="4" ry="4" width="417.69" height="17.86" />
                                    <rect x="-1" y="293" rx="4" ry="4" width="405.76" height="17.86" />
                                </content-loader>
                            </v-tab-item>
                        </v-tabs>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
	import moment from 'moment'
	import ScoremodeHeader from '~/components/ScoremodeHeader'
	import { ContentLoader } from 'vue-content-loader'
	export default {
		components: { ScoremodeHeader, ContentLoader },
		layout: 'layoutScoreMode',
		async created() {
			this.$store.commit('setLoading', true, { root: true })
			const today = moment().format('YYYY-MM-DD')
			if (!this.loadedAllEventsByDay) {
				console.log('fetchEventsByDay from created lifecycle hook')
				// await this.$store.dispatch('events/fetchEventsByDay', today)
				await this.fetchEventsByDay(today)
			}
			console.log('this.selectedCompetition.slug: ', this.selectedCompetition.slug)
			console.log('this.active_round_tab: ', this.active_round_tab)
			// await this.$store.dispatch('events/fetchEventsByCompetitionByRound', this.selectedCompetition.slug, this.active_round_tab + 1)
			await this.fetchEventsByCompetitionByRound(this.selectedCompetition.slug, this.active_round_tab + 1)

			setTimeout(() => {
				this.$store.commit('setLoading', false, { root: true })
			}, 2000)
		},
		data() {
			return {
				days: ['-3', '-2', '-1', '0', '1', '2', '3', '4', '5'],
				active_day_tab: 3,
				active_confederation_tab: 0,
				active_country_tab: 0,
				active_competition_tab: 0,
				active_round_tab: 0,
				selectedConfederation: { name: 'UEFA', slug: 'uefa' },
				// selectedConfederation: {},
				selectedCountry: { name: 'Spain', slug: 'spain' },
				// selectedCountry: {},
				selectedCompetition: { name: 'Spanish Laliga', slug: 'spain_primera_division_2019_2020' },
				// selectedCompetition: {},
				// loading: true,
				eventsByDay: true,
				eventsByRound: false
				// rounds: [1, 2, 3, 4]
			}
		},
		computed: {
			loading() {
				return this.$store.getters['loading']
			},
			loadedUserTeams() {
				return this.$store.getters['userTeams/loadedUserTeams']
			},
			loadedEventsByDay() {
				console.log('loadedEventsByDay')
				// this.loading = true
				// this.$store.commit('setLoading', true)
				const day = moment()
					.add(this.days[this.active_day_tab], 'days')
					.format('YYYY-MM-DD')
				// if (!this.$store.getters['events/loadedEventsByDay'][day]) {
				// 	this.fetchEventsByDay(day)
				// }
				// this.loading = false
				// this.$store.commit('setLoading', false)
				return this.$store.getters['events/loadedEventsByDay'][day]
			},
			loadedEventsByCompetitionByRound() {
				console.log('loadedEventsByCompetitionByRound')
				console.log('this.selectedCompetition.slug3: ', this.selectedCompetition.slug)
				console.log('this.active_round_tab3: ', this.active_round_tab)

				// if (!this.$store.getters['events/loadedEventsByCompetitionByRound'][this.selectedCompetition.slug] || !this.$store.getters['events/loadedEventsByCompetitionByRound'] [this.selectedCompetition.slug][this.active_round_tab + 1]) {
				// 	this.fetchEventsByCompetitionByRound(this.selectedCompetition.slug, this.active_round_tab +1)
				// 	return []
				// }
				if (this.$store.getters['events/loadedEventsByCompetitionByRound'] && this.$store.getters['events/loadedEventsByCompetitionByRound'][this.selectedCompetition.slug]) {
					return this.$store.getters['events/loadedEventsByCompetitionByRound'][this.selectedCompetition.slug][this.active_round_tab + 1]
				}
				return []

				// if (this.$store.getters['events/loadedEventsByCompetitionByRound'][this.selectedCompetition.slug]) {
				// 	return this.$store.getters['events/loadedEventsByCompetitionByRound'][this.selectedCompetition.slug][this.active_round_tab + 1]
				// } else {
				// 	return []
				// }

				// if (this.$store.getters['events/loadedEventsByCompetitionByRound'] && this.selectedCompetition.slug) {
				// if (this.selectedCompetition.slug && (!this.$store.getters['events/loadedEventsByCompetitionByRound'][this.selectedCompetition.slug] ||  !this.$store.getters['events/loadedEventsByCompetitionByRound'][this.selectedCompetition.slug][this.active_round_tab])) {
				// 	this.$store.dispatch('events/fetchEventsByCompetitionByRound', { competitionSlug: this.selectedCompetition.slug, round: this.active_round_tab + 1 })
				// } else {
				// 	return this.$store.getters['events/loadedEventsByCompetitionByRound'][this.selectedCompetition.slug][this.active_round_tab + 1]
				// }
				// } else {
				// return []
				// }
			},
			confederations() {
				return [
					{
						name: 'UEFA',
						slug: 'uefa',
						continent: {
							name: 'Europe',
							slug: 'europe'
						},
						image: 'europe.png'
					},
					{
						name: 'CONCACAF',
						slug: 'concacaf',
						continent: {
							name: 'America',
							slug: 'america'
						},
						image: 'north_and_central_america.png'
					},
					{
						name: 'CONMEBOL',
						slug: 'conmebol',
						continent: {
							name: 'America',
							slug: 'america'
						},
						image: 'south_america.png'
					},
					{
						name: 'CAF',
						slug: 'caf',
						continent: {
							name: 'Africa',
							slug: 'africa'
						},
						image: 'africa.png'
					},
					{
						name: 'AFC',
						slug: 'afc',
						continent: {
							name: 'Asia',
							slug: 'asia'
						},
						image: 'asia.png'
					},
					{
						name: 'OFC',
						slug: 'ofc',
						continent: {
							name: 'Oceania',
							slug: 'oceania'
						},
						image: 'oceania.png'
					}
				]
			},
			loadedCountriesByConfederation() {
				return this.$store.getters['countries/loadedCountriesByConfederation']
			},
			loadedCompetitionsByCountry() {
				return this.$store.getters['competitions/loadedCompetitionsByCountry']
			}
		},
		methods: {
			displayDate(day) {
				return moment()
					.add(day, 'days')
					.format('ddd, MMMM DD')
			},
			convertToLocalTime(timestamp) {
				const utcDiff = new Date().getTimezoneOffset()
				console.log('utcDiff: ', utcDiff)
				// console.log('moment.unix(timestamp): ', moment.unix(timestamp))
				// return moment.unix(timestamp).format("HH:mm")
				if (utcDiff > 0) {
					return moment
						.unix(timestamp)
						.add(utcDiff, 'minutes')
						.format('HH:mm')
				} else {
					return moment
						.unix(timestamp)
						.subtract(utcDiff, 'minutes')
						.format('HH:mm')
				}
			},
			toggleEvents() {
				this.eventsByDay = !this.eventsByDay
			},
			goToEventPage(eventId) {
				console.log('Go to event page')
				// this.$router.push(`/event/${eventId}`)
			},
			selectEventsByDay() {
				this.eventsByRound = false
				this.eventsByDay = true
			},
			selectEventsByRound() {
				this.eventsByDay = false
				this.eventsByRound = true
				this.changeConfederation()
			},

			async changeConfederation() {
				console.log('changeConfederation')

				this.selectedConfederation = this.confederations[this.active_confederation_tab]
				if (!this.loadedCountriesByConfederation[this.selectedConfederation.slug]) {
					await this.fetchCountriesByConfederation(this.selectedConfederation.slug)
				}

				this.active_country_tab = 0
				this.selectedCountry = this.loadedCountriesByConfederation[this.selectedConfederation.slug][this.active_country_tab]

				if (!this.loadedCompetitionsByCountry[this.selectedCountry.slug]) {
					await this.fetchCompetitionsByCountry(this.selectedCountry.slug)
				}
				this.active_competition_tab = 0
				this.selectedCompetition = this.loadedCompetitionsByCountry[this.selectedCountry.slug][this.active_competition_tab]
			},
			async changeCountry() {
				console.log('changeCountry')
				if (this.loadedCountriesByConfederation[this.selectedConfederation.slug]) {
					this.selectedCountry = this.loadedCountriesByConfederation[this.selectedConfederation.slug][this.active_country_tab]
					if (this.selectedCountry && (!this.loadedCompetitionsByCountry[this.selectedCountry.slug] || this.loadedCompetitionsByCountry[this.selectedCountry.slug].length < 1)) {
						await this.fetchCompetitionsByCountry(this.selectedCountry.slug)
					}

					this.active_competition_tab = 0
					this.selectedCompetition = this.loadedCompetitionsByCountry[this.selectedCountry.slug][this.active_competition_tab]
				}
			},
			async changeCompetition() {
				console.log('changeCompetition')
				if (this.loadedCompetitionsByCountry[this.selectedCountry.slug]) {
					this.selectedCompetition = this.loadedCompetitionsByCountry[this.selectedCountry.slug][this.active_competition_tab]
					console.log('this.selectedCompetition.slug2: ', this.selectedCompetition.slug)
					console.log('this.active_round_tab2: ', this.active_round_tab)

					if (
						this.selectedCompetition &&
						(!this.loadedEventsByCompetitionByRound ||
							!this.loadedEventsByCompetitionByRound[this.selectedCompetition.slug] ||
							this.loadedEventsByCompetitionByRound[this.selectedCompetition.slug][this.active_round_tab].length < 1)
					) {
						await this.fetchEventsByCompetitionByRound({ competitionSlug: this.selectedCompetition.slug, round: this.active_round_tab + 1 })
					}
				}
			},
			async changeDay () {
				try {
					const day = moment()
						.add(this.days[this.active_day_tab], 'days')
						.format('YYYY-MM-DD')
					this.fetchEventsByDay(day)
				} catch (error) {
					console.log('error from changeDay(): ', error)
				}
			},
			async changeRound() {
				try {
					console.log('changeRound')
					this.fetchEventsByCompetitionByRound(this.selectedCompetition.slug, this.active_round_tab + 1)
					return []
				} catch (error) {
					console.log('error from changeRound(): ', error)
				}
			},
			async fetchEventsByDay(day) {
				try {
					await this.$store.dispatch('events/fetchEventsByDay', day)
				} catch (error) {
					console.log('error: ', error)
				}
			},
			async fetchCountriesByConfederation(confederationSlug) {
				try {
					await this.$store.dispatch('countries/fetchCountriesByConfederation', confederationSlug)
					console.log('Done fetching countries by confederation. [fetchCountriesByConfederation]')
				} catch (error) {
					console.log('error: ', error)
				}
			},
			async fetchCompetitionsByCountry(countrySlug) {
				try {
					// console.log('countrySlug: ', countrySlug)
					await this.$store.dispatch('competitions/fetchCompetitionsByCountry', countrySlug)
					console.log('Done fetching competitions by country. [fetchCompetitionsByCountry]')
				} catch (error) {
					console.log('error: ', error)
				}
			},
			async fetchEventsByCompetitionByRound(competitionSlug, round) {
				try {
					console.log('competitionSlug: ', competitionSlug, 'round: ', round)
					this.$store.commit('setLoading', true)
					await this.$store.dispatch('events/fetchEventsByCompetitionByRound', { competitionSlug, round })
					// setTimeout(() => {
					this.$store.commit('setLoading', false)
					// }, 2000)
					// console.log('Done fetching events by competition & round. [fetchEventsByCompetitionByRound]')
				} catch (error) {
					this.$store.commit('setLoading', false)
					console.log('error: ', error)
				}
			}
		}
	}
</script>

<style scoped>
	.tableRow {
		height: 50px;
		/* border: 1px solid #000; */
	}
	.tableRow:hover {
		cursor: pointer;
		color: #fff;
		background: var(--v-primary-base);
	}
	.background-grey {
		background: #eeeeee;
	}
	.background-grey:hover {
		background: var(--v-primary-base);
	}
</style>