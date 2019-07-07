<template>
	<v-layout align-center justify-center row fill-height style="background-color: black">
		<v-flex xs12 sm10 md8 lg6>
			<v-card class="card">
				<v-card-title primary-title>
					<v-flex xs6>
						<h1 class="text-xs-left" style="color: white; font-family: Acme">Thème ville</h1>
					</v-flex>
					<v-flex xs6 class="text-xs-right">
						<fa :icon="['fas', 'arrow-circle-left']" size="2x" class="icon" @click="goBack" />
					</v-flex>
				</v-card-title>

				<v-card-text class="card-text mx-3">
					isFlipped: {{ isFlipped }}<br />
					<v-container fluid fill-height>
						<!-- <v-layout align-center justify-center> -->
						<v-layout row wrap>
							<v-flex xs12 sm8 md4 v-for="(item, index) in items" :key="index" class="pa-2">
								<div class="flip-card">
									<!-- isFlipped[index]: {{ isFlipped[index] }}<br /> -->
									<!-- <v-card hover class="flip-card-inner" :class="{ flipped: isFlipped }" @click="toggleFlip = index"> -->
									<!-- <v-card hover class="flip-card-inner" :class="[ isFlipped === index ? 'flipped' : '' ]" @click="toggleFlip(index)" style="border: 1px solid red;"> -->
									<v-card hover class="flip-card-inner" :class="[ isFlipped[index] ? 'flipped' : '' ]" @click="toggleFlip(index)" style="border: 1px solid red;">
										<div class="flip-card-front">
											<h1>Front</h1> 
										</div>
										<div class="flip-card-back">
											<h1>Back</h1> 
											<v-btn @click.stop="selectCard">Select card</v-btn>
										</div>
									</v-card>
								</div>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card-text>

				<v-card-actions class="card-footer">
					<v-flex class="text-xs-center">
						<v-btn nuxt color="error" to="/" class="elevation-1" style="margin-bottom: 20px">Retour</v-btn>
					</v-flex>
				</v-card-actions>
			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>
    export default {
        layout: 'layoutFront',
        async created () {
        	await this.$store.dispatch('actionsCards/setActions')

        },
        mounted () {
        	this.length = 5
        },
        data () {
            return {
				items: [
					{
						name: 'Action 1',
						slug: 'action1'
					},
					{
						name: 'Action 2',
						slug: 'action2'
					},
					{
						name: 'Action 3',
						slug: 'action3'
					},
					{
						name: 'Action 4',
						slug: 'action4'
					},
					{
						name: 'Action 5',
						slug: 'action5'
					},
					{
						name: 'Action 6',
						slug: 'action6'
					}
				],
				// isFlipped: '',
				length: 0,
				isFlipped: new Array(5)
			}
		},
		computed: {
			loadedActions () {
				return this.$store.getters('actionsCards/loadedActions')
			}
		},
		methods: {
			goBack() {
				this.$router.replace('/')
			},
			toggleFlip (index) {
				console.log('toggleFlip: ', index)
				// this.isFlipped = !this.isFlipped
				// this.isFlipped[0] = true
				// if (this.isFlipped === index) {
				// 	this.isFlipped = ''
				// } else {
				// 	this.isFlipped = index
				// }
				// this.isFlipped.push('abc')
				if (this.isFlipped[index]) {
					this.isFlipped.splice(index, 1, false)
					// this.isFlipped[index] = false
				} else {
					this.isFlipped.splice(index, 1, true)
					// this.isFlipped[index] = true
				}
			},
			selectCard () {
				console.log('selectCard')
			}
		}
    }
</script>

<style scoped>
	body {
		font: normal 100%/1 "Acme", Helvetica, sans-serif;
	}
	.card {
		background: linear-gradient(-45deg, #ffb76b 0%, #ffa73d 50%, #FF7C01 51%, #ff7f04 100%);
		border-radius: 5px;
		margin: 5px;
	}
	.card-text {
		background-color: whitesmoke;
		width: auto;
		border-radius: 8px;
	}
	.card-footer {
		margin-top: 20px;
	}
	.icon:hover {
		cursor: pointer;
		color: #fff;
	}

	/* Flip card */
	.flip-card {
		background-color: transparent;
		/* width: 150px; */
		/* width: 25%; */
		height: 200px;
		/* border: 1px solid #f1f1f1; */
		perspective: 1000px; /* Remove this if you don't want the 3D effect */
	}

	/* This container is needed to position the front and back side */
	.flip-card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 1s;
		transform-style: preserve-3d;
	}

	/* Do an horizontal flip when you move the mouse over the flip box container */
	.flip-card:hover .flip-card-inner {
		/* transform: rotateY(180deg); */
	}

	/* Position the front and back side */
	.flip-card-front, .flip-card-back {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
	}

	/* Style the front side (fallback if image is missing) */
	.flip-card-front {
		/* background-color: #bbb;
		color: black; */
	}

	/* Style the back side */
	.flip-card-back {
		/* background-color: dodgerblue;
		color: white; */
		transform: rotateY(180deg);
	}
	.flipped {
		-webkit-transform: rotateY( 180deg );
		-moz-transform: rotateY( 180deg );
		-o-transform: rotateY( 180deg );
		transform: rotateY( 180deg );
	}
</style>