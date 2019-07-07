<template>
	<v-tabs
        dark
        color="indigo"
        show-arrows
        fixed-tabs
        v-model="activeCompetition"
        style="border: 1px dashed orange;"
        @change="fetchCompetitionStanding(activeCompetition)"
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
                <v-layout>
                    <v-flex xs12 sm10 offset-sm1>
                        <v-card flat>
                            <v-card-text class="card-text">
                                <v-expansion-panel class="elevation-0" :value="0" :disabled="true">
                                    <v-expansion-panel-content style="background-color: orangered">
                                        <div slot="header" class="white--text">
                                            {{ competition.name.toUpperCase() }}
                                        </div>
                                        <v-icon slot="actions" color="white">$vuetify.icons.expand</v-icon>
                                        <v-card>
                                            <v-card-text style="padding: 0">
                                                <!-- :items="loadedStandings[competition.slug]" -->
                                                <!-- :items="loadedCompetitionStanding(competition.slug)" -->
                                                <!-- :items="loadedStandings[competition.slug] ? loadedStandings[competition.slug]['standing'] : []" -->
                                                <v-data-table
                                                    :headers="standingHeaders"
                                                    :items="loadedStandings[competition.slug]['standing']"
                                                    class="elevation-0"
                                                    no-data-text="No standing found for this competition"
                                                    :disable-initial-sort="true"
                                                    hide-actions
                                                    :expand="true"
                                                    v-if="loadedStandings[competition.slug]"
                                                >
                                                    <template slot="items" slot-scope="props">
                                                        <tr :class="rowStyle(props.index, competition.info)">
                                                            <td>{{ props.item.rank }}</td>
                                                            <td class="lineHeight">
                                                            	<b>{{ props.item.teamName }}</b>
                                                            </td>
                                                            <td class="text-xs-center">
                                                            	<!-- <img :src="`/images/teamsByID/${props.item.team_id}.png`" width="30" /> -->
                                                            	<v-img :src="`/images/teamsByID/${props.item.team_id}.png`" width="30" aspect-ratio="1"></v-img>
                                                            </td>
                                                            <td class="text-xs-center">{{ props.item.points }}</td>
                                                            <td class="text-xs-center">{{ props.item.matchsPlayed }}</td>
                                                            <td class="text-xs-center">{{ props.item.win }}</td>
                                                            <td class="text-xs-center">{{ props.item.draw }}</td>
                                                            <td class="text-xs-center">{{ props.item.lose }}</td>
                                                            <td class="text-xs-center">{{ props.item.goalsFor }}</td>
                                                            <td class="text-xs-center">{{ props.item.goalsAgainst }}</td>
                                                            <td class="text-xs-center">{{ props.item.goalsDiff }}</td>
                                                        </tr>
                                                    </template>
                                                </v-data-table>
                                            </v-card-text>
                                        </v-card>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-tab-item>
        </v-tabs-items>
    </v-tabs>
</template>

<script>
	import moment from 'moment'
	export default {
		async created () {
            await this.$store.dispatch('standings/fetchCompetitionStanding', 'english_premier_league_2018_2019');
        },
		data () {
			return {
				standingHeaders: [
                    {
                        text: 'Rank',
                        align: 'left',
                        sortable: false,
                        value: 'rank'
                    },
                    {
                        text: 'Team',
                        align: 'left',
                        sortable: false,
                        value: 'name'
                    },
                    { text: '', sortable: false },
                    { text: 'Points', value: 'points', align: 'center' },
                    { text: 'Played', value: 'matchsPlayed', align: 'center' },
                    { text: 'Won', value: 'win', align: 'center' },
                    { text: 'Drawn', value: 'draw', align: 'center' },
                    { text: 'Lost', value: 'lose', align: 'center' },
                    { text: 'Goals for', value: 'goalsFor', align: 'center' },
                    { text: 'Goals against', value: 'goalsAgainst', align: 'center' },
                    { text: 'Goals diff', value: 'goalsDiff', align: 'center' }
                ],
				activeCompetition: 'english_premier_league_2018_2019'
			}
		},
		computed: {
			loadedActiveCompetitions () {
                return this.$store.getters['competitions/loadedCompetitions'].filter(competition => competition.status === 'active')
            },
            loadedStandings () {
                return this.$store.getters['standings/loadedStandings']
            }
		},
		methods: {
			fetchCompetitionStanding(competition) {
                console.log('fetchCompetitionStanding: ', competition)
                // if (!this.loadedStandings[competition.slug]) {
                if (!this.loadedStandings[competition]) {
                    this.$store.dispatch('standings/fetchCompetitionStanding', competition)
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
</style>