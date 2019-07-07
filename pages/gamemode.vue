<template>
    <v-content id="app">
        <v-container fluid id="header" class="header" style="height: 162px">
            <v-layout row>
                <v-flex class="barreHeader">
                    <v-layout row>
                        <v-flex xs6 sm6 md6>
                            <span style="margin-left: 100px; float: left; margin-top: 4px"><img src="/images/switzerland.png" class="imgTeamSmall" /></span> <span style="color: white; padding: 4px; float: left; margin-top: 9px">G. Manigley (41 ans) - <nuxt-link to="/myteams" style="color: white; text-decoration: none">Tu gères des fans de {{ loadedUserTeams.length > 1 ? loadedUserTeams.length + ' équipes' : loadedUserTeams.length + ' équipe' }}</nuxt-link></span>
                        </v-flex>
                        <v-flex xs6 sm6 md6>
                            <span style="margin-right: 100px; color: white; padding: 4px; float: right; margin-top: 9px">Fan de l'équipe de suisse de football (1.34 PF)</span>
                        </v-flex>
					</v-layout>
                </v-flex>
            </v-layout>
            <v-layout row>
                 <v-flex shrink>
				 <nuxt-link to="/myprofil">
                    <div id="avatar">
                        <img src="/images/avatar.png" class="imgAvatar" />
                    </div>
				</nuxt-link>
                </v-flex>
                <v-flex grow>
                    <v-layout row>
                        <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center style="padding: 20px; background-color: black; border-bottom: 1px solid orangered; border-right: 1px solid orangered; border-left: 1px solid orangered; height: 120px; box-shadow: 0 4px 5px -1px black; position: relative">
                            <div style="text-align: center" class="levelHeader">Niv.1</div>
                            <v-progress-linear color="orange" height="20" value="30" style="width: 100%; font-weight: 700; border-radius: 5px; margin-top: 25px"><span style="color: white">3 / 10</span></v-progress-linear>
                        </v-flex>
                        <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center style="padding: 15px; background-color: black; border-bottom: 1px solid orangered; border-right: 1px solid orangered; height: 120px; box-shadow: 0 4px 5px -1px black; position: relative">
                            <div style="text-align: center"><i class="material-icons md-48" style="color: yellow">flash_on</i></div>
                            <v-progress-linear color="yellow" height="20" value="75" style="width: 100%; font-weight: 700; color: black; border-radius: 5px">75 / 100</v-progress-linear>
                            <nuxt-link to="/plus" class="aPlusYellow">
                            <span class="plusYellow">+</span>
                            </nuxt-link>
                        </v-flex>
                        <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center style="padding: 15px; background-color: black; border-bottom: 1px solid orangered; border-right: 1px solid orangered; height: 120px; box-shadow: 0 4px 5px -1px black; position: relative">
                            <div style="text-align: center"><i class="material-icons md-48" style="color: green">attach_money</i></div>
                            <div class="dollarFan">1234 $fans</div>
                            <nuxt-link to="/plus" class="aPlusGreen">
                            <span class="plusGreen">+</span>
                            </nuxt-link>
                        </v-flex>
                        <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center style="padding: 15px; background-color: black;height: 120px; border-bottom: 1px solid orangered; border-right: 1px solid orangered; box-shadow: 0 4px 5px -1px black; position: relative">
                            <div style="text-align: center"><i class="material-icons md-48" style="color: orangered">title</i></div>
                            <div class="token">12 tokens</div>
                            <nuxt-link to="/plus" class="aPlusOrangered">
                            <span class="plusOrangered">+</span>
                            </nuxt-link>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex shrink>
					<nuxt-link to="/myteams">
					<div id="team">
						<img src="/images/switzerland.png" class="imgTeam" />
					</div>
					</nuxt-link>
                </v-flex>
            </v-layout>
        </v-container>

		<v-container id="main" fluid style="padding: 0; max-width: 1000px; background-color: whitesmoke">
            <div class="centreImage" style="position: relative">
                <div class="cadreScore" style="position: absolute; top: 20px; left: 100px">
                    <v-flex xs12 style="margin: 0; padding-top: 2px; padding-bottom: 2px; height: 100%">
                        <v-layout align-start>
                            <v-flex class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 15px; margin: 0">
                                <div style="background-color: red; height: 100%; width: 2px"></div>
                            </v-flex>
                            <v-flex class="text-xs-left" style="width: 100%; padding: 0; height: 15px; margin: 0">
                                <div style="color: orange;font-size: 80%">
                                    <span style="float: left; background-color: red; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px" >BIENTÔT - 19:00 (heure local)</span>
                                </div>
                            </v-flex>
                        </v-layout>
                        <v-layout align-center style="max-width: 100%">
                            <v-flex class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 40px; margin: 0">
                                <div style="background-color: red; height: 40px; width: 2px"></div>
                            </v-flex>
                            <v-flex sm1 hidden-xs-only align-center class="text-xs-center" style="width: 50px; padding-left: 15px">
                                <img src="/images/switzerland.png" class="imgLogoEquipe"/>
                            </v-flex>
                            <v-flex sm4 xs5 align-center class="text-xs-left pd-left10">
                                <span class="teamTextSize">Liverpool</span>
                            </v-flex>
                            <v-flex sm2 xs2 class="text-xs-center">
                                <span style="background-color: black; color: orange; padding: 2px 10px; border-radius: 5px; font-size: 130%">3 - 2</span>
                            </v-flex>
                            <v-flex sm4 xs5 align-center class="text-xs-right pd-right10">
                                <span class="teamTextSize">Arsenal</span>
                            </v-flex>
                            <v-flex sm1 hidden-xs-only align-center class="text-xs-center" style="width: 50px; padding-right: 15px">
                                <img src="/images/switzerland.png" class="imgLogoEquipe"/>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </div>
                <div class="content">
					<img src="/images/carte.png" usemap="#image-map">

					<map name="image-map">
						<area target="" alt="Stade" title="Stade" href="123456.html" coords="650,390,744,451" shape="rect">
						<area target="" alt="Montagne" title="Montagne" href="123456.html" coords="223,664,326,756" shape="rect">
					</map>						
                </div>
            </div>
        </v-container>
		
        <v-container fluid id="footer" style="padding: 0; max-width: 1000px; background-color: black; position: sticky; bottom: 0" class="text-xs-center">
			<div class="barreOrangered"></div>
			<div class="barreBlack"></div>
			<div id="dock-container">
				<div id="dock">
					<ul>
						<li>
							<nuxt-link to="/myresult"><img src="/images/menuResultat.png">
							<span class="textMenu">Mes classements</span></nuxt-link>
						</li>
						<li>
							<nuxt-link to="/myinventory"><img src="/images/menuShop.png">
							<span class="textMenu">Inventaire</span></nuxt-link>
						</li>
						<li id="active">
							<nuxt-link to="/gamemode"><img src="/images/menuHome.png">
							<span class="textMenu">Aujourd'hui</span></nuxt-link>
						</li>
						<li>
							<nuxt-link to="/myfriends"><img src="/images/menuSocial.png">
							<span class="textMenu">Mes amis</span></nuxt-link>
						</li>
						<li>
							<nuxt-link to="/scoremode"><img src="/images/menuResultat.png">
							<span class="textMenu">ScoreMode</span></nuxt-link>
						</li>
					</ul>
				</div>
			</div>
		</v-container>
    </v-content>
</template>

<script>
	export default {
		head: {
			title: 'Teams',
            link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Acme' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
			]
		},
		layout: "layoutFront",
		// middleware: ['auth-check'],
		created () {
			this.$store.dispatch('competitions/loadedCompetitions')
			this.$store.dispatch('users/loadedUserTeams')
			this.$store.dispatch('teams/loadedTeams')

			for (let team of this.loadedUserTeams) {
                this.selectedTeams.push(team)
            }
		},
		data() {
			return {
				selectedCompetition: '',
				selectedTeams: []
			}
		},
		computed: {
			loadedUser() {
				return this.$store.getters["users/loadedUser"]
			},
			loadedCompetitions () {
    			return this.$store.getters['competitions/loadedCompetitions'].filter(competition => competition.active === true && competition.type === 'main' && competition.geo === 'national')
    		},
			loadedUserTeams () {
            	return this.$store.getters['users/loadedUserTeams']
			},
			loadedTeamsByCompetition () {
				console.log('Call to loadedTeamsByCompetition')
				// console.log('competitionId: ', competitionId)
				// return

                const teams = []
                const competition_id = this.selectedCompetition.id
				this.$store.getters['teams/loadedTeams']
					// .filter(team => team.competitions.incudes(competition_id))
					.forEach(function (team) {
						// console.log('team: ', team)
						if (team.competitions) {
							if (team['competitions'][competition_id]) {
								teams.push(team)
							}
						}
					})
				console.log('teams: ', teams)
                return teams
            },
		},
		methods: {
			selectCompetition(competition) {
				console.log('competition: ', competition)
				this.selectedCompetition = competition
				this.loadedTeamsByCompetition
			},
			selectTeam (team) {
                // this.isActive = !this.isActive
                console.log('selectTeam')
                console.log('team.id: ', team.id)
                // const selectedTeam = {id: team.id, name: team.name}
                const selectedTeam = team
                console.log('selectedTeam: ', selectedTeam)
                // return
                // console.log(selectedTeam)
                const index = this.selectedTeams.findIndex(el => el.id === team.id)
                console.log('index: ' + index)
                // if (!this.selectedTeams.includes(selectedTeam)) {
                if (!this.selectedTeams.find(el => el.id === selectedTeam.id)) {
					this.selectedTeams.push(selectedTeam)
                } else {
                    this.selectedTeams.splice(index, 1)
                }
			},
			async saveTeams () {
                console.log('saveTeams')
                console.log(this.selectedTeams)
				await this.$store.dispatch('users/updateUserTeams', this.selectedTeams)
                // this.$router.replace('/gamemode')
			},
			clear () {
                this.selectedTeams = []
            },
			goBack() {
				this.$router.replace("/gamemode")
			},
			logout() {
				console.log("Clicked logout button")
				this.$store.dispatch("firebase-auth/signOut").then(() => {
					this.$router.replace("/")
				})
			}
		}
	}
</script>

	<style scoped>

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
    
    .content {
    overflow: scroll;
    padding: 0;
    margin: 0;
	height: 655px;
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
    .cadreScore {
    border: 2px solid orangered;
    padding: 5px;
    width: 800px;
    background-color: whitesmoke;
    opacity: 0.9;
    color: black;
    text-align: center;
    font-size: 1.1em;
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
