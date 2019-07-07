<template>
    <!-- Competition tabs -->
    <div>
        <!-- <p>
            loadedActiveCompetitions: {{ loadedActiveCompetitions }}<br />
            loadedEventsByCompetitionByRound: {{ loadedEventsByCompetitionByRound(activeCompetition, activeRound) }}<br />
        </p> -->
        <v-tabs
            dark
            color="indigo"
            show-arrows
            fixed-tabs
            v-model="activeCompetition"
            style="border: 1px dashed orange;"
            @change="fetchEventsByCompetitionByRound(activeCompetition, activeRound + 1)"
        >
            <v-tabs-slider color="yellow"></v-tabs-slider>

            <v-tab
                v-for="competition in loadedActiveCompetitions"
                :key="competition.slug"
                :href="'#' + competition.slug"
            >
                {{ competition.name }}
            </v-tab>

            <v-tabs-items>
                <v-tab-item
                    v-for="competition in loadedActiveCompetitions"
                    :key="competition.slug"
                    :value="competition.slug"
                    lazy
                >
                    <!-- Rounds tabs -->
                    <v-tabs
                        color="grey"
                        dark
                        slider-color="yellow"
                        v-model="activeRound"
                        @change="fetchEventsByCompetitionByRound(activeCompetition, activeRound + 1)"
                    >
                        <v-tab
                            v-for="round in competition.rounds"
                            :key="round"
                            ripple
                            style="cursor: pointer;"
                        >
                            {{ round }}
                        </v-tab>

                        <v-tabs-items>
                            <v-tab-item
                                v-for="round in competition.rounds"
                                :key="round"
                                lazy
                            >
                                <v-layout class="column fill-height" style="border: 4px solid grey;" v-cloak>
                                    <v-flex xs12>
                                        <v-card flat>
                                            <v-card-text>
                                                <!-- loading: {{ loading }}<br /> -->
                                                <!-- loadedActiveCompetitions: {{ loadedActiveCompetitions }}<br /> -->
                                                <!-- activeCompetition: {{ activeCompetition }}<br /> -->
                                                <!-- activeRound: {{ activeRound }}<br /> -->
                                                <!-- <v-data-table :items="loadedEventsByCompetitionByRound(competition, round)" no-data-text="No game found on this day." class="elevation-0" hide-actions hide-headers v-if="loadedEventsByDay(day) && !loading">
                                                </v-data-table> -->
                                                <h2 class="text-xs-center">Results of round {{ activeRound + 1}}</h2>
                                                <br />
 
                                                <v-data-table :items="loadedEventsByCompetitionByRound(activeCompetition, activeRound + 1)" no-data-text="No game found on this day." class="elevation-0" hide-actions hide-headers>
                                                    <template slot="items" slot-scope="props" style="height: 15px; border-spacing: 0; padding: 2px; border: 1px solid black">
                                                        
                                                        <v-layout align-center style="padding: 0; border-right: 1px solid black; border-left: 1px solid black; border-bottom: 1px solid black">
                                                            <v-flex xs12 style="margin: 0; padding-top: 2px; padding-bottom: 2px; height: 100%">


                                                                <v-layout align-start hidden-xs-only>
                                                                    <v-flex class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 15px; margin: 0">
                                                                        <div style="background-color: green; height: 100%; width: 2px" v-if="props.item.statusShort === '1H' || props.item.statusShort === '2H' || props.item.statusShort === 'HT'"></div>
                                                                        <div style="background-color: red; height: 100%; width: 2px" v-if="props.item.statusShort === 'FT'"></div>
                                                                        <div style="background-color: orangered; height: 100%; width: 2px" v-if="props.item.statusShort === 'NS' || props.item.statusShort === 'PST'"></div>
                                                                    </v-flex>
                                                                    <v-flex class="text-xs-left" style="width: 100%; padding: 0; height: 15px; margin: 0">
                                                                        <div style="color: orange;font-size: 80%">
                                                                            <span style="float: left; background-color: red; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px;" v-if="props.item.statusShort === 'FT' || props.item.statusShort === 'PST' || props.item.statusShort === 'ABD' || props.item.statusShort === 'AET'">{{ props.item.date | moment('DD MMM YYYY')}}</span>
                                                                            <span v-if="props.item.statusShort === 'NS'" style="float: left; background-color: orangered; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px" >{{ props.item.date | moment('DD MMM YYYY') }} {{ convertToLocalTime(props.item.timestamp) }}</span>
                                                                            <span style="float: left; background-color: green; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px;" v-if="props.item.statusShort === '1H' || props.item.statusShort === '2H'">{{ props.item.elapsed }} min</span>
                                                                            <span v-if="props.item.statusShort === 'HT'" style="float: left; background-color: green; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px;">Half time</span>
                                                                            ID: {{ props.item.id }}
                                                                        </div>
                                                                    </v-flex>
                                                                </v-layout>
                                                                

                                                                <v-layout align-center style="max-width: 100%">
                                                                    <v-flex hidden-xs-only class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 40px; margin: 0">
                                                                        <div style="background-color: red; height: 40px; width: 2px" v-if="props.item.statusShort === 'FT'"></div>
                                                                        <div style="background-color: green; height: 40px; width: 2px" v-if="props.item.statusShort === '1H' || props.item.statusShort === '2H' || props.item.statusShort === 'HT'"></div>
                                                                        <div v-if="props.item.statusShort === 'NS' || props.item.statusShort === 'PST'" style="background-color: orangered; height: 40px; width: 2px"></div>
                                                                    </v-flex>
                                                                    <v-flex hidden-sm-and-up class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 30px; margin: 0">
                                                                        <div style="background-color: red; height: 30px; width: 2px" v-if="props.item.statusShort === 'FT'"></div>
                                                                        <div style="background-color: green; height: 30px; width: 2px" v-if="props.item.statusShort === '1H' || props.item.statusShort === '2H' || props.item.statusShort === 'HT'"></div>
                                                                        <div v-if="props.item.statusShort === 'NS' || props.item.statusShort === 'PST'" style="background-color: orangered; height: 30px; width: 2px"></div>
                                                                    </v-flex>

                                                                    <v-flex sm1 hidden-xs-only align-center class="text-xs-center imgTeamLogoWrapper" style="">
                                                                        <img :src="'/images/teams/' + props.item.homeTeam_slug + '.png'" :lazy-src="'/images/icon.png'" class="imgTeamLogo"/>
                                                                    </v-flex>
                                                                    <v-flex sm4 xs5 align-center class="text-xs-left pd-left10">
                                                                        <span class="teamTextSize">{{ props.item.homeTeam_name }}</span>
                                                                    </v-flex>
                                                                    <v-flex sm2 xs2 class="text-xs-center">
                                                                        <span class="scoreBox" style="" v-if="props.item.statusShort === 'FT'">
                                                                            {{ props.item.final_score }}
                                                                        </span>
                                                                        <span class="scoreBox" style="" v-if="props.item.statusShort === '1H' || props.item.statusShort === '2H' || props.item.statusShort === 'HT'">
                                                                            <span :key="props.item.goalsHomeTeam">
                                                                                    {{ props.item.goalsHomeTeam }}
                                                                            </span> 
                                                                            - 
                                                                            <span :key="props.item.goalsVisitorTeam">
                                                                                {{ props.item.goalsVisitorTeam }}
                                                                            </span>
                                                                        </span>
                                                                        <span class="scoreBox" style="" v-if="props.item.statusShort === 'NS'">
                                                                            {{ convertToLocalTime(props.item.timestamp) }}
                                                                        </span>
                                                                        <span class="scoreBox" style="" v-if="props.item.statusShort === 'PST'">
                                                                            Postponed
                                                                        </span>
                                                                    </v-flex>
                                                                    <v-flex sm4 xs5 align-center class="text-xs-right pd-right10">
                                                                        <span class="teamTextSize">{{ props.item.visitorTeam_name }}</span>
                                                                    </v-flex>
                                                                    <v-flex sm1 hidden-xs-only align-center class="text-xs-center imgTeamLogoWrapper" style="">
                                                                        <img :src="'/images/teams/' + props.item.visitorTeam_slug + '.png'" :lazy-src="'/images/icon.png'" class="imgTeamLogo"/>
                                                                    </v-flex>
                                                                </v-layout>
                                                            </v-flex>
                                                        </v-layout>
                                                    </template>
                                                </v-data-table>
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-tab-item>
                        </v-tabs-items>
                    </v-tabs>


                </v-tab-item>
            </v-tabs-items>
        </v-tabs>
    </div>
</template>

<script>
	import moment from 'moment'
	export default {
		async created () {
            // console.log(this.activeCompetition)
            await this.$store.dispatch('events/fetchEventsByCompetitionByRound', { competition: this.activeCompetition, round: this.activeRound + 1 });
        },
		data () {
			return {
                activeCompetition: 'english_premier_league_2018_2019',
                // activeCompetition: 2,
                activeRound: 30
			}
		},
		computed: {
			loadedActiveCompetitions () {
                return this.$store.getters['competitions/loadedCompetitions'].filter(competition => competition.status === 'active')
            },
            // loadedEventsByCompetitionByRound () {
            //     return this.$store.getters['events/loadedEventsByCompetitionByRound']
            // }
		},
		methods: {
            loadedEventsByCompetitionByRound (competition, round) {
                // console.log('competition3: ', competition)
                // console.log('round3: ', round)
                const eventsByCompetition = this.$store.getters['events/loadedEventsByCompetitionByRound'][competition]
                if (eventsByCompetition) {
                    // const abc = eventsByCompetition[round]
                    // return abc.sort((a, b) => a.timestamp - b.timestamp)
                    return eventsByCompetition[round]
                }
                return null
                // return this.$store.getters['events/loadedEventsByCompetitionByRound']['english_premier_league_2018_2019'] ? this.$store.getters['events/loadedEventByCompetitionByRound']['english_premier_league_2018_2019'][round] : ''
            },
			fetchCompetitionStanding (competition) {
                console.log('fetchCompetitionStanding: ', competition)
                // if (!this.loadedStandings[competition.slug]) {
                if (!this.loadedStandings[competition]) {
                    this.$store.dispatch('standings/fetchCompetitionStanding', competition)
                }
            },
            fetchEventsByCompetitionByRound (competition, round) {
                console.log('fetchEventsByCompetitionByRound: ', competition, round)
                if (!this.loadedEventsByCompetitionByRound(competition, round)) {
                    this.$store.dispatch('events/fetchEventsByCompetitionByRound', { competition, round })
                }
            },
            rowStyle (rowIndex, info) {
                // console.log('rowIndex: ', rowIndex)
                // console.log('standing: ', standing)
                if (rowIndex < info.champions_league) {
                    return 'championsleague'
                } else if (rowIndex < info.europa_league) {
                    return 'europaleague'
                } else if (rowIndex === info.relegation) {
                    return 'relegation'
                }
            },
            convertToLocalTime (timestamp) {
                return moment.unix(timestamp).format('HH:mm')
            }
		}
	}
</script>

<style scoped>
	.championsleague {
        background: rgba(231, 76, 60, .3);
    }
    .europaleague {
        background: rgba(52, 152, 219, .3);
    }
    .relegation {
        border-top: 2px solid red;
    }
    .lineHeight {
        line-height: 1.5;
    }
    .teamTextSize {
        font-size: 1.3em;
    }
    .imgTeamLogoWrapper {
        width: 50px; 
        padding-right: 15px;
    }
    .imgTeamLogo {
        max-width: 30px;
        max-height: 30px;
    }
    .scoreBox {
        background-color: black; 
        color: orange; 
        padding: 2px 10px; 
        border-radius: 5px; 
        font-size: 130%;
    }
</style>