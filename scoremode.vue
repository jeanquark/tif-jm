<template>
    <v-content id="app">
        <v-container fluid id="header" class="header" style="height: 162px">
            <v-layout row>
                <v-flex class="barreHeader">
                    <v-layout row>
                        <v-flex xs6 sm6 md6>
                            <span style="margin-left: 100px; color: white; font-weight: 700; padding: 4px; float: left; margin-top: 4px">Utilisateur invité</span>
                        </v-flex>
                        <v-flex xs6 sm6 md6>
                            <span style="margin-right: 100px; color: white; font-weight: 700; padding: 4px; float: right; margin-top: 4px">Bienvenue sur TIF - Pour des fans, par des fans !</span>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex shrink>
                    <nuxt-link to="/">
                        <div id="avatar" style="background-color: orangered">
                            <span class="textTif">ThisIsFan.com</span>
                        </div>
                    </nuxt-link>
                </v-flex>
                <v-flex grow>
                    <v-layout row>
                        <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center style="padding: 25px; background-color: black; border-bottom: 1px solid orangered; border-right: 1px solid orangered; border-left: 1px solid orangered; height: 120px; box-shadow: 0 4px 5px -1px black; position: relative">
							<div class="headerLogo">
								<span class="chiffres">1</span><br />
								<span class="activity">sport</span>
							</div>
                        </v-flex>
                        <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center style="padding: 25px; background-color: black; border-bottom: 1px solid orangered; border-right: 1px solid orangered; height: 120px; box-shadow: 0 4px 5px -1px black; position: relative">
							<div class="headerLogo">
								<span class="chiffres">6</span><br />
								<span class="activity">pays</span>
							</div>
                        </v-flex>
                        <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center style="padding: 25px; background-color: black; border-bottom: 1px solid orangered; border-right: 1px solid orangered; height: 120px; box-shadow: 0 4px 5px -1px black; position: relative">
							<div class="headerLogo">
								<span class="chiffres">130</span><br />
								<span class="activity">équipes</span>
							</div>
                        </v-flex>
                        <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center style="padding: 25px; background-color: black;height: 120px; border-bottom: 1px solid orangered; border-right: 1px solid orangered; box-shadow: 0 4px 5px -1px black; position: relative">
							<div class="headerLogo">
								<span class="chiffres">769</span><br />
								<span class="activity">fans</span>
							</div>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex shrink>
                    <nuxt-link to="/gamemode">
                        <div id="team" style="background-color: orangered">
							<span class="textScoreMode">ScoreMode<br />
							C'est parti !</span>
                        </div>
                    </nuxt-link>
                </v-flex>
            </v-layout>
        </v-container>

        <v-container fluid style="padding: 0; max-width: 1000px; background-color: green; color: white; style: 30px">
            <v-layout>
                <v-flex d-flex x12 justify-center align-center class="text-xs-center menuSport">
                    Football
                </v-flex>
            </v-layout>             
        </v-container>
		
        <v-container fluid style="padding: 0; max-width: 1000px; background-color: grey; color: white; style: 30px">
            <v-layout>
                <v-flex d-flex x2 align-center text-xs-left style="padding-left: 20px; cursor: default" @click="eventsByDate('substractOne')">
                Précèdent
                </v-flex>
                <v-flex d-flex x8 justify-center align-center class="text-xs-center menuDay">
                    {{ date | moment('dddd, MMMM Do YYYY') }}
                </v-flex>
                <v-flex d-flex x2 align-center justify-end style="padding-right: 20px; cursor: default" @click="eventsByDate('addOne')">
                    Suivant
                </v-flex>
            </v-layout>             
        </v-container>

        <v-container fluid style="padding: 0; max-width: 1000px; background-color: whitesmoke">
            <v-card-text class="card-text">
                <v-expansion-panel class="elevation-0" :value="0" v-if="loadedUser">
                    <v-expansion-panel-content style="background-color: orangered">
                        <div slot="header" class="white--text">
                            FAVORITE TEAMS
                        </div>
                        <v-icon slot="actions" color="white">$vuetify.icons.expand</v-icon>
                        <v-card>
                            <v-card-text style="padding: 0">
                                <v-data-table :items="userEvents" no-data-text="Hem... it seems none of your favorite teams is playing on this beautiful day ;-)" class="elevation-0" hide-actions hide-headers>
                                    <template slot="items" slot-scope="props" style="height: 15px; border-spacing: 0; padding: 2px; border: 1px solid black">
                                        <v-layout align-center style="padding: 0; border-right: 1px solid black; border-left: 1px solid black; border-bottom: 1px solid black">
                                            <v-flex xs12 style="margin: 0; padding-top: 2px; padding-bottom: 2px; height: 100%">
                                                <v-layout align-start>
                                                    <v-flex class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 15px; margin: 0">
                                                        <div style="background-color: red; height: 100%; width: 2px"></div>
                                                    </v-flex>
                                                    <v-flex class="text-xs-left" style="width: 100%; padding: 0; height: 15px; margin: 0">
                                                        <div style="color: orange;font-size: 80%">
                                                            <span style="float: left; background-color: red; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px" v-if="props.item.status === 'IN PLAY' || props.item.status === 'HALF TIME BREAK' || props.item.status === 'ADDED TIME' || props.item.status === 'FINISHED'"> - {{ props.item.time}} (heure local)</span>
                                                            <span v-else style="float: left; background-color: red; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px" >BIENTÔT - {{ props.item.time}} (heure local)</span>
                                                        </div>
                                                    </v-flex>
                                                </v-layout>
                                                <v-layout align-center style="max-width: 100%">
                                                    <v-flex class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 40px; margin: 0">
                                                        <div style="background-color: red; height: 40px; width: 2px"></div>
                                                    </v-flex>
                                                    <v-flex sm1 hidden-xs-only align-center class="text-xs-center" style="width: 50px; padding-left: 15px">
                                                        <img :src="'/images/teams/' + props.item.home_team.slug + '.png'" :lazy-src="'/images/icon.png'" class="imgLogoEquipe"/>
                                                    </v-flex>
                                                    <v-flex sm4 xs5 align-center class="text-xs-left pd-left10">
                                                        <span class="teamTextSize">{{ props.item.home_team.name }}</span>
                                                    </v-flex>
                                                    <v-flex sm2 xs2 class="text-xs-center">
                                                        <span style="background-color: black; color: orange; padding: 2px 10px; border-radius: 5px; font-size: 130%" v-if="props.item.status === 'IN PLAY' || props.item.status === 'HALF TIME BREAK' || props.item.status === 'ADDED TIME' || props.item.status === 'FINISHED'">
                                                            <transition name="fade" mode="out-in" :duration="{ enter: 3000, leave: 2000 }">
                                                                <span :key="props.item.score">
                                                                    {{ props.item.score }}
                                                                </span>
                                                            </transition>
                                                        </span>
                                                        <span v-else style="background-color: black; color: orange; padding: 2px 10px; border-radius: 5px; font-size: 130%">{{ convertToLocaltime(props.item.timestamp) }}</span>
                                                    </v-flex>
                                                    <v-flex sm4 xs5 align-center class="text-xs-right pd-right10">
                                                        <span class="teamTextSize">{{ props.item.visitor_team.name }}</span>
                                                    </v-flex>
                                                    <v-flex sm1 hidden-xs-only align-center class="text-xs-center" style="width: 50px; padding-right: 15px">
                                                        <img :src="'/images/teams/' + props.item.visitor_team.slug + '.png'" :lazy-src="'/images/icon.png'" class="imgLogoEquipe"/>
                                                    </v-flex>
                                                </v-layout>
                                            </v-flex>
                                        </v-layout>
                                    </template>
                                </v-data-table>
                            </v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-card-text>

            <v-card-text class="card-text">
                <v-expansion-panel class="elevation-0" :value="0">
                    <v-expansion-panel-content style="background-color: green">
                        <div slot="header" class="white--text">
                            ALL EVENTS
                        </div>
                        <v-icon slot="actions" color="white">$vuetify.icons.expand</v-icon>
                        <v-expansion-panel class="elevation-0" :value="0" v-for="competition in competitions" :key="competition.slug">
                            <v-expansion-panel-content class="black">
                                <div slot="header" class="white--text">
                                    <div v-for="country in competition.countries" :key="country.slug" style="display: flex; align-items:center;">
                                        <img :src="'/images/countries/' + country.slug + '.png'" style="width: 13px; height: 13px" />
                                        &nbsp;&nbsp;{{ competition.name }}
                                    </div>
                                </div>
                                <v-icon slot="actions" color="white">$vuetify.icons.expand</v-icon>
                                <v-card>
									<v-card-text style="padding: 0">
                                        <v-data-table :items="otherEventsByCompetition(competition.slug)" class="elevation-0" hide-actions hide-headers>
											<template slot="items" slot-scope="props" style="height: 15px; border-spacing: 0; padding: 2px; border: 1px solid black">
												<v-layout align-center style="padding: 0; border-right: 1px solid black; border-left: 1px solid black; border-bottom: 1px solid black">
													<v-flex xs12 style="margin: 0; padding-top: 2px; padding-bottom: 2px; height: 100%">
														<v-layout align-start>
															<v-flex class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 15px; margin: 0">
																<div style="background-color: green; height: 100%; width: 2px" v-if="props.item.status === 'IN PLAY'"></div>
																<div style="background-color: green; height: 100%; width: 2px" v-if="props.item.status === 'HALF TIME BREAK'"></div>
																<div style="background-color: green; height: 100%; width: 2px" v-if="props.item.status === 'ADDED TIME'"></div>
																<div style="background-color: red; height: 100%; width: 2px" v-if="props.item.status === 'FINISHED'"></div>
																<div style="background-color: orange; height: 100%; width: 2px" v-else></div>
															</v-flex>
															<v-flex class="text-xs-left" style="width: 100%; padding: 0; height: 15px; margin: 0">
																<div style="color: orange;font-size: 80%">
																	<span style="float: left; background-color: green; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px" v-if="props.item.status === 'IN PLAY'">{{ props.item.time}} MINUTES</span>
																	<span style="float: left; background-color: green; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px" v-if="props.item.status === 'HALF TIME BREAK'">C'EST LA MI-TEMPS !</span>
																	<span style="float: left; background-color: green; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px" v-if="props.item.status === 'ADDED TIME'">TEMPS ADDITIONNEL</span>
																	<span style="float: left; background-color: red; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px" v-if="props.item.status === 'FINISHED'">MATCH TERMINÉ</span>
																	<span v-else style="float: left; background-color: orange; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px" >BIENTÔT - {{ props.item.time}} (heure local)</span>
																</div>
															</v-flex>
														</v-layout>
														<v-layout align-center style="max-width: 100%">
															<v-flex class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 40px; margin: 0">
																<div style="background-color: green; height: 40px; width: 2px" v-if="props.item.status === 'IN PLAY'"></div>
																<div style="background-color: green; height: 40px; width: 2px" v-if="props.item.status === 'HALF TIME BREAK'"></div>
																<div style="background-color: green; height: 40px; width: 2px" v-if="props.item.status === 'ADDED TIME'"></div>
																<div style="background-color: red; height: 40px; width: 2px" v-if="props.item.status === 'FINISHED'"></div>
																<div style="background-color: orange; height: 40px; width: 2px" v-else></div>
															</v-flex>
															<v-flex sm1 hidden-xs-only align-center class="text-xs-center" style="width: 50px; padding-left: 15px">
																<img :src="'/images/teams/' + props.item.home_team.slug + '.png'" :lazy-src="'/images/icon.png'" class="imgLogoEquipe"/>
															</v-flex>
															<v-flex sm4 xs5 align-center class="text-xs-left pd-left10">
																<span class="teamTextSize">{{ props.item.home_team.name }}</span>
															</v-flex>
															<v-flex sm2 xs2 class="text-xs-center">
																<span style="background-color: black; color: orange; padding: 2px 10px; border-radius: 5px; font-size: 130%" v-if="props.item.status === 'IN PLAY' || props.item.status === 'HALF TIME BREAK' || props.item.status === 'ADDED TIME' || props.item.status === 'FINISHED'">
																	<transition name="fade" mode="out-in" :duration="{ enter: 3000, leave: 2000 }">
																		<span :key="props.item.score">
																			{{ props.item.score }}
																		</span>
																	</transition>
																</span>
																<span v-else style="background-color: black; color: orange; padding: 2px 10px; border-radius: 5px; font-size: 130%">{{ convertToLocaltime(props.item.timestamp) }}</span>
															</v-flex>
															<v-flex sm4 xs5 align-center class="text-xs-right pd-right10">
																<span class="teamTextSize">{{ props.item.visitor_team.name }}</span>
															</v-flex>
															<v-flex sm1 hidden-xs-only align-center class="text-xs-center" style="width: 50px; padding-right: 15px">
																<img :src="'/images/teams/' + props.item.visitor_team.slug + '.png'" :lazy-src="'/images/icon.png'" class="imgLogoEquipe"/>
															</v-flex>
														</v-layout>
													</v-flex>
												</v-layout>
                                            </template>
                                        </v-data-table>
                                    </v-card-text>
                                </v-card>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-card-text>
        </v-container>

        <v-footer style="background-color: black; position: sticky; bottom: 0; width: 100%" height="auto" class="text-xs-center">
            <v-container fluid style="padding: 0; max-width: 1000px">
				<div class="barreOrangered"></div>
				<div class="barreBlack"></div>
                <div id="dock-container">
                    <div id="dock">
                        <ul>
                            <li>
                                <nuxt-link to="/teams"><img src="/images/menuTeam.png">
                                <span class="textMenu">Equipes</span></nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/competitions"><img src="/images/menuCompetition.png">
                                <span class="textMenu">Compétitions</span></nuxt-link>
                            </li>
                            <li id="active">
                                <nuxt-link to="/scoremode"><img src="/images/menuHome.png">
                                <span class="textMenu">Matches du jour</span></nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/players"><img src="/images/menuPlayer.png">
                                <span class="textMenu">Joueurs</span></nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/tifnews"><img src="/images/menuTifnews.png">
                                <span class="textMenu">TIF News</span></nuxt-link>
                            </li>
						</ul>
                    </div>
                </div>
            </v-container>
        </v-footer>     
    </v-content>
</template>

<script>
    import moment from 'moment'
    export default {
        head: {
            title: 'Events',
            link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Acme' }                
			]
        },
        layout: 'layoutScoreMode',
        async created() {
            const today = moment().format('YYYY-MM-DD')
   //          console.log('today: ', today)
   //          // if (this.$store.getters("events/loadedEvents").length < 1) {
   //              await this.$store.dispatch("events/loadedEvents")
   //          // }
   //          if (this.$store.getters['users/loadedUserTeams'].length < 1) {
			// 	await this.$store.dispatch('users/loadedUserTeams')
			// }
            await this.$store.commit('events/setEmptyEvents')
            await this.$store.commit('competitions/setEmptyCompetitions')
            // if (this.$store.getters('events/loadedEvents').length < 1) {
                await this.$store.dispatch("events/loadedEventsAndCompetitionsByDay", today)
            // }
            // if (this.$store.getters['competitions/loadedCompetitions'].length < 1) {
            //     this.$store.dispatch('competitions/loadedCompetitions')
            // }
        },
        data() {
            return {
                active: "",
                dayNumber: 0,
                date: moment(),
                // competitions: {
                //     'spanish_la_liga_2018_2019': {
                //         "name": "La Liga",
                //         "slug": "spanish_la_liga_2018_2019"
                //     },
                //     'english_premier_league_2018_2019': {
                //         "name": "Premier League",
                //         "slug": "english_premier_league_2018_2019"
                //     },
                //     'italian_serie_a_2018_2019': {
                //         "name": "Serie A",
                //         "slug": "italian_serie_a_2018_2019"
                //     },
                //     'german_bundesliga_2018_2019': {
                //         "name": "Bundesliga",
                //         "slug": "german_bundesliga_2018_2019"
                //     },
                //     'french_ligue1_2018_2019': {
                //         "name": "Ligue 1",
                //         "slug": "french_ligue1_2018_2019"
                //     },
                //     'swiss_super_league_2018_2019': {
                //         "name": "Super League",
                //         "slug": "swiss_super_league_2018_2019"
                //     }
                // }
            }
        },
        computed: {
            classObject() {
                if (this.active === "left") {
                return "activeLeft";
                } else if (this.active === "right") {
                return "activeRight";
                }
                return "headerInfo";
            },
            loadedUser () {
                return this.$store.getters['users/loadedUser']
            },
            userTeams () {
				return this.$store.getters['users/loadedUserTeams']
			},
			userTeamsIds () {
				const userTeamsIds = []
				const userTeams = this.$store.getters['users/loadedUserTeams']
				userTeams.forEach((team) => {
					userTeamsIds.push(parseInt(team.livescore_api_id))
				})
				return userTeamsIds
			},
            allEvents () {
                // return this.$store.getters['events/loadedEvents']
                const today = moment().format('YYYY-MM-DD')
                const userTeamsIds = this.userTeamsIds
                return this.$store.getters['events/loadedEvents']
                    .filter(event => (event.date === today))
                    .filter(event => (!userTeamsIds.includes(event.home_team.id) && !userTeamsIds.includes(event.visitor_team.id)))
                    // .filter(event => (!userTeamsIds.includes(event.visitor_team.id)))
                    .sort((a, b) => a.timestamp - b.timestamp)
            },
            events () {
                // const today = moment().format('YYYY-MM-DD')
                return this.$store.getters['events/loadedEvents']
                    .filter(event => (event.date === this.date.format('YYYY-MM-DD')))
                    .sort((a, b) => a.timestamp - b.timestamp)
            },
            userEvents () {
                const today = moment().format('YYYY-MM-DD')
                const userTeamsIds = this.userTeamsIds
                console.log('userTeamsIds: ', userTeamsIds)
                return this.$store.getters['events/loadedEvents']
                    // .filter(event => (event.date === today))
                    .filter(event => (userTeamsIds.includes(event.home_team.livescore_api_id) || userTeamsIds.includes(event.visitor_team.livescore_api_id)))
                    .sort((a, b) => a.timestamp - b.timestamp)
            },
            competitions () {
                return this.$store.getters['competitions/loadedCompetitions']
            }
        },
        methods: {
            convertToLocaltime (timestamp) {
                const utcDiff = new Date().getTimezoneOffset()
                // const utcDiff = '60'
                console.log('utcDiff: ', utcDiff)
                if (utcDiff > 0) {
                    return moment.unix(timestamp).add(utcDiff, 'minutes').format("HH:mm")
                } else {
                    return moment.unix(timestamp).subtract(utcDiff, 'minutes').format("HH:mm")
                }
            },
            otherEventsByCompetition (competition) {
                const userTeamsIds = this.userTeamsIds
                return this.$store.getters['events/loadedEvents']
                    .filter(event => (event.date === this.date.format('YYYY-MM-DD') && event.competition.slug === competition))
                    // .filter(event => (!userTeamsIds.includes(event.home_team.livescore_api_id) || !userTeamsIds.includes(event.visitor_team.livescore_api_id)))
                    .sort((a, b) => a.timestamp - b.timestamp)
            },
            eventsByCompetition (competition) {
                return this.$store.getters['events/loadedEvents']
                    .filter(event => (event.date === this.date.format('YYYY-MM-DD') && event.competition.slug === competition))
                    .sort((a, b) => a.timestamp - b.timestamp)
                // return this.allEvents.filter(event => event.competition.slug === competition)
            },
            userEventsByCompetition (competition) {
                const userTeamsIds = this.userTeamsIds
                return this.$store.getters['events/loadedEvents']
                    .filter(event => (event.date === this.date.format('YYYY-MM-DD') && event.competition.slug === competition))
                    .filter(event => (userTeamsIds.includes(event.home_team.id) || userTeamsIds.includes(event.visitor_team.id)))
                    .sort((a, b) => a.timestamp - b.timestamp)
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
            async eventsByDate (setDayNumber) {
                console.log('setDate: ', setDayNumber)
                switch(setDayNumber) {
                    case 'substractOne':
                        this.dayNumber -= 1
                        break
                    case 'yesterday':
                        this.dayNumber = -1
                        break
                    case 'tomorrow': 
                        this.dayNumber = 1
                        break
                    case 'addOne': 
                        this.dayNumber += 1
                        break
                }

                this.date = moment().add(this.dayNumber, 'days')
                console.log('this.date: ', this.date)

                const events = this.$store.getters['events/loadedEvents'].filter(event => (
                    event.date === this.date.format('YYYY-MM-DD')
                ))
                if (events.length < 1) {
                    console.log('events.length < 1')
                    await this.$store.dispatch('events/loadedEventsAndCompetitionsByDay', this.date.format('YYYY-MM-DD'))
                }
                console.log('events: ', events)
                return events

                // return this.$store.getters['events/loadedEvents']
            },
            mouseOver(direction) {
                console.log(direction);
                if (direction === "left") {
                    this.active = "left";
                } else if (direction === "right") {
                    this.active = "right";
                }
            },
            mouseLeave() {
                this.active = null;
            }
        }
    }
</script>

	<style scoped>
	
	.textTif {
	font-size: 1.5em;
	font-weight: 700;
	color: white;
	text-decoration: none;
    position: relative;
    top: 15px;
    left: 13px;
	}
	
	.textScoreMode {
	font-size: 1.5em;
	font-weight: 700;
	color: white;
	text-decoration: none;
    position: relative;
    top: 15px;
    right: 13px;
	float: right;
	}

    .container {
    width: 1000px;
    color: #FFFFFF;
    background-color: black;
    margin-left: auto;
    margin-right: auto;
    border-left: 1px solid orangered;
    border-right: 1px solid orangered;
	font: normal 100%/1 "Acme", Helvetica, sans-serif;
    }
    
    /* header */
    
    #header {
    height: 162px;
    padding: 0;
    top:0px;
    left:0px;
    background-color: black;
    z-index: 1;
    border-bottom: 3px solid orangered;
	position: sticky;
    }
    .header {
    position: relative;
    }
    .barreHeader {
    position:absolute;
    top: 120px;
    width: 100%;
    background-color: orangered;
    z-index: -1;
    margin: 0;
    padding: 0;
    }
    #avatar {
    background-color: black;
    border-right: 3px solid orangered;
    border-bottom: 3px solid orangered;
    box-shadow: 0 7px 5px black;
    height: 150px;
    width: 150px;
    border-radius: 0 0 100% 0;
    }
    .imgAvatar {
    height: 100%;
    width: 100%;
    border-radius: 0 0 100% 0;
    }
    #team {
    background-color: black;
    border-left: 3px solid orangered;
    border-bottom: 3px solid orangered;
    box-shadow: 0 7px 5px black;
    height: 150px;
    width: 150px;
    border-radius: 0 0 0 100%;
    }
    .imgTeam {
    height: 100%;
    width: 100%;
    border-radius: 0 0 0 100%;
    }
    .imgTeamSmall {
    height: 20px;
    margin-top: 5px;
    }
    .imgHeader {
    height: 50px;
    width: 50px;
    color: green;
    }
    .dollarFan {
    margin-top: 14px;
    width: 100%;
    text-align: center;
    color: green;
    font-weight: 700;
    box-shadow: 0 0 10px 2px inset;
    border-radius: 5px;
    }
    .token {
    margin-top: 14px;
    width: 100%;
    text-align: center;
    color: orangered;
    font-weight: 700;
    box-shadow: 0 0 10px 2px inset;
    border-radius: 5px;
    }
    .plusOrangered {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0 10px;
    color: white;
    font-weight: 700;
    font-size: 1.2em;
    background-color: orangered;
    }
    .aPlusOrangered :hover {
    color: orangered;
    background-color: white;
    border-bottom: 1px solid orangered;
    border-left: 1px solid orangered;
    }
    .plusYellow {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0 10px;
    color: black;
    font-weight: 700;
    font-size: 1.2em;
    background-color: yellow;
    }
    .aPlusYellow :hover {
    color: black;
    background-color: white;
    border-bottom: 1px solid yellow;
    border-left: 1px solid yellow;
    }
    .plusGreen {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0 10px;
    color: white;
    font-weight: 700;
    font-size: 1.2em;
    background-color: green;
    }
    .aPlusGreen :hover {
    color: green;
    background-color: white;
    border-bottom: 1px solid green;
    border-left: 1px solid green;
    }
	
	.orangered {
    background-color: orangered;
    border-color: orangered;
	}
    
    /* Material Icons */
    
    .material-icons.md-18 { font-size: 18px; }
    .material-icons.md-24 { font-size: 24px; }
    .material-icons.md-36 { font-size: 36px; }
    .material-icons.md-48 { font-size: 48px; }
    
    .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
    }   
    
    /* End Material Icons */
    
    .levelHeader {
    font-weight: 700;
    font-size: 36px;  /* Preferred icon size */
    background-color: orange;
    color: white;
    border-radius: 10px;
    }
    
    /* End Header */
    
    /* Content */
    
    #content {
    height: 100%;
    overflow: hidden;
    padding: 0;
    margin: 0;
    position: relative;
    }
    .content {
    height: 100%;
    overflow: scroll;
    padding: 0;
    margin: 0;
    }
    .centerImage {
    height: 100%;
    }
    .imgCarte {
    height: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    }
    .image1 {
    position: absolute;
    top: 100px;
    left: 300px;
    height: 50px;
    width: 50px;
    }
        
    /* End Content */

	.menuSport {
		height: 40px;
	}
	
	.menuDay {
		height: 40px;
	}
	
	.v-expansion-panel__header {
	padding: 2px 2px;
	min-height: 24px;
	}

	.fade-enter-active, .fade-leave-active {
		transition: opacity 5s;
		background-color: #000;
	}
	
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
	
	.imgLogoEquipe {
	max-width: 30px;
	max-height: 30px;
	}
	
	.teamTextSize {
	font-size: 1.3em;
	}

	.black {
	background-color: black;
	}
	
	.imageLogo {
	width: 30px;
	height: 30px;
	}
	
	/* ScoreCard */

	.card {
	border-radius: 5px;
	}
	.card-title {
	background-color: lightslategray;
	}
	.card-text {
	background-color: whitesmoke;
	width: auto;
	border-radius: 8px;
	padding: 8px;
	}
	.card-footer {
	background-color: lightslategrey;
	}
	.fas:hover {
	cursor: pointer;
	color: #fff;
	}
	
	.userText {
	font-size: 1.3em;
	}
	
	.connectText {
	font-size: 1.3em;
	}
	
	.chiffres {
	font-size: 2.5em;
	color: orangered;
	font-width: 700;
	}
	
	.activity {
	font-size: 1.5em;
	text-transform: uppercase;
	}
	
	.levelBox {
	background-color: #757575;
	color: black;
	vertical-align: middle;
	padding: 2px;
	border-radius: 3px;
	width: 95%;
	margin: auto;
	}
	
	.energyBox {
	background-color: #757575;
	color: black;
	vertical-align: middle;
	padding: 2px;
	border-radius: 3px;
	width: 95%;
	margin: auto;
	}
	
	.dollarBox {
	background-color: #757575;
	color: black;
	vertical-align: middle;
	padding: 2px;
	border-radius: 3px;
	width: 95%;
	margin: auto;
	}

	.tokenBox {
	background-color: #757575;
	color: black;
	vertical-align: middle;
	padding: 2px;
	border-radius: 3px;
	width: 95%;
	margin: auto;
	}

	/* Menu */
	
	.barreBlack {
	width: 100%;
	padding: 0;
	margin: 0;
	height: 8px;
	background-color: black;
	}
	.barreOrangered {
	width: 100%;
	padding: 0;
	margin: 0; 
	height: 3px;
	background-color: orangered;
	}


	#dock-container {
	height: 80px;
	padding: 0;
	margin: 0;
	bottom: 0;
	background-color: orangered;
	border: none;
	border-top: 4px solid orangered;
	}

	#dock-container li#active img {
	-webkit-transform: scale(1.65);
	margin: 0 0.5em;
	}

	#dock-container li {
	width: 17%;
	padding: 0;
	margin: 0;
	list-style-type: none;
	display: inline-block;
	position: relative;
	padding-top: 10px;
	}

	#dock-container ul {
	width: 100%;
	padding-left: 0px;
	padding-right: 0px;
	margin-bottom: 0;
	}

	#dock-container li img {
	width: 58px;
	height: 58px;
	-webkit-gradient: (linear, left top, left bottom, from(transparent), color-stop(0.7, transparent), to(rgba(255,255,255,.5)));
	-webkit-transition: all 0.3s;
	-webkit-transform-origin: 50% 100%;
	}

	#dock-container li:hover img { 
	-webkit-transform: scale(1.65);
	margin: 0 0.5em;
	}

	#dock-container li:hover + li img, #dock-container li.prev img {
	-webkit-transform: scale(1);
	margin: 0 0;
	}

	#dock-container li span {
	display: none;
	position: absolute;
	bottom: 0px;
	left: 0;
	width: 100%;
	background-color: rgba(0,0,0,0.5);
	border-radius: 5px;
	}

	#dock-container li#active span {
	display: none;
	position: absolute;
	bottom: 0px;
	left: 0;
	width: 100%;
	background-color: rgba(0,0,0,0.5);
	border-radius: 5px;
	}

	#dock-container li#active span {
	display: block;
	color: #fff;
	}

	#dock-container li#active .textMenu {
	font: normal 120%/1 "Acme", Helvetica, sans-serif;
	padding: 2px;
	}

	#dock-container li:hover span {
	display: block;
	color: #fff;
	}

	#dock-container .textMenu {
	font: normal 120%/1 "Acme", Helvetica, sans-serif;
	padding: 2px;
	}
	
	/* End Menu */

		@media only screen and (max-width: 768px) {

		#app {
		font: normal 90%/1 "Acme", Helvetica, sans-serif;
		}
		
		.pd-right10 {
		padding-right: 10px;
		}
		
		.pd-left10 {
		padding-left: 10px;
		}
		
		.imgLogoEquipe {
		max-width: 35px;
		}
		
		.teamTextSize {
		font-size: 1.0em;
		}
		
		.headerMenus {
		padding: 0; 
		margin: 0; 
		height: 46px;
		}
		
		.energyBox {
		background-color: #757575;
		color: black;
		vertical-align: middle;
		padding: 1px;
		border-radius: 2px;
		width: 95%;
		margin: auto;
		font-size: 0.8em;
		}
		
		.userText {
		font-size: 0.8em;
		}
		
		.connectText {
		font-size: 0.8em;
		}

		/* Header */

		.imageLogoTif {
		width: 60px;
		height: 60px;
		}
		
		.backBlack {
		background-image: url("/images/header-TIF_03.png");
		background-position: center;
		background-repeat: repeat-x;
		background-size: contain;
		height: 60px;
		}

		.boxTif {
		width: 60px;
		height: 60px;
		}

		.imageLogo {
		width: 25px;
		height: 25px;
		}
		
		.menuSport {
			height: 30px;
		}
		
		.menuDay {
			height: 30px;
		}
		
		.headerLogo {
		height: auto;
		}
		
		.headerMenu {
		height: 46px;
		}
		
		.v-expansion-panel__header {
		padding: 2px 2px;
		min-height: 24px;
		}
		
		.chiffres {
		font-size: 1.2em;
		}
		
		.activity {
		font-size: 0.8em;
		}
		
		/* Menu */

		#dock-container {
		height: 55px;
		padding: 0;
		margin: 0;
		bottom: 0;
		background-color: rgb(248,147,37);
		border: none;
		border-top: 4px solid darkred;
		}

		#dock-container li#active img {
		-webkit-transform: scale(1.65);
		margin: 0 0.5em;
		}

		#dock-container li {
		width: 17%;
		padding: 0;
		margin: 0;
		list-style-type: none;
		display: inline-block;
		position: relative;
		padding-top: 3px;
		}

		#dock-container ul {
		width: 100%;
		padding-left: 0px;
		padding-right: 0px;
		margin-bottom: 0;
		}

		#dock-container li img {
		width: 38px;
		height: 38px;
		-webkit-gradient: (linear, left top, left bottom, from(transparent), color-stop(0.7, transparent), to(rgba(255,255,255,.5)));
		-webkit-transition: all 0.3s;
		-webkit-transform-origin: 50% 100%;
		}

		#dock-container li:hover img { 
		-webkit-transform: scale(1.65);
		margin: 0 0.5em;
		}

		#dock-container li:hover + li img, #dock-container li.prev img {
		-webkit-transform: scale(1);
		margin: 0 0;
		}

		#dock-container li span {
		display: none;
		position: absolute;
		bottom: 0px;
		left: 0;
		width: 100%;
		background-color: rgba(0,0,0,0.5);
		border-radius: 5px;
		}

		#dock-container li#active span {
		display: none;
		position: absolute;
		bottom: 0px;
		left: 0;
		width: 100%;
		background-color: rgba(0,0,0,0.5);
		border-radius: 5px;
		}

		#dock-container li#active span {
		display: block;
		color: #fff;
		}

		#dock-container li#active .textMenu {
		font: normal 90%/1 "Acme", Helvetica, sans-serif;
		padding: 2px;
		}

		#dock-container li:hover span {
		display: block;
		color: #fff;
		}

		#dock-container .textMenu {
		font: normal 90%/1 "Acme", Helvetica, sans-serif;
		padding: 2px;
		}

	}
</style>
