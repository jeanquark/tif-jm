import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify, {
	theme: {
    	primary: '#E65100', // orange darken-4
		secondary: '#E0E0E0', // grey lighten-1
		tertiary: '#E11566',
    	accent: '#82B1FF',
    	error: '#FF4444',
    	info: '#33B5E5',
    	success: '#00C851',
    	warning: '#FFBB33'
	},
	options: {
		customProperties: true
	}
});
