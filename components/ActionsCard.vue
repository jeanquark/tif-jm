<template>
    <v-card class="card">
        <v-card-title primary-title>
            <v-flex xs6>
                <h1 class="text-xs-left" style="color: white; font-family: Acme">Action cards {{ this.theme }}</h1>
            </v-flex>
            <v-flex xs6 class="text-xs-right">
                <font-awesome-icon :icon="['fas', 'arrow-circle-left']" size="2x" class="icon" @click="closeModal" />
            </v-flex>
        </v-card-title>

        <v-card-text class="card-text mx-3">
            <p>
                <!-- this.theme: {{ this.theme }}<br /> -->
                <!-- this.actionsLength: {{ this.actionsLength }}<br /> -->
                <!-- loadedActions: {{ loadedActions }}<br /> -->
                isFlipped: {{ this.isFlipped }}<br />
                <!-- isAnimated: {{ this.isAnimated }}<br /> -->
                <!-- loadedUserActions: {{ this.loadedUserActions.find(action => action.id === 'hotdog_seller')['occurences'] }}<br /> -->
                loadedUserActions: {{ this.loadedUserActions }}<br />
                Level: {{ getUserLevel }}<br />
                Energy: {{ getUserEnergy }}<br />
                $tokens: {{ getUserTokens }}<br />
                $fans: {{ getUserDollarFan }}<br />
                <!-- energyCost: {{ energyCost }}<br /> -->
                <!-- energyCost2: {{ energyCost2 }}<br /> -->
                actionCosts: {{ actionCosts }}<br />
                actionGains: {{ actionGains }}<br />
                <!-- skillChanges: {{ skillChanges }}<br /> -->
                <!-- currentTime2: {{ currentTime2 }}<br /> -->
                disabled: {{ disabled }}<br />
                <!-- theme2: {{ theme2 }}<br /> -->
            </p>
            <v-container fluid>
                <v-layout row wrap align-center justify-center>
                    <span v-if="!loadedActionsByTheme">Loading...</span>
                    <v-flex xs12 sm8 md4 v-for="(action, index) in loadedActionsByTheme" :key="action.slug" class="pa-2">



                        <div class="flip-card" :class="[isAnimated[index] ? 'animated shake' : '']" style="border: 2px solid green;">
                            <v-card hover class="flip-card-inner" :class="[ isFlipped[index] ? 'flipped' : '' ]" @click="toggleFlip(index, action)" style="background-color: white; border: 2px solid darkred; border-radius: 5px; position: relative; min-height: 73%">
                                <div class="flip-card-front">
                                    <div>
                                        <span class="gommetteEnergy yellow" style="backface-visibility: hidden;">
                                            <i class="material-icons gommetteIcone">flash_on</i>
                                        </span>
                                        <span class="gommetteDollar green" style="backface-visibility: hidden;">
                                            <i class="material-icons gommetteIcone">attach_money</i>
                                        </span>
                                        <span class="gommetteToken blackOpacity" style="backface-visibility: hidden;">
                                            <i class="material-icons gommetteIcone">title</i>
                                        </span>
                                        <v-spacer></v-spacer>
                                        <span class="gommetteNiveau darkred" style="backface-visibility: hidden;">
                                            <v-icon style="color: white">star</v-icon> N1
                                        </span>
                                        <!-- <img src="/images/stress.jpg" class="" style="width: 100%;" /> -->
                                    </div>
                                    <v-container fill-height>
                                        <!-- <v-layout> -->
                                            <!-- <h2>Front</h2> -->
                                            <img src="/images/stress.jpg" class="" style="width: 100%;" />
                                        <!-- </v-layout> -->
                                    </v-container>
                                </div>
                                <div class="flip-card-back" v-if="isFlipped[index]">
                                    Back 2
                                    
                                </div>
                            </v-card>
                        </div>



                        <!-- <div class="flip-card animated shake delay-2s"> -->
                        <div class="flip-card" :class="[isAnimated[index] ? 'animated shake' : '']" v-if="!loadedUser">
                            <v-card hover class="flip-card-inner" :class="[ isFlipped[index] ? 'flipped' : '' ]" @click="toggleFlip(index, action)" style="border: 1px solid red;">
                                <div class="flip-card-front">
                                    <h1>{{ action.name }}</h1>
                                </div>
                                <div class="flip-card-back" v-if="isFlipped[index]">
                                    <h2>{{ action.name }}</h2><br />
                                    <b>{{ action.description }}</b><br /><br />
                                    <!-- getUserEnergy: {{ getUserEnergy }}<br /> -->
                                    <!-- getUserEndurance: {{ getUserEndurance }}<br /> -->
                                    <!-- getUserSmoothTalk: {{ getUserSmoothTalk }}<br /> -->

                                    Remaining energy for the day: {{ getTodayEnergy }}<br />

                                    <div v-for="actionCost of actionCosts[action.slug]" :key="actionCost.slug">
                                        {{ actionCost.name }}: <span class="red--text">-{{ actionCost.value }}</span>
                                    </div>

                                    <div v-for="actionGain of actionGains[action.slug]" :key="actionGain.slug">
                                        {{ actionGain.name }}: <span class="green--text">+{{ actionGain.value }}</span>
                                    </div>

                                    Played today: {{ playedToday(action.slug) }}<br /><br />
                                    <span style="color: orangered;">Conseil de Mr Fan<br />
                                    {{ action.mr_fan_advice }}</span>
                                    
                                    <v-btn @click.stop="selectCard(action, index)" :disabled="disabled(action.slug)">Select card</v-btn><br />
                                </div>
                            </v-card>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card-text>

        <v-card-actions class="card-footer">
            <v-flex class="text-xs-center">
                <v-btn color="success" style="margin-bottom: 20px" @click="closeModal">Retour</v-btn>
            </v-flex>
        </v-card-actions>
    </v-card>
</template>

<script>
    // import energyCostFunction from '~/helpers/functions/energyCostFunction'
    // import enduranceGainFunction from '~/helpers/functions/enduranceGainFunction'
    // import baratinGainFunction from '~/helpers/functions/enduranceGainFunction'
    import gainFunctions from '~/helpers/functions/gainFunctions'
    import costFunctions from '~/helpers/functions/costFunctions'
    import moment from 'moment'
    export default {
        head () {
            return {
                link: [
                    { 
                        rel: 'stylesheet', 
                        href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css'
                    }
                ]     
            }
        },
        props: ['theme', 'isFlipped', 'currentTime2', 'theme2'],
        async created () {
            console.log('component created!')
            this.$store.dispatch('actionsCards/fetchActions', this.theme)
            // console.log('response: ', response)
        },
        async mounted () {
            console.log('component mounted!')
            console.log('this.theme: ', this.theme)
        },
        data () {
            return {
                length: 1,
                isAnimated: new Array(this.length),
                actionCosts: {
                    donuts_seller: {
                        // name: 'Donuts seller',
                        // slug: 'donuts_seller',
                        // value: 0
                    },
                    go_swimming: {
                        // name: 'Go swimming',
                        // slug: 'go_swimming',
                        // value: 0
                    },
                    ice_creams_seller: {
                        // name: 'Ice creams seller',
                        // slug: 'ice_creams_seller',
                        // value: 0
                    },
                    play_beach_soccer: {
                        // name: 'Play beach soccer',
                        // slug: 'play_beach_soccer',
                        // value: 0
                    }
                },
                actionGains: {
                    donuts_seller: {},
                    go_swimming: {},
                    ice_creams_seller: {},
                    play_beach_soccer: {}

                },
                endurance: 0,
            }
        },
        computed: {
            loadedUser () {
                return this.$store.getters['users/loadedUser']
            },
            loadedActionsByTheme () {
                return this.$store.getters['actionsCards/loadedActions'][this.theme]
                // return this.$store.getters['actionsCards/loadedActions'].filter(action => action.theme === 'beach')
            },
            loadedUserActions () {
                return this.$store.getters['userActions/loadedUserActions']
            },
            getTodayEnergy () {
                try {
                    return this.loadedUserActions.energy
                } catch {
                    // return 100
                    return this.getUserEnergy
                }
            },
            getUserLevel () {
                try {
                    return this.loadedUser.level.value
                } catch {
                    return 'No value found for level'
                }
            },
            getUserEnergy () {
                try {
                    return this.loadedUser.energy.value
                } catch {
                    return 'No value found for energy'
                }
            },
            getUserTokens () {
                try {
                    return this.loadedUser.tokens.value
                } catch {
                    return 'No value found for tokens'
                }
            },
            getUserDollarFan () {
                try {
                    return this.loadedUser.dollarFan.value
                } catch {
                    return 'No value found for dollarFan'
                }
            },
            getUserEndurance () {
                try {
                    return this.loadedUser.skillEndurance.value
                } catch {
                    return 'No value found for endurance'
                }
            },
            getUserSmoothTalk () {
                try {
                    return this.loadedUser.skillSmoothtalk.value
                } catch {
                    return 'No value found for smooth talk'
                }
            }
        },
        methods: {
            disabled (actionSlug) {
                console.log('actionSlug: ', actionSlug)
                // console.log('disabled: ', this.actionCosts[actionSlug]['cost_energy']['value'])
                if (this.actionCosts[actionSlug] && this.actionCosts[actionSlug]['cost_energy']) {
                    return this.getTodayEnergy < Math.abs(this.actionCosts[actionSlug]['cost_energy']['value'])
                } else {
                    return true
                }
            },
            closeModal() {
                console.log('Close modal')
                this.$emit('closeModal', true)
            },
            toggleFlip (index, action) {
                console.log('toggleFlip: ', index)
                if (this.isFlipped[index]) {
                    this.isFlipped.splice(index, 1, false)
                } else {
                    this.isFlipped.splice(index, 1, true)
                    // console.log('action: ', action)
                    for (let actionCost of this.getActionCosts(action)) {
                        // this.energyCost2[action.slug] = this.actionCostFunction(actionCost, this.playedToday(action.slug))
                        // if (!this.actionCosts[action.slug][]) {
                            // console.log('actionCost', actionCost)
                            // console.log('action.slug: ', action.slug)
                            this.actionCosts[action.slug][actionCost.slug] = 
                                {
                                    slug: actionCost.slug,
                                    name: actionCost.name,
                                    property: actionCost.property,
                                    value: parseInt(costFunctions(actionCost.slug, actionCost.value, this.playedToday(action.slug)))
                                }
                        // }
                    }
                    for (let actionGain of this.getActionGains(action)) {
                        this.actionGains[action.slug][actionGain.slug] = 
                            {
                                slug: actionGain.slug,
                                name: actionGain.name,
                                property: actionGain.property,
                                value: parseInt(gainFunctions(actionGain.slug, actionGain.value, this.playedToday(action.slug)))
                            }
                    }
                }
            },
            async selectCard (action, index) {
                console.log(`selectCard: ${action.name}, ${index}`)
                this.isAnimated.splice(index, 1, true)
                // this.isAnimated.splice(0, 1, false)
                setTimeout(() => {
                    this.isAnimated.splice(index, 1, false)
                }, 1500)
                console.log('actionCosts: ', this.actionCosts[action.slug])
                console.log('actionGains: ', this.actionGains[action.slug])
                // console.log('this.skillChanges: ', this.skillChanges)
                await this.$store.dispatch('userActions/updateUserActions', { 
                    name: action.name,
                    slug: action.slug,
                    property: action.property,
                    actionCosts: this.actionCosts[action.slug],
                    actionGains: this.actionGains[action.slug]
                })
                for (let actionCost of this.getActionCosts(action)) {
                    this.actionCosts[action.slug][actionCost.slug] = {
                        slug: actionCost.slug,
                        name: actionCost.name,
                        property: actionCost.property,
                        value: parseInt(costFunctions(actionCost.slug, actionCost.value, this.playedToday(action.slug)))
                    }
                }
                for (let actionGain of this.getActionGains(action)) {
                    this.actionGains[action.slug][actionGain.slug] = {
                        slug: actionGain.slug,
                        name: actionGain.name,
                        property: actionGain.property,
                        value: parseInt(gainFunctions(actionGain.slug, actionGain.value, this.playedToday(action.slug)))
                    }
                }
            },
            playedToday (action) {
                try {
                    // return 5
                    // return this.loadedUserActions.find(userAction => userAction.id === action).occurences
                    return this.loadedUserActions[action].occurences
                } catch {
                    return 0
                    // return 'No value found for played today'
                }
            },
            getActionGains (action) {
                return Object.values(action).filter(el => el.type === 'gain')
            },
            getActionCosts (action) {
                return Object.values(action).filter(el => el.type === 'cost')
            }
        }
    }
</script>

<style scoped>
    .card {
        background: linear-gradient(-45deg, #ffdbb5 0%, #ffa73d 50%, #FF7C01 50%, #ea7200 100%);
        border-radius: 5px;
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
        height: 250px;
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

    /* CSS Gaël */
    .imgInventory {
        width: 100%;
    }
    .gommetteNiveau {
        position: absolute; 
        top: 10px; 
        right: 10px; 
        font-size: 20px; 
        padding: 5px; 
        border-radius: 5px; 
        color: white;
    }
    .gommetteStyle {
        position: absolute; 
        bottom: 10px; 
        right: 10px; 
        font-size: 20px; 
        padding: 5px; 
        border-radius: 5px; 
        color: white;
    }
    .gommetteEnergy {
        padding: 5px; 
        position: absolute; 
        top: 10px; 
        left: 5px; 
        border-radius: 50%;
        color: white;
        z-index: 3;
    }
    .gommetteDollar {
        padding: 5px; 
        position: absolute; 
        top: 10px; 
        left: 25px; 
        border-radius: 50%;
        color: white;
        z-index: 2;
    }	
    .gommetteToken {
        padding: 5px; 
        position: absolute; 
        top: 10px; 
        left: 45px; 
        border-radius: 50%; 
        color: white;
        z-index: 1;
    }
    .gommetteIcone {
        margin-top: 3px; 
        font-size: 25px;
    }
    .blackOpacity {
        background-color: black;
        opacity: 0.25;
    }
    .darkred {
        background-color: darkred;
        color: white;
    }
    @media only screen and (max-width: 768px) {
        .imgInventory {
	        width: 70%;
	    }
        .gommetteNiveau {
            font-size: 16px; 
        }
        .gommetteStyle {
            font-size: 16px; 
        }
        .gommetteEnergy {
            padding: 5px; 
            position: absolute; 
            top: 10px; 
            left: 5px; 
            border-radius: 50%;
            color: white;
            z-index: 3;
        }
        .gommetteDollar {
            padding: 5px; 
            position: absolute; 
            top: 10px; 
            left: 25px; 
            border-radius: 50%;
            color: white;
            z-index: 2;
        }	
        .gommetteToken {
            padding: 5px; 
            position: absolute; 
            top: 10px; 
            left: 45px; 
            border-radius: 50%; 
            color: white;
            z-index: 1;
        }
        .gommetteIcone {
            font-size: 20px;
        }
    }
</style>