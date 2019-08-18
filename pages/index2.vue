<template>
    <v-app v-cloak>
        <!-- <v-content>
            <v-container grid-list> -->
                <div>
                    <p class="big">Big text</p>
                </div>
            <!-- </v-container>
        </v-content> -->
    </v-app>
</template>

<script>
	import Noty from 'noty'
	export default {
		data() {
			return {}
		},
		computed: {},
		methods: {}
	}
</script>

<style scoped>
	/* [v-cloak] {
							display: none;
						} */
	[v-cloak] > * {
		display: none;
	}
	body {
		margin: 0;
	}
	.big {
		color: red;
		font-size: 2rem;
		margin-left: 400px;
		margin-top: 200px;
	}
</style>