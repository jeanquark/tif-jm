<template>
	<!-- <img src="/images/loader2.gif" /> -->
	<v-layout align-center justify-center row fill-height style="background-color: black" v-cloak v-if="!loading">
		<v-flex>
            <v-container fluid style="max-width: 1017px; padding: 0px; border: 2px solid green;">
				<scoremode-header />
				<v-layout row wrap style="background-color: white; border: 2px solid darkred;">
                    <v-flex xs12 sm8 offset-sm2 my-4 style="border: 1px solid red;">
                        <v-card class="elevation-0">
							<v-card-title align-center justify-center style="background-color: orangered; min-height: 60px;">
                                <h2 class="white--text">{{ loadedTeam.name }}</h2>
                            </v-card-title>
							<v-card-text>
								<v-layout justify-center>
									<div>
										<img :src="`/images/teams/${loadedTeam.image}`" width="200" /><br />
									</div>
								</v-layout>
								<div>
									loadedTeam: {{ loadedTeam }}
								</div>
							</v-card-text>
                        </v-card>
                    </v-flex>
				</v-layout>
            </v-container>
		</v-flex>
	</v-layout>
</template>

<script>
	import ScoremodeHeader from '~/components/jm/ScoremodeHeader'
	export default {
		components: { ScoremodeHeader },
		layout: 'layoutScoreMode',
		async created () {
			await this.$store.commit('setLoading', true)
			const team = this.$route.params.id
			console.log('team: ', team)
			this.team = team
			await this.$store.dispatch('teams/fetchTeam', team)
			await this.$store.commit('setLoading', false)
		},
		data () {
			return {
				team: ''
			}
		},
		computed: {
			loading () {
				return this.$store.getters['loading']
			},
			loadedTeam () {
				return this.$store.getters['teams/loadedTeam']
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	[v-cloak] > * { 
		display:none; 
	}
</style>
		