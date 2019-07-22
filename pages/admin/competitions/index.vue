<template>
    <div>
        <v-breadcrumbs divider="/">
            <v-breadcrumbs-item v-for="link in links" :key="link.text" :disabled="link.disabled" :to="link.to" :exact="true">
                {{ link.text }}
            </v-breadcrumbs-item>
        </v-breadcrumbs>

        <v-flex xs12 sm10 offset-sm1>
            <br /><br />
            <h1 class="text-md-center">Compétitions</h1>
            <br /><br />
            <v-btn color="primary" dark slot="activator" class="mb-3 ml-0" to="/admin/competitions/create">
				Ajouter une competition
			</v-btn>
            <v-card>
                <template>
                    <v-data-table 
						:headers="headers"
						:items="loadedCompetitions"
						:rows-per-page-items="[10, 20, 40, 60, 100]"
						:pagination.sync="pagination"
						item-key="name" 
						:select-all="true"
						class="elevation-1"
						v-model="selected"
					>
                        <template slot="headers" slot-scope="props">
                            <tr>
                                <th>
                                    <v-checkbox primary hide-details @click.native="toggleAll" :input-value="props.all" :indeterminate="props.indeterminate"></v-checkbox>
                                </th>
                                <th
									v-for="header in props.headers"
									:key="header.text"
									:class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '', header.align === 'left' ? 'text-xs-left' : '',]"
									@click="changeSort(header.value)"
								>
				          			<v-icon small>arrow_upward</v-icon>
				          			{{ header.text }}
				        		</th>
                            </tr>
                        </template>
                        <template slot="items" slot-scope="props">
                            <tr :active="props.selected" @click="props.selected = !props.selected">
                                <td>
                                    <v-checkbox primary hide-details :input-value="props.selected"></v-checkbox>
                                </td>
                                <td>{{ props.index + 1 }}</td>
                                <td class="text-xs-left">{{ props.item.name }}</td>
                                <td class="text-xs-left">{{ props.item.slug }}</td>
                                <td class="text-xs-left">
                                    <span v-for="(country, index) in props.item.countries" :key="index">{{ country.name }}<span v-if="index < props.item.countries.length - 1">,&nbsp;</span></span>
                                </td>
                                <td class="text-xs-left">{{ props.item.active }}</td>
                                <td class="text-xs-left" v-if="props.item.image"><img :src="'/images/competitions/' + props.item.image" width=60 /></td>
                                <td v-else></td>
                                <td class="text-xs-left">{{ props.item.season }}</td>
                                <td class="text-xs-left">{{ props.item._updated_at }}</td>
                                <td class="justify-center layout px-0">
                                    <v-btn icon class="mx-0" :to="'/admin/competitions/' + props.item.id" :id="props.item.id" disabled>
                                        <v-icon color="teal">edit</v-icon>
                                    </v-btn>
                                    <v-btn icon class="mx-0" @click="deleteItem(props.item)">
                                        <v-icon color="pink">delete</v-icon>
                                    </v-btn>
                                </td>
                            </tr>
                        </template>
                    </v-data-table>
                </template>
            </v-card>
        </v-flex>

        <!-- <br /><br /><br /><br /> -->
        <h2 class="text-md-center mt-5">Noeud "Competitions" dans la base de données:</h2>
        <br />
        <v-flex xs12 sm10 offset-sm1>
            <v-card>
                <json-editor :json="oldJSON" :onChange="onChange"></json-editor>
                <br />
                <div class="text-xs-center">
                    <v-btn class="btn" :disabled="!changed || loading" @click="updateCompetition" color="success"><i v-bind:class="{'fa fa-spinner fa-spin' : loading}"></i>Sauver les changements</v-btn>
                </div>
                <br />
            </v-card>
        </v-flex>
    </div>
</template>

<script>
	import '~/static/css/jsoneditor-tree.css'
	export default {
		layout: 'layoutBack',
		created() {
			this.$store.dispatch('competitions/loadedCompetitions')
			this.$store.dispatch('teams/loadedTeams')
		},
		data() {
			return {
				search: '',
				selected: [],
				links: [
					{
						text: 'Dashboard',
						to: '/admin',
						disabled: false
					},
					{
						text: 'Competitions',
						to: '/admin/competitions',
						disabled: true
					}
				],
				headers: [
					{ text: 'N°', value: 'id', align: 'left', sortable: false },
					{ text: 'Name', value: 'name', align: 'left' },
					{ text: 'Slug', value: 'activity', align: 'left' },
					{ text: 'Countries', value: 'countries', align: 'left' },
					{ text: 'Active', value: 'category', align: 'left' },
					{ text: 'Image', value: 'image', align: 'left' },
					{ text: 'Season', value: 'year', align: 'left' },
					{
						text: 'Dernière modification',
						value: '_updated_at',
						align: 'left'
					},
					{ text: 'Actions', value: 'actions', sortable: false }
				],
				events: '',
				pagination: {
					sortBy: 'date',
					descending: true,
					rowsPerPage: 10
				},
				newJSON: ''
			}
		},
		computed: {
			loading() {
				return this.$store.getters['loading']
			},
			loadedCompetitions() {
				return this.$store.getters['competitions/loadedCompetitions']
			},
			changed() {
				// console.log('changed!')
				if (
					this.newJSON && !_.isEqual(this.oldJSON, this.newJSON)
						? true
						: false
				) {
					return true
				}
			},
			oldJSON() {
				// console.log(typeof this.loadedCompetitions)
				const arrayToObject = array =>
					array.reduce((obj, item) => {
						obj[item.slug] = item
						return obj
					}, {})
				const competitionObject = arrayToObject(this.loadedCompetitions)
				// console.log(competitionObject)
				return competitionObject
			}
		},
		methods: {
			toggleAll() {
				if (this.selected.length) {
					this.selected = []
				} else {
					this.selected = this.loadedCompetitions.slice()
				}
			},
			changeSort(column) {
				if (this.pagination.sortBy === column) {
					this.pagination.descending = !this.pagination.descending
				} else {
					this.pagination.sortBy = column
					this.pagination.descending = false
				}
			},
			deleteItem(item) {
				this.$refs.confirm
					.open(
						'Delete',
						'Are you sure you want to delete competition "' +
							item.name +
							'" ?',
						{ color: 'red' }
					)
					.then(confirm => {
						if (confirm) {
							this.$store.dispatch(
								'competitions/deleteCompetition',
								item
							)
						}
					})
			},
			onChange(newJson) {
				this.newJSON = newJson
			},
			updateCompetition() {
				// console.log('updateCompetition called!')
				const competitionData = this.newJSON
				this.$store.dispatch(
					'competitions/updateCompetition',
					competitionData
				)
				return this.$router.push('/admin/competitions')
			}
		}
	}
</script>