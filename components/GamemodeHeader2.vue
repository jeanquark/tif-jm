<template>
    <v-toolbar dark color="blue">
        <v-toolbar-side-icon to="/"></v-toolbar-side-icon>

        <v-toolbar-title class="white--text">Gamemode</v-toolbar-title>
        <nuxt-link to="/scoremode_jm">Scoremode</nuxt-link>
        <v-btn color="error" @click="logout">Logout</v-btn>
        <v-btn color="primary" nuxt to="/admin" v-if="loadedUser && loadedUser.status && loadedUser.status.value === 'admin'">
			admin
        </v-btn>
        <v-btn color="default" @click="checkUserClaims">Check user claims</v-btn>

        <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader1">
            <div style="text-align: center" class="levelHeader">Energy Bar</div>
            <v-progress-linear class="progressOrange" color="yellow" height="20"><span style="color: white">40 / 100</span></v-progress-linear>
        </v-flex>

        <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>
    import firebase from 'firebase/app'
    export default {
        data () {
            return {

            }
        },
        computed: {
            loadedUser () {
                return this.$store.getters['users/loadedUser']
            }
        },
        methods: {
            async logout () {
                console.log('logout')
                await this.$store.dispatch('firebase-auth/signOut')
                this.$router.push('/')
            },
            async checkUserClaims () {
                try {
                    const idTokenResult = await firebase.auth().currentUser.getIdTokenResult()
                    console.log('idTokenResult: ', idTokenResult)
                    console.log('idTokenResult.claims: ', idTokenResult.claims)
                    if (!!idTokenResult.claims.admin) {
                        console.log('User is admin')
                    } else {
                        console.log('User is not admin')
                    }
                } catch (error) {
                    console.log('There was an error: ', error)
                }
            },
        }
    }
</script>

<style scoped>
    
</style>