<template>
    <!-- <v-container> -->
    <v-container fluid fill-height style="padding: 0px; max-width: 1017px;">
        <v-layout align-center justify-center>
            <v-flex xs12 style="background: #EEEEEE;">

                <!-- <h2 class="text-xs-center">Event page</h2>
                <nuxt-link to="/user/events">Back to user events page</nuxt-link><br />
                loadedEvent: {{ loadedEvent }}<br /><br />-->
				loadedUser: {{ loadedUser }}<br /><br />
                loadedEventUsers: {{ loadedEventUsers }}<br /><br />
				loadedEventActions: {{ loadedEventActions }}<br /><br />
                <!-- loadedActions: {{ loadedActions }}<br /><br />-->
                event ID: {{ loadedEvent.id }}<br /><br />
                loadedEventUserActions: {{ loadedEventUserActions }}<br /><br />
                loadedEventActionsUserNotification: {{ loadedEventActionsUserNotification }}<br /><br />

                <GamemodeHeader />

                <v-layout row wrap class="">
                    <v-flex xs3 class="pt-2" style="border: 1px solid orange;">
                        <h3 class="text-xs-center">Players</h3>
                        <transition-group tag="div" name="fade">
                            <v-avatar v-for="user in loadedEventUsers" :key="user.id" class="ma-2">
                                <!-- {{ user.id }} -->
                                <v-img :src="user.picture"></v-img>
                            </v-avatar>
                        </transition-group>
                    </v-flex>
                    <v-flex xs6 class="pt-2" style="border: 1px solid yellow; background: #fff;">
                        <h3 class="text-xs-center my-2">Event</h3>
                        <v-layout row wrap align-center class="pa-2">
                            <v-flex xs4 class="">

                                <v-layout row wrap justify-center>
                                    <v-flex xs12 class="text-xs-center mb-2">
                                        {{ loadedEvent.homeTeam_name }}
                                    </v-flex>
                                    <v-flex xs12 class="text-xs-center">
                                        <!-- <v-img :src="`/images/teams/${loadedEvent.homeTeam_slug}.png`" max-width="30" class=""></v-img> -->
                                        <img :src="`/images/teams/${loadedEvent.homeTeam_slug}.png`" width="40px" class="" />
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex xs4 class="text-xs-center">
                                {{ loadedEvent.homeTeam_goals }}
                                vs
                                {{ loadedEvent.visitorTeam_goals }}
                            </v-flex>
                            <v-flex xs4 class="justify-end">
                                <v-layout row wrap>
                                    <v-flex xs12 class="text-xs-center mb-2">
                                        {{ loadedEvent.visitorTeam_name }}<br />
                                    </v-flex>
                                    <v-flex xs12 class="text-xs-center">
                                        <img :src="`/images/teams/${loadedEvent.visitorTeam_slug}.png`" width="40px" />
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap justify-center class="mx-2">
                            <v-progress-linear value="50" height="10"></v-progress-linear>PF
                        </v-layout>

                    </v-flex>
                    <v-flex xs3 class="pt-2" style="border: 1px solid red;">
                        <h3 class="text-xs-center">Take an action</h3>
                        <v-layout row wrap>
                            <v-carousel :hide-delimiter-background="true" :hide-delimiters="true" :show-arrows="true" :show-arrows-on-hover="true" height="220">
                                <v-carousel-item v-for="action in loadedActions" :key="action.slug" class="carousel-item ma-2" :class="[action.type]" @click.stop="selectAction(action)">
                                    <v-img :src="`/images/eventActions/${action.image}`" :max-height="200"></v-img>
                                    <h3 class="text-xs-center mt-2">
                                        {{ action.name }}
                                    </h3>
                                </v-carousel-item>
                            </v-carousel>
                        </v-layout>
                        <v-layout row wrap class="mt-4">
                            <v-flex xs12>
                                <h3 class="text-xs-center">Ongoing actions</h3>
                            </v-flex>
                            <v-flex xs12 v-for="action in loadedEventActions" :key="action.id" class="pa-2">
                                <v-card flat :class="[action.type]">
                                    <v-img :src="`/images/eventActions/${action.image}`"></v-img>
                                    <v-card-actions class="justify-center">
                                        <v-layout row wrap>
                                            <v-flex xs12 class="text-xs-center">
                                                {{ action.name }}
                                            </v-flex>
                                            <v-flex xs12 class="text-xs-center" v-if="action.type === 'collective'">
                                                <v-layout row wrap align-center>
                                                    <v-flex xs8>
                                                        <v-progress-linear :value="calculateCompletionRate(action)"></v-progress-linear>
                                                    </v-flex>
                                                    <v-flex xs4>
                                                        {{ calculateCompletionRate(action) }}%
                                                    </v-flex>
                                                </v-layout>
                                            </v-flex>
                                            <v-flex xs12 class="text-xs-center">
                                                <!-- <v-icon color="primary" class="mr-2" @click.stop="joinAction(action)">videogame_asset</v-icon> -->
												<!--  -->
                                                <v-btn color="primary" small class="mb-2" @click.stop="joinAction(action)" v-if="loadedEventActions[action.id]['users'] && !loadedEventActions[action.id]['users'][loadedUser.id]">Join!</v-btn><br />
                                                <span class="my-2" v-if="joinActionSuccess"><b>10 tokens</b></span>
                                                launched by {{ action.username }}
                                                at {{ action._created_at | moment('HH:mm') }}<br />
                                                Participants: {{ action.usersCount || 0 }}<br />
												<!-- {{ loadedEventActions[action.id]['users'][loadedUser.id] }} -->
                                            </v-flex>
                                        </v-layout>
                                    </v-card-actions>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>

                <!-- Action Modal -->
                <v-dialog v-model="eventActionModal" width="500" lazy :persistent="false">
                    <EventAction :action="selectedAction" @takeAction="onTakeAction" />
                </v-dialog>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
	import Noty from 'noty'
	import GamemodeHeader from '~/components/GamemodeHeader'
	import EventAction from '~/components/EventAction'
	export default {
		components: { GamemodeHeader, EventAction },
		layout: 'layoutGamemode',
		async created() {
			try {
				const eventId = this.$route.params.id
				await this.$store.dispatch('events/fetchEvent', eventId)

				// Add user to event if not already present
				if (!this.loadedEvent['users'] || !this.loadedEvent['users'][this.loadedUser.id]) {
					console.log('Add user to event')
					this.$store.dispatch('events/addUserToEvent', eventId)
				}

				await this.$store.dispatch('eventActions/fetchEventActions')
				// await this.$store.dispatch('events/listenToEventUserActions', { eventId, actionId: '989498678_375' })
			} catch (error) {
				console.log('error: ', error)
			}
		},
		data() {
			return {
				eventActionModal: false,
				selectedAction: {},
				joinActionSuccess: false
			}
		},
		computed: {
			loadedUser() {
				return this.$store.getters['users/loadedUser']
			},
			loadedEvent() {
				return this.$store.getters['events/loadedEvent']
			},
			loadedEventUsers() {
				return this.$store.getters['events/loadedEvent']['users']
			},
			loadedEventActions() {
				return this.$store.getters['events/loadedEvent']['actions']
			},
			loadedActions() {
				return this.$store.getters['eventActions/loadedEventActions']
			},
			loadedEventUserActions() {
				// Convert object into array before applying filter
				const actionsObject = this.$store.getters['events/loadedEvent']['actions']
				if (actionsObject) {
					const actionsArray = Object.keys(actionsObject).map(k => actionsObject[k])
					return actionsArray.filter(action => action.userId === this.loadedUser.id)
				}
				return []
			},
			loadedEventActionsUserNotification() {
				return this.$store.getters['events/loadedEventActionsUserNotification']
			}
		},
		methods: {
			selectAction(action) {
				console.log('selectAction: ', action)
				this.selectedAction = action
				this.eventActionModal = true
			},
			onTakeAction(action) {
				try {
					console.log('onTakeAction', action)
					this.eventActionModal = false
					this.$store.dispatch('events/addActionToEvent', {
						eventId: this.loadedEvent.id,
						action
					})
					new Noty({
						type: 'success',
						text: 'Successfully created action!',
						timeout: 5000,
						theme: 'metroui'
					}).show()
				} catch (error) {
					console.log('error: ', error)
					new Noty({
						type: 'error',
						text: 'Sorry, an error occured and the action could not be created',
						timeout: 5000,
						theme: 'metroui'
					}).show()
				}
			},
			joinAction(action) {
				try {
					console.log('joinAction: ', action)
					this.$store.dispatch('events/joinAction', {
						eventId: this.loadedEvent.id,
						actionId: action.id
					})
					this.joinActionSuccess = true
					new Noty({
						type: 'success',
						text: 'Joined action successfully!',
						timeout: 5000,
						theme: 'metroui'
					}).show()
				} catch (error) {
					console.log('error: ', error)
					new Noty({
						type: 'error',
						text: 'Sorry, an error occured and you could not join the action.',
						timeout: 5000,
						theme: 'metroui'
					}).show()
				}
			},
			calculateCompletionRate(action) {
				const numberOfUsers = Object.keys(this.loadedEventUsers).length
				console.log('numberOfUsers: ', numberOfUsers)
				const completionThreshold = Math.ceil((numberOfUsers * action.min_participants_percent) / 100)
				console.log('completionThreshold: ', completionThreshold)
				return ((action.usersCount || 0) * 100) / completionThreshold
			}
		}
	}
</script>

<style scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 3s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
	.slide-fade-enter-active {
		transition: all 0.3s ease;
	}
	.slide-fade-leave-active {
		transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.slide-fade-enter, .slide-fade-leave-to
							/* .slide-fade-leave-active below version 2.1.8 */ {
		transform: translateX(10px);
		opacity: 0;
	}
	.carousel-item {
		cursor: pointer;
	}
	.individual {
		background: yellow;
	}
	.collective {
		background: green;
	}
</style>