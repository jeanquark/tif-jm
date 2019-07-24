<template>
    <v-container>
        <h2 class="text-xs-center">Event page</h2>
        <nuxt-link to="/user/events">Back to user events page</nuxt-link><br />
        loadedEvent: {{ loadedEvent }}<br /><br />
        loadedEventUsers: {{ loadedEventUsers }}<br /><br />
        loadedActions: {{ loadedActions }}<br /><br />
        loadedEventUserActions: {{ loadedEventUserActions }}<br /><br />
        loadedEventActionsUserNotification: {{ loadedEventActionsUserNotification }}<br /><br />

        <v-layout row wrap>
            <v-flex xs3 style="border: 1px solid orange;">
                <h3 class="text-xs-center">Players</h3>
                <transition-group tag="div" name="fade">
                    <v-avatar v-for="user in loadedEventUsers" :key="user.id" class="ma-2">
                        <v-img :src="user.picture"></v-img>
                    </v-avatar>
                </transition-group>
            </v-flex>
            <v-flex xs6 style="border: 1px solid yellow;">
                <h3 class="text-xs-center">Event</h3>
                <v-layout row wrap class="pa-2">
                    <v-flex xs4 class="text-xs-left">
                        {{ loadedEvent.homeTeam_name }}
                    </v-flex>
                    <v-flex xs4 class="text-xs-center">
                        {{ loadedEvent.homeTeam_goals }} vs
                        {{ loadedEvent.visitorTeam_goals }}
                        id: {{ loadedEvent.id }}
                        <v-progress-linear value="50"></v-progress-linear>PF
                    </v-flex>
                    <v-flex xs4 class="text-xs-right">
                        {{ loadedEvent.visitorTeam_name }}
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs3 style="border: 1px solid red;">
                <h3 class="text-xs-center">Take an action</h3>
                <v-layout row wrap>
                    <!-- <v-flex xs6 v-for="action in loadedActions" :key="action.id" class="pa-2">
						<v-hover>
							<v-card flat :class="[`elevation-${hover ? 10 : 0}`, action.type]" slot-scope="{ hover }" @click="selectAction(action)">
								<v-img :src="`/images/eventActions/${action.image}`"></v-img>
								<v-card-actions class="justify-center">
									{{ action.name }}
								</v-card-actions>
							</v-card>
						</v-hover>
					</v-flex> -->
                    <v-carousel :hide-delimiter-background="true" :hide-delimiters="true" :show-arrows="true" :show-arrows-on-hover="true" height="220">
                        <v-carousel-item v-for="action in loadedActions" :key="action.slug" class="carousel-item ma-2" :class="[action.type]" @click.stop="selectAction(action)">
                            <!-- <v-sheet height="100%" tile> -->
                            <!-- <v-layout align-center fill-height justify-center> -->
                            <v-img :src="`/images/eventActions/${action.image}`" :max-height="200"></v-img>
                            <h3 class="text-xs-center mt-2">
                                {{ action.name }}
                            </h3>
                            <!-- </v-layout> -->
                            <!-- </v-sheet> -->
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
                                    <v-flex xs12 v-if="action.type === 'collective'">
                                        <v-progress-linear :value="calculateCompletionRate(action)"></v-progress-linear>
										{{ calculateCompletionRate(action) }}%
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-icon color="primary" class="mr-2" @click.stop="joinAction(action)">videogame_asset</v-icon>
										<span v-if="joinActionSuccess"><b>10 tokens</b></span>
                                        launched by {{ action.username }}<br />
                                        at {{ action._created_at | moment('HH:mm') }}<br />
                                        participants: {{ action.usersCount || 0 }}
                                    </v-flex>
                                </v-layout>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
                <!-- <v-autocomplete
					name="country"
					:items="loadedActions"
					chips
					color="blue-grey lighten-2"
					item-text="name"
					:return-object="true"
					v-model="selectedAction"
				>
					<template
						slot="item"
						slot-scope="data"
					>
						<template v-if="typeof data.item !== 'object'">
							<v-list-tile-content v-text="data.item"></v-list-tile-content>
						</template>
						<template v-else>
							<v-list-tile-avatar>
								<img :src="`/images/actions/${data.item.image}`">
							</v-list-tile-avatar>
							<v-list-tile-content>
								<v-list-tile-title v-html="data.item.name"></v-list-tile-title>
							</v-list-tile-content>
						</template>
					</template>
				</v-autocomplete> -->
            </v-flex>
        </v-layout>

        <!-- Action Modal -->
        <v-dialog v-model="eventActionModal" width="500" lazy :persistent="false">
            <EventAction :action="selectedAction" @takeAction="onTakeAction" />
        </v-dialog>
        eventActionModal: {{ eventActionModal }}
    </v-container>
</template>

<script>
	import Noty from 'noty'
	import EventAction from '~/components/EventAction'
	export default {
		components: { EventAction },
		layout: 'layoutFront',
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
				console.log('onTakeAction', action)
				this.eventActionModal = false
				this.$store.dispatch('events/addActionToEvent', {
					eventId: this.loadedEvent.id,
					action
				})
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
				const completionThreshold = Math.ceil(numberOfUsers * action.min_participants_percent / 100)
				console.log('completionThreshold: ', completionThreshold)
				return (action.usersCount || 0) * 100 / completionThreshold
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