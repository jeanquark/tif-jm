<template>
    <v-content id="app">
        <v-container style="padding: 0px; max-width: 1017px;">
            <gamemode-header />

            <!-- Scrollable content -->
            <div class="content">
                loadedUser: {{ loadedUser }}<br />
                currentTime: {{ currentTime }}<br />
                <v-layout>
                    <img src="/images/barcelona.png" usemap="#image-map" />
                    <map name="image-map">
                        <area target="" alt="Beach" title="Beach" shape="poly" coords="701,548,643,552,602,583,588,621,625,656,680,675,755,664,795,627,796,602,775,567,739,553,741,552" @click="openActionsDialog('beach')">
                        <area target="" alt="City" title="City" shape="poly" coords="413,511,414,450,459,433,459,391,488,391,488,363,530,364,528,407,559,408,558,434,595,451,590,510" @click="openActionsDialog('city')">
                        <area target="" alt="Stadium" title="Stadium" shape="poly" coords="30,816,54,801,119,780,154,782,227,793,240,799,240,836,199,865,161,882,114,880,28,855" @click="openActionsDialog('stadium')">
                        <area target="" alt="Mountains" title="Mountains" shape="poly" coords="109,128,111,55,122,47,134,73,186,55,253,83,307,69,320,80,351,70,367,82,406,67,424,78,449,46,452,129" @click="openActionsDialog('mountains')">
                    </map>
                    <v-dialog
                        v-model="modalActions"
                        max-width="800"
                        @input="v => v || flipBackAllCards()"
                    >
                        <ActionsCard 
                            :theme="theme"
                            :isFlipped="isFlipped"
                            :curentTime2="currentTime"
                            :theme2="currentTime"
                            @closeModal="closeActionsDialog"
                            v-if="modalActions"
                        />
                    </v-dialog>
                </v-layout>
            </div>
            
            <!-- Fixed Footer -->
            <div id="footer">
                <br /><br /><br />
                <h2>Footer</h2>
                <br /><br /><br />
            </div>
            
        </v-container>
  </v-content>
</template>

<script>
    import GamemodeHeader from '~/components/GamemodeHeader2'
    import ActionsCard from '~/components/ActionsCard'
    import moment from 'moment'
    export default {
        components: { GamemodeHeader, ActionsCard },
        layout: 'layoutFront',
        created () {
            // this.$store.dispatch('users/fetchUser')
            // this.$store.dispatch('users/fetchUserActions')
            this.$store.dispatch('userActions/fetchUserActions')
        },
        mounted () {
            clearInterval(this.interval)
        },
        data () {
            return {
                links: [
                    'Home',
                    'About Us',
                    'Team',
                    'Services',
                    'Blog',
                    'Contact Us'
                ],
                modalActions: false,
                theme: 'stadium',
                actionsLength: 0,
                isFlipped: new Array(10),
                currentTime: '',
                interval: ''
            } 
        },
        computed: {
            loadedUser () {
                return this.$store.getters['users/loadedUser']
            },
            loadedUserTeams () {
                return this.$store.getters['users/loadedUserTeams']
            }
        },
        methods: {
            closeActionsDialog (event) {
                console.log('closeActionsDialog')
                this.modalActions = false
            },
            async openActionsDialog (theme) {
                console.log('openActionsDialog: ', theme)
                this.theme = theme
                this.modalActions = true
                if (!this.$store.getters['actionsCards/loadedActions'][theme]) {
                    await this.$store.dispatch('actionsCards/fetchActions', theme)
                }
                // this.interval = setInterval(() => {
                //     console.log('Call to setInterval')
                //     this.currentTime = moment().format('DD-MM-YYYY HH:mm:ss')
                // }, 1000)
                // this.actionsLength = this.$store.getters['actionsCards/loadedActions'][theme].length
                // console.log('actionsLength: ', this.actionsLength)
                // return window.location.href = 'https://fr.wikipedia.org/wiki/Camp_Nou'
            },
            flipBackAllCards () {
                console.log('Flip back all cards')
                this.isFlipped = new Array(10)
                clearInterval(this.interval)
            }
        }
    }
</script>

<style scoped>
    body {
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    /* Content */
    .container {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .content {
        background-color: light-gray;;
        /*flex-grow: 1;*/
        overflow-x: auto;
    }
    #footer {
        background-color: red;
        color: #fff;
        /*height: 100px;*/
        height: auto;
        text-align: center;
    }
    
    @media only screen and (min-width: 1000px) {
        .content img {
            width: 100%;
        }
    }
    /* End Content */
</style>
