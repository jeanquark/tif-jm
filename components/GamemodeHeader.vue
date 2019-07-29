<template>
    <v-toolbar dark color="blue">
        <!-- <v-toolbar-side-icon to="/"></v-toolbar-side-icon> -->
        <!-- <v-icon to="/" class="icon">home</v-icon> -->
        <v-btn flat icon to="/">
            <v-icon>home</v-icon>
        </v-btn>
        GAMEMODE
        <v-spacer></v-spacer>
		<!-- loadedUser: {{ loadedUser }} -->
		<v-btn small color="success" nuxt to="/gamemode">Teams</v-btn>
		<v-btn small color="info" nuxt to="/user/events">Events</v-btn>
        <v-btn small color="warning" nuxt to="/admin">Admin (resticted area)</v-btn>
        <v-btn small color="error" @click="logout">Logout</v-btn>
    </v-toolbar>
</template>

<script>
	import firebase from 'firebase/app'
	export default {
		data() {
			return {}
		},
		computed: {
			loadedUser() {
				return this.$store.getters['users/loadedUser']
			}
		},
		methods: {
			async logout() {
				console.log('logout')
				await this.$store.dispatch('firebase-auth/signOut')
				this.$router.push('/')
			}
		}
	}
</script>

<style scoped>
</style>