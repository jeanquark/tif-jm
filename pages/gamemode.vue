<template>
	<v-app>
		<v-content>
			<v-container style="padding: 0px; max-width: 1017px;">
				<h1>Gamemode</h1>
				<p>
					loadedUser: {{ loadedUser }}<br /><br />
					<!-- loadedTeams['spanish_la_liga_2018_2019']: {{ loadedTeams['spanish_la_liga_2018_2019'] }}<br /><br /> -->
					<!-- loadedTeams['english_premier_league_2018_2019']: {{ loadedTeams['english_premier_league_2018_2019'] }}<br /><br /> -->
					active_confederation_tab: {{ active_confederation_tab }}<br /><br />
					active_country_tab: {{ active_country_tab }}<br /><br />
					active_competition_tab: {{ active_competition_tab }}<br /><br />
					<!-- loadedCountries: {{ loadedCountries }}<br /><br /> -->
					loadedCompetitions: {{ loadedCompetitions }}<br /><br />
					selectedConfederation: {{ selectedConfederation }}<br /><br />
					selectedCountry: {{ selectedCountry }}<br /><br />
					selectedCompetition: {{ selectedCompetition }}<br /><br />
				</p>
				<v-btn
				    class="warning"
				    @click.stop="logout"
				>Logout</v-btn>
				<v-btn @click="fetchTeamsByCompetition('spanish_la_liga_2018_2019')">Fetch spanish la Liga teams</v-btn>
				<v-btn @click="fetchTeamsByCompetition('english_premier_league_2018_2019')">Fetch english Premier League teams</v-btn>

				<!-- Confederations tabs -->
				<v-tabs
				    color="green"
				    dark
				    slider-color="yellow"
				    fixed-tabs
				    v-model="active_confederation_tab"
				    @change="changeConfederation(active_confederation_tab)"
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
				    @change="changeCountry(active_country_tab)"
				    v-if="selectedConfederation"
				>
					<v-tab
					    v-for="country in loadedCountries"
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
				    style="display: inline;"
				    @change="changeCompetition(active_competition_tab)"
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
			loadedTeams() {
				return this.$store.getters['teams/loadedTeams']
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
			loadedCountries() {
				if (this.selectedConfederation) {
					return this.$store.getters['countries/loadedCountries'][
						this.selectedConfederation.slug
					]
				}
				return null
			},
			loadedCompetitions() {
				if (this.selectedCountries) {
					return this.$store.getters['competitions/loadedCompetitions'][this.selectedCountry.slug]

				}
				return null
			},
			loadedTeams() {
				if (this.selectedCompetition) {
					return this.$store.getters['teams/loadedTeams'][this.selectedCompetition.slug]
				}
				return null
			}
		},
		methods: {
			changeConfederation(confederationIndex) {
				console.log('confederationIndex: ', confederationIndex)
				console.log(this.confederations[confederationIndex])
				this.selectedConfederation = this.confederations[confederationIndex]
				if (this.loadedCountries[this.selectedConfederation.slug].length < 1) {
					this.fetchCountriesByConfederation(this.selectedConfederation)
				}
			},
			changeCountry(countryIndex) {
				console.log('countryIndex: ', countryIndex)
				if (this.loadedCountries && countryIndex) {
					this.selectedCountry = this.loadedCountries[countryIndex]
					if (this.loadedCompetitions[this.selectedCounty.slug].length < 1) {
						this.fetchCompetitionsByCountry(this.selectedCountry)

					}
				}
			},
			changeCompetition(competitionIndex) {
				console.log('competitionIndex: ', competitionIndex)
				if (this.loadedCompetitions && competitionIndex) {
					this.selectedCompetition = this.loadedCompetition[competitionIndex]
					if (this.loadedTeams[this.selectedCompetition.slug].length < 1) {
						this.fetchTeamsByCompetition(this.selectedCompetition)

					}
				}
			},
			fetchCountriesByConfederation(confederation) {
				console.log('fetchCountriesByConfederation: ', confederation)
				if (confederation && confederation.slug) {
					this.$store.dispatch(
						'countries/fetchCountriesByConfederation',
						confederation.slug
					)

				}
			},
			fetchCompetitionsByCountry(country) {
				console.log('fetchCompetitionsByCountry: ', country)
				if (country && country.slug) {
					this.$store.dispatch(
						'competitions/fetchCompetitionsByCountry',
						country.slug
					)
				}
			},
			fetchTeamsByCompetition(competition) {
				console.log('fetchTeamsByCompetition: ', competition)
				if (competition && competition.slug) {
					this.$store.dispatch(
						'teams/fetchTeamsByCompetition',
						competitition.slug
					)
				}
				// this.$store.dispatch('teams/fetchTeamsByCompetition', competition)
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
