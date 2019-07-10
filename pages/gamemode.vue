<template>
	<v-app>
		<h1>Gamemode</h1>
		<p>
			loadedUser: {{ loadedUser }}<br /><br />
			<!-- loadedTeams['spanish_la_liga_2018_2019']: {{ loadedTeams['spanish_la_liga_2018_2019'] }}<br /><br /> -->
			<!-- loadedTeams['english_premier_league_2018_2019']: {{ loadedTeams['english_premier_league_2018_2019'] }}<br /><br /> -->
		</p>
		<v-btn class="warning" @click.stop="logout">Logout</v-btn>
		<v-btn @click="fetchTeamsByCompetition('spanish_la_liga_2018_2019')">Fetch spanish la Liga teams</v-btn>
		<v-btn @click="fetchTeamsByCompetition('english_premier_league_2018_2019')">Fetch english Premier League teams</v-btn>
	</v-app>
</template>

<script>
	export default {
		async created () {
			// await this.$store.dispatch('teams/fetchTeams', 'spain')
		},
		data () {
			return {

			}
		},
		computed: {
			loadedUser () {
				return this.$store.getters['users/loadedUser']
			},
			loadedTeams () {
				return this.$store.getters['teams/loadedTeams']
			}
		},
		methods: {
			async logout () {
				await this.$store.dispatch('firebase-auth/signOut')
				this.$router.push('/')
			},
			fetchTeamsByCompetition (competition) {
				this.$store.dispatch('teams/fetchTeamsByCompetition', competition)
			}
		}
	}
</script>

<style scoped>
</style>
