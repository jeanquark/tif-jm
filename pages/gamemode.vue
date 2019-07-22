<template>
    <!-- <v-app>
        <v-content> -->
            <v-container style="padding: 0px; max-width: 1017px;">
                <h1>Gamemode</h1>
                <p style="display: inline;">
                    loadedUser: {{ loadedUser }}<br /><br />
                    loadedUserTeams: {{ loadedUserTeams }}<br /><br />
                    <!-- loadedCompetitionsByCountry: {{ loadedCompetitionsByCountry }}<br /><br /> -->
                    <!-- loadedTeamsByCompetition: {{ loadedTeamsByCompetition }}<br /><br /> -->
                    <!-- loadedCountries: {{ loadedCountries }}<br /><br /> -->
                    <!-- loadedTeams['spanish_la_liga_2018_2019']: {{ loadedTeams['spanish_la_liga_2018_2019'] }}<br /><br /> -->
                    <!-- loadedTeams['english_premier_league_2018_2019']: {{ loadedTeams['english_premier_league_2018_2019'] }}<br /><br /> -->

                    <!-- active_confederation_tab: {{ active_confederation_tab }}<br /><br /> -->
                    <!-- active_country_tab: {{ active_country_tab }}<br /><br /> -->
                    <!-- active_competition_tab: {{ active_competition_tab }}<br /><br /> -->
                    <!-- selectedConfederation: {{ selectedConfederation }}<br /><br /> -->
                    <!-- selectedCountry: {{ selectedCountry }}<br /><br /> -->
                    selectedCompetition: {{ selectedCompetition }}<br /><br />
					loadedCompetitionsByCountry: {{ loadedCompetitionsByCountry }}<br /><br />
                </p>
                <v-btn class="warning" @click.stop="logout">Logout</v-btn><br /><br /><br />

				<nuxt-link to="/">Back to homepage</nuxt-link><br />
                <nuxt-link to="/user/events">Events</nuxt-link><br />
				<nuxt-link to="/admin">Admin (restricted access)</nuxt-link><br />
				<nuxt-link to="/admin/competitions/create">Create competition (restricted access)</nuxt-link><br />

                <br /><br /><br /><br /><br />
                <v-layout row wrap justify-center class="mb-4">
                    <v-flex xs12 class="mb-2 text-xs-center">
                        <h2>Your teams</h2>
                    </v-flex>
                    <v-flex xs12 sm6 md4 lg3 class="ma-2" v-for="team in loadedUserTeams" :key="team.slug">
                        <v-card class="ma-3 pt-2">
                            <v-img :src="`/images/teams/${team.image}`" :aspect-ratio="1" class="ma-4 pa-2"></v-img>
							<v-card-actions>
								<v-layout row wrap justify-center align-center>
									<v-flex xs12 class="text-xs-center">
										{{ team.name }}
									</v-flex>
									<!-- <v-flex xs3 class="text-xs-right">
										<v-layout align-center>
											<img src="/images/icons/icon_48x48.png" width="20" />
											<span class="ml-2">{{ team.usersCount || 0 }}</span>
										</v-layout>
									</v-flex> -->
									<v-btn small color="primary" class="mt-2" @click.stop="deselectTeam(team)">Deselect</v-btn>
									</v-layout>
							</v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>

                <v-layout row wrap>
					<v-flex xs12>
						<!-- Confederations tabs -->
						<v-tabs color="yellow" dark slider-color="blue" fixed-tabs v-model="active_confederation_tab" @change="changeConfederation()">
							<v-tab v-for="(confederation, index) in confederations" :key="index" ripple style="cursor: pointer;">
								<v-img :src="`/images/confederations/${confederation.image}`" :aspect-ratio="1" :max-width="50"></v-img>
								<!-- <img :src="`/images/confederations/${confederation.image}`" width="60px" /> -->
							</v-tab>
						</v-tabs>

						<!-- Countries tabs -->
						<v-tabs color="amber" dark slider-color="blue" fixed-tabs v-model="active_country_tab" style="display: inline;" @change="changeCountry()" v-if="selectedConfederation">
							<v-tab v-for="(country, index) in loadedCountriesByConfederation[selectedConfederation.slug]" :key="index" ripple style="cursor: pointer;">
								<img :src="`/images/countries/${country.image}`" width="40px" />
							</v-tab>
						</v-tabs>

						<!-- Competitions tabs -->
						<v-tabs color="orange" dark slider-color="blue" fixed-tabs v-model="active_competition_tab" style="display: inline;" @change="changeCompetition()" v-if="selectedCountry && loadedCompetitionsByCountry[selectedCountry.slug] &&loadedCompetitionsByCountry[selectedCountry.slug].length > 0">
							<v-tab v-for="(competition, index) in loadedCompetitionsByCountry[selectedCountry.slug]" :key="index" ripple style="cursor: pointer;">
								{{ competition.name }}
							</v-tab>
							<v-tab-item v-for="(competition, index) in loadedCompetitionsByCountry[selectedCountry.slug]" :key="index">
								<v-layout row wrap align-center justify-center v-if="selectedCompetition">
									<v-flex xs6 sm4 md3 class="text-xs-center" v-for="team in loadedTeamsByCompetition[selectedCompetition.slug]" :key="team.slug" style="border: 1px solid green;">
										<v-hover>
											<v-card slot-scope="{ hover }" class="card ma-3 pt-2" :class="[loadedUserTeams && loadedUserTeams[team.slug] ? 'selected' : `${hover ? 'hover' : null}`]" @click.stop="selectTeam(team)">
												<!-- {{ team }} -->
												<v-img :src="`/images/teams/${team.image}`" :lazy-src="`/images/teams/${team.image}`" :aspect-ratio="1" class="ma-4"></v-img>
												<v-card-actions style="border: 1px solid red; width: 100%; height: 30px;" class="px-2 py-0 justify-center">
													<v-layout row wrap align-center>
														<v-flex xs9 class="text-xs-center">
															{{ team.name }}
														</v-flex>
														<v-flex xs3 class="text-xs-right">
															<v-layout align-center>
																<img src="/images/icons/icon_48x48.png" width="20" />
																<!-- <v-img src="/images/icons/icon_48x48.png" :max-width="40"></v-img> -->
																<span class="ml-2">{{ team.usersCount || 0 }}</span>
															</v-layout>
														</v-flex>
													</v-layout>
												</v-card-actions>
											</v-card>
										</v-hover>
									</v-flex>
								</v-layout>
							</v-tab-item>
						</v-tabs>
						<v-tabs color="orange" slider-color="orange" class="justify-center" v-else>
							<v-layout justify-center align-center class="white--text">
								Sorry, no competition found for this country
							</v-layout>
						</v-tabs>
					</v-flex>
                </v-layout>
            </v-container>
        <!-- </v-content>
    </v-app> -->
</template>

<script>
	import Noty from 'noty'
	import axios from 'axios'
	export default {
		layout: 'layoutFront',
		async created() {
			// await this.fetchCountriesByConfederation('uefa')
			await this.changeConfederation()
			// if (!this.$store.getters['userTeams/loadedUserTeams'] || this.$store.getters['userTeams/loadedUserTeams'].length < 1) {
			console.log('fetchUserTeams')
			try {
				await this.$store.dispatch('userTeams/fetchUserTeams')
			} catch (error) {
				console.log('error from created: ', error)
			}
			// }
		},
		data() {
			return {
				active_confederation_tab: 0,
				active_country_tab: 0,
				active_competition_tab: 0,
				selectedConfederation: {},
				selectedCountry: {},
				selectedCompetition: {}
			}
		},
		computed: {
			loadedUser() {
				return this.$store.getters['users/loadedUser']
			},
			loadedUserTeams() {
				return this.$store.getters['userTeams/loadedUserTeams']
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
			// countries() {
			//     return [
			//         {
			//             name: 'Spain',
			//             slug: 'spain',
			//             image: 'spain.png',
			//             confederation: {
			//                 name: 'UEFA',
			//                 slug: 'uefa'
			//             }
			//         },
			//         {
			//             name: 'United Kingdom',
			//             slug: 'united_kingdom',
			//             image: 'united_kingdom.png',
			//             confederation: {
			//                 name: 'UEFA',
			//                 slug: 'uefa'
			//             }
			//         },
			//         {
			//             name: 'United States',
			//             slug: 'united_states',
			//             image: 'united_states.png',
			//             confederation: {
			//                 name: 'CONCACAF',
			//                 slug: 'concacaf'
			//             }
			//         },
			//         {
			//             name: 'Canada',
			//             slug: 'canada',
			//             image: 'canada.png',
			//             confederation: {
			//                 name: 'CONCACAF',
			//                 slug: 'concacaf'
			//             }
			//         },
			//         {
			//             name: 'Mexico',
			//             slug: 'mexico',
			//             image: 'mexico.png',
			//             confederation: {
			//                 name: 'CONCACAF',
			//                 slug: 'concacaf'
			//             }
			//         }
			//     ]
			// },
			loadedCountriesByConfederation() {
				return this.$store.getters[
					'countries/loadedCountriesByConfederation'
				]
			},
			loadedCompetitionsByCountry() {
				return this.$store.getters[
					'competitions/loadedCompetitionsByCountry'
				]
			},
			loadedTeamsByCompetition() {
				return this.$store.getters['teams/loadedTeamsByCompetition']
			}
		},
		methods: {
			async changeConfederation() {
				console.log('changeConfederation')

				// console.log('this.active_confederation_tab: ', this.active_confederation_tab)

				this.selectedConfederation = this.confederations[
					this.active_confederation_tab
				]
				if (
					!this.loadedCountriesByConfederation[
						this.selectedConfederation.slug
					]
				) {
					console.log('Call fetchCountriesByConfederation')
					await this.fetchCountriesByConfederation(
						this.selectedConfederation.slug
					)
					// console.log('Done fetching countries by confederation. Continue.')
				}
				// console.log('Go on!')
				this.active_country_tab = 0
				this.selectedCountry = this.loadedCountriesByConfederation[
					this.selectedConfederation.slug
				][this.active_country_tab]

				if (!this.loadedCompetitionsByCountry[this.selectedCountry.slug]) {
					console.log('Call fetchCompetitionsByCountry')
					await this.fetchCompetitionsByCountry(this.selectedCountry.slug)
					// console.log('Done fetching competitions by country. Continue.')
				}
				this.active_competition_tab = 0
				this.selectedCompetition = this.loadedCompetitionsByCountry[
					this.selectedCountry.slug
				][this.active_competition_tab]

				if (
					this.selectedCompetition
					// 	this.selectedCompetition.slug &&
					// 	this.loadedTeamsByCompetition[this.selectedCompetition.slug]
					// 		.length < 1
				) {
					console.log('Call fetchTeamsByCompetition')
					await this.fetchTeamsByCompetition(
						this.selectedCompetition.slug
					)
					// console.log('Done fetching teams by competition. Continue.')
				}

				// console.log('abc')
			},
			async changeCountry() {
				console.log('changeCountry')
				if (
					this.loadedCountriesByConfederation[
						this.selectedConfederation.slug
					]
				) {
					this.selectedCountry = this.loadedCountriesByConfederation[
						this.selectedConfederation.slug
					][this.active_country_tab]
					if (
						this.selectedCountry
						// this.selectedCountry.slug &&
						// this.loadedCompetitionsByCountry[this.selectedCountry.slug]
						// 	.length < 1
					) {
						await this.fetchCompetitionsByCountry(
							this.selectedCountry.slug
						)
					}
					this.active_competition_tab = 0
					this.selectedCompetition = this.loadedCompetitionsByCountry[
						this.selectedCountry.slug
					][this.active_competition_tab]
					if (this.selectedCompetition) {
						await this.fetchTeamsByCompetition(
							this.selectedCompetition.slug
						)
					}
				}
			},
			async changeCompetition() {
				console.log('changeCompetition')
				if (this.loadedCompetitionsByCountry[this.selectedCountry.slug]) {
					// console.log('this.active_competition_tab: ', this.active_competition_tab)
					this.selectedCompetition = this.loadedCompetitionsByCountry[
						this.selectedCountry.slug
					][this.active_competition_tab]
					// console.log('this.selectedCompetition: ', this.selectedCompetition)
					if (
						this.selectedCompetition
						// 	this.selectedCompetition.slug &&
						// 	this.loadedTeamsByCompetition[this.selectedCompetition.slug]
						// 		.length < 1
					) {
						await this.fetchTeamsByCompetition(
							this.selectedCompetition.slug
						)
						console.log('Done fetching teams by competition. Continue.')
						// console.log('Go on!')
					}
				}
			},

			async fetchCountriesByConfederation(confederationSlug) {
				try {
					// console.log('fetchCountriesByConfederation vue: ', confederationSlug)
					await this.$store.dispatch(
						'countries/fetchCountriesByConfederation',
						confederationSlug
					)
					console.log('OK done fetching countries by confederation')
				} catch (error) {
					console.log('error: ', error)
				}
			},
			async fetchCompetitionsByCountry(countrySlug) {
				try {
					// console.log('fetchCompetitionsByCountry vue: ', countrySlug)
					await this.$store.dispatch(
						'competitions/fetchCompetitionsByCountry',
						countrySlug
					)
					console.log('OK done fetching competitions by country')
				} catch (error) {
					console.log('error: ', error)
				}
			},
			async fetchTeamsByCompetition(competitionSlug) {
				try {
					console.log('fetchTeamsByCompetition vue: ', competitionSlug)
					await this.$store.dispatch(
						'teams/fetchTeamsByCompetition',
						competitionSlug
					)
					console.log('OK done fetching teams by competition')
				} catch (error) {
					console.log('error: ', error)
				}
			},
			async selectTeam(team) {
				try {
					console.log('selectTeam: ', team)
					await this.$store.dispatch('userTeams/selectUserTeam', team)
					new Noty({
						type: 'success',
						text: `You now follow ${team.name} &#128522;`,
						timeout: 5000,
						theme: 'metroui'
					}).show()
				} catch (error) {
					console.log('error: ', error)
					new Noty({
						type: 'error',
						text: `Sorry, an error occured and you could not follow ${
							team.name
						} &#128533;`,
						timeout: 5000,
						theme: 'metroui'
					}).show()
				}
			},
			async deselectTeam(team) {
				try {
					console.log('deselectTeam: ', team)
					await this.$store.dispatch('userTeams/deselectUserTeam', team)
					new Noty({
						type: 'success',
						text: `You successfully unfollow ${team.name} &#128546;`,
						timeout: 5000,
						theme: 'metroui'
					}).show()
				} catch (error) {
					console.log('error: ', error)
					new Noty({
						type: 'error',
						text: `Sorry, an error occured and you could not unfollow ${
							team.name
						}`,
						theme: 'metroui'
					}).show()
				}
			},
			async fetchCompetitions(year) {},
			abc() {
				console.log('Click on abc')
			}
		}
	}
</script>

<style scoped>
	.hover {
		border: 2px solid blue;
		cursor: pointer;
	}
	.selected {
		/* background: yellow; */
		background: var(--v-primary-lighten4);
	}
	.def {
		background-color: orange;
	}
</style>
