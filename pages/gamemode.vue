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
          loadedTeamsByCompetition: {{ loadedTeamsByCompetition }}<br /><br />
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
        <!-- @change="changeConfederation(selectedConfederation.slug, active_confederation_tab)" -->
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
            <v-tab-item
                v-for="(competition, index) in loadedCompetitionsByCountry[selectedCountry.slug]"
                :key="index"
            >
                <!-- <div v-for="team in loadedTeamsByCompetition" :key="team.slug">
                    {{ team }}
                </div> -->
                <v-layout row wrap align-center justify-center v-if="selectedCompetition">
                    <v-flex xs6 sm4 md3 class="text-xs-center pa-2" v-for="team in loadedTeamsByCompetition[selectedCompetition.slug]" :key="team.slug">
                        <!-- {{ team.name }} -->
                        <img :src="`/images/teams/${team.image}`" width="80%" class="" style="border: 2px solid green;">
                    </v-flex>
                </v-layout>
            </v-tab-item>
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
            // console.log('confederationSlug: ', confederationSlug)
            // console.log('confederationTab: ', confederationTab)
            console.log('this.active_confederation_tab: ', this.active_confederation_tab)
            // this.active_country_tab = 0
            // console.log(this.confederations[confederationIndex])
            // if (!this.loadedCountries[this.selectedConfederation.slug]) {
            this.selectedConfederation = this.confederations[this.active_confederation_tab]
            if (!this.loadedCountriesByConfederation[this.selectedConfederation.slug]) {
            	console.log('Call fetchCountriesByConfederation')
            	await this.fetchCountriesByConfederation(this.selectedConfederation.slug)
            }
            // this.active_country_tab = 0
        },
        async changeCountry() {
            console.log('changeCountry2')
            if (this.loadedCountriesByConfederation[this.selectedConfederation.slug]) {
                this.selectedCountry = this.loadedCountriesByConfederation[this.selectedConfederation.slug][this.active_country_tab]
                // this.selectedCountry = this.loadedCountriesByConfederation['concacaf'][0]
                if (!this.loadedCompetitionsByCountry[this.selectedCountry.slug]) {
                    console.log('Call fetchCompetitionsByCountry')
                    await this.fetchCompetitionsByCountry(this.selectedCountry.slug)
                }
            }
		},
		async changeCompetition() {
            console.log('changeCompetition')
            if (this.loadedCompetitionsByCountry[this.selectedCountry.slug]) {
                this.selectedCompetition = this.loadedCompetitionsByCountry[this.selectedCountry.slug][this.active_competition_tab]
                if (!this.loadedTeamsByCompetition[this.selectedCompetition.slug]) {
                    console.log('Call fetchTeamsByCompetition')
                    await this.fetchTeamsByCompetition(this.selectedCompetition.slug)
                }
            }
        },
        


        async fetchCountriesByConfederation(confederationSlug) {
            try {
                console.log('fetchCountriesByConfederation vue: ', confederationSlug)
                await this.$store.dispatch('countries/fetchCountriesByConfederation', confederationSlug)
            } catch (error) {
                console.log('error: ', error)
            }
		},
		async fetchCompetitionsByCountry(countrySlug) {
			try {
				console.log('fetchCompetitionsByCountry vue: ', countrySlug)
		        await this.$store.dispatch('competitions/fetchCompetitionsByCountry', countrySlug)
			} catch (error) {
				console.log('error: ', error)
			}
        },
        async fetchTeamsByCompetition(competitionSlug) {
			try {
				console.log('fetchTeamsByCompetition vue: ', competitionSlug)
		        await this.$store.dispatch('teams/fetchTeamsByCompetition', competitionSlug)
			} catch (error) {
				console.log('error: ', error)
			}
		}
    }
}
</script>

<style scoped>
</style>
