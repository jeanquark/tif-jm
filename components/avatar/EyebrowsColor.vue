<template>
	<div class="flex-container-modal-avatar-color no-margin">
		<!-- <p>
			total_eyebrows_colors: {{ this.total_eyebrows_colors }}<br /><br />
			eyebrows: {{ eyebrows }}<br /><br />
			eyebrows_shape: {{ this.eyebrows_shape }}<br /><br />
			eyebrows_color2: {{ this.eyebrows_color2 }}<br /><br />
		</p> -->

	    <!-- <div v-for="index in total_eyebrows_colors" @click="addToMerge({gender: gender, type: 'eyebrows', property: 'color', image: 'eyebrows' + eyebrows_shape + convertTo2Digits(index) + '.png', index: index, layerPosition: 4})">
            <img :src="'/images/avatars/jm/' + gender + '/' + 'eyebrows' + '/' + 'colors' + '/eyebrowsColor' + convertTo2Digits(index) + '.png'" class="imgModalAvatarColor" :class="{active: (eyebrows_color === convertTo2Digits(index)) }" style="cursor: pointer;" />
        </div> -->

        <carousel-3d :width="200" :height="200" :startIndex="eyebrows_color - 1">
          	<slide v-for="(index, i) in total_eyebrows_colors" :index="i" :key="i">
            	<img v-lazy="'/images/avatars/jm/' + gender + '/eyebrows/colors/eyebrowsColor' + convertTo2Digits(index) + '.png'" class="imgModalAvatarColor" :class="{active: (eyebrows_color === convertTo2Digits(index)) }" style="cursor: pointer;" @click="addToMerge({gender: gender, type: 'eyebrows', image: 'eyebrows' + eyebrows_shape + convertTo2Digits(index) + '.png', index: index, layerPosition: 4})" />
          	</slide>
    	</carousel-3d>
	</div>
</template>

<script>
	export default {
		props: ['gender', 'eyebrows'],
		data () {
			return {
				total_eyebrows_colors: 45,
			}
		},
		computed: {
			eyebrows_shape () {
				return this.eyebrows ? this.eyebrows.match(/\d+/)[0].substr(0, 2) : '01'
			},
			eyebrows_color () {
				return this.eyebrows ? this.eyebrows.match(/\d+/)[0].substr(2, 4) : '01'
			}
		},
		methods: {
			convertTo2Digits (index) {
				// return this.$parent.convertTo2Digits(index)
				if (index.toString().length < 2) {
                    return '0' + index
                }
                return index.toString()
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
        border: 2px solid orangered;
    }
    .imgModalAvatar {
        margin: 0px;
    }
    .carousel-3d-slide {
        position: absolute;
        opacity: 0;
        top: 0;
        border: none;
        background-size: cover;
        background-color: #fff;
        display: block;
        margin: 0;
    }
    .carousel-3d-slide img {
        background-color: #fff;
    }
</style>