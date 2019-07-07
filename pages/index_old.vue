<template>
	<v-app style="background-color: #000;">
		<v-content>
			<v-container grid-list text-xs-center style="background-color: orangered; padding: 0; height: 100%; max-width: 1000px;">
				<v-layout align-center column justify-center fill-height style="height: 50%; margin: auto; position: relative" class="text-xs-center">
					<v-flex class="language" style="position: absolute; top: 10px; right: 10px">
						<nuxt-link v-for="locale in $i18n.locales" v-if="locale.code !== $i18n.locale" :key="locale.code" :to="switchLocalePath(locale.code)" style="color: white; text-decoration: none">{{ locale.name }} - </nuxt-link>
					</v-flex>
					<v-flex class="register" style="position: absolute; top: 10px; left: 10px">
						<v-btn @click="loginModal = true" v-if="!loadedUser">Login</v-btn>
						<v-btn @click="logout" v-else>Logout</v-btn>
						<v-btn @click="registerModal = true">Register</v-btn>
					</v-flex>
					<!-- <v-btn nuxt to="/scoremode" round color="black" dark large>Score Mode</v-btn> -->
					<v-btn nuxt to="/scoremode_gm" round color="black" dark large style="z-index: 10;">Score Mode GM</v-btn>
					<v-btn nuxt to="/scoremode_jm" round color="black" dark large style="z-index: 10;">Score Mode JM</v-btn>
					<v-btn nuxt to="/resume_page" round color="black" dark large style="z-index: 10;">Résumé des pages (en cours)</v-btn>
					<p>{{ $t('pages.index.explanation') }}</p>
					<span class="tif1">TIF</span>
				</v-layout>
				<v-layout align-center column justify-center fill-height style="height: 50%; margin: auto; background-color: #fff; color: orange; position: relative" class="text-xs-center">
					<!-- <span class="tif2">TIF</span> -->
					<!-- <p style="margin-bottom: 0">{{ $t('pages.index.explanation') }}</p> -->
					<!-- <nuxt-link to="/login">Login</nuxt-link> -->
					<!-- <nuxt-link to="/register">Register</nuxt-link> -->
					<!-- <v-btn color="success">Success</v-btn> -->
					<v-btn color="default" nuxt to="/gamemode_gm">Game Mode GM</v-btn>
					<v-btn color="default" nuxt to="/gamemode_jm">Game Mode JM</v-btn>
					<!-- <nuxt-link to="user/avatar">Avatar</nuxt-link> -->
					<nuxt-link to="/admin">Admin</nuxt-link>
					loadedUser: {{ loadedUser }}<br />
					<!-- <v-btn round large color="deep-orange" dark @click="signInWithGoogle">Game Mode</v-btn> -->
					<v-dialog v-model="loginModal" width="600">
						<Login v-on:loginChildToParent="switchToRegister" v-if="loginModal" />
					</v-dialog>
					<v-dialog v-model="registerModal" width="600">
						<Register v-on:registerChildToParent="switchToLogin" v-if="registerModal" />
					</v-dialog>
				</v-layout>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
	// import Login from '~/components/Login.vue'
	// import Register from '~/components/Register'
	export default {
		// layout: 'layoutLandingPage',
		// middleware: ['unauth-check'],
		// components: { Login, Register },
		components: { 
			Login: () => import('~/components/Login'), 
			Register: () => import('~/components/Register') 
		},
		layout: 'layoutLandingPage',
		created () {
			this.$store.commit('events/clearEvents')
			this.$store.commit('standings/clearStandings')
		},
		data () {
			return {
				loginModal: false,
				registerModal: false
			}
		},
		computed: {
			loadedUser () {
				return this.$store.getters['users/loadedUser']
			}
		},
		methods: {
			async logout () {
				await this.$store.dispatch('firebase-auth/signOut')
			},
			switchToRegister () {
				this.loginModal = false
				this.registerModal = true
			},
			switchToLogin () {
				this.registerModal = false
				this.loginModal = true
			},
			async signInWithGoogle() {
				console.log('signInWithGoogle')
				await this.$store.dispatch('firebase-auth/signInWithGooglePopup')
				console.log('done')
				this.$router.replace('/gamemode_jm')
			}
		}
	}
</script>

<style scoped>
	/* TEXT-REFLECT CSS */
	.tif1 {
		display: inline-block;
		width: 100%;
		font-family: "Acme";
		font-size: 10em;
		font-weight: 700;
		text-transform: uppercase;
		text-align: center;
		color: white;
		text-transform: none;
		position: absolute;
		bottom: 0;
		padding: 0;
		margin: 0;
		letter-spacing: 3px;
		height: 117px;
	}
	.tif2 {
		display: inline-block;
		width: 100%;
		font-family: "Acme";
		font-size: 10em;
		font-weight: 700;
		text-transform: uppercase;
		text-align: center;
		top: 0;
		transform: scale(1, -1);
		color: orangered;
		position: absolute;
		padding: 0;
		margin: 0;
		position: absolute;
		letter-spacing: 3px;
		height: 117px;
	}
</style>

