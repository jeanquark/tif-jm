<template>
	<v-layout align-center justify-center row fill-height>
		<v-flex xs12 sm10 md8 lg6>
			<v-card class="card">
				<v-card-title primary-title>
					<v-flex xs6>
						<h2 class="white--text text-xs-left">HOMEPAGE</h2>
					</v-flex>
					<v-flex xs6 class="text-xs-right">
						<fa :icon="['fas', 'arrow-circle-left']" size="2x" class="icon" />
					</v-flex>
				</v-card-title>

				<v-card-text class="card-text">
					list1: {{ list1 }}<br /><br />
					list2: {{ list2 }}<br /><br />
					isDragging: {{ isDragging }}<br /><br />
					<v-layout row wrap>
						<v-flex xs12 style="border: 1px solid blue;">
							<h2 class="text-xs-center">Actions</h2>
								<draggable v-model="list1" class="dragArea" :options="{group: 'people'}" @start="isDragging=true" @end="isDragging=false" style="">
									<transition-group name="list-complete1" class="manual-v-layout" style="" tag="v-layout">
										<v-flex xs12 sm6 md4 lg3 v-for="element in list1" :key="element.name"  class="pa-2 list-complete1-item">
											<v-card class="" style="border: 1px solid purple; cursor: pointer;">
										        <v-card-title primary-title>
										          	<div>
										            	<h3 class="headline mb-0">{{ element.name }}</h3>
										            	<div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
										          	</div>
										        </v-card-title>

										        <v-card-actions>
										          	<v-btn flat color="orange">Share</v-btn>
										          	<v-btn flat color="orange">Explore</v-btn>
										        </v-card-actions>
										    </v-card>
										</v-flex>
									</transition-group>
								</draggable>
				      	</v-flex>
				      	<br /><br />
				      	<v-flex xs12 style="border: 1px solid blue;">
				      		<h2 class="text-xs-center">Cards</h2>
				      		<draggable v-model="list2" class="dragArea" :options="{group: 'people'}" @start="isDragging=true" @end="isDragging=false" style="">
									<transition-group name="list-complete" class="manual-v-layout" style="min-height: 250px;" tag="v-layout">
										<v-flex xs12 sm6 md4 lg3 v-for="element in list2" :key="element.name"  class="pa-2 list-complete-item">
											<v-card class="" style="border: 1px solid purple; cursor: pointer;">
										        <v-card-title primary-title>
										          	<div>
										            	<h3 class="headline mb-0">{{ element.name }}</h3>
										            	<div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
										          	</div>
										        </v-card-title>

										        <v-card-actions>
										          	<v-btn flat color="orange">Share</v-btn>
										          	<v-btn flat color="orange">Explore</v-btn>
										        </v-card-actions>
										    </v-card>
										</v-flex>
									</transition-group>
								</draggable>
				        	<!-- <v-layout row wrap>
							    <v-flex v-for="i in 2" :key="`6${i}`" xs6 class="pa-2">
							        <v-card dark color="secondary">
							          	<v-card-text class="px-0">6</v-card-text>
							        </v-card>
							    </v-flex>
							</v-layout> -->
				      	</v-flex>


<!-- <h4>Cards</h4>
<draggable v-model="list1" class="dragArea" :options="{group: 'people'}" @start="isDragging=true" @end="isDragging=false" style="min-width: 100px; border: 2px solid red;">
	<transition-group name="list-complete" style="min-height: 250px; display: block;">
		<div v-for="element in list1" :key="element.name" class="list-complete-item" style="padding: 10px; border: 2px solid orangered; cursor: pointer;">{{element.name}}</div>
	</transition-group>
</draggable><br />
<h4>Actions</h4>
<draggable v-model="list2" class="dragArea" :options="{group:'people'}" @start="isDragging=true" @end="isDragging=false" style="min-width: 100px; border: 2px dashed red;">
	<transition-group name="list-complete" style="min-height: 250px; display: block;">
		<div v-for="element in list2" :key="element.name" class="list-complete-item" style="padding: 10px; border: 2px dashed green; cursor: pointer;">{{element.name}}</div>
	</transition-group>
</draggable> -->

					</v-layout>
				</v-card-text>
				<v-card-actions class="card-footer">
					<v-flex class="text-xs-center">
						<v-btn nuxt color="error" to="/" class="elevation-0">Go back</v-btn>
						<v-btn class="elevation-0">Cancel</v-btn>
					</v-flex>
				</v-card-actions>
			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>
	import draggable from 'vuedraggable'
	export default {
		components: { draggable },
		layout: 'layoutFront',
		data () {
			return {
				list1: [],
			    list2: [{
			      name: "Gaël"
			    }, {
			      name: "Basil"
			    }, {
			      name: "Joël"
			    }, {
			      name: "Jean-Marc"
			    }],
			    jobs: [],
			    isDragging: false
			}
		},
		computed: {

		},
		methods: {
			onStart () {
				console.log('onStart')
			},
			onChange() {
				console.log('onChange')
            },
            onMove({ relatedContext, draggedContext }) {
                console.log('onMove!')
            }
		}
	}
	
</script>

<style scoped>
	.list-complete-item {
	  transition: all 2s;
	}
	.list-complete-enter, .list-complete-leave-active {
	  opacity: 0;
	  -webkit-transform: scale(1.3);
      -ms-transform: scale(1.3);
      transform: scale(1.3);
      pointer-events: none;
	}

	.list-complete1-item {
	  transition: all 3s;
	}
	.list-complete1-enter {
		opacity: 0;
		pointer-events: none;
	  	background: yellow;
	}
	.list-complete1-leave-active {
		opacity: 0;
		pointer-events: none;
	}

	.manual-v-layout {
	  display: -webkit-box;
	  display: -ms-flexbox;
	  display: flex;
	  -webkit-box-flex: 1;
	  -ms-flex: 1 1 auto;
	  flex: 1 1 auto;
	  -ms-flex-wrap: wrap;
	  flex-wrap: wrap;
	  -webkit-box-orient: horizontal;
	  -webkit-box-direction: normal;
	  -ms-flex-direction: row;
	  flex-direction: row;
	  padding-bottom: 8px !important;
	  padding-top: 8px !important;
	}
</style>