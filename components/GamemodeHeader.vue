<template>
    <v-layout row>
        <v-flex hidden-sm-and-down class="barreHeader">
            <v-layout row>
                <v-flex xs6 sm6 md6>
                    <span class="barreHeaderLeft1"><img src="/images/switzerland.png" class="imgTeamSmall" /></span> <span class="barreHeaderLeft2">G. Manigley (41 ans) - <nuxt-link to="/myteams" style="color: white; text-decoration: none">Tu gères des fans de {{ loadedUserTeams.length > 1 ? loadedUserTeams.length + ' équipes' : loadedUserTeams.length + ' équipe' }}</nuxt-link></span>
                </v-flex>
                <v-flex xs6 sm6 md6>
                    <span class="barreHeaderRight">Fan de l'équipe de suisse de football (1.34 PF)</span>
                </v-flex>
            </v-layout>
        </v-flex>
        <v-flex hidden-md-and-up class="barreHeader">
            <v-layout row>
                <v-flex xs6 sm6 md6>
                    <span class="barreHeaderLeft1"><img src="/images/switzerland.png" class="imgTeamSmall" /></span> <span class="barreHeaderLeft2">G. Manigley <nuxt-link to="/myteams" style="color: white; text-decoration: none">(Fans de {{ loadedUserTeams.length > 1 ? loadedUserTeams.length + ' équipes' : loadedUserTeams.length + ' équipe' }})</nuxt-link></span>
                </v-flex>
                <v-flex xs6 sm6 md6>
                    <span class="barreHeaderRight">1.34 point de ferveur</span>
                </v-flex>
            </v-layout>
        </v-flex>
         <v-flex shrink>
         <nuxt-link to="/myprofil">
            <div id="avatar">
                <img src="/images/avatar.png" class="imgAvatar" />
            </div>
        </nuxt-link>
        </v-flex>
        <v-flex hidden-sm-and-down grow>
            <v-layout row>
                <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader1">
                    <div style="text-align: center" class="levelHeader">Niv.1</div>
                    <v-progress-linear class="progressOrange" color="orange" height="20" value="30"><span style="color: white">3 / 10</span></v-progress-linear>
                </v-flex>
                <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
                    <div style="text-align: center"><i class="material-icons md-48" style="color: yellow">flash_on</i></div>
                    <v-progress-linear class="progressYellow" color="yellow" height="20" value="75"><span style="color: black">75 / 100</span></v-progress-linear>
                    <nuxt-link to="/plus" class="aPlusYellow">
                    <span class="plusYellow">+</span>
                    </nuxt-link>
                </v-flex>
                <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
                    <div style="text-align: center"><i class="material-icons md-48" style="color: green">attach_money</i></div>
                    <div class="dollarFan">1234 $fans</div>
                    <nuxt-link to="/plus" class="aPlusGreen">
                    <span class="plusGreen">+</span>
                    </nuxt-link>
                </v-flex>
                <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
                    <div style="text-align: center"><i class="material-icons md-48" style="color: orangered">title</i></div>
                    <div class="token">12 tokens</div>
                    <nuxt-link to="/plus" class="aPlusOrangered">
                    <span class="plusOrangered">+</span>
                    </nuxt-link>
                </v-flex>
            </v-layout>
        </v-flex>
        <v-flex hidden-md-and-up grow>
            <v-layout row>
                <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader1">
                    <div style="text-align: center" class="levelHeader">Niv.1</div>
                    <v-progress-linear class="progressOrange" color="orange" height="12" value="30"><span style="color: white">3 / 10</span></v-progress-linear>
                </v-flex>
                <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
                    <div style="text-align: center"><i class="material-icons md-48" style="color: yellow">flash_on</i></div>
                    <v-progress-linear class="progressYellow" color="yellow" height="12" value="75"><span style="color: black">75 / 100</span></v-progress-linear>
                    <nuxt-link to="/plus" class="aPlusYellow">
                    <span class="plusYellow">+</span>
                    </nuxt-link>
                </v-flex>
                <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
                    <div style="text-align: center"><i class="material-icons md-48" style="color: green">attach_money</i></div>
                    <div class="dollarFan">1234 $fans</div>
                    <nuxt-link to="/plus" class="aPlusGreen">
                    <span class="plusGreen">+</span>
                    </nuxt-link>
                </v-flex>
                <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
                    <div style="text-align: center"><i class="material-icons md-48" style="color: orangered">title</i></div>
                    <div class="token">12 tokens</div>
                    <nuxt-link to="/plus" class="aPlusOrangered">
                    <span class="plusOrangered">+</span>
                    </nuxt-link>
                </v-flex>
            </v-layout>
        </v-flex>  
        <v-flex shrink>
            <nuxt-link to="/myteams">
            <div id="team">
                <img src="/images/switzerland.png" class="imgTeam" />
            </div>
            </nuxt-link>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        computed: {
            loadedUserTeams () {
                return this.$store.getters['users/loadedUserTeams']
            }
        }
    }
</script>

<style scoped>
    #header {
        max-height: 162px;
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
    .barreHeaderLeft1 {
        margin-left: 100px; 
        float: left; 
        margin-top: 4px;
    }
    .barreHeaderLeft2 {
        color: white; 
        padding: 4px; 
        float: left; 
        margin-top: 9px;
    }
    .barreHeaderRight {
        margin-right: 100px; 
        color: white; 
        padding: 4px; 
        float: right; 
        margin-top: 9px;
    }
    .cadreHeader1 {
        padding: 20px; 
        background-color: black; 
        border-bottom: 1px solid orangered; 
        border-right: 1px solid orangered;
        border-left: 1px solid orangered;   
        height: 120px; 
        box-shadow: 0 4px 5px -1px black; 
        position: relative;
    }
    .cadreHeader {
        padding: 15px; 
        background-color: black; 
        border-bottom: 1px solid orangered; 
        border-right: 1px solid orangered; 
        height: 120px; 
        box-shadow: 0 4px 5px -1px black; 
        position: relative;
    }
    #avatar {
        background-color: orangered;
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
        background-color: orangered;
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
    .levelHeader {
        font-weight: 700;
        font-size: 36px;  /* Preferred icon size */
        background-color: orange;
        color: white;
        border-radius: 10px;
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
    .progressYellow {
        width: 100%; 
        font-weight: 700; 
        color: black; 
        border-radius: 5px;
    }
    .progressOrange {
        width: 100%; 
        font-weight: 700; 
        color: black; 
        border-radius: 5px;
        margin-top: 25px;
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
    .dollarFan {
        margin-top: 14px;
        width: 100%;
        text-align: center;
        color: green;
        font-weight: 700;
        box-shadow: 0 0 10px 2px inset;
        border-radius: 5px;
        padding: 4px;
    }
    .token {
        margin-top: 14px;
        width: 100%;
        text-align: center;
        color: orangered;
        font-weight: 700;
        box-shadow: 0 0 10px 2px inset;
        border-radius: 5px;
        padding: 5px;
    }
    .cadreScore {
        border: 2px solid orangered;
        padding: 5px;
        width: 800px;
        background-color: whitesmoke;
        opacity: 0.9;
        color: black;
        font-size: 1.1em;
        margin: 20px 100px;
    }
    .pd-left5 {
        padding-left: 5px;
    }
    .imgLogoEquipe {
        max-width: 30px;
        max-height: 30px;
    }
    .teamTextSize {
        font-size: 1.2em;
    }
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
</style>