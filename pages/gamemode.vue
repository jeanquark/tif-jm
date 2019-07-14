<template>
  <v-app>
    <v-content>
      <v-container style="padding: 0px; max-width: 1017px;">
        <h1>Gamemode</h1>
        <p>
          loadedUser: {{ loadedUser }}
          <br />
          <br />
          loadedCountriesByConfederation: {{ loadedCountriesByConfederation }}
          <br />
          <br />
          loadedCompetitionsByCountry: {{ loadedCompetitionsByCountry }}<br /><br />
          <!-- loadedCountries: {{ loadedCountries }}<br /><br /> -->
          <!-- loadedTeams['spanish_la_liga_2018_2019']: {{ loadedTeams['spanish_la_liga_2018_2019'] }}<br /><br /> -->
          <!-- loadedTeams['english_premier_league_2018_2019']: {{ loadedTeams['english_premier_league_2018_2019'] }}<br /><br /> -->
          active_confederation_tab: {{ active_confederation_tab }}
          <br />
          <br />
          active_country_tab: {{ active_country_tab }}
          <br />
          <br />
          active_competition_tab: {{ active_competition_tab }}
          <br />
          <br />
          <br />
          selectedConfederation: {{ selectedConfederation }}
          <br />
          <br />
          selectedCountry: {{ selectedCountry }}
          <br />
          <br />
          selectedCompetition: {{ selectedCompetition }}
          <br />
          <br />
          <br />
          <!-- loadedTeams: {{ loadedTeams }}<br /><br /> -->
        </p>
        <v-btn class="warning" @click.stop="logout">Logout</v-btn>
        <!-- <v-btn
          @click="fetchTeamsByCompetition('spanish_la_liga_2018_2019')"
        >Fetch spanish la Liga teams</v-btn>
        <v-btn
          @click="fetchTeamsByCompetition('english_premier_league_2018_2019')"
        >Fetch english Premier League teams</v-btn> -->

        <br />
        <br />
        <br />
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
            	v-for="(confederation, index) in confederations"
            	:key="index"
            	ripple
            	style="cursor: pointer;"
          	>
            	<!-- <v-img :src="`/images/continents/${continent.image}`" :width="30"></v-img> -->
            	<img :src="`/images/confederations/${confederation.image}`" width="60px" />
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
			v-if="selectedConfederation"
        >
          	<v-tab
            	v-for="(country, index) in loadedCountriesByConfederation[selectedConfederation.slug]"
            	:key="index"
            	ripple
            	style="cursor: pointer;"
          	>
            	<img :src="`/images/countries/${country.image}`" width="40px" />
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
			@change="changeCompetition()"
			v-if="selectedCountry"
		>
			<v-tab
				v-for="(competition, index) in loadedCompetitionsByCountry[selectedCountry.slug]"
				:key="index"
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
		await this.fetchCountriesByConfederation('uefa')
	},
    data() {
        return {
            active_confederation_tab: 0,
            active_country_tab: 0,
            active_competition_tab: 0,
            selectedConfederation: {
                name: 'UEFA',
                slug: 'uefa'
            },
            selectedCountry: {
				name: 'Spain',
				slug: 'spain'
			},
            selectedCompetition: null,
            abc: 'uefa'
        }
    },
    computed: {
        loadedUser() {
            return this.$store.getters['users/loadedUser']
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
        countries() {
            return [
                {
                    name: 'Spain',
                    slug: 'spain',
                    image: 'spain.png',
                    confederation: {
                        name: 'UEFA',
                        slug: 'uefa'
                    }
                },
                {
                    name: 'United Kingdom',
                    slug: 'united_kingdom',
                    image: 'united_kingdom.png',
                    confederation: {
                        name: 'UEFA',
                        slug: 'uefa'
                    }
                },
                {
                    name: 'United States',
                    slug: 'united_states',
                    image: 'united_states.png',
                    confederation: {
                        name: 'CONCACAF',
                        slug: 'concacaf'
                    }
                },
                {
                    name: 'Canada',
                    slug: 'canada',
                    image: 'canada.png',
                    confederation: {
                        name: 'CONCACAF',
                        slug: 'concacaf'
                    }
                },
                {
                    name: 'Mexico',
                    slug: 'mexico',
                    image: 'mexico.png',
                    confederation: {
                        name: 'CONCACAF',
                        slug: 'concacaf'
                    }
                }
            ]
        },
        // loadedCountries() {
        //     return this.$store.getters['countries/loadedCountries']
        //     // if (this.selectedConfederation) {
        //     // 	console.log('this.selectedConfederation: ', this.selectedConfederation)
        //     // 	return this.$store.getters['countries/loadedCountries'][
        //     // 		this.selectedConfederation.slug
        //     // 	]
        //     // }
        //     // return null
        // },
        loadedCountriesByConfederation() {
            return this.$store.getters[
                'countries/loadedCountriesByConfederation'
            ]
		},
		loadedCompetitionsByCountry() {
			return this.$store.getters['competitions/loadedCompetitionsByCountry']
		}
    },
    methods: {
        // updateConfederation() {
        //     this.selectedConfederation = this.confederations[
        //         this.active_confederation_tab
        //     ]
        //     this.abc = this.selectedConfederation.slug
        // },
        async changeConfederation() {
            // console.log('changeConfederation', $event)
            // this.active_confederation_tab = $event
            // this.active_country_tab = 0
            // this.selectedConfederation = this.confederations[
            //     this.active_confederation_tab
            // ]
            // if (
            //     !this.loadedCountriesByConfederation[
            //         this.selectedConfederation.slug
            //     ]
            // ) {
            //     console.log('Call fetchCountriesByConfederation')
            //     await this.fetchCountriesByConfederation(
            //         this.selectedConfederation.slug
            //     )
            // }


            console.log(
                'this.active_confederation_tab: ',
                this.active_confederation_tab
            )
            // this.active_country_tab = 0
            // console.log(this.confederations[confederationIndex])
            // if (!this.loadedCountries[this.selectedConfederation.slug]) {
            this.selectedConfederation = this.confederations[
                this.active_confederation_tab
            ]
            if (!this.loadedCountriesByConfederation[this.selectedConfederation.slug]) {
            	console.log('Call fetchCountriesByConfederation')
            	await this.fetchCountriesByConfederation(
                	this.selectedConfederation.slug
            	)
            }
            // this.active_country_tab = 0
        },
        async changeCountry() {
			console.log('changeCountry')
			this.selectedCountry = this.loadedCountriesByConfederation[this.selectedConfederation.slug][this.active_country_tab]
			if (!this.loadedCompetitionsByCountry[this.selectedCountry.slug]) {
				console.log('Call fetchCompetitionsByCountry')
				await this.fetchCompetitionsByCountry(this.selectedCountry.slug)
			}
			

            // this.active_country_tab = $event
            // this.selectedCountry = this.loadedCountriesByConfederation[
            //     this.active_country_tab
			// ]
			

            // console.log('this.active_country_tab: ', this.active_country_tab)
            // if (this.loadedCountries && countryIndex) {
            // this.selectedCountry = this.loadedCountriesByConfederation[countryIndex]
            // this.selectedCountry = this.loadedCountries
            // if (this.loadedCompetitions[this.selectedCounty.slug].length < 1) {
            // await this.fetchCompetitionsByCountry(this.selectedCountry)
            // }
            // }
		},
		async changeCompetition() {
			// console.log('changeCompetition: ')
			// console.log(
			// 	'this.active_competition_tab: ',
			// 	this.active_competition_tab
			// )
			// console.log('this.loadedCompetitions: ', this.loadedCompetitions)
			// if (this.loadedCompetitions && competitionIndex) {
			// this.selectedCompetition = this.loadedCompetitions[competitionIndex]
			// this.selectedCompetition = this.loadedCompetitions['english_premier_league_2018_2019']
			// if (this.loadedTeams && this.loadedTeams[this.selectedCompetition.slug].length < 1) {
			// await this.fetchTeamsByCompetition(this.selectedCompetition)
			// }
			// }

			console.log('changeCompetition')
			this.selectedCompetition = this.loadedCompetitionsByCountry[this.selectedCountry.slug][this.active_competition_tab]
			// this.selectedCompetition = this.loadedCompetitionsByCountry[this.selectedCountry.slug][1]
			// if (!this.loadedCompetitionsByCountry[this.selectedCountry.slug]) {
				// console.log('Call fetchCompetitionsByCountry')
				// await this.fetchCompetitionsByCountry(this.selectedCountry.slug)
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
		async fetchCompetitionsByCountry(countrySlug) {
			try {
				console.log('fetchCompetitionsByCountry vue: ', countrySlug)
				// if (country && country.slug) {
				await this.$store.dispatch(
					'competitions/fetchCompetitionsByCountry',
					countrySlug
				)
				// }
			} catch (error) {
				console.log('error: ', error)
			}
		}
    }
}
</script>

<style scoped>
</style>
