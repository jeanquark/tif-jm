<template>
    <v-container>
        <h2 class="text-xs-center">Event page</h2>
        <nuxt-link to="/user/events">Back to user events page</nuxt-link><br />
        loadedEvent: {{ loadedEvent }}<br /><br />
        loadedEventUsers: {{ loadedEventUsers }}<br /><br />
		loadedActions: {{ loadedActions }}<br /><br />

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
						{{ loadedEvent.homeTeam_goals }} - 
						{{ loadedEvent.visitorTeam_goals }}
					</v-flex>
					<v-flex xs4 class="text-xs-right">
						{{ loadedEvent.visitorTeam_name }}
					</v-flex>
				</v-layout>
            </v-flex>
            <v-flex xs3 style="border: 1px solid red;">
                <h3 class="text-xs-center">Take an action</h3>
				<v-layout row wrap>
					<v-flex xs6 v-for="action in loadedActions" :key="action.id" class="pa-2">
						<v-hover>
							<v-card flat :class="[`elevation-${hover ? 10 : 0}`]" slot-scope="{ hover }" @click="selectAction(action)">
								<v-img :src="`/images/actions/${action.image}`"></v-img>
								<v-card-actions class="justify-center">
									{{ action.name }}
								</v-card-actions>
							</v-card>
						</v-hover>
					</v-flex>
				</v-layout>
				<v-layout row wrap>
					<v-flex xs12>
						<h3 class="text-xs-center">Join an action</h3>
					</v-flex>
					<v-flex xs6 v-for="action in loadedEventActions" :key="action.id" class="pa-2">
						<v-card flat>
							<v-img :src="`/images/actions/${action.image}`"></v-img>
							<v-card-actions class="justify-center">
								<!-- {{ action.name }} -->
								<v-btn small color="primary">Join in!</v-btn>
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

    </v-container>
</template>

<script>
	export default {
		layout: 'layoutFront',
		async created() {
			try {
				const eventId = this.$route.params.id
				await this.$store.dispatch('events/fetchEvent', eventId)

				// Add user to event if not already present
				if (
					!this.loadedEvent['users'] ||
					!this.loadedEvent['users'][this.loadedUser.id]
				) {
					console.log('Add user to event')
					this.$store.dispatch('events/addUserToEvent', eventId)
				}

				await this.$store.dispatch('eventActions/fetchEventActions')
			} catch (error) {
				console.log('error: ', error)
			}
		},
		data() {
			return {
				selectedAction: ''
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
			}
		},
		methods: {
			selectAction(action) {
				console.log('selectAction: ', action)
				this.$store.dispatch('events/addActionToEvent', { eventId: this.loadedEvent.id, action })
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
</style>