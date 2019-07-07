<template>
    <v-content id="app">      
		<v-container text-xs-center style="padding: 0; max-width: 1017px; border-left: 1px solid orangered; border-right: 1px solid orangered">
			<div class="backgroundImage" style="position: relative; padding-bottom: 1px">
				<v-layout grid-list-xs row wrap style="background-color: rgb(0,0,0,0.25)">
					<v-flex d-flex xs2 sm2 md2>
					</v-flex>
					<v-flex d-flex xs8 sm8 md8 justify-center align-center>
						<div class="infoMatch">
						Espagne, 3 compétitions en cours<br/>
						La Liga, La Copa del Rey, UEFA Champions League
						</div>
					</v-flex>
					<v-flex d-flex xs2 sm2 md2>
						<div class="text-xs-right retour">
							<fa :icon="['fas', 'arrow-circle-left']" size="2x" class="icon" @click="goBack" />
						</div>			
					</v-flex>
				</v-layout>	
				<v-layout row wrap style="margin-top: 10px">
					<v-flex d-flex xs1 sm1 md1 justify-center align-center>
						<div>
						</div>
					</v-flex>
					<v-flex d-flex xs4 sm4 md4 justify-end align-center>
						<div class="scorePF">
							123'465 fans
						</div>
					</v-flex>
					<v-flex d-flex xs2 sm2 md2 justify-center align-center>
						<div class="drapeau">
							<img src="/images/teams/fc_barcelona.png" class="imgTeamSmall" />
						</div>
					</v-flex>
					<v-flex d-flex xs4 sm4 md4 justify-start align-center>
						<v-btn @click="loginModal = true" v-if="!loadedUser" style="text-decoration: none; color: orangered; border-radius: 5px; max-width: max-content">Suivre ? Inscris-toi !</v-btn>
					</v-flex>
					<v-flex d-flex xs1 sm1 md1 justify-center align-center>
						<div>
						</div>
					</v-flex>
				</v-layout>	
				<v-layout row wrap style="margin-top: 10px; margin-bottom: 20px">
					<v-flex d-flex xs3 sm3 md3 justify-end align-center>
						<div>
						</div>
					</v-flex>
					<v-flex d-flex xs6 sm6 md6 justify-center align-center>
						<div class="nameTeam">
							<v-icon class="notYourTeam">star</v-icon> FC Barcelona
						</div>
					</v-flex>
					<v-flex d-flex xs3 sm3 md3 justify-start align-center>
						<div>
						</div>
					</v-flex>
				</v-layout>	
				<v-layout grid-list-xs row wrap style="background-color: rgb(0, 0, 0, 0.9); border-top: 1px solid darkgrey; border-bottom: 1px solid darkgrey; margin-top: 5px">
					<v-flex d-flex xs6 sm6 md6 justify-center align-center>
						<div class="menuMatch" style="border-right: 1px solid darkgrey">
							La vie du club !
						</div>
					</v-flex>
					<v-flex d-flex xs6 sm6 md6 justify-center align-center>
						<nuxt-link to="/joueTif" class="hoverMatchStats" style="text-decoration: none; color: white; width: 100%">
							<div class="menuTif">
								Inscris-toi vite sur TIF !
							</div>			
						</nuxt-link>
					</v-flex>
				</v-layout>
				<v-layout grid-list-xs row wrap hidden-sm-and-up style="background-color: rgb(0, 0, 0, 0.9); border-top: 1px solid darkgrey; border-bottom: 1px solid darkgrey; margin-top: 5px; margin-bottom: 5px">
					<v-flex d-flex xs6 justify-center align-center>
						<div class="menuMatch" style="border-right: 1px solid darkgrey; border-bottom: 1px solid darkgrey">
							Infos/Résultats
						</div>
					</v-flex>
					<v-flex d-flex xs6 justify-center align-center>
						<nuxt-link to="/teamClassement" class="hoverMatchStats" style="text-decoration: none; color: white; width: 100%">	
							<div class="menuTif" style="border-right: 1px solid darkgrey; border-bottom: 1px solid darkgrey">
								Classements
							</div>	
						</nuxt-link>
					</v-flex>
					<v-flex d-flex xs6 justify-center align-center>
						<nuxt-link to="/teamJoueur" class="hoverMatchStats" style="text-decoration: none; color: white; width: 100%">	
							<div class="menuTif" style="border-right: 1px solid darkgrey">
								Joueurs
							</div>	
						</nuxt-link>
					</v-flex>
					<v-flex d-flex xs6 justify-center align-center>
						<nuxt-link to="/teamStatistique" class="hoverMatchStats" style="text-decoration: none; color: white; width: 100%">
							<div class="menuTif">
								Statistiques
							</div>
						</nuxt-link>
					</v-flex>
				</v-layout>
				<v-layout grid-list-xs row wrap hidden-xs-only style="background-color: rgb(0, 0, 0, 0.9); border-top: 1px solid darkgrey; border-bottom: 1px solid darkgrey; margin-top: 5px; margin-bottom: 5px">
					<v-flex d-flex sm3 md3 justify-center align-center>
						<div class="menuMatch" style="border-right: 1px solid darkgrey">
							Infos/Résultats
						</div>
					</v-flex>
					<v-flex d-flex sm3 md3 justify-center align-center>
						<nuxt-link to="/teamClassement" class="hoverMatchStats" style="text-decoration: none; color: white; width: 100%">	
							<div class="menuTif" style="border-right: 1px solid darkgrey">
								Classements
							</div>	
						</nuxt-link>
					</v-flex>
					<v-flex d-flex sm3 md3 justify-center align-center>
						<nuxt-link to="/teamJoueur" class="hoverMatchStats" style="text-decoration: none; color: white; width: 100%">	
							<div class="menuTif" style="border-right: 1px solid darkgrey">
								Joueurs
							</div>	
						</nuxt-link>
					</v-flex>
					<v-flex d-flex sm3 md3 justify-center align-center>
						<nuxt-link to="/teamStatistique" class="hoverMatchStats" style="text-decoration: none; color: white; width: 100%">
							<div class="menuTif">
								Statistiques
							</div>
						</nuxt-link>
					</v-flex>
				</v-layout>
			</div>
			<div class="resumeMatch">
				<v-layout grid-list-xs row wrap style="margin-top: 10px">
					<v-flex d-flex xs12 sm12 md12 justify-center align-center class="titleResume">
						<div>
							Les compétitions
						</div>
					</v-flex>
					<v-flex d-flex xs12 sm12 md12>
						<v-card height="80px" flat>
							<v-bottom-nav :active.sync="bottomNav" :value="true" absolute color="transparent" style="height: 75px">
								<v-btn class="orangered" flat value="la_liga_18_19">
									<span>La Liga</span>
									<img src="/images/teams/fc_barcelona.png" class="imgCompetition" />
								</v-btn>
								<v-btn class="orangered" flat value="la_copa_del_rey_18_19">	
									<span>La Copa del Rey</span>
									<img src="/images/teams/fc_barcelona.png" class="imgCompetition" />
								</v-btn>
								<v-btn class="orangered" flat value="uefa_champions_league_18_19">
									<span>UEFA Champions League</span>
									<img src="/images/teams/fc_barcelona.png" class="imgCompetition" />
								</v-btn>
								</v-bottom-nav>
						</v-card>					
					</v-flex>
				</v-layout>
			</div>
			<div class="resumeMatch">
				<v-layout grid-list-xs row wrap style="margin-top: 10px">
					<v-flex d-flex xs12 sm12 md12 justify-center align-center class="titleResume">
						<div>
							Tous les matchs de la saison
						</div>
					</v-flex>
					<v-flex d-flex xs12 sm12 md12>
						<!-- Scrollable content -->
						<div class="content" style="max-height: 100vh; border-right: 1px solid orangered; border-left: 1px solid orangered">
							<v-layout>	
								<!-- Scrollable content -->
								<div style="padding: 0; max-width: 100%; height: 100%; background-color: whitesmoke">
									<!-- Results -->
									<scoremode-results v-if="selectType === 0" />					
								</div>
							</v-layout>
						</div>
					</v-flex>
				</v-layout>
			</div>
			<div class="resumeMatch">
				<v-layout grid-list-xs row wrap style="margin-top: 10px">
					<v-flex d-flex xs12 sm12 md12 justify-center align-center class="titleResume">
						<div>
							Informations sur le FC Barcelona
						</div>
					</v-flex>
					<v-flex d-flex xs12 sm12 md12 style="margin-bottom: 20px; padding: 10px; background-color: lightgrey">
						<div class="infosMatch">
							Pays : Espagne - Date de fondation : 1907 - Couleur : rouge et bleu<br />
							Stade : Le nom du stade (ville) - Capacité : Nb de spectateurs
						</div>
					</v-flex>
				</v-layout>
			</div>
		</v-container>					 
  </v-content>
</template>

<script>
    import moment from 'moment'
    import ScoremodeHeader from '~/components/ScoremodeHeader'
    import ScoremodeResults from '~/components/ScoremodeResults'
    import ScoremodeStandings from '~/components/ScoremodeStandings'
    import ScoremodeFooter from '~/components/ScoremodeFooter'
    export default {
        head: {
            title: 'ScoreMode',
            link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Acme' }                
			]
        },
        components: { ScoremodeHeader, ScoremodeResults, ScoremodeStandings, ScoremodeFooter },
        async created () {
            // console.log(moment().format('YYYY-MM-DD'))
            // console.log(moment().add(1, 'days').format('YYYY-MM-DD'))
            // console.log(moment().subtract(1, 'days').format('YYYY-MM-DD'))
            for (let i = 15; i >= 1; i--) {
                // this.days.push(moment().subtract(i, 'days').format('DD MMM'))
                this.days.push(moment().subtract(i, 'days').format('YYYY-MM-DD'))
            }
            // this.days.push(moment().format('DD MMM'))
            this.days.push(moment().format('YYYY-MM-DD'))
            for (let i = 1; i <= 15; i++) {
                // this.days.push(moment().add(i, 'days').format('DD MMM'))
                this.days.push(moment().add(i, 'days').format('YYYY-MM-DD'))
            }
            this.$store.commit('setLoading', false)

            this.$store.dispatch('competitions/loadedCompetitions')

            const today = moment().format('YYYY-MM-DD')
            await this.$store.dispatch('events/fetchEventsByDay', today)
            await this.$store.dispatch('standings/fetchCompetitionStanding', 'english_premier_league_2018_2019')
            // await this.$store.dispatch('standings/fetchCompetitionStanding', {
            //     name: 'English Premier League',
            //     slug: 'english_premier_league_2018_2019',
            //     info: {
            //         total_teams: 20,
            //         champions_league: 4,
            //         europa_league: 7,
            //         playoff: null,
            //         relegation: 17
            //     }
            // })
        },
        data () {
            return {
				bottomNav: 'la_liga_18_19',
                links: [
                    'Home',
                    'About Us',
                    'Team',
                    'Services',
                    'Blog',
                    'Contact Us'
                ],
                standingHeaders: [
                    {
                        text: 'Rank',
                        align: 'left',
                        sortable: false,
                        value: 'rank'
                    },
                    {
                        text: 'Team',
                        align: 'left',
                        sortable: false,
                        value: 'name'
                    },
                    { text: 'Points', value: 'points', align: 'center' },
                    { text: 'Played', value: 'matches', align: 'center' },
                    { text: 'Won', value: 'won', align: 'center' },
                    { text: 'Drawn', value: 'drawn', align: 'center' },
                    { text: 'Lost', value: 'lost', align: 'center' }
                ],
                days: [
                    // '2019-02-21',
                    // '2019-02-22',
                    // '2019-02-23'
                ],
                active: null,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                // currentKey: 'tab-25',
                // activeDay: `tab-${moment().format('DD MMM')}`,
                activeDay: `${moment().format('YYYY-MM-DD')}`,
                // activeDay2: `${moment().format('YYYY-MM-DD')}`,
                // activeCompetition: 'tab-english_premier_league_2018_2019',
                activeCompetition: 'english_premier_league_2018_2019',
                types: [
                    {
                        name: 'Results',
                        slug: 'results'
                    }, {
                        name: 'Standings',
                        slug: 'standings'
                    }
                ],
                competitions: [
                    {
                        name: 'English Premier League',
                        slug: 'english_premier_league_2018_2019',
                        info: {
                            total_teams: 20,
                            champions_league: 4,
                            europa_league: 7,
                            playoff: null,
                            relegation: 17
                        }
                    }, {
                        name: 'Spanish La Liga',
                        slug: 'spanish_la_liga_2018_2019',
                        info: {
                            total_teams: 20,
                            champions_league: 4,
                            europa_league: 7,
                            playoff: null,
                            relegation: 17
                        }
                    }, {
                        name: 'Italian Serie A',
                        slug: 'italian_serie_a_2018_2019',
                        info: {
                            total_teams: 20,
                            champions_league: 4,
                            europa_league: 7,
                            playoff: null,
                            relegation: 17
                        }
                    }, {
                        name: 'German Bundesliga',
                        slug: 'german_bundesliga_2018_2019',
                        info: {
                            total_teams: 18,
                            champions_league: 4,
                            europa_league: 7,
                            playoff: null,
                            relegation: 16
                        }
                    }, {
                        name: 'French Ligue 1',
                        slug: 'french_league1_2018_2019',
                        info: {
                            total_teams: 20,
                            champions_league: 3,
                            europa_league: 6,
                            playoff: null,
                            relegation: 18
                        }
                    }, {
                        name: 'Swiss Superleague',
                        slug: 'swiss_super_league_2018_2019',
                        info: {
                            total_teams: 10,
                            champions_league: 1,
                            europa_league: 4,
                            playoff: null,
                            relegation: 9
                        }
                    }
                ],
                selectType: 0,
                type2: '',
                
            } 
        },
        computed: {
            loading () {
                return this.$store.getters['loading']
            },
            loadedUser () {
                return this.$store.getters['users/loadedUser']
            },
            loadedUserTeams () {
                return this.$store.getters['users/loadedUserTeams']
            },
            loadedStandings () {
                return this.$store.getters['standings/loadedStandings']
                // return [...this.$store.getters['standings/loadedStandings']]
                //     .sort((a, b) => a.rank - b.rank)
            },
            loadedEvents () {
                return this.$store.getters['events/loadedEvents']
            },
            competitions2 () {
                return this.$store.getters['competitions/loadedCompetitions']
            },
            loadedEventsByDay2 () {
                return this.$store.getters['events/loadedEvents']['2019-03-02']
            }
        },
        methods: {
            fetchCompetitionStanding(competition) {
                console.log('fetchCompetitionStanding: ', competition)
                // if (!this.loadedStandings[competition.slug]) {
                if (!this.loadedStandings[competition]) {
                    this.$store.dispatch('standings/fetchCompetitionStanding', competition)
                }
            },
            fetchEventsByDay(date) {
                console.log('fetchEventsByDay: ', date)
                if (!this.loadedEvents[date]) {
                    this.$store.dispatch('events/fetchEventsByDay', date)
                }
            },
            rowStyle (rowIndex, info) {
                // console.log('rowIndex: ', rowIndex)
                // console.log('standing: ', standing)
                if (rowIndex < info.champions_league) {
                    return 'championsleague'
                } else if (rowIndex < info.europa_league) {
                    return 'europaleague'
                } else if (rowIndex === info.relegation) {
                    return 'relegation'
                }
            },
            loadedEventsByDay (date) {
                // console.log('date: ', date)
                // const array = []
                return this.$store.getters['events/loadedEvents'][date]
                // console.log('events: ', events)
                // if (events) {
                //     for (let i = 0; i < events.length; i++) {
                //         // console.log(events(i))
                //     }
                // }
                
                // // events.forEach(event => array.push(event))
                // // return array
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
            abc () {
                console.log('abc')
            }
        }
    }
</script>

<style scoped>
	.v-tabs__container {
    flex: 1 0 auto;
    display: flex;
    height: 30px;
    list-style-type: none;
    transition: -webkit-transform .6s cubic-bezier(.86,0,.07,1);
    transition: transform .6s cubic-bezier(.86,0,.07,1);
    transition: transform .6s cubic-bezier(.86,0,.07,1),-webkit-transform .6s cubic-bezier(.86,0,.07,1);
    white-space: nowrap;
    position: relative;
	}
    body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    }
    .container {
    width: 100vw;
	min-height: 100vh;
    flex-direction: column;
	font: normal 100%/1 "Acme", Helvetica, sans-serif;
    background-color: light-gray;
    }
    .content {
    background-color: light-gray;;
    overflow-x: auto;
    height: 100%;
	position: relative;
    }
	.backgroundImage {
	background-color: #004C99;
	}
	.imgTeamSmall {
	width: 70%;
	border-radius: 10px;
	}
	.imgCompetition {
	width: 50px;
	border-radius: 10px;
	}
	.drapeau {
	padding: 10px;
	}
	.scorePF {
    background-color: rgb(255,255,255,0.9);
    max-width: max-content;
    padding: 10px;
    font-size: 1.2em;
    font-weight: 700;
	border-radius: 5px;
	}
	.timeEncours {
	background-color: rgb(0,128,0,0.9);
    max-width: 70%;
    padding: 10px;
    border-radius: 5px;
    font-size: 1em;	
	color: white;
	}
	.nameTeam {
    background-color: rgb(255,255,255,0.9);
    max-width: max-content;
    padding: 10px;
    font-size: 1.5em;
    font-weight: 700;
	border-radius: 5px;
	}
	.scorePlayer {
	background-color: rgb(255,255,255,0.9);
    max-width: 25%;
    padding: 5px;
    border-radius: 5px;
    font-size: 1.3em;
	font-weight: 700;
	margin: 20px 10px;
	border: 2px solid orangered;
	color: orangered;
	}
	.scoreReel {
	background-color: rgb(0,0,0,0.9);
	color: white;
    max-width: 40%;
    padding: 10px;
    border-radius: 5px;
    font-size: 1.1em;
	}
	.retour {
	position: absolute;
	top: 7px;
	right: 11px;
	color: white;
	}
	.icon:hover {
	cursor: pointer;
	color: orangered;
	}
	.infoMatch {
	color: white;
	font-size: 0.9em;
	margin: 10px 0;
	}
	.infosMatch {
	color: black;
	font-size: 1.1em;
	}
	.hoverMatchStats :hover {
	background-color: orangered;
	color: white;
	}
	.imgActionCollHover :hover {
	opacity: 0.5;
	}
	.resumeMatch {
	background-color: white;
	}
	.titleResume {
	background-color: #fafafa;
	font-size: 1.1em;
	font-weight: 700;
	margin-bottom: 5px;
	}
	.eventMatch {
	background-color: lightgrey;
	}
	.imgIconSmall {
	width: 45px;
	}
	.imgActionColl {
	width: 60px;
	margin: 10px;
	}
	.tempsFortGaucheTexte {
	padding: 10px; 
	color: black; 
	font-size: 1.0em; 
	text-transform: uppercase; 
	text-align: right;
	font-weight: 700;
	}
	.tempsfortGaucheImage {
	padding: 10px; 
	text-align: right;
	}
	.tempsFortGaucheTime {
	padding: 10px; 
	color: black; 
	font-size: 1.0em; 
	text-transform: uppercase;
	}
	.tempsFortDroiteTime {
	padding: 10px; 
	color: black; 
	font-size: 1.0em; 
	text-transform: uppercase;
	}
	.tempsFortDroiteImage {
	padding: 10px; 
	text-align: left;
	}
	.tempsFortDroiteTexte {
	padding: 10px; 
	color: black; 
	font-size: 1.0em; 
	text-transform: uppercase; 
	text-align: left;
	font-weight: 700;
	}
	.menuMatch {
	border-right: 1px solid darkgrey; 
	padding: 15px; 
	color: orangered; 
	font-size: 1.2em; 
	text-transform: uppercase;
	}
	.menuTif {
	padding: 15px; 
	color: white; 
	font-size: 1.2em; 
	text-transform: uppercase;
	}
	.tempsFortMargin {
	margin-top: 20px
	}
	.yourTeam {
	color: orangered;
	font-size: 30px;
	}
	.notYourTeam {
	color: grey;
	font-size: 30px;
	}

	/* Small screens */
    @media only screen and (max-width: 768px) {	
		body {
		margin: 0;
		padding: 0;
		overflow: hidden;
		}
		.container {
		width: 100vw;
		height: 100vh;
		flex-direction: column;
		font: normal 90%/1 "Acme", Helvetica, sans-serif;
		}
		.content {
		background-color: light-gray;;
		height: 100%;
		overflow-x: auto;
		}
		.scorePF {
		max-width: max-content;
		padding: 5px;
		font-size: 0.8em;
		font-weight: 600;
		}
		.infoMatch {
		margin: 5px 0;
		font-size: 0.8em;
		}
		.retour {
		top: 3px;
		right: 11px;
		}
		.timeEncours {
		max-width: 95%;
		padding: 5px;
		font-size: 0.8em;	
		}
		.drapeau {
		padding: 0;
		}
		.imgTeamSmall {
		width: 75%;
		border-radius: 5px;
		}
		.nameTeam {
		max-width: 90%;
		padding: 5px;
		font-size: 1.1em;
		font-weight: 700;
		}
		.scorePlayer {
		max-width: 25%;
		padding: 5px;
		border-radius: 5px;
		font-size: 1.0em;
		font-weight: 700;
		margin: 5px 5px;
		border: 1px solid orangered;
		}
		.scoreReel {
		max-width: 60%;
		padding: 5px;
		border-radius: 5px;
		font-size: 0.9em;
		}
		.menuMatch {
		padding: 5px; 
		font-size: 1.0em; 
		}
		.menuTif {
		padding: 5px; 
		font-size: 1.0em; 
		}
		.tempsFortMargin {
		margin-top: 10px
		}
		.titleResume {
		font-size: 1em;
		}
		.tempsFortGaucheTexte {
		padding: 5px; 
		font-size: 0.8em; 
		}
		.tempsfortGaucheImage {
		padding: 5px; 
		text-align: right;
		}
		.tempsFortGaucheTime {
		padding: 5px; 
		font-size: 0.9em; 
		}
		.tempsFortDroiteTime {
		padding: 5px; 
		font-size: 0.9em; 
		}
		.tempsFortDroiteImage {
		padding: 5px; 
		text-align: left;
		}
		.tempsFortDroiteTexte {
		padding: 5px; 
		font-size: 0.8em; 
		}
		.imgIconSmall {
		width: 20px;
		}
		.infosMatch {
		color: black;
		font-size: 0.9em;
		}
		.yourTeam {
		color: orangered;
		font-size: 18px;
		}
		.notYourTeam {
		color: grey;
		font-size: 18px;
		}

    }
</style>
