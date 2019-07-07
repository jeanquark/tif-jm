<template>
    <v-content id="app" style="background-color: white">
		<v-container style="padding: 0; max-width: 1017px;">
		
			<scoremode-header />
			
            <!-- Scrollable content -->
            <div class="content" style="height: 100vh; border-right: 1px solid orangered; border-left: 1px solid orangered; padding: 10px 0">
				<v-layout>
						
					<!-- Scrollable content -->
					<div style="padding: 0; min-width: 100%; height: 100%">
			
						<!-- <v-layout> -->
						<!-- <a href="/api/fetch-next-top5-leagues-matches">Fetch next Top 5 leagues matches</a><br /> -->
						<!-- <a href="/api/fetch-live-score">Fetch Live Score</a><br /> -->
						<!-- loadedEvents: {{ loadedEvents }}<br /><br /> -->
						<!-- loadedEventsByDay: {{ loadedEventsByDay('2019-03-02') }}<br /><br /> -->

						<!-- Results -->
						<v-tabs class="hidden-xs-only" color="rgb(0,0,0)" height="35" slider-color="white" fixed-tabs v-model="selectType" style="margin-bottom: 10px">
							<v-tab v-for="type in types" :key="type.slug" ripple style="cursor: pointer;">
								<span style="font-size: 1.0em; color: white">{{ type.name }}</span>
							</v-tab>
						</v-tabs>
						<v-tabs class="hidden-sm-and-up" color="rgb(0,0,0)" height="35" slider-color="white" fixed-tabs v-model="selectType" style="margin-bottom: 10px">
							<v-tab v-for="type in types" :key="type.slug" ripple style="cursor: pointer;">
								<span style="font-size: 0.9em; color: white">{{ type.name }}</span>
							</v-tab>
						</v-tabs>						

						<!-- Results -->
						<scoremode-results v-if="selectType === 0" />

						<!-- Standings -->
						<scoremode-standings v-if="selectType === 1" />
						
					</div>
					
				</v-layout>
						
			</div>
			
			<scoremode-footer />
			
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
		.v-tabs__container--fixed-tabs .v-tabs__div, .v-tabs__container--icons-and-text .v-tabs__div {
		}
	.orangered {
	background-color: orangered;
	border-color: orangered;
	}
    body {
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    /* Content */
    .container {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
		font: normal 100%/1 "Acme", Helvetica, sans-serif;
    }
    .content {
        background-color: light-gray;
        overflow-x: auto;
    }
    #footer {
        background-color: red;
        color: #fff;
        height: auto;
        text-align: center;
    }
    
    @media only screen and (min-width: 1000px) {
        .content img {
            width: 100%;
        }
    }
    /* End Content */

    /* Header */
    #header {
        max-height: 162px;
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
	.barreHeaderLeft1 {
	margin-left: 160px; 
	float: left; 
	margin-top: 9px;
	color: white;
	}
	.barreHeaderLeft2 {
	color: white; 
	float: left; 
	margin-top: 9px;
	margin-left: 160px; 
	}
	.barreHeaderRight {
	margin-right: 160px; 
	color: white; 
	float: right; 
	margin-top: 9px;
	}
	.headerLogo {
	padding: 20px 0;
	}
	.chiffres {
	font-size: 1.4em;
	color: orangered;
	}
	.activity {
	font-size: 1.1em;
	color: white;
	}
	.cadreHeader1 {
	padding: 20px; 
	background-color: black; 
	border-bottom: 1px solid orangered; 
	border-right: 1px solid orangered;
	border-left: 1px solid orangered;	
	height: 120px; 
	box-shadow: 0 4px 5px -1px black; 
	position: relative;
	}
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
	.cadreHeader {
	padding: 15px; 
	background-color: black; 
	border-bottom: 1px solid orangered; 
	border-right: 1px solid orangered; 
	height: 120px; 
	box-shadow: 0 4px 5px -1px black; 
	position: relative;
	}
    #avatar {
        background-color: orangered;
        border-right: 3px solid orangered;
        border-bottom: 3px solid orangered;
        box-shadow: 0 7px 5px black;
        height: 150px;
        width: 150px;
        border-radius: 0;
    }
    .imgAvatar {
        height: 100%;
        width: 100%;
        border-radius: 0;
    }
    #team {
        background-color: orangered;
        border-left: 3px solid orangered;
        border-bottom: 3px solid orangered;
        box-shadow: 0 7px 5px black;
        height: 150px;
        width: 150px;
        border-radius: 0;
    }
    .imgTeam {
        height: 100%;
        width: 100%;
        border-radius: 0;
    }
    .imgTeamSmall {
        height: 20px;
        margin-top: 5px;
    }
    .levelHeader {
        font-weight: 700;
        font-size: 36px;  /* Preferred icon size */
        background-color: orangered;
        color: white;
        border-radius: 10px;
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
	.progressYellow {
	width: 100%; 
	font-weight: 700; 
	color: black; 
	border-radius: 5px;
	}
	.progressOrange {
	width: 100%; 
	font-weight: 700; 
	color: black; 
	border-radius: 5px;
	margin-top: 25px;
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
    .dollarFan {
        margin-top: 14px;
        width: 100%;
        text-align: center;
        color: green;
        font-weight: 700;
        box-shadow: 0 0 10px 2px inset;
        border-radius: 5px;
        padding: 4px;
    }
    .token {
        margin-top: 14px;
        width: 100%;
        text-align: center;
        color: orangered;
        font-weight: 700;
        box-shadow: 0 0 10px 2px inset;
        border-radius: 5px;
        padding: 5px;
    }
	.cadreScore {
    width: 1000px;
    background-color: white;
    margin-top: 50px;
	}
	.pd-left5 {
	padding-left: 5px;
	}
	.imgLogoEquipe {
	max-width: 30px;
	max-height: 30px;
	}
	.teamTextSize {
	font-size: 1.2em;
	}
	.progress-bar-txt-black {
		position: relative;
		font-size: 15px;
		top: -31px;
		z-index: 1;
		color: black;
		font-weight: 700;
	}
	.progress-bar-txt-white {
		position: relative;
		font-size: 15px;
		top: -31px;
		z-index: 1;
		color: white;
		font-weight: 700;
	}
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
    /* End Header */
    
    

    /* Footer */
    .barreOrangered {
        width: 100%;
        padding: 0;
        margin: 0; 
        height: 3px;
        background-color: orangered;
    }
    .barreBlack {
        width: 100%;
        padding: 0;
        margin: 0;
        height: 8px;
        background-color: black;
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
    /* End Footer */
	
	.activeskill {
	padding: 16px; 
	border: 2px solid orangered; 
	background-color: black; 
	color: orangered; 
	font-size: 20px; 
	height: 50px; 
	margin-top: -10px; 
	font-weight: 700;
	}
	
	.noactiveskill {
	padding: 12px; 
	border: 1px solid black; 
	font-size: 20px; 
	font-weight: 700;
	}
	
	.content .imgSkill {
	width: 85%;
	}
    
    /* Small screens */
    @media only screen and (max-width: 768px) {
		body {
			margin: 0;
			padding: 0;
			overflow: hidden;
		}

		/* Content */
		.container {
			width: 100vw;
			height: 100vh;
			display: flex;
			flex-direction: column;
			font: normal 90%/1 "Acme", Helvetica, sans-serif;
		}
		.content {
			overflow-x: auto;
			margin-top: 3px;
			background-color: black;
		}
		#footer {
			background-color: red;
			color: #fff;
			/*height: 100px;*/
			height: auto;
			text-align: center;
		}	
		/* End Content */

		/* Header */
		#header {
			height: 120px;
			padding: 0;
			top:0px;
			left:0px;
			background-color: black;
			z-index: 1;
			border-bottom: 2px solid orangered;
			position: sticky;
		}
		.header {
			position: relative;
		}
		.barreHeader {
			position:absolute;
			top: 70px;
			height: 18px;
			width: 100%;
			background-color: orangered;
			z-index: -1;
			margin: 0;
			padding: 0;
		}
		.tabGreenMenu {
		font-size: 1em;
		height: 30px;
		}
		.barreHeaderLeft1 {
		margin-left: 25px;
		margin-top: 2px;
		color: white;
		padding: 4px;
		font-size: 0.8em;
		}
		.barreHeaderLeft2 {
		color: white; 
		padding: 4px;
		margin-top: 2px;
		font-size: 0.8em;
		}
		.barreHeaderRight {
		margin-right: 25px; 
		color: white; 
		padding: 4px; 
		float: right; 
		margin-top: 2px;
		font-size: 0.8em;
		}
		.cadreHeader1 {
		padding: 3px; 
		background-color: black; 
		border-bottom: 1px solid orangered; 
		border-right: 1px solid orangered;
		border-left: 1px solid orangered;	
		height: 70px; 
		box-shadow: 0 2px 3px -1px black; 
		position: relative;
		}
		.cadreHeader {
		padding: 3px; 
		background-color: black; 
		border-bottom: 1px solid orangered; 
		border-right: 1px solid orangered; 
		height: 70px; 
		box-shadow: 0 2px 3px -1px black; 
		position: relative;
		}
		.headerLogo {
		padding: 20px 0;
		}
		.chiffres {
		font-size: 1.4em;
		color: orangered;
		}
		.activity {
		font-size: 1.1em;
		color: white;
		}
		#avatar {
			background-color: orangered;
			border-right: 2px solid orangered;
			border-bottom: 2px solid orangered;
			box-shadow: 0 2px 2px black;
			height: 70px;
			width: 70px;
			border-radius: 0;
		}
		.imgAvatar {
			height: 100%;
			width: 100%;
			border-radius: 0;
		}
		#team {
			background-color: orangered;
			border-left: 2px solid orangered;
			border-bottom: 2px solid orangered;
			box-shadow: 0 2px 2px black;
			height: 70px;
			width: 70px;
			border-radius: 0;
		}
		.imgTeam {
			height: 100%;
			width: 100%;
			border-radius: 0;
		}
		.imgTeamSmall {
			height: 12px;
			margin-top: 0;
		}
		.levelHeader {
			font-weight: 700;
			font-size: 12px;  /* Preferred icon size */
			background-color: orangered;
			color: white;
			border-radius: 5px;
			margin-top: 15px;
		}
		.plusOrangered {
			position: absolute;
			top: 0;
			right: 0;
			margin: 0;
			padding: 0 5px;
			color: white;
			font-weight: 700;
			font-size: 0.9em;
			background-color: orangered;
		}
		.aPlusOrangered :hover {
			color: orangered;
			background-color: white;
			border-bottom: 1px solid orangered;
			border-left: 1px solid orangered;
		}
		.progressYellow {
		width: 100%; 
		font-weight: 700; 
		color: black; 
		border-radius: 5px;
		height: 11px;
		margin-top: 8px;
		}
		.progressOrange {
		width: 100%; 
		font-weight: 700; 
		color: black; 
		border-radius: 5px;
		height: 11px;
		margin-top: 18px;
		}
		.progress-bar-txt-black {
			position: relative;
			font-size: 9px;
			top: -26px;
			z-index: 1;
			color: black;
			font-weight: 600;
		}
		.progress-bar-txt-white {
			position: relative;
			font-size: 9px;
			top: -26px;
			z-index: 1;
			color: white;
			font-weight: 600;
		}
		.plusYellow {
			position: absolute;
			top: 0;
			right: 0;
			margin: 0;
			padding: 0 5px;
			color: black;
			font-weight: 700;
			font-size: 0.9em;
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
			padding: 0 5px;
			color: white;
			font-weight: 700;
			font-size: 0.9em;
			background-color: green;
		}
		.aPlusGreen :hover {
			color: green;
			background-color: white;
			border-bottom: 1px solid green;
			border-left: 1px solid green;
		}
		.dollarFan {
			margin-top: 7px;
			width: 100%;
			text-align: center;
			color: green;
			font-weight: 700;
			box-shadow: 0 0 5px 1px inset;
			border-radius: 5px;
			padding: 2px;
			font-size: 0.8em;
		}
		.token {
			margin-top: 7px;
			width: 100%;
			text-align: center;
			color: orangered;
			font-weight: 700;
			box-shadow: 0 0 5px 1px inset;
			border-radius: 5px;
			padding: 2px;
			font-size: 0.8em;
		}
		.cadreScore {
		border: 2px solid orangered;
		padding: 5px;
		width: 95%;
		background-color: whitesmoke;
		opacity: 0.9;
		color: black;
		margin: 0;
		top: 105px;
		left: 10px;
		right: 10px;
		}
		.material-icons.md-48 { 
		font-size: 30px;
		margin-top: 5px;
		}
		.material-icons {
		font-family: 'Material Icons';
		font-weight: normal;
		font-style: normal;
		font-size: 12px;  /* Preferred icon size */
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
		/* End Header */
		
		/* Footer */
		.barreOrangered {
			width: 100%;
			padding: 0;
			margin: 0; 
			height: 2px;
			background-color: orangered;
		}
		.barreBlack {
			width: 100%;
			padding: 0;
			margin: 0;
			height: 4px;
			background-color: black;
		}
			
        /* Menu */

        #dock-container {
            height: 55px;
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
