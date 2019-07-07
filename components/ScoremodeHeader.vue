<template>
		<div id="header" class="header">
			<v-layout row>
				<v-flex hidden-sm-and-down class="barreHeader">
					<v-layout row>
						<v-flex xs6 sm6 md6>
							<span class="barreHeaderLeft1">Utilisateur invité</span>
						</v-flex>
						<v-flex xs6 sm6 md6>
							<span class="barreHeaderRight">Supporter vos équipes ! Gérer votre fan !</span>
						</v-flex>
					</v-layout>
				</v-flex>
				<v-flex hidden-md-and-up class="barreHeader">
					<v-layout row>
						<v-flex xs6 sm6 md6>
							<span class="barreHeaderLeft1">Utilisateur invité</span>
						</v-flex>
						<v-flex xs6 sm6 md6>
							<span class="barreHeaderRight">Supporter vos équipes !</span>
						</v-flex>
					</v-layout>
				</v-flex>
				<v-flex shrink>
				<nuxt-link to="/">
					<div id="avatar">
						<img src="/images/tifLogo.png" class="imgAvatar" />
					</div>
				</nuxt-link>
				</v-flex>
				<v-flex hidden-sm-and-down grow>
					<v-layout row>
						<v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader1">
							<div class="headerLogo">
								<span class="chiffres">1</span><br />
								<span class="activity">sport</span>
							</div>
						</v-flex>
						<v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
							<div class="headerLogo">
								<span class="chiffres">6</span><br />
								<span class="activity">compétitions</span>
							</div>
						</v-flex>
						<v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
							<div class="headerLogo">
								<span class="chiffres">130</span><br />
								<span class="activity">équipes</span>
							</div>
						</v-flex>
						<v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
							<div class="headerLogo">
								<span class="chiffres">769</span><br />
								<span class="activity">fans</span>
							</div>
						</v-flex>
					</v-layout>
				</v-flex>
				<v-flex hidden-md-and-up grow>
					<v-layout row>
						<v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader1">
							<div class="headerLogo">
								<span class="chiffres">1</span><br />
								<span class="activity">sport</span>
							</div>
						</v-flex>
						<v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
							<div class="headerLogo">
								<span class="chiffres">6</span><br />
								<span class="activity">compét'</span>
							</div>
						</v-flex>
						<v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
							<div class="headerLogo">
								<span class="chiffres">130</span><br />
								<span class="activity">équipes</span>
							</div>
						</v-flex>
						<v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
							<div class="headerLogo">
								<span class="chiffres">769</span><br />
								<span class="activity">fans</span>
							</div>
						</v-flex>
					</v-layout>
				</v-flex>  
				<v-flex shrink>
					<nuxt-link to="/gamemode_jm">
					<div id="team">
						<img src="/images/scoremodeLogo.png" class="imgTeam" />
					</div>
					</nuxt-link>
				</v-flex>
			</v-layout>
		</div>
		
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        computed: {
            
        }
    }
</script>

<style scoped>
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
        background-color: light-gray;;
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
        height: 25px;
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
        box-shadow: 0 3px 5px black;
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
        box-shadow: 0 3px 5px black;
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
	.headerLogo {
	padding: 20px 0;
	}
	.chiffres {
	font-size: 2.5em;
	color: orangered;
	font-weight: 700;
	}
	.activity {
	font-size: 1.5em;
	color: white;
	text-transform: uppercase;
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
			padding-top: 0;
			background-color: black;
			border: 1px solid orangered;			
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
			height: 135px;
			padding: 0;
			top:0px;
			left:0px;
			background-color: black;
			z-index: 1;
			position: sticky;
			border-bottom: none;
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
		.tabGreenMenu {
		font-size: 1em;
		height: 30px;
		}
		.barreHeaderLeft1 {
		margin-left: 25px;
		margin-top: 4px;
		color: white;
		padding: 6px;
		font-size: 1.0em;
		}
		.barreHeaderLeft2 {
		color: white; 
		padding: 4px;
		margin-top: 4px;
		font-size: 1.0em;
		}
		.barreHeaderRight {
		margin-right: 25px; 
		color: white; 
		padding: 4px; 
		float: right; 
		margin-top: 4px;
		font-size: 1.0em;
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
		font-weight: 700;
		}
		.activity {
		font-size: 1.1em;
		color: white;
		text-transform: uppercase;
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
		.chiffres {
		font-size: 1.2em;
		}
		
		.activity {
		font-size: 0.8em;
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
