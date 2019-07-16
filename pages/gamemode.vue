<template>
  <v-app>
    <v-content>
      <v-container style="padding: 0px; max-width: 1017px;">
        <h1>Gamemode</h1>
        <p style="display: none;">
          <!-- loadedUser: {{ loadedUser }} -->
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
            	<v-img :src="`/images/confederations/${confederation.image}`" :aspect-ratio="1" :max-width="50"></v-img>
            	<!-- <img :src="`/images/confederations/${confederation.image}`" width="60px" /> -->
          	</v-tab>
        </v-tabs>

        <!-- Countries tabs -->
        <!--  -->
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
       <!--  -->
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
                    <v-flex xs6 sm4 md3 class="text-xs-center" v-for="team in loadedTeamsByCompetition[selectedCompetition.slug]" :key="team.slug" style="border: 1px solid green;">
                        <v-hover>
                            <v-card slot-scope="{ hover }" class="card pt-2" :class="`${hover ? 'hover' : null}`" @click.stop="selectTeam(team)">
                                <!-- {{ team }} -->
                                <v-img :src="`/images/teams/${team.image}`" :lazy-src="`/images/teams/${team.image}`" :aspect-ratio="1" class="ma-4"></v-img>
                                <v-card-actions style="border: 1px solid red;" class="justify-center">
                                    <v-btn flat color="orange">Share</v-btn>
                                    <v-btn flat color="orange">Explore</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-hover>
                        <!-- <div class="flip-card">
                            <v-card hover class="flip-card-inner" :class="[ isFlipped[index] ? 'flipped' : '' ]" @click="toggleFlip(index)" style="border: 1px solid red;">
                                <div class="flip-card-front">
                                    <h1>Front</h1> 
                                </div>
                                <div class="flip-card-back">
                                    <h1>Back</h1> 
                                    <v-btn @click.stop="selectCard">Select card</v-btn>
                                </div>
                            </v-card>
                        </div> -->
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
        // await this.fetchCountriesByConfederation('uefa')
        await this.changeConfederation()
	},
    data() {
        return {
            active_confederation_tab: 0,
            active_country_tab: 0,
            active_competition_tab: 0,
            selectedConfederation: {},
            selectedCountry: {},
            selectedCompetition: {}
            // selectedConfederation: {
            //     name: 'UEFA',
            //     slug: 'uefa'
            // },
            // selectedCountry: {
			// 	name: 'Spain',
			// 	slug: 'spain'
			// },
            // selectedCompetition: {
            //     name: 'La Liga',
            //     slug: 'spanish_la_liga_2018_2019'
            // },
            // abc: 'uefa',
            // isFlipped: new Array(30)
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
                    image: 'europe2.png'
                },
                {
                    name: 'CONCACAF',
                    slug: 'concacaf',
                    continent: {
                        name: 'America',
                        slug: 'america'
                    },
                    image: 'north_and_central_america2.png'
                },
                {
                    name: 'CONMEBOL',
                    slug: 'conmebol',
                    continent: {
                        name: 'America',
                        slug: 'america'
                    },
                    image: 'south_america2.png'
                },
                {
                    name: 'CAF',
                    slug: 'caf',
                    continent: {
                        name: 'Africa',
                        slug: 'africa'
                    },
                    image: 'africa2.png'
                },
                {
                    name: 'AFC',
                    slug: 'afc',
                    continent: {
                        name: 'Asia',
                        slug: 'asia'
                    },
                    image: 'asia2.png'
                },
                {
                    name: 'OFC',
                    slug: 'ofc',
                    continent: {
                        name: 'Oceania',
                        slug: 'oceania'
                    },
                    image: 'oceania2.png'
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
            console.log('changeConfederation')
            
            // console.log('this.active_confederation_tab: ', this.active_confederation_tab)
            
            this.selectedConfederation = this.confederations[this.active_confederation_tab]
            if (!this.loadedCountriesByConfederation[this.selectedConfederation.slug]) {
                console.log('Call fetchCountriesByConfederation')
                await this.fetchCountriesByConfederation(this.selectedConfederation.slug)
                // console.log('Done fetching countries by confederation. Continue.')
            }
            // console.log('Go on!')
            this.active_country_tab = 0
            this.selectedCountry = this.loadedCountriesByConfederation[this.selectedConfederation.slug][this.active_country_tab]

            if (!this.loadedCompetitionsByCountry[this.selectedCountry.slug]) {
                console.log('Call fetchCompetitionsByCountry')
                await this.fetchCompetitionsByCountry(this.selectedCountry.slug)
                // console.log('Done fetching competitions by country. Continue.')
                
            }
            this.active_competition_tab = 0
            this.selectedCompetition = this.loadedCompetitionsByCountry[this.selectedCountry.slug][this.active_competition_tab]

            if (!this.loadedTeamsByCompetition[this.selectedCompetition.slug]) {
                console.log('Call fetchTeamsByCompetition')
                await this.fetchTeamsByCompetition(this.selectedCompetition.slug)
                // console.log('Done fetching teams by competition. Continue.')
            }
            
            // console.log('abc')
        },
        async changeCountry () {
            console.log('changeCountry')
            if (this.loadedCountriesByConfederation[this.selectedConfederation.slug]) {
                this.selectedCountry = this.loadedCountriesByConfederation[this.selectedConfederation.slug][this.active_country_tab]
                if (!this.loadedCompetitionsByCountry[this.selectedCountry.slug]) {
                    await this.fetchCompetitionsByCountry(this.selectedCountry.slug)
                    // console.log('Done fetching competitions by country. Continue.')
                    // console.log('Go on!')
                }
                this.active_competition_tab = 0
                this.selectedCompetition = this.loadedCompetitionsByCountry[this.selectedCountry.slug][this.active_competition_tab]
            }
        },
        async changeCompetition() {
            console.log('changeCompetition')
            if (this.loadedCompetitionsByCountry[this.selectedCountry.slug]) {
                // console.log('this.active_competition_tab: ', this.active_competition_tab)
                this.selectedCompetition = this.loadedCompetitionsByCountry[this.selectedCountry.slug][this.active_competition_tab]
                // console.log('this.selectedCompetition: ', this.selectedCompetition)
                if (this.selectedCompetition && !this.loadedTeamsByCompetition[this.selectedCompetition.slug]) {
                    await this.fetchTeamsByCompetition(this.selectedCompetition.slug)
                    console.log('Done fetching teams by competition. Continue.')
                    // console.log('Go on!')
                }
            }
        },
        


        async fetchCountriesByConfederation(confederationSlug) {
            try {
                // console.log('fetchCountriesByConfederation vue: ', confederationSlug)
                await this.$store.dispatch('countries/fetchCountriesByConfederation', confederationSlug)
                console.log('OK done fetching countries by confederation')
            } catch (error) {
                console.log('error: ', error)
            }
		},
		async fetchCompetitionsByCountry(countrySlug) {
			try {
				// console.log('fetchCompetitionsByCountry vue: ', countrySlug)
                await this.$store.dispatch('competitions/fetchCompetitionsByCountry', countrySlug)
                console.log('OK done fetching competitions by country')
			} catch (error) {
				console.log('error: ', error)
			}
        },
        async fetchTeamsByCompetition(competitionSlug) {
			try {
				// console.log('fetchTeamsByCompetition vue: ', competitionSlug)
                await this.$store.dispatch('teams/fetchTeamsByCompetition', competitionSlug)
                console.log('OK done fetching teams by competition')
			} catch (error) {
				console.log('error: ', error)
			}
        },
        


        selectTeam (team) {
            console.log('selectTeam: ', team)
        }
    }
}
</script>

<style scoped>
    .card:hover {
        cursor: pointer;
    }
    .hover {
        border: 2px solid blue;
    }
</style>
