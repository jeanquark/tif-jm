<template>
    <v-container fluid fill-height style="padding: 0px; max-width: 1017px;">
        <v-layout align-center justify-center>
            <v-flex xs12 style="background: #EEEEEE;">
                <!-- loadedCountriesByConfederation: {{ loadedCountriesByConfederation }}<br /><br /> -->
                <!-- loadedCompetitionsByCountry: {{ loadedCompetitionsByCountry }}<br /><br /> -->
                <!-- loadedTeamsByCompetition: {{ loadedTeamsByCompetition }}<br /><br /> -->
                <!-- selectedCompetition: {{ selectedCompetition }}<br /><br /> -->
                <!-- loadedUserTeams: {{ loadedUserTeams }}<br /><br /> -->

                <gamemode-header />

                <!-- <div class="content"> -->
                <v-layout row wrap justify-center align-center class="my-4" style="">
                    <v-flex xs4 offset-xs2 class="text-xs-center">
                        <v-text-field name="username" label="Username" type="text" v-model="loadedUser.username"></v-text-field>
                    </v-flex>
                    <v-flex xs4>
                        <v-btn small color="success" @click.stop="updateUsername">Update username</v-btn>
                    </v-flex>
                    <v-flex xs12 class="mb-2 text-xs-center">
                        <h2>My Teams</h2>
                    </v-flex>
                    <v-flex xs12 sm6 md4 lg3 class="ma-2" v-for="team in loadedUserTeams" :key="team.slug">
                        <v-card class="ma-3 pt-2">
                            <v-img :src="`/images/teams/${team.image}`" :lazy-src="`/images/teams/${team.image}`" :aspect-ratio="1" class="ma-4 pa-2"></v-img>
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
                                <v-layout row wrap align-center justify-center v-if="selectedCompetition" style="">
                                    <v-flex xs6 sm4 md3 class="text-xs-center" v-for="team in loadedTeamsByCompetition[selectedCompetition.slug]" :key="team.slug" style="">
                                        <v-hover>
                                            <v-card slot-scope="{ hover }" class="card ma-3 pt-2" :class="[loadedUserTeams && loadedUserTeams[team.slug] ? 'selected' : `${hover ? 'hover' : null}`]" @click.stop="selectTeam(team)">
                                                <!-- {{ team }} -->
                                                <v-img :src="`/images/teams/${team.image}`" :lazy-src="`/images/teams/${team.image}`" :aspect-ratio="1" class="ma-4"></v-img>
                                                <v-card-actions class="px-2 py-0 justify-center white--text" style="background: var(--v-primary-base); width: 100%; height: 30px;">
                                                    <v-layout row wrap align-center>
                                                        <v-flex xs9 class="text-xs-center">
                                                            {{ team.name }}
                                                        </v-flex>
                                                        <v-flex xs3 class="text-xs-right">
                                                            <v-layout align-center>
                                                                <img src="/images/icons/icon_48x48.png" width="20" />
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
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
	import GamemodeHeader from '~/components/GamemodeHeader'
	import Noty from 'noty'
	import axios from 'axios'
	export default {
		components: { GamemodeHeader },
		layout: 'layoutGamemode',
		// asyncData(context) {
		// 	console.log('asyncData: ', context)
		// },
		mounted() {

		},
		async created() {
			await this.changeConfederation()
			try {
				// if (!this.loadedUserTeams.length) {
				await this.$store.dispatch('userTeams/fetchUserTeams')
				// }
			} catch (error) {
				console.log('error from created: ', error)
			}
			// this.$sentry.captureException(new Error('oups, there is an error from the server'))
			// myUndefinedFunction();
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
			loadedCountriesByConfederation() {
				return this.$store.getters['countries/loadedCountriesByConfederation']
			},
			loadedCompetitionsByCountry() {
				return this.$store.getters['competitions/loadedCompetitionsByCountry']
			},
			loadedTeamsByCompetition() {
				return this.$store.getters['teams/loadedTeamsByCompetition']
			}
		},
		methods: {
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

				if (this.selectedCompetition && !this.loadedTeamsByCompetition[this.selectedCompetition.slug]) {
					await this.fetchTeamsByCompetition(this.selectedCompetition.slug)
				}
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

					if (this.selectedCompetition && (!this.loadedTeamsByCompetition[this.selectedCompetition.slug] || this.loadedTeamsByCompetition[this.selectedCompetition.slug].length < 1)) {
						await this.fetchTeamsByCompetition(this.selectedCompetition.slug)
					}
				}
			},
			async changeCompetition() {
				console.log('changeCompetition')
				if (this.loadedCompetitionsByCountry[this.selectedCountry.slug]) {
					this.selectedCompetition = this.loadedCompetitionsByCountry[this.selectedCountry.slug][this.active_competition_tab]
					if (this.selectedCompetition && (!this.loadedTeamsByCompetition[this.selectedCompetition.slug] || this.loadedTeamsByCompetition[this.selectedCompetition.slug].length < 1)) {
						await this.fetchTeamsByCompetition(this.selectedCompetition.slug)
					}
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
					await this.$store.dispatch('competitions/fetchCompetitionsByCountry', countrySlug)
					console.log('Done fetching competitions by country. [fetchCompetitionsByCountry]')
				} catch (error) {
					console.log('error: ', error)
				}
			},
			async fetchTeamsByCompetition(competitionSlug) {
				try {
					await this.$store.dispatch('teams/fetchTeamsByCompetition', competitionSlug)
					console.log('Done fetching teams by competition. [fetchTeamsByCompetition]')
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
					if (error === 'team_already_picked') {
						new Noty({
							type: 'warning',
							text: `You are already fan of ${team.name} &#128527;`,
							timeout: 5000,
							theme: 'metroui'
						}).show()
					} else {
						new Noty({
							type: 'error',
							text: `Sorry, an error occured and you could not follow ${team.name} &#128533;`,
							timeout: 5000,
							theme: 'metroui'
						}).show()
					}
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
						text: `Sorry, an error occured and you could not unfollow ${team.name}`,
						theme: 'metroui'
					}).show()
				}
			},
			async fetchCompetitions(year) {},
			async updateUsername() {
				try {
					console.log('Click on abc')
					await this.$store.dispatch('users/updateUser', this.loadedUser)
					new Noty({
						type: 'success',
						text: 'Username updated successfully!',
						timeout: 5000,
						theme: 'metroui'
					}).show()
				} catch (error) {
					console.log('error: ', error)
					new Noty({
						type: 'error',
						text: 'Sorry, an error occured and your username could not be updated.',
						timeout: 5000,
						theme: 'metroui'
					}).show()
				}
			}
		}
	}
</script>

<style scoped>
	.hover {
		border: 2px solid var(--v-primary-base);
		cursor: pointer;
	}
	.selected {
		/* background: yellow; */
		background: var(--v-primary-lighten4);
	}
</style>
