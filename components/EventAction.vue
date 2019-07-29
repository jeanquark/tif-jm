<template>
    <v-card class="elevation-12" :class="[action.type]">
        <v-card-title align-center justify-center class="card-title">
            <h2 class="white--text">Are you sure?</h2>
        </v-card-title>
        <v-card-text class="card-text">
            <!-- This action will cost you 10 tokens and if followed by 10 other fans, will get your team +10 support -->
            <!-- action: {{ action }} -->
			<h2 class="text-xs-center mb-2">{{ action.name }}</h2>
			Cost: {{ action.cost_tokens }} tokens<br /><br />
			Gain: {{ action.gain_pf }} PF
        </v-card-text>
        <v-card-actions class="card-actions">
            <v-layout row wrap justify-center>
                <v-btn color="primary" @click.stop="submitAction(action)">Take this action</v-btn>
            </v-layout>
        </v-card-actions>
    </v-card>
</template>

<script>
	import Noty from 'noty'
	export default {
		props: ['action'],
		mounted() {},
		data() {
			return {}
		},
		computed: {},
		methods: {
			submitAction(action) {
				console.log('submitAction: ', action)
				this.$emit('takeAction', action)
			}
		}
	}
</script>

<style scoped>
	.card-title {
		background: var(--v-primary-base);
	}
	.individual {
		background: yellow;
	}
	.collective {
		background: green;
	}
</style>