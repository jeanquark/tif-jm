<template>
	<v-card class="elevation-12">
		<v-card-title
		    align-center
		    justify-center
		    class="card-title"
		>
			<h2 class="white--text">Login</h2>
		</v-card-title>
		<v-card-text class="card-text">
			<v-form>
				<v-alert
				    type="error"
				    :value="error"
				    v-if="error"
				    class="mb-4"
				>
					{{ $t(`auth-validation-rules.${error.code}`) }}
				</v-alert>
				<v-text-field
				    prepend-icon="person"
				    name="email"
				    label="Email"
				    type="email"
				    v-model="form.email"
				></v-text-field>
				<v-text-field
				    id="password"
				    prepend-icon="lock"
				    name="password"
				    label="Password"
				    type="password"
				    v-model="form.password"
				></v-text-field>
			</v-form>
		</v-card-text>
		<v-card-actions class="card-actions">
			<v-layout
                row
                wrap
                justify-center
			>
				<v-flex
				    xs12
				    class="text-xs-center mb-3"
				>

					<v-btn
					    color="success"
					    @click="signUserIn"
					>Login</v-btn>
				</v-flex>
				<v-flex
				    xs12
				    sm6
				    class="pa-2"
				>
					<v-btn
					    block
					    color="#df4a32"
					    class="white--text"
					    :loading="loadingGoogle"
					    @click="signInWithGoogle"
					>Login with Google&nbsp;
						<font-awesome-icon :icon="['fab', 'google']" />
					</v-btn>
				</v-flex>
				<v-flex
				    xs12
				    sm6
				    class="pa-2"
				>
					<v-btn
					    block
					    color="#3c5a99"
					    class="white--text"
					    :loading="loadingFacebook"
					>Login with Facebook&nbsp;
						<font-awesome-icon :icon="['fab', 'facebook-f']" />
					</v-btn>
				</v-flex>

                
                <v-btn
                    flat
                    color="primary"
                    class="mt-3"
                    @click.stop="switchToRegister"
                >
                    Switch to register
                </v-btn>

                <v-btn
                    flat
                    color="primary"
                    class="mt-3"
                    @click.stop="closeLoginModal"
                >Cancel</v-btn>

			</v-layout>
		</v-card-actions>
	</v-card>
</template>

<script>
	export default {
		mounted() {
			this.$store.commit('clearError')
		},
		data() {
			return {
				form: {
					email: '',
					password: ''
				},
				loadingGoogle: false,
				loadingFacebook: false
			}
		},
		computed: {
			error() {
				return this.$store.getters['error']
			}
		},
		methods: {
			signUserIn() {
				console.log('Sign user in')
				this.$store.dispatch('firebase-auth/signUserIn', this.form)
			},
			async signInWithGoogle() {
				try {
					console.log('signInWithGoogle')
					this.loadingGoogle = true
					await this.$store.dispatch(
						'firebase-auth/signInWithGooglePopup'
					)
					new Noty({
						type: 'success',
						text: 'Login went successfully!',
						timeout: 5000,
						theme: 'metroui'
					}).show()
					this.$router.replace('/gamemode')
					this.$store.commit('closeLoginModal')
				} catch (error) {
					console.log('error: ', error)
					new Noty({
						type: 'error',
						text: 'Sorry, an error occured and you could not log in.',
						timeout: 5000,
						theme: 'metroui'
					}).show()
				} finally {
					this.loadingGoogle = false
				}
			},
			async signInWithFacebook() {
				try {
					console.log('signInWithFacebook')
					this.loadingFacebook = true
					await this.$store.dispatch(
						'firebase-auth/signInWithFacebookPopup'
					)
					new Noty({
						type: 'success',
						text: 'Login went successfully!',
						timeout: 5000,
						theme: 'metroui'
					}).show()
					this.$router.replace('/gamemode')
				} catch (error) {
					console.log('error: ', error)
					new Noty({
						type: 'error',
						text: 'Sorry, an error occured and you could not log in.',
						timeout: 5000,
						theme: 'metroui'
					}).show()
				} finally {
					this.loadingFacebook = false
				}
            },
            closeLoginModal() {
				return this.$store.commit('closeLoginModal')
			},
			switchToRegister() {
				this.$store.commit('closeLoginModal')
				this.$store.commit('openRegisterModal')
			}
		}
	}
</script>

<style scoped>
	.card-title {
		background: var(--v-primary-base);
	}
	.card-text {
	}
	.card-actions {
	}
</style>