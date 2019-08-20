<template>
    <v-container fluid fill-height style="padding: 0px; max-width: 1017px;">
        <div id="overlay" @click="removeOverlay"></div>
        <v-layout align-center justify-center>
            <v-flex xs12 style="background: #EEEEEE;">

                <gamemode-header />

                <v-layout row wrap justify-center align-center class="my-4" style="">
                    <v-flex xs4 offset-xs2 class="text-xs-center">
                        <v-text-field name="username" label="Username" type="text" v-model="loadedUser.username"></v-text-field>
                    </v-flex>
                    <v-flex xs4>
                        <v-btn small color="success" @click.stop="updateUsername">Update username</v-btn>
                    </v-flex>
                    <v-flex xs12 class="mb-2 text-xs-center">
                        <h2>My Teams</h2>
                    </v-flex>
                    <v-flex xs12 sm6 md4 lg3 class="ma-2" v-for="team in loadedUserTeams" :key="team.slug">
                        <v-card class="ma-3 pt-2">
                            <v-img :src="`/images/teams/${team.image}`" :lazy-src="`/images/teams/${team.image}`" :aspect-ratio="1" class="ma-4 pa-2"></v-img>
                            <v-card-actions>
                                <v-layout row wrap justify-center align-center>
                                    <v-flex xs12 class="text-xs-center">
                                        {{ team.name }}
                                    </v-flex>
                                </v-layout>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>

                <v-layout row wrap justify-center align-center v-if="showSubscribeToPushNotificationsCheckbox">
                    <v-flex xs12>
                        <h3>For a full TIF experience, enable notifications!</h3>
                        <v-checkbox v-model="subscribeToPushNotificationsCheckbox" label="Get notified when your team scores" color="primary" @change="changePushNotificationsStatus()"></v-checkbox>
                        You can then select which event you would like to receive a notification for. You can also disable them anytime by the simple click of a button. Easy as that!
                        <b>Note:</b> Notifications are activated per device. To receive notifications on multiple devices, sign-in on each device, enable notifications, and make sure you're online. However, turning off notifications on one device will turn them off on all devices.
                    </v-flex>
                </v-layout>

				<v-layout justify-center v-else>
                	<v-btn color="default" class="elevation-0" :disabled="checkSubscriptionButtonLoading" @click="checkSubscription">Check my subscription status</v-btn><br />
				</v-layout>
					

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
	import GamemodeHeader from '~/components/GamemodeHeader'
	import Noty from 'noty'
	import axios from 'axios'
	export default {
		components: { GamemodeHeader },
		layout: 'layoutGamemode',
		async created() {
			if (this.loadedUserTeams.length < 1) {
				await this.$store.dispatch('userTeams/fetchUserTeams')
			}
		},
		mounted() {
			// Configure Web Push Notifications
			if (!('serviceWorker' in navigator)) {
				// Service Worker isn't supported on this browser, disable or hide UI.
				alert('Service Worker is not supported on this browser')
				return
			}

			if (!('PushManager' in window)) {
				// Push isn't supported on this browser, disable or hide UI.
				alert('Push is not supported on this browser')
				return
			}
			if (Notification.permission === 'default') {
				this.showSubscribeToPushNotificationsCheckbox = true
				// alert('Notifications default!')
			}
			if (Notification.permission === 'denied') {
				this.showSubscribeToPushNotificationsCheckbox = true
				// alert('Notifications denied!')
			}

			// Register Service Worker
			return navigator.serviceWorker
				.register('/sw.js')
				.then(function(registration) {
					console.log('Service worker successfully registered: ', registration)
					console.log('Notification.permission: ', Notification.permission)
					// Notification.requestPermission(function(result) {
					//  	console.log('result: ', result)
					// })
					// return new Promise(function(resolve, reject) {
					// 	const permissionResult = Notification.requestPermission(function(result) {
					// 		resolve(result)
					// 	})

					// 	if (permissionResult) {
					// 		permissionResult.then(resolve, reject)
					// 	}
					// }).then(function(permissionResult) {
					// 	if (permissionResult !== 'granted') {
					// 		throw new Error("We weren't granted permission.")
					// 	}
					// })

					return registration
				})
				.catch(function(err) {
					console.error('Unable to register service worker.', err)
				})
		},
		data() {
			return {
				subscribeToPushNotificationsCheckbox: false,
				showSubscribeToPushNotificationsCheckbox: false,
				checkSubscriptionButtonLoading: false
			}
		},
		computed: {
			loadedUser() {
				return this.$store.getters['users/loadedUser']
			},
			loadedUserTeams() {
				return this.$store.getters['userTeams/loadedUserTeams']
			}
		},
		methods: {
			async updateUsername() {
				try {
					await this.$store.dispatch('users/updateUser', this.loadedUser)
					new Noty({
						type: 'success',
						text: 'Username updated successfully!',
						timeout: 5000,
						theme: 'metroui'
					}).show()
				} catch (error) {
					console.log('error: ', error)
					new Noty({
						type: 'error',
						text: 'Sorry, an error occured and your username could not be updated.',
						timeout: 5000,
						theme: 'metroui'
					}).show()
				}
			},
			async changePushNotificationsStatus() {
				// console.log('onCheckboxChange', arguments)
				// console.log('subscribeToPushNotifications: ', this.subscribeToPushNotificationsCheckbox)
				if (this.subscribeToPushNotificationsCheckbox) {
					document.getElementById('overlay').style.display = 'block'
					const permissionResult = await this.askPermissionToPushNotifications()
					console.log('permissionResult: ', permissionResult)
					if (permissionResult === 'granted') {
						const pushSubscription = await this.subscribeToPushNotifications()
						console.log('pushSubscription: ', pushSubscription)
					}
					// let permission
					// Notification.requestPermission(function(result) {
					// 	console.log('result: ', result)
					// 	if (result === 'denied') {
					// 		// Show some GIF on how to enable notifications from the navigator
					// 		new Noty({
					// 			type: 'error',
					// 			text: 'You denied subscriptions!',
					// 			timeout: 5000,
					// 			theme: 'metroui'
					// 		}).show()
					// 	}
					// 	if (result === 'granted') {
					// 		new Noty({
					// 			type: 'success',
					// 			text: 'You are subscribed!',
					// 			timeout: 5000,
					// 			theme: 'metroui'
					// 		}).show()
					// 		this.subscribeToPushNotifications()
					// 	}
					// })
				}
				this.subscribeToPushNotificationsCheckbox = false
				this.showSubscribeToPushNotificationsCheckbox = false
				document.getElementById('overlay').style.display = 'none'
			},
			removeOverlay() {
				document.getElementById('overlay').style.display = 'none'
			},
			askPermissionToPushNotifications() {
				return new Promise(function(resolve, reject) {
					const permissionResult = Notification.requestPermission(function(result) {
						resolve(result)
					})

					// console.log('permissionResult: ', permissionResult)
					if (permissionResult) {
						permissionResult.then(resolve, reject)
					}
				}).then(function(permissionResult) {
					return permissionResult
				})
			},
			urlBase64ToUint8Array(base64String) {
				try {
					const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
					const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')
					const rawData = window.atob(base64)
					const outputArray = new Uint8Array(rawData.length)
					for (let i = 0; i < rawData.length; ++i) {
						outputArray[i] = rawData.charCodeAt(i)
					}
					return outputArray
				} catch (error) {
					throw error
				}
			},
			async subscribeToPushNotifications() {
				try {
					// Steps details: https://developers.google.com/web/fundamentals/push-notifications/subscribing-a-user

					// 1) Register Service Worker
					const registration = await navigator.serviceWorker.register('/sw.js')

					// 2) Subscribe a user with PushManager
					const subscribeOptions = {
						userVisibleOnly: true,
						applicationServerKey: this.urlBase64ToUint8Array('BIdvJRwfx8ZszCttOq2AAdlVNd_SviDOI3aYaJgSOkATP4RHu3QfKYyeJVuOFWdlGDnwRYRYZSFZNU2SENyMVRk')
					}
					const pushSubscription = await registration.pushManager.subscribe(subscribeOptions)
					console.log('Received PushSubscription: ', JSON.stringify(pushSubscription))

					// 3) Send subscription to the server
					const response = await axios.post('/push-notifications/create-subscription', {
						pushSubscription,
						userTeams: this.loadedUserTeams,
						userId: this.loadedUser.id
					})
					console.log('response: ', response)
					response.data.forEach(team => {
						new Noty({
							type: 'success',
							text: `You have successfully subscribed to the results of ${team.name} &#9786;`,
							timeout: 5000,
							theme: 'metroui'
						}).show()
					})
					return pushSubscription
				} catch (error) {
					throw error
				}
			},
			async checkSubscription(displayMessage = true) {
				try {
					console.log('Call to checkSubscription method')
					if (!navigator.serviceWorker) {
						new Noty({
							type: 'warning',
							text: 'Service worker not available on this navigator &#x2639;',
							timeout: 5000,
							theme: 'metroui'
						}).show()
						return
					}
					this.checkSubscriptionButtonLoading = true
					const reg = await navigator.serviceWorker.ready
					console.log('reg: ', reg)
					const pushSubscription = await reg.pushManager.getSubscription()
					console.log('pushSubscription: ', pushSubscription)
					if (!pushSubscription) {
						console.log('No subscription!')
						this.$store.dispatch('subscriptions/loadedUserSubscriptions', null)
						if (displayMessage) {
							new Noty({
								type: 'warning',
								text: 'You have no subscription at the moment &#x2639;',
								timeout: 5000,
								theme: 'metroui'
							}).show()
						}
						this.checkSubscriptionButtonLoading = false
						return false
					}
					console.log('Active subscription: ', pushSubscription)
					const subscriptions = await this.$store.dispatch('subscriptions/loadedUserSubscriptions', pushSubscription.endpoint)
					console.log('subscriptions: ', subscriptions)
					let array = []
					if (displayMessage) {
						if (subscriptions.length > 0) {
							subscriptions.forEach(function(subscription) {
								new Noty({
									type: 'success',
									text: `You are receiving notifications for ${subscription.team ? subscription.team.name : ''} &#9786;`,
									timeout: 5000,
									theme: 'metroui'
								}).show()
							})
						} else {
							new Noty({
								type: 'warning',
								text:
									'There seems to be a mismatch between your subscription status on the client on the one we have in our database. Please click the reload subscriptions button to solve.',
								timeout: 5000,
								theme: 'metroui'
							}).show()
						}
					}
					this.checkSubscriptionButtonLoading = false
				} catch (error) {
					console.log('error: ', error)
					this.checkSubscriptionButtonLoading = false
					if (displayMessage) {
						new Noty({
							type: 'warning',
							text: 'Sorry, an error occured and your subscription status could not be verified &#x2639;',
							timeout: 5000,
							theme: 'metroui'
						}).show()
					}
				}
			}
		}
	}
</script>

<style scoped>
	.hover {
		border: 2px solid var(--v-primary-base);
		cursor: pointer;
	}
	#overlay {
		position: fixed; /* Sit on top of the page content */
		display: none; /* Hidden by default */
		width: 100%; /* Full width (cover the whole page) */
		height: 100%; /* Full height (cover the whole page) */
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
		z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
		cursor: pointer; /* Add a pointer on hover */
	}
</style>
