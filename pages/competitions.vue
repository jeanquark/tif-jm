<template>
	<v-container fluid fill-height style="padding: 0px; max-width: 1017px;">
        <v-layout align-center justify-center>
            <v-flex xs12 style="background: #EEEEEE;">
				<gamemode-header />
				<v-layout row wrap>
					<v-flex xs12>
						<h2 class="text-xs-center">Mess with competitions file</h2><br />
					</v-flex>
					<v-flex xs4>
						<v-btn class="info" :loading="loading" @click="loadCompetitions">Load competitions from file</v-btn><br />
					</v-flex>
					<v-flex xs4>
						<v-btn class="warning" @click="addCompetition">Add competition Swiss Cup</v-btn>
					</v-flex>
					<v-flex xs4>
						<v-btn class="info" :loading="loading" @click="updateCompetitions">Update competitions file</v-btn><br />
					</v-flex>
					<v-flex xs12>
						competitions: {{ competitions }}
						<ul>
							<li v-for="competition in this.competitions" :key="competition.slug">
								{{ competition.name }}
							</li>
						</ul>
					</v-flex>
				</v-layout>
            </v-flex>
        </v-layout>
	</v-container>
</template>

<script>
	import axios from 'axios'
	import GamemodeHeader from '~/components/GamemodeHeader'
	export default {
		components: { GamemodeHeader },
		layout: 'layoutGamemode',
		async created() {},
		data() {
			return {
				competitions: []
			}
		},
		computed: {
			loading() {
				return this.$store.getters['loading']
			}
		},
		methods: {
			async loadCompetitions() {
				try {
					this.$store.commit('setLoading', true)
					console.log('loadCompetitions')
					const { data } = await axios.get('/competitions/fetch-competitions-file')
					const competitions = data
					console.log('competitions: ', competitions)
					console.log('competitions[0]: ', competitions[0])
					console.log('competitions[0].apifootball_id: ', competitions[0].apifootball_id)
					// this.competitions = data
					const competitionsArray = []
					data.forEach(competition => {
						competitionsArray.push(competition)
					})
					console.log('competitionsArray: ', competitionsArray)
					this.competitions = competitionsArray
				} catch (error) {
					console.log('error: ', error)
				} finally {
					this.$store.commit('setLoading', false)
				}
			},
			async updateCompetitions() {
				try {
					// console.log(JSON.stringify(this.competitions, null, 4))
					this.$store.commit('setLoading', true)
					// console.log('updateCompetitions')
					const { data } = await axios.post('/competitions/update-competitions-file', { competitions: this.competitions })
					const competitions = data
					console.log('competitions: ', competitions)
				} catch (error) {
					console.log('error: ', error)
				} finally {
					this.$store.commit('setLoading', false)
				}
			},
			async addCompetition() {
				this.competitions.push({
					name: 'Swiss Cup 2020',
					slug: 'switzerland_swiss_cup_2019_2020',
					apifootball_id: 100
				})
			}
		}
	}
</script>

<style scoped>
</style>