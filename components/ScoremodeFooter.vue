<template>
	<!-- Fixed Footer -->
	<div id="footer">
		<div class="barreOrangered"></div>
		<div class="barreBlack"></div>
		<div id="dock-container">
			<ul>
				<li :class="{active: activePage === 'teams'}">
					<nuxt-link
						to="/teams"	
					>
						<img src="/images/menuTeam.png">
						<span class="textMenu">Equipes</span>
					</nuxt-link>
				</li>
				<li :class="{active: activePage === 'competitions'}">
					<nuxt-link
					 	to="/competitions"
					>
						<img src="/images/menuCompetition.png">
						<span class="textMenu">Compétitions</span>
					</nuxt-link>
				</li>
				<li :class="{active: activePage === 'scoremode_gm'}">
					<nuxt-link
					 	to="/scoremode_gm"
					>
						<img src="/images/menuHome.png">
						<span class="textMenu">Matches du jour</span>
					</nuxt-link>
				</li>
				<li :class="{active: activePage === 'players'}">
					<nuxt-link
					 	to="/players"
					>
						<img src="/images/menuPlayer.png">
						<span class="textMenu">Joueurs</span>
					</nuxt-link>
				</li>
				<li :class="{active: activePage === 'tifnews'}">
					<nuxt-link
						to="/tifnews"
					>
						<img src="/images/menuTifnews.png">
						<span class="textMenu">TIF News</span>
					</nuxt-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		mounted () {
			this.activePage = this.$route.path.substring(this.$route.path.lastIndexOf('/') + 1)
		},
		data() {
			return { 
				activePage: 'scoremode_gm'
			}
		},
		computed: {

		},
		methods: {

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
	color: #ffffff;
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
	top: 0px;
	left: 0px;
	background-color: black;
	z-index: 1;
	border-bottom: 3px solid orangered;
	position: sticky;
}
.header {
	position: relative;
}
.barreHeader {
	position: absolute;
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

.material-icons.md-18 {
	font-size: 18px;
}
.material-icons.md-24 {
	font-size: 24px;
}
.material-icons.md-36 {
	font-size: 36px;
}
.material-icons.md-48 {
	font-size: 48px;
}

.material-icons {
	font-family: "Material Icons";
	font-weight: normal;
	font-style: normal;
	font-size: 24px; /* Preferred icon size */
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
	font-feature-settings: "liga";
}

/* End Material Icons */

.levelHeader {
	font-weight: 700;
	font-size: 36px; /* Preferred icon size */
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

.fade-enter-active,
.fade-leave-active {
	transition: opacity 5s;
	background-color: #000;
}

.fade-enter,
.fade-leave-to {
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

#dock-container li.active img {
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
	-webkit-gradient: (
		linear,
		left top,
		left bottom,
		from(transparent),
		color-stop(0.7, transparent),
		to(rgba(255, 255, 255, 0.5))
	);
	-webkit-transition: all 0.3s;
	-webkit-transform-origin: 50% 100%;
}

#dock-container li:hover img {
	-webkit-transform: scale(1.65);
	margin: 0 0.5em;
}

#dock-container li:hover + li img,
#dock-container li.prev img {
	-webkit-transform: scale(1);
	margin: 0 0;
}

#dock-container li span {
	display: none;
	position: absolute;
	bottom: 0px;
	left: 0;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 5px;
}

#dock-container li.active span {
	display: none;
	position: absolute;
	bottom: 0px;
	left: 0;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 5px;
}

#dock-container li.active span {
	display: block;
	color: #fff;
}

#dock-container li.active .textMenu {
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
		font-size: 1em;
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
		-webkit-gradient: (
			linear,
			left top,
			left bottom,
			from(transparent),
			color-stop(0.7, transparent),
			to(rgba(255, 255, 255, 0.5))
		);
		-webkit-transition: all 0.3s;
		-webkit-transform-origin: 50% 100%;
	}

	#dock-container li:hover img {
		-webkit-transform: scale(1.65);
		margin: 0 0.5em;
	}

	#dock-container li:hover + li img,
	#dock-container li.prev img {
		-webkit-transform: scale(1);
		margin: 0 0;
	}

	#dock-container li span {
		display: none;
		position: absolute;
		bottom: 0px;
		left: 0;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 5px;
	}

	#dock-container li#active span {
		display: none;
		position: absolute;
		bottom: 0px;
		left: 0;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.5);
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
