<template>
	<div>
		<h1>Gamemode</h1>
		<p>loadedUser: {{ loadedUser }}</p>
	</div>
</template>

<script>
	export default {
		data () {
			return {

			}
		},
		computed: {
			loadedUser () {
				return this.$store.getters['users/loadedUser']
			}
		}
	}
</script>

<style scoped>
</style>
