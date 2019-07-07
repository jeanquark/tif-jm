<template>
    <v-toolbar dark color="blue">
        <v-toolbar-side-icon></v-toolbar-side-icon>

        <v-toolbar-title class="white--text">ScoreMode</v-toolbar-title>&nbsp;
        <nuxt-link to="/gamemode_jm">Gamemode</nuxt-link>&nbsp;
        <nuxt-link to="/teams/lausanne_sport">Lausanne-Sport</nuxt-link>&nbsp;
        <nuxt-link to="/teams/neuchatel_xamax">Neuchâtel Xamax</nuxt-link>&nbsp;

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>search</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>apps</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>refresh</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>more_vert</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        computed: {
            
        }
    }
</script>

<style scoped>
    
</style>