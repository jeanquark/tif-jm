<template>
    <v-content id="app" style="background-color: white">
        <v-container style="padding: 0; max-width: 1017px;">
        
            <scoremode-header />

            <!-- Scrollable content -->
            <div class="content" style="height: 100vh; border-right: 1px solid orangered; border-left: 1px solid orangered; padding: 10px 0">
                <v-layout>
                        
                    <!-- Scrollable content -->
                    <div style="padding: 0; min-width: 100%; height: 100%">     

                        <div fluid style="padding: 0; max-width: 1000px; background-color: black; color: white; style: 30px">
                            <v-layout>
                                <v-flex d-flex x12 justify-center align-center class="text-xs-center menuSport">
                                    Football - Equipes
                                </v-flex>
                            </v-layout>             
                        </div>

                        <v-layout row fill-height>
                            <v-flex xs12 align-center class="scrolling-wrapper-flexbox" style="padding: 10px 0; margin-left: 10px; margin-right: 10px">
                              <div class="cardMenuCompetition" :class="[type === 'club' ? 'active' : '']" @click="teamsByType('club')"><h2>Clubs</h2></div>
                              <div class="cardMenuCompetition" :class="[type === 'national_team' ? 'active' : '']" @click="teamsByType('national_team')"><h2>Sélections</h2></div>
            				  <div class="cardMenuCompetition" :class="[continent === 'europe' ? 'active' : '']" @click="teamsByContinent('europe')"><h2>Europe</h2></div>
            				  <div class="cardMenuCompetition" :class="[continent === 'africa' ? 'active' : '']" @click="teamsByContinent('africa')"><h2>Afrique</h2></div>
            				  <div class="cardMenuCompetition" :class="[continent === 'america' ? 'active' : '']" @click="teamsByContinent('america')"><h2>Amérique</h2></div>
            				  <div class="cardMenuCompetition" :class="[continent === 'asia' ? 'active' : '']" @click="teamsByContinent('asia')"><h2>Asie/Océanie</h2></div>
            				</v-flex>
                        </v-layout>             

                        <div style="padding: 0; background-color: whitesmoke">
                            <v-card-text class="card-text" style="padding: 0">
                                <v-expansion-panel class="elevation-0" :value="0" v-if="loadedUser" style="padding: 0">
                                    <v-expansion-panel-content style="background-color: orangered">
                                        <div slot="header" class="white--text">
                                            MES EQUIPES FAVORITES
                                        </div>
                                        <v-icon slot="actions" color="white">$vuetify.icons.expand</v-icon>
                                        <v-card>
                                            <v-card-text style="padding: 0">
                                                <v-data-table :items="teamsFiltered(this.type, this.continent)" class="elevation-0" hide-actions hide-headers>
                                                    <template slot="items" slot-scope="props" style="height: 15px; border-spacing: 0; padding: 2px; border-top: 1px solid black">
                                                        <v-layout align-center style="padding: 0; border-right: 1px solid black; border-left: 1px solid black; border-bottom: 1px solid black; border-top: 1px solid black">
                                                            <v-flex xs12 style="margin: 0; padding-top: 2px; padding-bottom: 2px; height: 100%">
                                                                <v-layout align-start v-if="props.item.active">
                                                                    <v-flex class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 15px; margin: 0">
                                                                        <div style="background-color: green; height: 100%; width: 2px"></div>
                                                                    </v-flex>
                                                                    <v-flex class="text-xs-left" style="width: 100%; padding: 0; height: 15px; margin: 0">
                                                                        <div style="color: orange;font-size: 80%">
                                                                            <span style="float: left; background-color: green; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px" >OUVERT</span>
                                                                        </div>
                                                                    </v-flex>
                                                                </v-layout>
                                                                <v-layout align-start v-if="!props.item.active">
                                                                    <v-flex class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 15px; margin: 0">
                                                                        <div style="background-color: red; height: 100%; width: 2px"></div>
                                                                    </v-flex>
                                                                    <v-flex class="text-xs-left" style="width: 100%; padding: 0; height: 15px; margin: 0">
                                                                        <div style="color: orange;font-size: 80%">
                                                                            <span style="float: left; background-color: red; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px" >BIENTÔT</span>
                                                                        </div>
                                                                    </v-flex>
                                                                </v-layout>
                                                                <v-layout align-center style="max-width: 100%">
                                                                    <v-flex class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 40px; margin: 0">
                                                                        <div :class="[props.item.active ? 'greenBar' : 'redBar']"></div>
                                                                    </v-flex>
                                                                    <v-flex sm4 xs5 align-center class="text-xs-left pd-left10">
                                                                        <nuxt-link :to="'/teams/' + props.item.id" class="teamTextSize" style="color: black; text-decoration: none">{{ props.item.name }}</nuxt-link>
                                                                    </v-flex>
                                                                    <v-flex sm3 hidden-xs-only class="text-xs-right">
                                                                        Fan de : <span style="background-color: orangered; padding: 2px 10px; border-radius: 5px; font-size: 100%">{{ props.item.nb_teams }} équipes - Fan de : FC Barcelone</span>
                                                                    </v-flex>
                                                                    <v-flex sm4 xs5 align-center class="text-xs-right" style="width: 50px; padding-right: 15px">
                                                                        <span style="background-color: black; color: orange; padding: 2px 10px; border-radius: 5px; font-size: 100%">Nb fans liés à la compétition</span>
                                                                    </v-flex>
                                                                </v-layout>
                                                            </v-flex>
                                                        </v-layout>
                                                    </template>
                                                </v-data-table>
                                            </v-card-text>
                                        </v-card>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-card-text>
                            
                                <v-card-text class="card-text" style="padding: 0">
                                <v-expansion-panel class="elevation-0" :value="0">
                                    <v-expansion-panel-content style="background-color: green">
                                        <div slot="header" class="white--text">
                                           TOUTES LES EQUIPES
                                        </div>
                                        <v-icon slot="actions" color="white">$vuetify.icons.expand</v-icon>
                                        <v-card>
                                            <v-card-text style="padding: 0">
                                                <v-data-table :items="teamsFiltered(this.type, this.continent)" class="elevation-0" hide-actions hide-headers>
                                                    <template slot="items" slot-scope="props" style="height: 15px; border-spacing: 0; padding: 2px; border-top: 1px solid black">
                                                        <v-layout align-center style="padding: 0; border-right: 1px solid black; border-left: 1px solid black; border-bottom: 1px solid black; border-top: 1px solid black">
                                                            <v-flex xs12 style="margin: 0; padding-top: 2px; padding-bottom: 2px; height: 100%">
                                                                <v-layout align-start v-if="props.item.active">
                                                                    <v-flex class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 15px; margin: 0">
                                                                        <div style="background-color: green; height: 100%; width: 2px"></div>
                                                                    </v-flex>
                                                                    <v-flex class="text-xs-left" style="width: 100%; padding: 0; height: 15px; margin: 0">
                                                                        <div style="color: orange;font-size: 80%">
                                                                            <span style="float: left; background-color: green; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px" >OUVERT</span>
                                                                        </div>
                                                                    </v-flex>
                                                                </v-layout>
                                                                <v-layout align-start v-if="!props.item.active">
                                                                    <v-flex class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 15px; margin: 0">
                                                                        <div style="background-color: red; height: 100%; width: 2px"></div>
                                                                    </v-flex>
                                                                    <v-flex class="text-xs-left" style="width: 100%; padding: 0; height: 15px; margin: 0">
                                                                        <div style="color: orange;font-size: 80%">
                                                                            <span style="float: left; background-color: red; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px" >BIENTÔT</span>
                                                                        </div>
                                                                    </v-flex>
                                                                </v-layout>
                                                                <v-layout align-center style="max-width: 100%">
                                                                    <v-flex class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 40px; margin: 0">
                                                                        <div :class="[props.item.active ? 'greenBar' : 'redBar']"></div>
                                                                    </v-flex>
                                                                    <v-flex sm1 xs2 align-center class="text-xs-left pd-left10">
                                                                        <nuxt-link :to="'/teams/' + props.item.id" class="teamTextSize" style="color: black; text-decoration: none"><img :src="'/images/teams/' + props.item.image" :lazy-src="'/images/icon.png'" class="imgTeamLogo"/></nuxt-link>
                                                                    </v-flex>                                                                    
                                                                    <v-flex sm5 xs5 align-center class="text-xs-left">
                                                                        <nuxt-link :to="'/teams/' + props.item.id" class="teamTextSize" style="color: black; text-decoration: none">{{ props.item.name }} <span style="font-size: 0.8em">({{ props.item.gender.name }})</span></nuxt-link>
                                                                    </v-flex>
                                                                    <v-flex sm3 hidden-xs-only class="text-xs-right">
                                                                        <span style="background-color: orangered; color: white; padding: 2px 10px; border-radius: 5px; font-size: 100%">Devenir fan ?</span>
                                                                    </v-flex>
                                                                    <v-flex sm3 xs5 align-center class="text-xs-right" style="width: 50px; padding-right: 15px">
                                                                        <span style="background-color: black; color: orange; padding: 2px 10px; border-radius: 5px; font-size: 100%">123'456 fans</span>
                                                                    </v-flex>
                                                                </v-layout>
                                                            </v-flex>
                                                        </v-layout>
                                                    </template>
                                                </v-data-table>
                                            </v-card-text>
                                        </v-card>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-card-text>
                        </div>

                    </div>
                    
                </v-layout>
                        
            </div>

            <scoremode-footer />
            
        </v-container>
    </v-content>
</template>

<script>
    import moment from 'moment'
    import ScoremodeHeader from '~/components/ScoremodeHeader'
    import ScoremodeFooter from '~/components/ScoremodeFooter'
    export default {
        head: {
            title: 'teams',
            link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Acme' }
			]
        },
        components: { ScoremodeHeader, ScoremodeFooter },
        layout: 'layoutScoreMode',
        async created() {
            this.$store.dispatch('teams/loadedTeams')
        },
        data() {
            return {
                type: '',
                continent: 'europe'
            }
        },
        computed: {
            loadedUser () {
                return this.$store.getters['users/loadedUser']
            }
        },
        methods: {
            teamsByType (type) {
                this.type = type
                this.continent = ''
            },
            teamsByContinent (continent) {
                this.continent = continent
                this.type = ''
            },
            teamsFiltered (type, continent) {
                if (type) {
                    return this.$store.getters['teams/loadedTeams']
                        .filter(team => (team.type ? team.type === type : ''))
                }
                else if (continent) {
                    return this.$store.getters['teams/loadedTeams']
                        .filter(team => (team.continent ? team.continent.slug === continent : ''))
                } else {
                    return this.$store.getters['teams/loadedTeams']
                }
            },
            resetTeams () {
                this.type = ''
                this.continent = ''
            }
        }
    }
</script>

<style scoped>
    /* Menu compétitions */

    .scrolling-wrapper-flexbox {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: center;
    }

    .cardMenuCompetition {
    border-radius: 5px;
    color: white;
    padding: 6px 6px;
    background: black;
    margin: 0 5px;
    }
    .cardMenuCompetition:hover {
        cursor: pointer;
    }    
    
    .container {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        font: normal 100%/1 "Acme", Helvetica, sans-serif;
    }
    .content {
        background-color: light-gray;
        overflow-x: auto;
    }
    #footer {
        background-color: red;
        color: #fff;
        height: auto;
        text-align: center;
    }
    
    @media only screen and (min-width: 1000px) {
        .content img {
            width: 100%;
        }
    }
    /* End Content */
    
    #header {
    height: 162px;
    padding: 0;
    top:0px;
    left:0px;
    background-color: black;
    z-index: 1;
    border-bottom: 3px solid orangered;
    position: sticky;
    }
    .header {
    position: relative;
    }
    .barreHeader {
    position:absolute;
    top: 120px;
    width: 100%;
    background-color: orangered;
    z-index: -1;
    margin: 0;
    padding: 0;
    }
    #avatar {
    background-color: black;
    border-right: 3px solid orangered;
    border-bottom: 3px solid orangered;
    box-shadow: 0 7px 5px black;
    height: 150px;
    width: 150px;
    border-radius: 0 0 100% 0;
    }
    .imgAvatar {
    height: 100%;
    width: 100%;
    border-radius: 0 0 100% 0;
    }
    #team {
    background-color: black;
    border-left: 3px solid orangered;
    border-bottom: 3px solid orangered;
    box-shadow: 0 7px 5px black;
    height: 150px;
    width: 150px;
    border-radius: 0 0 0 100%;
    }
    .imgTeam {
    height: 100%;
    width: 100%;
    border-radius: 0 0 0 100%;
    }
    .imgTeamSmall {
    height: 20px;
    margin-top: 5px;
    }
    .imgHeader {
    height: 50px;
    width: 50px;
    color: green;
    }
    .dollarFan {
    margin-top: 14px;
    width: 100%;
    text-align: center;
    color: green;
    font-weight: 700;
    box-shadow: 0 0 10px 2px inset;
    border-radius: 5px;
    }
    .token {
    margin-top: 14px;
    width: 100%;
    text-align: center;
    color: orangered;
    font-weight: 700;
    box-shadow: 0 0 10px 2px inset;
    border-radius: 5px;
    }
    .plusOrangered {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0 10px;
    color: white;
    font-weight: 700;
    font-size: 1.2em;
    background-color: orangered;
    }
    .aPlusOrangered :hover {
    color: orangered;
    background-color: white;
    border-bottom: 1px solid orangered;
    border-left: 1px solid orangered;
    }
    .plusYellow {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0 10px;
    color: black;
    font-weight: 700;
    font-size: 1.2em;
    background-color: yellow;
    }
    .aPlusYellow :hover {
    color: black;
    background-color: white;
    border-bottom: 1px solid yellow;
    border-left: 1px solid yellow;
    }
    .plusGreen {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0 10px;
    color: white;
    font-weight: 700;
    font-size: 1.2em;
    background-color: green;
    }
    .aPlusGreen :hover {
    color: green;
    background-color: white;
    border-bottom: 1px solid green;
    border-left: 1px solid green;
    }
    
    .orangered {
    background-color: orangered;
    border-color: orangered;
    }
    
    /* Material Icons */
    
    .material-icons.md-18 { font-size: 18px; }
    .material-icons.md-24 { font-size: 24px; }
    .material-icons.md-36 { font-size: 36px; }
    .material-icons.md-48 { font-size: 48px; }
    
    .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
    }   
    
    /* End Material Icons */
    
    .levelHeader {
    font-weight: 700;
    font-size: 36px;  /* Preferred icon size */
    background-color: orange;
    color: white;
    border-radius: 10px;
    }
    
    /* End Header */
    
    .menuSport {
        height: 35px;
    }
    
    .menuDay {
        height: 35px;
    }
    
    .v-expansion-panel__header {
    padding: 2px 2px;
    min-height: 24px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 5s;
        background-color: #000;
    }
    
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    
    .imgLogoEquipe {
    max-width: 30px;
    max-height: 30px;
    }
    
    .teamTextSize {
    font-size: 1.3em;
    }

    .black {
    background-color: black;
    }
    
    .imageLogo {
    width: 30px;
    height: 30px;
    }
    
    /* ScoreCard */

    .card {
    border-radius: 5px;
    }
    .card-title {
    background-color: lightslategray;
    }
    .card-text {
    background-color: whitesmoke;
    width: auto;
    border-radius: 8px;
    padding: 8px;
    }
    .card-footer {
    background-color: lightslategrey;
    }
    .fas:hover {
    cursor: pointer;
    color: #fff;
    }
    
    .userText {
    font-size: 1.3em;
    }
    
    .connectText {
    font-size: 1.3em;
    }
    
    .chiffres {
    font-size: 2.5em;
    color: orangered;
    font-width: 700;
    }
    
    .activity {
    font-size: 1.5em;
    text-transform: uppercase;
    }
    
    .levelBox {
    background-color: #757575;
    color: black;
    vertical-align: middle;
    padding: 2px;
    border-radius: 3px;
    width: 95%;
    margin: auto;
    }
    
    .energyBox {
    background-color: #757575;
    color: black;
    vertical-align: middle;
    padding: 2px;
    border-radius: 3px;
    width: 95%;
    margin: auto;
    }
    
    .dollarBox {
    background-color: #757575;
    color: black;
    vertical-align: middle;
    padding: 2px;
    border-radius: 3px;
    width: 95%;
    margin: auto;
    }

    .tokenBox {
    background-color: #757575;
    color: black;
    vertical-align: middle;
    padding: 2px;
    border-radius: 3px;
    width: 95%;
    margin: auto;
    }

    /* Footer */
    .barreOrangered {
        width: 100%;
        padding: 0;
        margin: 0; 
        height: 3px;
        background-color: orangered;
    }
    .barreBlack {
        width: 100%;
        padding: 0;
        margin: 0;
        height: 8px;
        background-color: black;
    }
    
    #dock-container {
        height: 80px;
        padding: 0;
        margin: 0;
        bottom: 0;
        background-color: orangered;
        border: none;
        border-top: 4px solid orangered;
    }

    #dock-container li#active img {
        -webkit-transform: scale(1.65);
        margin: 0 0.5em;
    }

    #dock-container li {
        width: 17%;
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: inline-block;
        position: relative;
        padding-top: 10px;
    }

    #dock-container ul {
        width: 100%;
        padding-left: 0px;
        padding-right: 0px;
        margin-bottom: 0;
    }

    #dock-container li img {
        width: 58px;
        height: 58px;
        -webkit-gradient: (linear, left top, left bottom, from(transparent), color-stop(0.7, transparent), to(rgba(255,255,255,.5)));
        -webkit-transition: all 0.3s;
        -webkit-transform-origin: 50% 100%;
    }

    #dock-container li:hover img { 
        -webkit-transform: scale(1.65);
        margin: 0 0.5em;
    }

    #dock-container li:hover + li img, #dock-container li.prev img {
        -webkit-transform: scale(1);
        margin: 0 0;
    }

    #dock-container li span {
        display: none;
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        background-color: rgba(0,0,0,0.5);
        border-radius: 5px;
    }

    #dock-container li#active span {
        display: none;
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        background-color: rgba(0,0,0,0.5);
        border-radius: 5px;
    }

    #dock-container li#active span {
        display: block;
        color: #fff;
    }

    #dock-container li#active .textMenu {
        font: normal 120%/1 "Acme", Helvetica, sans-serif;
        padding: 2px;
    }

    #dock-container li:hover span {
        display: block;
        color: #fff;
    }

    #dock-container .textMenu {
        font: normal 120%/1 "Acme", Helvetica, sans-serif;
        padding: 2px;
    }
    /* End Footer */

    .imgTeamLogoWrapper {
        width: 50px; 
        padding-right: 15px;
    }
    .imgTeamLogo {
        max-width: 35px;
        max-height: 35px;
    }
    >>>.v-expansion-panel__header {
        min-height: 0;
        height: 35px;
    }
    .pd-left10 {
    padding-left: 6px;
    }  

    /* End Menu */

        @media only screen and (max-width: 768px) {

        .scrolling-wrapper-flexbox {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        justify-content: start;
        }

        #app {
        font: normal 90%/1 "Acme", Helvetica, sans-serif;
        }
        
        .pd-right10 {
        padding-right: 10px;
        }
        
        .pd-left10 {
        padding-left: 6px;
        }
        
        .imgLogoEquipe {
        max-width: 35px;
        }
        
        .teamTextSize {
        font-size: 1.1em;
        }
        
        .headerMenus {
        padding: 0; 
        margin: 0; 
        height: 46px;
        }
        
        .energyBox {
        background-color: #757575;
        color: black;
        vertical-align: middle;
        padding: 1px;
        border-radius: 2px;
        width: 95%;
        margin: auto;
        font-size: 0.8em;
        }
        
        .userText {
        font-size: 0.8em;
        }
        
        .connectText {
        font-size: 0.8em;
        }

        /* Header */

        .imageLogoTif {
        width: 60px;
        height: 60px;
        }
        
        .backBlack {
        background-image: url("/images/header-TIF_03.png");
        background-position: center;
        background-repeat: repeat-x;
        background-size: contain;
        height: 60px;
        }

        .boxTif {
        width: 60px;
        height: 60px;
        }

        .imageLogo {
        width: 25px;
        height: 25px;
        }
        
        .menuSport {
            height: 35px;
        }
        
        .menuDay {
            height: 35px;
        }
        
        .headerLogo {
        height: auto;
        }
        
        .headerMenu {
        height: 46px;
        }
        
        .v-expansion-panel__header {
        padding: 2px 2px;
        min-height: 24px;
        }
        
        .chiffres {
        font-size: 1.2em;
        }
        
        .activity {
        font-size: 0.8em;
        }
        
        /* Menu */

        #dock-container {
        height: 55px;
        padding: 0;
        margin: 0;
        bottom: 0;
        background-color: rgb(248,147,37);
        border: none;
        border-top: 4px solid darkred;
        }

        #dock-container li#active img {
        -webkit-transform: scale(1.65);
        margin: 0 0.5em;
        }

        #dock-container li {
        width: 17%;
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: inline-block;
        position: relative;
        padding-top: 3px;
        }

        #dock-container ul {
        width: 100%;
        padding-left: 0px;
        padding-right: 0px;
        margin-bottom: 0;
        }

        #dock-container li img {
        width: 38px;
        height: 38px;
        -webkit-gradient: (linear, left top, left bottom, from(transparent), color-stop(0.7, transparent), to(rgba(255,255,255,.5)));
        -webkit-transition: all 0.3s;
        -webkit-transform-origin: 50% 100%;
        }

        #dock-container li:hover img { 
        -webkit-transform: scale(1.65);
        margin: 0 0.5em;
        }

        #dock-container li:hover + li img, #dock-container li.prev img {
        -webkit-transform: scale(1);
        margin: 0 0;
        }

        #dock-container li span {
        display: none;
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        background-color: rgba(0,0,0,0.5);
        border-radius: 5px;
        }

        #dock-container li#active span {
        display: none;
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        background-color: rgba(0,0,0,0.5);
        border-radius: 5px;
        }

        #dock-container li#active span {
        display: block;
        color: #fff;
        }

        #dock-container li#active .textMenu {
        font: normal 90%/1 "Acme", Helvetica, sans-serif;
        padding: 2px;
        }

        #dock-container li:hover span {
        display: block;
        color: #fff;
        }

        #dock-container .textMenu {
        font: normal 90%/1 "Acme", Helvetica, sans-serif;
        padding: 2px;
        }

    }

        /* Début de l'ajout J-M */
        .active {
            background: orangered;
            color: #fff;
        }
        .greenBar {
            background-color: green; 
            height: 40px; 
            width: 2px;
        }
        .redBar {
            background-color: red; 
            height: 40px; 
            width: 2px;
        }
        /* Fin de l'ajout J-M */
        
        >>>.v-expansion-panel__header {
            min-height: 0;
            height: 35px;
            padding: 6px 12px;
        }
    </style>
