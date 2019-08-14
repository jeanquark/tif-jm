<template>
    <!-- <v-container> -->
    <v-container fluid fill-height style="padding: 0px; max-width: 1017px;">
        <v-layout align-center justify-center>
            <v-flex xs12 style="background: #EEEEEE;">

                <!-- <h2 class="text-xs-center">Event page</h2>
                <nuxt-link to="/user/events">Back to user events page</nuxt-link><br />
                loadedEvent: {{ loadedEvent }}<br /><br />-->
                <!-- loadedUser: {{ loadedUser }}<br /><br /> -->
                <!-- loadedEvent: {{ loadedEvent }}<br /><br /> -->
                <!-- loadedEventUsers: {{ loadedEventUsers }}<br /><br /> -->
                <!-- loadedEventActions: {{ loadedEventActions }}<br /><br /> -->
                <!-- loadedCompletedEventActions: {{ loadedCompletedEventActions }}<br /><br /> -->
                <!-- loadedActions: {{ loadedActions }}<br /><br />-->
                <!-- event ID: {{ loadedEvent.id }}<br /><br /> -->
                <!-- loadedEventUserActions: {{ loadedEventUserActions }}<br /><br /> -->
                <!-- loadedEventActionsUserNotification: {{ loadedEventActionsUserNotification }}<br /><br /> -->
                <!-- completionRate: {{ completionRate }}<br /><br /> -->
                <!-- loadedEventHomeTeamNotifications: {{ loadedEventHomeTeamNotifications }}<br /><br /> -->
                <!-- loadedEventVisitorTeamNotifications: {{ loadedEventVisitorTeamNotifications }}<br /><br /> -->

                <GamemodeHeader />

                <v-layout row wrap class="">
                    <v-flex xs3 class="pt-2" style="">
                        <v-layout justify-center align-center style="background: yellow;">
							<v-img :src="`/images/teams/${loadedEvent.homeTeam_slug}.png`" max-width="40" class="mr-2"></v-img> fans ({{ loadedEventUsersHomeTeam.length }})
                        </v-layout>
						<v-layout justify-center my-2>
							<transition name="fadeIn" mode="out-in">
								<div :key="loadedEvent.homeTeam_notification">
									{{ loadedEvent.homeTeam_notification }}
								</div>
							</transition>
						</v-layout>
                        <transition-group tag="div" name="fade">
                            <v-avatar v-for="user in loadedEventUsersHomeTeam" :key="user.id" :size="42" class="ma-2">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-img :src="user.picture" v-on="on"></v-img>
                                    </template>
                                    <span>{{ user.username }} - level {{ user.level }}</span>
                                </v-tooltip>
                            </v-avatar>
                        </transition-group>
                    </v-flex>
                    <v-flex xs6 class="pt-2" style="background: #fff;">
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
                            <v-flex xs12>
                                <v-progress-linear :value="loadedEvent.homeTeam_pf * 100 / (loadedEvent.homeTeam_pf + loadedEvent.visitorTeam_pf)" height="10"></v-progress-linear>
                            </v-flex>
                            <v-flex xs12 class="text-xs-center">
                                {{ loadedEvent.homeTeam_pf + loadedEvent.visitorTeam_pf }} PF
                            </v-flex>
                        </v-layout>
                        <v-layout align-center class="pa-3" v-if="loadedEventActionsUserNotification">
                            <v-avatar :tile="false" :size="30" class="mr-2">
                                <img :src="loadedEventActionsUserNotification.picture" alt="avatar">
                            </v-avatar>
                            {{ loadedEventActionsUserNotification.username }} has joined your action {{ loadedEventActionsUserNotification.action }}!
                        </v-layout>
                        <v-layout row wrap class="my-3">
                            <v-flex xs12>
                                <h3 class="text-xs-center">Completed actions:</h3>
                            </v-flex>
                            <v-flex xs4 v-for="action in loadedCompletedEventActions" :key="action.id" class="pa-3">
                                <v-card>
                                    <v-img :src="`/images/eventActions/${action.image}`"></v-img>
                                    <v-card-title>
                                        <v-layout justify-center>
                                            {{ action.name }} by {{ action.username }}
                                        </v-layout>
                                    </v-card-title>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex xs3 class="pt-2" style="">
                        <v-layout justify-center align-center style="background: yellow;">
                            <v-img :src="`/images/teams/${loadedEvent.visitorTeam_slug}.png`" max-width="40" class="mr-2"></v-img> fans ({{ loadedEventUsersVisitorTeam.length }})
                        </v-layout>
						<v-layout justify-center my-2>
							<transition name="fadeIn" mode="out-in">
								<div :key="loadedEvent.visitorTeam_notification">
									{{ loadedEvent.visitorTeam_notification }}
								</div>
							</transition>
						</v-layout>
                        <transition-group tag="div" name="fade">
                            <v-avatar v-for="user in loadedEventUsersVisitorTeam" :key="user.id" :size="42" class="ma-2">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-img :src="user.picture" v-on="on"></v-img>
                                    </template>
                                    <span>{{ user.username }} - level {{ user.level }}</span>
                                </v-tooltip>
                            </v-avatar>
                        </transition-group>
                        <h3 class="text-xs-center">Take an action:</h3>
                        <v-layout row wrap>
                            <v-carousel :hide-delimiter-background="true" :hide-delimiters="true" :show-arrows="true" :show-arrows-on-hover="true" height="220" style="box-shadow: none;">
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
                                <h3 class="text-xs-center">Ongoing actions:</h3>
                            </v-flex>
                            <v-flex xs12 v-for="action in loadedEventActions" :key="action.id" class="pa-2">
                                <v-card flat :class="[action.type]" v-if="!action.completed">
                                    <v-img :src="`/images/eventActions/${action.image}`"></v-img>
                                    <v-card-actions class="justify-center">
                                        <v-layout row wrap>
                                            <v-flex xs12 class="text-xs-center">
                                                {{ action.name }}
                                            </v-flex>
                                            <v-flex xs12 class="text-xs-center" v-if="action.type === 'collective'">
                                                <v-layout row wrap align-center>
                                                    <v-flex xs8>
                                                        <v-progress-linear :value="(action.usersCount/action.min_participants_count) * 100"></v-progress-linear>
                                                    </v-flex>
                                                    <v-flex xs4>
                                                        {{ (action.usersCount/action.min_participants_count) * 100 }}%
                                                        <span v-if="action.completed">COMPLETED!</span>
                                                    </v-flex>
                                                </v-layout>
                                            </v-flex>
                                            <v-flex xs12 class="text-xs-center">
                                                <v-btn color="primary" small class="mb-2" @click.stop="joinAction(action)" v-if="loadedEventActions[action.id]['users'] && !loadedEventActions[action.id]['users'][loadedUser.id]">Join!</v-btn><br />
                                                launched by {{ action.username }}
                                                at {{ action._created_at | moment('HH:mm') }}<br />
                                                Participants: {{ action.usersCount || 0 }}<br />
                                            </v-flex>
                                        </v-layout>
                                    </v-card-actions>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>


				<!-- Select side modal -->
                <v-dialog v-model="selectSideModal" width="500" lazy :persistent="true">
					<SelectSide :event="loadedEvent" :message="message" @selectSide="onSelectSide" />
                </v-dialog>


                <!-- Action modal -->
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
	import SelectSide from '~/components/SelectSide'
	import EventAction from '~/components/EventAction'
	export default {
		beforeRouteLeave(to, from, next) {
			console.log('to: ', to)
			console.log('from: ', from)
			// Set inactive user
			const isFanHomeTeam = this.loadedEvent['users'][this.loadedUser.id]['team'] === this.loadedEvent.homeTeam_slug
			this.$store.dispatch('events/removeUserFromEvent', { eventId: this.loadedEvent.id, user: this.loadedUser, isFanHomeTeam })
			next()
		},
		components: { GamemodeHeader, SelectSide, EventAction },
		layout: 'layoutGamemode',
		async created() {
			try {
				const eventId = this.$route.params.id
				await this.$store.dispatch('events/fetchEvent', eventId)

				// this.$store.commit('events/clearEventHomeTeamNotifications')
				// this.$store.commit('events/clearEventVisitorTeamNotifications')

				const userTeams = this.$store.getters['userTeams/loadedUserTeams']
				console.log('userTeams: ', userTeams)
				const fanHomeTeam = userTeams.find(team => team.slug === this.loadedEvent.homeTeam_slug)
				const fanVisitorTeam = userTeams.find(team => team.slug === this.loadedEvent.visitorTeam_slug)

				if (fanHomeTeam && fanVisitorTeam) {
					console.log('User is fan of both teams!')
					this.message = 'You are fan of both teams. Pick your preference for this game.'
					this.selectSideModal = true
				} else if (fanHomeTeam) {
					console.log('User is fan of home team!')
					await this.onSelectSide({ eventId: this.loadedEvent.id, teamId: this.loadedEvent.homeTeam_slug, isFanHomeTeam: true })
					// this.$store.dispatch('events/addUserToEvent', { eventId, teamId: this.loadedEvent.homeTeam_slug, isFanHomeTeam: true })
				} else if (fanVisitorTeam) {
					console.log('User is fan of visitor team!')
					await this.onSelectSide({ eventId: this.loadedEvent.id, teamId: this.loadedEvent.visitorTeam_slug, isFanHomeTeam: false })
					// this.$store.dispatch('events/addUserToEvent', { eventId, teamId: this.loadedEvent.visitorTeam_slug, isFanHomeTeam: false })
				} else {
					this.selectSideModal = true
					this.message = 'You are not fan of either team. Pick a side for this game.'
				}

				// Add user to event if not already present
				// if (!this.loadedEvent['users'] || !this.loadedEvent['users'][this.loadedUser.id]) {
				// 	console.log('Add user to event')
				// 	this.selectSideModal = true
				// 	// this.$store.dispatch('events/addUserToEvent', eventId)
				// }

				await this.$store.dispatch('eventActions/fetchEventActions')
				this.$store.commit('events/setEventActionsUserNotification', null)
			} catch (error) {
				console.log('error: ', error)
			}
		},
		data() {
			return {
				eventActionModal: false,
				selectSideModal: false,
				selectedAction: {},
				joinActionSuccess: false,
				completionRate: {},
				message: ''
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
				// return this.$store.getters['events/loadedEvent']['users']
				// .filter(user => user.team === 'neuchatel_xamax_fc')
				const usersObject = this.$store.getters['events/loadedEvent']['users']
				if (usersObject) {
					return Object.keys(usersObject).map(k => usersObject[k])
				}
				return []
			},
			loadedEventUsersHomeTeam() {
				return this.loadedEventUsers.filter(user => user.team === this.loadedEvent.homeTeam_slug && user.active)
			},
			loadedEventUsersVisitorTeam() {
				return this.loadedEventUsers.filter(user => user.team === this.loadedEvent.visitorTeam_slug && user.active)
			},
			loadedEventActions() {
				return this.$store.getters['events/loadedEvent']['actions']
			},
			loadedCompletedEventActions() {
				const completedActions = []
				const allActions = this.$store.getters['events/loadedEvent']['actions']
				for (const action in allActions) {
					if (allActions[action].completed) {
						completedActions.push({
							...allActions[action],
							id: action
						})
					}
				}
				return completedActions
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
			},
			// loadedEventHomeTeamNotifications() {
			// 	return this.$store.getters['events/loadedEventHomeTeamNotifications']
			// },
			// loadedEventVisitorTeamNotifications() {
			// 	return this.$store.getters['events/loadedEventVisitorTeamNotifications']
			// }
		},
		methods: {
			selectAction(action) {
				console.log('selectAction: ', action)
				this.selectedAction = action
				this.eventActionModal = true
			},
			async onSelectSide(payload) {
				try {
					console.log('payload: ', payload)
					await this.$store.dispatch('events/addUserToEvent', payload)
					this.selectSideModal = false
				} catch (error) {
					console.log('error: ', error)
					this.selectSideModal = false
				}
			},
			async onTakeAction(action) {
				try {
					console.log('onTakeAction', action)
					this.eventActionModal = false
					await this.$store.dispatch('events/addActionToEvent', {
						eventId: this.loadedEvent.id,
						usersCount: Object.keys(this.loadedEventUsers).length,
						action
					})
					new Noty({
						type: 'success',
						text: 'Action created successfully!',
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
			async joinAction(action) {
				try {
					console.log('joinAction: ', action)
					await this.$store.dispatch('events/joinAction', {
						eventId: this.loadedEvent.id,
						homeTeam_pf: this.loadedEvent.homeTeam_pf,
						visitorTeam_pf: this.loadedEvent.visitorTeam_pf,
						usersCount: Object.keys(this.loadedEventUsers).length,
						action: action
					})
					// this.joinActionSuccess = true
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

	/* Transition effect */
	.fadeIn-enter-active {
		transition: 2s;
	}
	.fadeIn-enter-to {
		color: var(--v-primary-base);
	}
</style>