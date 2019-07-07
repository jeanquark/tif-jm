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
                        <div id="avatar">
                            <img src="/images/avatar.png" class="imgAvatar" />
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
                        <div id="team">
							<img src="/images/switzerland.png" class="imgTeam" />
                        </div>
                    </nuxt-link>
                </v-flex>
            </v-layout>
        </v-container>

        <v-container fluid style="padding: 0; max-width: 1000px; background-color: green; color: white; style: 30px">
            <v-layout>
                <v-flex d-flex x12 justify-center align-center class="text-xs-center menuSport">
                    Football - Compétitions - Nom de la compétition
                </v-flex>
            </v-layout>             
        </v-container>

        <v-container fluid style="padding: 0; max-width: 1000px; background-color: whitesmoke">
            <v-card-text class="card-text">
                <v-expansion-panel class="elevation-0" :value="0">
                    <v-expansion-panel-content style="background-color: orangered">
                        <div slot="header" class="white--text">
                            CLASSEMENT - SAISON 2018-2019
                        </div>
                        <v-icon slot="actions" color="white">$vuetify.icons.expand</v-icon>
                        <v-card>
                            <v-card-text style="padding: 0">
                                <!-- <p>loadedStandings: {{ loadedStandings }}</p> -->
								<v-data-table
								    :headers="headers"
								    :items="loadedStandings"
								    class="elevation-0"
								    no-data-text="No standing found for this competition"
								    :disable-initial-sort="true"
								    :total-items="20"
								>
								    <template slot="items" slot-scope="props">
								    	<tr :class="{even: props.index % 2, odd: !(props.index % 2)}">
								    		<td>{{ props.item.rank }}</td>
									      	<td>{{ props.item.name }}</td>
									      	<td class="text-xs-center">{{ props.item.points }}</td>
											<td class="text-xs-center">{{ props.item.matches }}</td>
											<td class="text-xs-center">{{ props.item.won }}</td>
											<td class="text-xs-center">{{ props.item.drawn }}</td>
											<td class="text-xs-center">{{ props.item.lost }}</td>
										</tr>
								    </template>
								</v-data-table>
                            </v-card-text>
                        </v-card>
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
                                <nuxt-link to="/teams"><img src="/images/menuShop.png">
                                <span class="textMenu">Equipes</span></nuxt-link>
                            </li>
                            <li id="active">
                                <nuxt-link to="/competitions"><img src="/images/menuResultat.png">
                                <span class="textMenu">Compétitions</span></nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/scoremode"><img src="/images/menuHome.png">
                                <span class="textMenu">Matches du jour</span></nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/players"><img src="/images/menuSocial.png">
                                <span class="textMenu">Joueurs</span></nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/tifnews"><img src="/images/menuResultat.png">
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
        	console.log(this.$route.params.id)
        	const competition = this.$route.params.id
            console.log('fetching...')
            await this.$store.dispatch('standings/loadedStandings', competition)
            console.log('done!')

            const now = moment();
            console.log('now: ', now)
            const last_changed = "2019-01-18 19:54:01"
            console.log(now.diff(last_changed, 'minutes'))
        },
        data() {
            return {
            	headers: [
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
		        ]
            }
        },
        computed: {
            loadedUser () {
                return this.$store.getters['users/loadedUser']
            },
            loadedStandings () {
                return [...this.$store.getters['standings/loadedStandings']]
                	.sort((a, b) => a.rank - b.rank)
            }
        },
        methods: {
            
        }
    }
</script>

<style scope>

		/* Menu compétitions */
	
		.scrolling-wrapper-flexbox {
		display: flex;
		flex-wrap: nowrap;
		overflow-x: auto;
		justify-content: center;
		}
	
		.cardMenuCompetition {
		border-radius: 5px;
		color: black;
		padding: 10px 10px;
		background: white;
		margin: 0 5px;
		}
        .cardMenuCompetition:hover {
            cursor: pointer;
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

        /* Début de l'ajout J-M */
        .active {
            background: orangered;
            color: #fff;
        }
        .greenBar {
            background-color: green; 
            height: 40px; 
            width: 2px;
        }
        .redBar {
            background-color: red; 
            height: 40px; 
            width: 2px;
        }
		.even {
		  	background: #eee;
		}
		.odd {
		  	background: #fff;
		}
		/* Fin ajout J-M */
	</style>
