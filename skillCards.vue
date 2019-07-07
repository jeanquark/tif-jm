<template>
	<v-layout align-center justify-center row fill-height style="background-color: black">
		<v-flex xs12 sm10 md8 lg6>
			<v-card class="card">
				<v-card-title primary-title>
					<v-flex xs9>
						<span class="titleModalCards text-xs-left">Mes compétences - Influence</span>
					</v-flex>
					<v-flex xs3 hidden-xs-only class="text-xs-right">
						<fa :icon="['fas', 'arrow-circle-left']" size="2x" class="icon" @click="goBack" />
					</v-flex>
					<v-flex xs3 hidden-sm-and-up class="text-xs-right">
						<fa :icon="['fas', 'arrow-circle-left']" size="2x" class="icon" @click="goBack" />
					</v-flex>
				</v-card-title>

				<v-card-text class="card-text mx-2" style="padding: 0">
					<v-container fluid style="padding: 1px">
						<v-layout row wrap style="margin: 1px">
							<v-flex style="padding: 1px">
								<v-card style="background-color: none; border: 2px solid orangered; border-radius: 5px">
									<v-card-actions style="padding: 5px; text-align: center">
										<span class="fs24title">Baratin (Niv.1)</span>
										<v-spacer></v-spacer>
										<v-icon class="fs24">star</v-icon>
										<v-icon class="fs24">star</v-icon>
										<v-icon class="fs24">star</v-icon>
										<v-icon class="fs24">star</v-icon>
										<v-icon class="fs24">star</v-icon>
										<v-icon class="fs24">star</v-icon>
										<v-icon class="fs24">star</v-icon>
										<v-icon class="fs24">star</v-icon>
										<v-icon class="fs24">star</v-icon>
										<v-icon style="color: orangered" class="fs24">star</v-icon>
									</v-card-actions>
									<v-divider light></v-divider>
									<v-layout hidden-sm-and-up>
										<v-flex xs12>
											<v-card-title primary-title style="text-align: center; padding: 15px">
												<div>											
													<v-progress-linear class="progressOrange" color="rgb(255,69,0)" height="20" value="1" style="margin-top: 0; margin-bottom: 0"></v-progress-linear><span class="progress-bar-txt-white" style="top: -17px">1%</span>
													<div style="font-size: 12px; text-align: center; margin-bottom: 10px">Pénalty à la 93e de la finale de la coupe du monde… est-ce que tu oses regarder ?</div>
													<div style="background-color: green; padding: 8px 5px 5px 5px; text-align: center; margin-top: 20px; border-radius: 5px">
														<b>Dernière action débloquée :</b><br />
														Vendeur de voiturette de golf - Niv.1
													</div>
													<div style="background-color: orangered; padding: 8px 5px 5px 5px; text-align: center; margin-top: 10px; border-radius: 5px">
														<b>À débloquer :</b><br />
														Démineur - Niv.1 (Baratin - Niv.2 + Technologie - Niv.2)
													</div>
												</div>
											</v-card-title>
											<v-card-title primary-title class="text-xs-center" style="justify-content: center; padding: 0">
												<div>
													<img src="/images/stress.jpg" class="imgSkill" width="70%" />
												</div>
											</v-card-title>
										</v-flex>
									</v-layout>
									<v-layout hidden-xs-only>
										<v-flex xs5 style="text-align: center; padding: 5px">
											<img src="/images/stress.jpg" class="imgSkill" width="90%" />
										</v-flex>
										<v-flex xs7>
											<v-card-title primary-title style="text-align: center; padding: 15px">
												<div>											
													<v-progress-linear class="progressOrange" color="rgb(255,69,0)" height="20" value="1" style="margin-top: 10px; margin-bottom: 10px"></v-progress-linear><span class="progress-bar-txt-white" style="top: -27px">1%</span>
													<div style="font-size: 14px; text-align: center; margin-bottom: 10px">Pénalty à la 93e de la finale de la coupe du monde… est-ce que tu oses regarder ?</div>
													<div style="background-color: green; padding: 8px 5px 5px 5px; text-align: center; margin-top: 20px; border-radius: 5px">
														<b>Dernière action débloquée :</b><br />
														Vendeur de voiturette de golf - Niv.1
													</div>
													<div style="background-color: orangered; padding: 8px 5px 5px 5px; text-align: center; margin-top: 10px; border-radius: 5px">
														<b>À débloquer :</b><br />
														Démineur - Niv.1 (Baratin - Niv.2 + Technologie - Niv.2)
													</div>
												</div>
											</v-card-title>
										</v-flex>
									</v-layout>
								</v-card>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card-text>

				<v-card-actions class="card-footer">
					<v-flex class="text-xs-center">
						<v-btn nuxt color="error" to="/skillInfluence" class="elevation-1" style="margin-bottom: 20px">Retour</v-btn>
					</v-flex>
				</v-card-actions>
			</v-card>
		</v-flex>
	</v-layout>
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
				this.$router.replace("/skillInfluence")
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
font: normal 100%/1 "Acme", Helvetica, sans-serif;
}
.card {
background: linear-gradient(-45deg, #ffb76b 0%, #ffa73d 50%, #FF7C01 51%, #ff7f04 100%);
border-radius: 5px;
margin: 5px;
}
.card-text {
background-color: whitesmoke;
width: auto;
border-radius: 8px;
}
.card-footer {
margin-top: 20px;
}
.icon:hover {
cursor: pointer;
color: #fff;
}
.info {
opacity: 0;
transition: .5s ease;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
text-align: center;
background-color: orangered;
}
.card-img {
cursor: pointer;
opacity: 1;
transition: .5s ease;
backface-visibility: hidden;
}
.card-img:hover {
/* background-color: orangered; */
opacity: 0.3;
}
.card-img:hover .info{
/* background-color: orangered; */
opacity: 1;
}
.v-alert {
width: 100%;
}
.active {
background: orangered;
border: 6px solid orangered;
}
.progress-bar-txt-white {
	position: relative;
	font-size: 15px;
	top: -31px;
	z-index: 1;
	color: white;
	font-weight: 700;
}
.titleModalCards {
font-size: 2.0em; 
color: white; 
font-family: Acme;
}
.fs24 {
font-size: 24px;
}
.fs24title {
font-size: 24px;
}

    @media only screen and (max-width: 768px) {
	.titleModalCards {
	font-size: 1.5em; 
	}
	.fs24 {
	font-size: 14px;
	}
	.fs24title {
	font-size: 18px;
	}
}

</style>