<template>
    <v-content id="app">
        <v-container style="padding: 0; max-width: 1017px">
          
            <!-- Scrollable content -->
            <div class="content" style="position: relative">
				<div class="text-xs-right retour">
					<fa :icon="['fas', 'arrow-circle-left']" size="2x" class="icon" @click="goBack" />
				</div>
				<div class="cadreScore hidden-xs-only" style="position: absolute">
					<v-flex xs12 style="margin: 0; height: 100%">
						<v-layout align-start>
							<div class="nameTeam">
								A la plage <span class="nameOtherTeam">Choisis une activité !</span>
							</div>
							<span style="position: absolute; font-size: 15px; color: orangered; text-shadow: none; margin-right: 3px; margin-top: 5px; right: 30px">Mardi, 12 mars 2019</span>
						</v-layout>
					</v-flex>
				</div> 
				<div class="cadreScore hidden-sm-and-up" style="position: absolute">
					<v-flex xs12 style="margin: 0; height: 100%">
						<v-layout align-start>
							<div class="nameTeam">
								A la plage<br />
								<span class="nameOtherTeam">Choisis une activité !</span>
							</div>
							<span class="dateHourMatch">Mardi, 12 mars 2019</span>
						</v-layout>
					</v-flex>
				</div> 
				
				<v-layout row wrap class="layoutTheme puff-in-center">
					<v-flex xs4 sm3 md3 style="padding: 5px">
						<nuxt-link to="/actionCardsJob" style="text-decoration: none">
						<v-card style="background-color: white; border: 2px solid darkred; border-radius: 5px; position: relative; min-height: 73%">
							<v-card-actions style="padding: 5px; text-align: center">
								<span class="gommetteEnergy yellow">
									<i class="material-icons gommetteIcone">flash_on</i>
								</span>
								<span class="gommetteDollar green">
									<i class="material-icons gommetteIcone">attach_money</i>
								</span>
								<span class="gommetteToken orangered">
									<i class="material-icons gommetteIcone">title</i>
								</span>
								<v-spacer></v-spacer>
								<span class="gommetteNiveau darkred">
									<v-icon>star</v-icon> N1
								</span>
							</v-card-actions>
							<v-layout>
								<v-flex xs12 style="text-align: center; padding: 0">
									<img src="/images/stress.jpg" class="imgInventory"/>
								</v-flex>
							</v-layout>
							<v-card-actions style="padding: 5px; text-align: center">
								<span class="gommetteStyle darkred">
									Job
								</span>
							</v-card-actions>
						</v-card>
						</nuxt-link>
					</v-flex>
					<v-flex xs4 sm3 md3 style="padding: 5px">
						<nuxt-link to="/actionCardsHobby" style="text-decoration: none">
						<v-card style="background-color: white; border: 2px solid darkblue; border-radius: 5px; position: relative; min-height: 73%">
							<v-card-actions style="padding: 5px; text-align: center">
								<span class="gommetteEnergy yellow">
									<i class="material-icons gommetteIcone">flash_on</i>
								</span>
								<span class="gommetteDollar green">
									<i class="material-icons gommetteIcone">attach_money</i>
								</span>
								<span class="gommetteToken orangered">
									<i class="material-icons gommetteIcone">title</i>
								</span>
								<v-spacer></v-spacer>
								<span class="gommetteNiveau darkblue">
									<v-icon>star</v-icon> N1
								</span>
							</v-card-actions>
							<v-layout>
								<v-flex xs12 style="text-align: center; padding: 0">
									<img src="/images/stress.jpg" class="imgInventory"/>
								</v-flex>
							</v-layout>
							<v-card-actions style="padding: 5px; text-align: center">
								<span class="gommetteStyle darkblue">
									Hobby
								</span>
							</v-card-actions>
						</v-card>
						</nuxt-link>
					</v-flex>
					<v-flex xs4 sm3 md3 style="padding: 5px">
						<nuxt-link to="/actionCardsMatch" style="text-decoration: none">
						<v-card style="background-color: white; border: 2px solid orangered; border-radius: 5px; position: relative; min-height: 73%">
							<v-card-actions style="padding: 5px; text-align: center">
								<span class="gommetteEnergy yellow">
									<i class="material-icons gommetteIcone">flash_on</i>
								</span>
								<span class="gommetteDollar green">
									<i class="material-icons gommetteIcone">attach_money</i>
								</span>
								<span class="gommetteToken orangered">
									<i class="material-icons gommetteIcone">title</i>
								</span>
							</v-card-actions>
							<v-layout>
								<v-flex xs12 style="text-align: center; padding: 0">
									<img src="/images/stress.jpg" class="imgInventory"/>
								</v-flex>
							</v-layout>
							<v-card-actions style="padding: 5px; text-align: center">
								<span class="gommetteStyle orangered">
									Voir le match !
								</span>
							</v-card-actions>
						</v-card>
						</nuxt-link>
					</v-flex>
					<v-flex xs4 sm3 md3 style="padding: 5px">
						<nuxt-link to="/actionCardsSport" style="text-decoration: none">
						<v-card style="background-color: white; border: 2px solid darkviolet; border-radius: 5px; position: relative; min-height: 73%">
							<v-card-actions style="padding: 5px; text-align: center">
								<span class="gommetteEnergy yellow">
									<i class="material-icons gommetteIcone">flash_on</i>
								</span>
								<span class="gommetteDollar green">
									<i class="material-icons gommetteIcone">attach_money</i>
								</span>
								<span class="gommetteToken orangered">
									<i class="material-icons gommetteIcone">title</i>
								</span>
								<v-spacer></v-spacer>
								<span class="gommetteNiveau darkviolet">
									<v-icon>star</v-icon> N1
								</span>
							</v-card-actions>
							<v-layout>
								<v-flex xs12 style="text-align: center; padding: 0">
									<img src="/images/stress.jpg" class="imgInventory"/>
								</v-flex>
							</v-layout>
							<v-card-actions style="padding: 5px; text-align: center">
								<span class="gommetteStyle darkviolet">
									Sport
								</span>
							</v-card-actions>
						</v-card>
						</nuxt-link>
					</v-flex>
					<v-flex xs4 sm3 md3 style="padding: 5px">
						<nuxt-link to="/actionCardsFormation" style="text-decoration: none">
						<v-card style="background-color: white; border: 2px solid darkslategray; border-radius: 5px; position: relative; min-height: 73%">
							<v-card-actions style="padding: 5px; text-align: center">
								<span class="gommetteEnergy yellow">
									<i class="material-icons gommetteIcone">flash_on</i>
								</span>
								<span class="gommetteDollar green">
									<i class="material-icons gommetteIcone">attach_money</i>
								</span>
								<span class="gommetteToken orangered">
									<i class="material-icons gommetteIcone">title</i>
								</span>
								<v-spacer></v-spacer>
								<span class="gommetteNiveau darkslategray">
									<v-icon>star</v-icon> N1
								</span>
							</v-card-actions>
							<v-layout>
								<v-flex xs12 style="text-align: center; padding: 0">
									<img src="/images/stress.jpg" class="imgInventory"/>
								</v-flex>
							</v-layout>
							<v-card-actions style="padding: 5px; text-align: center">
								<span class="gommetteStyle darkslategray">
									Formation
								</span>
							</v-card-actions>
						</v-card>
						</nuxt-link>
					</v-flex>
					<v-flex xs4 sm3 md3 style="padding: 5px">
						<nuxt-link to="/actionCardsFormation" style="text-decoration: none">
						<v-card style="background-color: white; border: 2px solid darkslategray; border-radius: 5px; position: relative; min-height: 73%">
							<v-card-actions style="padding: 5px; text-align: center">
								<span class="gommetteEnergy yellow">
									<i class="material-icons gommetteIcone">flash_on</i>
								</span>
								<span class="gommetteDollar green">
									<i class="material-icons gommetteIcone">attach_money</i>
								</span>
								<span class="gommetteToken orangered">
									<i class="material-icons gommetteIcone">title</i>
								</span>
								<v-spacer></v-spacer>
								<span class="gommetteNiveau darkslategray">
									<v-icon>star</v-icon> N1
								</span>
							</v-card-actions>
							<v-layout>
								<v-flex xs12 style="text-align: center; padding: 0">
									<img src="/images/stress.jpg" class="imgInventory"/>
								</v-flex>
							</v-layout>
							<v-card-actions style="padding: 5px; text-align: center">
								<span class="gommetteStyle darkslategray">
									Formation
								</span>
							</v-card-actions>
						</v-card>
						</nuxt-link>
					</v-flex>
					<v-flex xs4 sm3 md3 style="padding: 5px">
						<nuxt-link to="/actionCardsTemps" style="text-decoration: none">
						<v-card style="background-color: white; border: 2px solid teal; border-radius: 5px; position: relative; min-height: 73%">
							<v-card-actions style="padding: 5px; text-align: center">
								<span class="gommetteEnergy yellow">
									<i class="material-icons gommetteIcone">flash_on</i>
								</span>
								<span class="gommetteDollar green">
									<i class="material-icons gommetteIcone">attach_money</i>
								</span>
								<span class="gommetteToken orangered">
									<i class="material-icons gommetteIcone">title</i>
								</span>
								<v-spacer></v-spacer>
								<span class="gommetteNiveau teal">
									<v-icon>star</v-icon> N1
								</span>
							</v-card-actions>
							<v-layout>
								<v-flex xs12 style="text-align: center; padding: 0">
									<img src="/images/stress.jpg" class="imgInventory"/>
								</v-flex>
							</v-layout>
							<v-card-actions style="padding: 5px; text-align: center">
								<span class="gommetteStyle teal">
									Temps libre
								</span>
							</v-card-actions>
						</v-card>
						</nuxt-link>
					</v-flex>
					<v-flex xs4 sm3 md3 style="padding: 5px">
						<nuxt-link to="/actionCardsQuotidien" style="text-decoration: none">
						<v-card style="background-color: white; border: 2px solid SaddleBrown ; border-radius: 5px; position: relative; min-height: 73%">
							<v-card-actions style="padding: 5px; text-align: center">
								<span class="gommetteEnergy yellow">
									<i class="material-icons gommetteIcone">flash_on</i>
								</span>
								<span class="gommetteDollar green">
									<i class="material-icons gommetteIcone">attach_money</i>
								</span>
								<span class="gommetteToken orangered">
									<i class="material-icons gommetteIcone">title</i>
								</span>
								<v-spacer></v-spacer>
								<span class="gommetteNiveau SaddleBrown">
									<v-icon>star</v-icon> N1
								</span>
							</v-card-actions>
							<v-layout>
								<v-flex xs12 style="text-align: center; padding: 0">
									<img src="/images/stress.jpg" class="imgInventory"/>
								</v-flex>
							</v-layout>
							<v-card-actions style="padding: 5px; text-align: center">
								<span class="gommetteStyle SaddleBrown">
									Quotidien
								</span>
							</v-card-actions>
						</v-card>
						</nuxt-link>
					</v-flex>
				</v-layout>

			</div>
                      
        </v-container>
  </v-content>
</template>

<script>
    import ActionsCard from '~/components/ActionsCard'
    export default {
        components: { ActionsCard },
        layout: 'layoutFront',
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
                action: '',
                actionsModal: false
            } 
        },
        computed: {
            loadedUserTeams () {
                return this.$store.getters['users/loadedUserTeams']
            }
        },
        methods: {
            async openActionsDialog (item) {
                console.log('openActionsDialog: ', item)
                this.action = item
                this.actionsModal = true
                const response = await this.$store.dispatch('actionsCards/loadedActions', item)
                console.log('response: ', response)
                // return window.location.href = 'https://fr.wikipedia.org/wiki/Camp_Nou'
            },
			goBack() {
				this.$router.replace("/gamemode_jm")
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
        background-color: light-gray;;
        overflow-x: auto;
        height: 100%;
		position: relative;
		background-image: url(/images/plage.svg);
		background-size: cover;
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
	margin-top: 6px;
	}
	.barreHeaderLeft2 {
	color: white; 
	float: left; 
	margin-top: 14px;
    margin-left: 5px;
	}
	.barreHeaderRight {
	margin-right: 160px; 
	color: white;  
	float: right; 
	margin-top: 14px;
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
        box-shadow: 0 3px 5px black;
        height: 150px;
        width: 150px;
        border-radius: 0 0 0 0;
    }
    .imgAvatar {
        height: 100%;
        width: 100%;
        border-radius: 0 0 0 0;
    }
    #team {
        background-color: orangered;
        box-shadow: 0 3px 5px black;
        height: 150px;
        width: 150px;
        border-radius: 0 0 0 0;
    }
    .imgTeam {
        height: 100%;
        width: 100%;
        border-radius: 0 0 0 0;
    }
    .imgTeamInventory {
        width: 15%;
        border-radius: 0 0 0 0;
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
    width: 1017px;
    background-color: white;
    margin-top: 50px;
	}
	.nameTeam {
	position: relative; 
	font-size: 50px; 
	color: orangered; 
	text-decoration: none; 
	text-transform: uppercase; 
	top: 0px; 
	left: 30px; 
	text-shadow: black 3px 3px 2px;
	}
	.vs { 
	position: relative; 
	top: 3px; 
	font-size: 15px; 
	color: orangered; 
	text-shadow: none; 
	margin-left: 10px;
	}
	.nameOtherTeam {
	position: relative; 
	top: 3px; 
	font-size: 25px; 
	color: orangered; 
	text-shadow: none; 
	margin-left: 8px;
	}
	.dateHourMatch {
	position: absolute; 
	font-size: 15px; 
	color: orangered; 
	text-shadow: none; 
	margin-right: 3px; 
	margin-top: 3px; 
	right: 0
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
	color: white;

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
    
    .menuInventory {
	max-height: 40px; 
	width: 100%; 
	text-align: center; 
	background-color: orangered; 
	margin-top: 10px
	}
	.fs16 {
	font-size: 16px;
	}
	.fs14 {
	font-size: 14px; 
	text-align: center
	}

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
	.infoInventory {
	color: white;
	font-size: 1.0em;
	text-align: center;
	padding: 10px;
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
	
	.activeinventory {
	padding: 16px; 
	border: 2px solid orangered; 
	background-color: black; 
	color: orangered; 
	font-size: 20px; 
	height: 50px; 
	margin-top: -10px; 
	font-weight: 700;
	}
	
	.noactiveinventory {
	padding: 12px; 
	border: 1px solid black; 
	font-size: 20px; 
	font-weight: 700;
	background-color: orangered;
	}
	
	.activeinventoryavatar {
	padding: 16px; 
	border: 2px solid orangered; 
	background-color: black; 
	color: orangered; 
	font-size: 20px; 
	height: 50px; 
	margin-top: -10px; 
	font-weight: 700;
	}
	
	.noactiveinventoryavatar {
	padding: 12px; 
	border: 1px solid black; 
	font-size: 20px; 
	font-weight: 700;
	background-color: orangered;
	}

	.activeinventoryappartement {
	padding: 16px; 
	border: 2px solid orangered; 
	background-color: black; 
	color: orangered; 
	font-size: 20px; 
	height: 50px; 
	margin-top: -10px; 
	font-weight: 700;
	}
	
	.noactiveinventoryappartement {
	padding: 12px; 
	border: 1px solid black; 
	font-size: 20px; 
	font-weight: 700;
	background-color: orangered;
	}
	
	.content .imgInventory {
	width: 100%;
	}
	
	.inventoryBadgeAvatar {
	padding: 3px;
	background-color: #ff950d;
	color: white;
	border-radius: 5px;
	}
	.inventoryBadgeAppartement {
	padding: 3px;
	background-color: #b23d12;
	color: white;
	border-radius: 5px;
	}
	.inventoryCheck {
	padding: 2px;
	background-color: green;
	color: white;
	border-radius: 5px;
	}
	.inventoryNoCheck {
	padding: 2px;
	background-color: red;
	color: white;
	border-radius: 5px;
	}
	
	.puff-in-center {
	-webkit-animation: puff-in-center 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) 1s both;
	animation: puff-in-center 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) 1s both;
	}
	/**
	* ----------------------------------------
	* animation puff-in-center
	* ----------------------------------------
	*/
	@-webkit-keyframes puff-in-center {
	0% {
	-webkit-transform: scale(2);
	transform: scale(2);
	-webkit-filter: blur(2px);
	filter: blur(2px);
	opacity: 0;
	}
	100% {
	-webkit-transform: scale(1);
	transform: scale(1);
	-webkit-filter: blur(0px);
	filter: blur(0px);
	opacity: 1;
	}
	}
	@keyframes puff-in-center {
	0% {
	-webkit-transform: scale(2);
	transform: scale(2);
	-webkit-filter: blur(2px);
	filter: blur(2px);
	opacity: 0;
	}
	100% {
	-webkit-transform: scale(1);
	transform: scale(1);
	-webkit-filter: blur(0px);
	filter: blur(0px);
	opacity: 1;
	}
	}
	
	.retour {
	position: absolute; 
	top: 11px; 
	right: 11px;
	}
	.layoutTheme {
	margin-top: 15px;
	margin: 10px; 
	position: absolute; 
	top: 140px;
	}
	.gommetteNiveau {
	position: absolute; 
	top: 10px; 
	right: 10px; 
	font-size: 20px; 
	padding: 5px; 
	border-radius: 5px; 
	color: white;
	}
	.gommetteStyle {
	position: absolute; 
	bottom: 10px; 
	right: 10px; 
	font-size: 20px; 
	padding: 5px; 
	border-radius: 5px; 
	color: white;
	}
	.gommetteEnergy {
	padding: 5px; 
	position: absolute; 
	top: 10px; 
	left: 5px; 
	border-radius: 50%;
	color: white;
	z-index: 3;
	}
	.gommetteDollar {
	padding: 5px; 
	position: absolute; 
	top: 10px; 
	left: 25px; 
	border-radius: 50%;
	color: white;
	z-index: 2;
	}	
	.gommetteToken {
	padding: 5px; 
	position: absolute; 
	top: 10px; 
	left: 45px; 
	border-radius: 50%; 
	color: white;
	z-index: 1;
	}
	.gommetteIcone {
	margin-top: 3px; 
	font-size: 25px;
	}
	.blackOpacity {
	background-color: black;
	opacity: 0.25;
	}
	.orangered {
	background-color: orangered;
	color: white;
	}
	.darkblue {
	background-color: darkblue;
	color: white;
	}
	.darkred {
	background-color: darkred;
	color: white;
	}
	.darkslategray {
	background-color: darkslategray;
	color: white;
	}
	.darkviolet {
	background-color: darkviolet;
	color: white;
	}
	.SaddleBrown {
	background-color: SaddleBrown;
	color: white;
	}
	.teal {
	background-color: teal;
	color: white;
	}
	.orangered {
	background-color: orangered;
	border-color: orangered;
	color: white;
	}
	.icon:hover {
	cursor: pointer;
	color: #fff;
	}
	
	/* Small screens */
    @media only screen and (max-width: 768px) {
		.retour {
		position: absolute; 
		top: 7px; 
		right: 7px;
		}
		.layoutTheme {
		margin: 5px; 
		position: absolute; 
		top: 110px;
		justify-content: center;
		}
		.gommetteNiveau {
		top: 3px; 
		right: 3px; 
		font-size: 11px; 
		padding: 3px; 
		}
		.gommetteStyle {
		bottom: 3px; 
		right: 3px; 
		font-size: 11px; 
		padding: 3px; 
		}
		.gommetteEnergy {
		padding: 3px; 
		top: 3px; 
		left: 3px; 
		}
		.gommetteDollar {
		padding: 3px; 
		top: 3px; 
		left: 15px; 
		}	
		.gommetteToken {
		padding: 3px; 
		top: 3px; 
		left: 27px; 
		}
		.gommetteIcone {
		font-size: 12px;
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
			font: normal 90%/1 "Acme", Helvetica, sans-serif;
		}
		.content {
			background-color: light-gray;;
			height: 100%;
			overflow-x: auto;
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
			max-height: 100px;
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
			height: 25px;
			width: 100%;
			background-color: orangered;
			z-index: -1;
			margin: 0;
			padding: 0;
		}
		.barreHeaderLeft1 {
		margin-left: 25px;
		margin-top: 8px;
		}
		.barreHeaderLeft2 {
		color: white; 
		margin-top: 9px;
		font-size: 0.9em;
		}
		.barreHeaderRight {
		margin-right: 25px; 
		color: white; 
		float: right; 
		margin-top: 9px;
		font-size: 0.9em;
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
		#avatar {
			background-color: orangered;
			box-shadow: 0 2px 2px black;
			height: 70px;
			width: 70px;
			border-radius: 0 0 0 0;
		}
		.imgAvatar {
			height: 100%;
			width: 100%;
			border-radius: 0 0 0 0;
		}
		#team {
			background-color: orangered;
			box-shadow: 0 2px 2px black;
			height: 70px;
			width: 70px;
			border-radius: 0 0 0 0;
		}
		.imgTeam {
			height: 100%;
			width: 100%;
			border-radius: 0 0 0 0;
		}
		.imgTeamSmall {
			height: 12px;
			margin-top: 0;
		}
		.levelHeader {
			font-weight: 700;
			font-size: 11px;  /* Preferred icon size */
			background-color: orangered;
			color: white;
			border-radius: 5px;
			margin-top: 16px;
			padding: 3px;
			width: 80%;
			margin-left: auto;
			margin-right: auto;		
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
		margin-top: 12px;
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
		width: 100%;
		background-color: whitesmoke;
		opacity: 0.9;
		color: black;
		margin: 0;
		top: 40px;
		padding: 5px;
		height: 45px;
		}
		.nameTeam {
		position: relative; 
		font-size: 22px; 
		color: orangered; 
		text-decoration: none; 
		text-transform: uppercase; 
		top: 0px; 
		left: 5px; 
		text-shadow: black 2px 1px 1px;
		}
		.vs { 
		position: relative; 
		top: 3px; 
		font-size: 12px; 
		color: orangered; 
		text-shadow: none; 
		margin-left: 3px;
		float: right;
		}	
		.nameOtherTeam {
		position: relative; 
		font-size: 12px; 
		color: orangered; 
		text-shadow: none;
		margin-left: 0;
		top: -6px;
		}	
		.dateHourMatch {
		position: absolute; 
		font-size: 10px; 
		color: orangered; 
		text-shadow: none; 
		margin-right: 5px; 
		margin-top: 1px; 
		right: 0
		}	
		.material-icons.md-48 { 
		font-size: 22px;
		margin-top: 13px;
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
		
		.menuInventory {
		max-height: 25px; 
		margin-top: 15px
		}
		.activeinventory {
		padding: 7px; 
		font-size: 14px; 
		height: 30px; 
		margin-top: -6px; 
		}
		.noactiveinventory {
		padding: 6px; 
		font-size: 14px; 
		}
		.activeinventoryavatar {
		padding: 7px; 
		font-size: 14px; 
		height: 30px; 
		margin-top: -6px; 
		}
		.noactiveinventoryavatar {
		padding: 6px; 
		font-size: 14px; 
		}
		.activeinventoryappartement {
		padding: 7px; 
		font-size: 14px; 
		height: 30px; 
		margin-top: -6px; 
		}
		.noactiveinventoryappartement {
		padding: 6px; 
		font-size: 14px; 
		}
		.content .imgInventoryMobile {
		width: 55%;
		}
		.fs16 {
		font-size: 8px;
		}
		.fs14 {
		font-size: 10px; 
		text-align: center
		}
		
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
		.infoInventory {
		font-size: 0.8em;
		padding: 5px;
		padding-bottom: 0;
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
