<template>
    <v-content id="app">
        <v-container style="padding: 0; max-width: 1017px;">
            <!-- Fixed Header -->
            <!-- <v-toolbar dark> -->
            <v-container fluid id="header" class="header">
                <v-layout row>
                    <v-flex hidden-sm-and-down class="barreHeader">
                        <v-layout row>
                            <v-flex xs6 sm6 md6>
                                <span class="barreHeaderLeft1"><img src="/images/switzerland.png" class="imgTeamSmall" /></span> <span class="barreHeaderLeft2">G. Manigley (41 ans) - <nuxt-link to="/myteams" style="color: white; text-decoration: none">Tu gères des fans de {{ loadedUserTeams.length > 1 ? loadedUserTeams.length + ' équipes' : loadedUserTeams.length + ' équipe' }}</nuxt-link></span>
                            </v-flex>
                            <v-flex xs6 sm6 md6>
                                <span class="barreHeaderRight">Fan de l'équipe de suisse de football (1.34 PF)</span>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex hidden-md-and-up class="barreHeader">
                        <v-layout row>
                            <v-flex xs6 sm6 md6>
                                <span class="barreHeaderLeft1"><img src="/images/switzerland.png" class="imgTeamSmall" /></span> <span class="barreHeaderLeft2">G. Manigley <nuxt-link to="/myteams" style="color: white; text-decoration: none">(Fans de {{ loadedUserTeams.length > 1 ? loadedUserTeams.length + ' équipes' : loadedUserTeams.length + ' équipe' }})</nuxt-link></span>
                            </v-flex>
                            <v-flex xs6 sm6 md6>
                                <span class="barreHeaderRight">1.34 point de ferveur</span>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                     <v-flex shrink>
                     <nuxt-link to="/myprofil">
                        <div id="avatar">
                            <img src="/images/avatar.png" class="imgAvatar" />
                        </div>
                    </nuxt-link>
                    </v-flex>
                    <v-flex hidden-sm-and-down grow>
                        <v-layout row>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader1">
                                <div style="text-align: center" class="levelHeader">Niv.1</div>
                                <v-progress-linear class="progressOrange" color="orange" height="20" value="30"></v-progress-linear><span class="progress-bar-txt-white">3 / 10</span>
                            </v-flex>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
                                <div style="text-align: center"><i class="material-icons md-48" style="color: yellow">flash_on</i></div>
                                <v-progress-linear class="progressYellow" color="yellow" height="20" value="75"></v-progress-linear><span class="progress-bar-txt-black">75 / 100</span>
                                <nuxt-link to="/plus" class="aPlusYellow">
                                <span class="plusYellow">+</span>
                                </nuxt-link>
                            </v-flex>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
                                <div style="text-align: center"><i class="material-icons md-48" style="color: green">attach_money</i></div>
                                <div class="dollarFan">1234 $fans</div>
                                <nuxt-link to="/plus" class="aPlusGreen">
                                <span class="plusGreen">+</span>
                                </nuxt-link>
                            </v-flex>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
                                <div style="text-align: center"><i class="material-icons md-48" style="color: orangered">title</i></div>
                                <div class="token">12 tokens</div>
                                <nuxt-link to="/plus" class="aPlusOrangered">
                                <span class="plusOrangered">+</span>
                                </nuxt-link>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex hidden-md-and-up grow>
                        <v-layout row>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader1">
                                <div style="text-align: center" class="levelHeader">Niv.1</div>
                                <v-progress-linear class="progressOrange" color="orange" height="12" value="30"></v-progress-linear><span class="progress-bar-txt-white">3 / 10</span>
                            </v-flex>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
                                <div style="text-align: center"><i class="material-icons md-48" style="color: yellow">flash_on</i></div>
                                <v-progress-linear class="progressYellow" color="yellow" height="12" value="75"></v-progress-linear><span class="progress-bar-txt-black">75 / 100</span>
                                <nuxt-link to="/plus" class="aPlusYellow">
                                <span class="plusYellow">+</span>
                                </nuxt-link>
                            </v-flex>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
                                <div style="text-align: center"><i class="material-icons md-48" style="color: green">attach_money</i></div>
                                <div class="dollarFan">1234 $fans</div>
                                <nuxt-link to="/plus" class="aPlusGreen">
                                <span class="plusGreen">+</span>
                                </nuxt-link>
                            </v-flex>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
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


            <!-- </v-toolbar> -->
            
            <!-- Scrollable content -->
            <div class="content">
                <!-- <v-layout> -->
                <!-- <div class="container"> -->
					<div class="cadreScore" style="position: absolute">
						<v-flex xs12 style="margin: 0; height: 100%">
							<v-layout align-start>
								<div class="nameTeam" style="position: relative; font-size: 50px; color: orangered; text-decoration: none; text-transform: uppercase; top: 0px; left: 30px; text-shadow: black 3px 3px 2px;">
									Espagnol Barcelone <span style="position: relative; top: 3px; font-size: 15px; color: orangered; text-shadow: none; margin-left: 10px;">Pas de match aujourd'hui</span>
								</div>
							</v-layout>
							<!-- 
							<v-layout align-start>
								<v-flex class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 15px; margin: 0">
									<div style="background-color: red; height: 100%; width: 2px"></div>
								</v-flex>
								<v-flex class="text-xs-left" style="width: 100%; padding: 0; height: 15px; margin: 0">
									<div style="color: orange;font-size: 80%">
										<span style="float: left; background-color: red; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px" >MATCH TERMINÉ</span>
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
								<v-flex sm4 xs5 align-center class="text-xs-left pd-left5">
									<span class="teamTextSize">FC Barcelone</span>
								</v-flex>
								<v-flex sm2 xs2 class="text-xs-center">
									<span style="background-color: black; color: orange; padding: 2px 10px; border-radius: 5px; font-size: 130%">3 - 2</span>
								</v-flex>
								<v-flex sm4 xs5 align-center class="text-xs-right pd-right10">
									<span class="teamTextSize">Palma de Majorque</span>
								</v-flex>
								<v-flex sm1 hidden-xs-only align-center class="text-xs-center" style="width: 50px; padding-right: 15px">
									<img src="/images/switzerland.png" class="imgLogoEquipe"/>
								</v-flex>
							</v-layout> -->
						</v-flex>
					</div> 

					<img src="/images/barcelona_clickable.svg" usemap="#map">

					<map name="map">
						<area target="" alt="Museum" title="Museum" href="museum" coords="462,411,61" shape="circle" style="background-color: red; border: 1px solid black">
					</map>
					
                    <!-- <img src="/images/barcelona_clickable.png" usemap="#map" /> -->
                    <v-dialog
                        v-model="actionsModal"
                        max-width="800"
                    >
                        <ActionsCard :action="action" />
                    </v-dialog>
                <!-- </div> -->
                <!-- </v-layout> -->
            </div>
            
            <!-- Fixed Footer -->
            <div id="footer">
                <!-- <br /><br /><br />
                <h2>Footer</h2>
                <br /><br /><br /> -->

                    <div class="barreOrangered"></div>
                    <div class="barreBlack"></div>
                    <div id="dock-container">
                        <ul>
                            <li>
                                <nuxt-link to="/myresult"><img src="/images/menuResultat.png">
                                <span class="textMenu">Mes classements</span></nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/myinventory"><img src="/images/menuShop.png">
                                <span class="textMenu">Mes compétences</span></nuxt-link>
                            </li>
                            <li id="active">
                                <nuxt-link to="/gamemode"><img src="/images/menuHome.png">
                                <span class="textMenu">Aujourd'hui</span></nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/myfriends"><img src="/images/menuSocial.png">
                                <span class="textMenu">Mon inventaire</span></nuxt-link>
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
        /*flex-grow: 1;*/
        overflow-x: auto;
    }
    #footer {
        background-color: red;
        color: #fff;
        /*height: 100px;*/
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
	margin-left: 100px; 
	float: left; 
	margin-top: 4px;
	}
	.barreHeaderLeft2 {
	color: white; 
	padding: 4px; 
	float: left; 
	margin-top: 9px;
	}
	.barreHeaderRight {
	margin-right: 100px; 
	color: white; 
	padding: 4px; 
	float: right; 
	margin-top: 9px;
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
        background-color: orangered;
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
    .levelHeader {
        font-weight: 700;
        font-size: 36px;  /* Preferred icon size */
        background-color: orange;
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
			background-color: light-gray;;
			/*flex-grow: 1;*/
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
			max-height: 92px;
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
		.barreHeaderLeft1 {
		margin-left: 25px;
		margin-top: 3px;
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
		#avatar {
			background-color: orangered;
			border-right: 2px solid orangered;
			border-bottom: 2px solid orangered;
			box-shadow: 0 2px 2px black;
			height: 70px;
			width: 70px;
			border-radius: 0 0 100% 0;
		}
		.imgAvatar {
			height: 100%;
			width: 100%;
			border-radius: 0 0 100% 0;
		}
		#team {
			background-color: orangered;
			border-left: 2px solid orangered;
			border-bottom: 2px solid orangered;
			box-shadow: 0 2px 2px black;
			height: 70px;
			width: 70px;
			border-radius: 0 0 0 100%;
		}
		.imgTeam {
			height: 100%;
			width: 100%;
			border-radius: 0 0 0 100%;
		}
		.imgTeamSmall {
			height: 12px;
			margin-top: 0;
		}
		.levelHeader {
			font-weight: 700;
			font-size: 12px;  /* Preferred icon size */
			background-color: orange;
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
