<template>
	<div class="flex-container-modal-avatar-shape no-margin">
		<!-- <p>
			total_beard_shapes: {{ this.total_beard_shapes }}<br /><br />
			beard: {{ beard }}<br /><br />
			beard_shape: {{ this.beard_shape }}<br /><br />
			beard_color: {{ this.beard_color }}<br /><br />
		</p> -->
		
	    <!-- <div v-for="index in total_beard_shapes" :key="index" @click="addToMerge({gender: 'male', type: 'beard', image: 'beard' + convertTo2Digits(index) + beard_color + '.png', index: index, layerPosition: 7})">
            <img :src="'/images/avatars/jm/' + 'male' + '/' + 'beard' + '/' + 'min_beard' + convertTo2Digits(index) + '01' + '.png'" class="imgModalAvatar" :class="{active: (beard_shape === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div> -->

		<carousel-3d :width="200" :height="200" :startIndex="beard_shape - 1">
          	<slide v-for="(index, i) in total_beard_shapes" :index="i" :key="i" >
            	<img v-lazy="'/images/avatars/jm/male/beard/min_beard' + convertTo2Digits(index) + '01.png'" class="imgModalAvatar" :class="{active: (beard_shape === convertTo2Digits(index)) }" style="cursor: pointer;" @click="addToMerge({gender: 'male', type: 'beard', property: 'shape', image: 'beard' + convertTo2Digits(index) + beard_color + '.png', index: index, layerPosition: 7})" />
          	</slide>
    	</carousel-3d>
	</div>
</template>

<script>
	export default {
		props: ['beard'],
		data () {
			return {
				total_beard_shapes: 4,
			}
		},
		computed: {
			beard_shape () {
				return this.beard ? this.beard.match(/\d+/)[0].substr(0, 2) : '01'
			},
			beard_color () {
				return this.beard ? this.beard.match(/\d+/)[0].substr(2, 4) : '01'
			}
		},
		methods: {
			convertTo2Digits (index) {
				return this.$parent.$parent.convertTo2Digits(index)
				// if (index.toString().length < 2) {
                //     return '0' + index
                // }
                // return index.toString()
			},
			addToMerge (event) {
		      	this.$emit('addToMergeEmitter', event)
		    }
		}
	}
</script>

<style scoped>
	.active {
        background-color: orangered;
        border: 2px solid red;
    }
</style>