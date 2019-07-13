<template>
	<v-app>
		<v-content>
			<v-container style="padding: 0px; max-width: 1017px;">
				<h1>Gamemode</h1>
				<p>
					loadedUser: {{ loadedUser }}<br /><br />
					loadedCountries: {{ loadedCountries }}<br /><br />
					<!-- loadedCompetitions: {{ loadedCompetitions }}<br /><br /> -->
					<!-- loadedCountries: {{ loadedCountries }}<br /><br /> -->
					<!-- loadedTeams['spanish_la_liga_2018_2019']: {{ loadedTeams['spanish_la_liga_2018_2019'] }}<br /><br /> -->
					<!-- loadedTeams['english_premier_league_2018_2019']: {{ loadedTeams['english_premier_league_2018_2019'] }}<br /><br /> -->
					active_confederation_tab: {{ active_confederation_tab }}<br /><br />
					active_country_tab: {{ active_country_tab }}<br /><br />
					active_competition_tab: {{ active_competition_tab }}<br /><br />
					<br />
					selectedConfederation: {{ selectedConfederation }}<br /><br />
					selectedCountry: {{ selectedCountry }}<br /><br />
					selectedCompetition: {{ selectedCompetition }}<br /><br />
					<br />
					<!-- loadedTeams: {{ loadedTeams }}<br /><br /> -->
				</p>
				<v-btn
				    class="warning"
				    @click.stop="logout"
				>Logout</v-btn>
				<v-btn @click="fetchTeamsByCompetition('spanish_la_liga_2018_2019')">Fetch spanish la Liga teams</v-btn>
				<v-btn @click="fetchTeamsByCompetition('english_premier_league_2018_2019')">Fetch english Premier League teams</v-btn>

				<br /><br /><br />
				<!-- Confederations tabs -->
				<v-tabs
				    color="green"
				    dark
				    slider-color="yellow"
				    fixed-tabs
				    v-model="active_confederation_tab"
				    @change="changeConfederation()"
				>
					<v-tab
					    v-for="confederation in confederations"
					    :key="confederation.slug"
					    ripple
					    style="cursor: pointer;"
					>
						<!-- <v-img :src="`/images/continents/${continent.image}`" :width="30"></v-img> -->
						<img
						    :src="`/images/confederations/${confederation.image}`"
						    width="60px"
						/>
					</v-tab>
				</v-tabs>

				<!-- Countries tabs -->
				<v-tabs
				    color="blue"
				    dark
				    slider-color="yellow"
				    fixed-tabs
				    v-model="active_country_tab"
				    style="display: inline;"
				    @change="changeCountry()"
				>
					<v-tab
					    v-for="country in loadedCountriesByConfederation"
					    :key="country.slug"
					    ripple
					    style="cursor: pointer;"
					>
						<img
						    :src="`/images/countries/${country.image}`"
						    width="40px"
						/>
					</v-tab>
				</v-tabs>

				<!-- Competitions tabs -->
				<v-tabs
				    color="orange"
				    dark
				    slider-color="yellow"
				    fixed-tabs
				    v-model="active_competition_tab"
				    style="display: none;"
				    @change="changeCompetition()"
				    v-if="selectedCountry"
				>
					<v-tab
					    v-for="competition in loadedCompetitions"
					    :key="competition.slug"
					    ripple
					    style="cursor: pointer;"
					>
						{{ competition.name }}
					</v-tab>
					<v-tabs-items>
						<v-tab-item>
							<v-layout
							    row
							    wrap
							>
								<v-flex
								    xs2
								    pa-3
								    v-for="team in loadedTeams"
								    :key="team.slug"
								>
									<img
									    :src="`/images/teams/${team.image}`"
									    width="100%"
									/>
								</v-flex>
							</v-layout>
						</v-tab-item>
					</v-tabs-items>
				</v-tabs>

			</v-container>
		</v-content>
	</v-app>
</template>

<script>
	export default {
		async created() {
			// await this.$store.dispatch('teams/fetchTeams', 'spain')
		},
		data() {
			return {
				active_confederation_tab: 0,
				active_country_tab: 0,
				active_competition_tab: 0,
				selectedConfederation: null,
				selectedCountry: null,
				selectedCompetition: null
			}
		},
		computed: {
			loadedUser() {
				return this.$store.getters['users/loadedUser']
			},
			// loadedTeams() {
			// 	return this.$store.getters['teams/loadedTeams']
			// },
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
			loadedCountries() {
				return this.$store.getters['countries/loadedCountries']
				// if (this.selectedConfederation) {
				// 	console.log('this.selectedConfederation: ', this.selectedConfederation)
				// 	return this.$store.getters['countries/loadedCountries'][
				// 		this.selectedConfederation.slug
				// 	]
				// }
				// return null
			},
			loadedCountriesByConfederation() {
				// if (!this.$store.getters['countries/loadedCountries'][this.selectedConfederation.slug]) {
				// 	await this.$store.dispatch('countries/fetchCountriesByConfederation', this.selectedConfederation.slug)
				// }
				if (this.selectedConfederation) {
				return this.$store.getters['countries/loadedCountries'][
					this.selectedConfederation.slug
				]
				}
				return null
			},
			loadedCompetitions() {
				if (this.selectedCountry) {
					console.log('this.selectedCountry: ', this.selectedCountry)
					return this.$store.getters['competitions/loadedCompetitions'][
						this.selectedCountry.slug
					]
					// const competitions = this.$store.getters['competitions/loadedCompetitions'][this.selectedCountry.slug]
					// return competitions[0].sort((a, b) => a.ranking - b.ranking)
				}
				return null
			},
			loadedTeams() {
				if (this.selectedCompetition) {
					return this.$store.getters['teams/loadedTeams'][
						this.selectedCompetition.slug
					]
				}
				return null
			}
		},
		methods: {
			async changeConfederation() {
				console.log('confederationIndex: ')
				console.log(
					'this.active_confederation_tab: ',
					this.active_confederation_tab
				)
				// console.log(this.confederations[confederationIndex])
				// if (!this.loadedCountries[this.selectedConfederation.slug]) {
				this.selectedConfederation = this.confederations[
					this.active_confederation_tab
				]
				// if (!this.loadedCountries[this.selectedConfederation.slug]) {
					console.log('Call fetchCountriesByConfederation')
					await this.fetchCountriesByConfederation(
						this.selectedConfederation.slug
					)
				// }
				this.active_country_tab = 0
			},
			async changeCountry() {
				console.log('changeCountry: ')
				console.log('this.active_country_tab: ', this.active_country_tab)
				// if (this.loadedCountries && countryIndex) {
				// this.selectedCountry = this.loadedCountriesByConfederation[countryIndex]
				// this.selectedCountry = this.loadedCountries
				// if (this.loadedCompetitions[this.selectedCounty.slug].length < 1) {
				// await this.fetchCompetitionsByCountry(this.selectedCountry)
				// }
				// }
			},
			async changeCompetition() {
				console.log('changeCompetition: ')
				console.log(
					'this.active_competition_tab: ',
					this.active_competition_tab
				)
				console.log('this.loadedCompetitions: ', this.loadedCompetitions)
				// if (this.loadedCompetitions && competitionIndex) {
				// this.selectedCompetition = this.loadedCompetitions[competitionIndex]
				// this.selectedCompetition = this.loadedCompetitions['english_premier_league_2018_2019']
				// if (this.loadedTeams && this.loadedTeams[this.selectedCompetition.slug].length < 1) {
				// await this.fetchTeamsByCompetition(this.selectedCompetition)
				// }
				// }
			},
			async fetchCountriesByConfederation(confederationSlug) {
				console.log('fetchCountriesByConfederation: ', confederationSlug)
				// if (confederation && confederation.slug) {
				await this.$store.dispatch(
					'countries/fetchCountriesByConfederation',
					confederationSlug
				)
				// }
			},
			async fetchCompetitionsByCountry(country) {
				try {
					console.log('fetchCompetitionsByCountry vue: ', country)
					// if (country && country.slug) {
					await this.$store.dispatch(
						'competitions/fetchCompetitionsByCountry',
						country.slug
					)
					// }
				} catch (error) {
					console.log('error: ', error)
				}
			},
			async fetchTeamsByCompetition(competition) {
				try {
					console.log('fetchTeamsByCompetition vue: ', competition)
					// if (competition && competition.slug) {
					await this.$store.dispatch(
						'teams/fetchTeamsByCompetition',
						competition.slug
					)
				} catch (error) {
					console.log('error: ', error)
				}
				// }
			},
			async logout() {
				await this.$store.dispatch('firebase-auth/signOut')
				this.$router.push('/')
			}
		}
	}
</script>

<style scoped>
</style>
