<template>
	<v-layout align-center justify-center row fill-height style="background-color: black">
		<v-flex>
            <v-container fluid style="max-width: 1017px; padding: 0px; border: 2px solid green;">
                <scoremode-header />

                <v-layout row wrap style="background-color: white; border: 2px solid darkred;">
                    <v-flex xs12 sm8 offset-sm2 my-4 style="border: 1px solid red;">
                        <v-card class="elevation-0">
                            <v-card-title align-center justify-center style="background-color: orangered; min-height: 60px;">
                                <h2 class="white--text">Login</h2>
                            </v-card-title>
                            <v-card-text>
                                <v-form>
                                    <!-- error: {{ error }}<br /> -->
                                    <v-alert
                                        type="error"
                                        :value="error"
                                        v-if="error"
                                        >
                                        {{ $t(`auth-validation-rules.${error.code}`) }}
                                    </v-alert>
                                    <br />
                                    <v-text-field 
                                        prepend-icon="person" 
                                        name="email" 
                                        label="Email" 
                                        type="email"
                                        v-model="form.email"
                                    ></v-text-field>
                                    <v-text-field 
                                        id="password1" 
                                        prepend-icon="lock" 
                                        name="password" 
                                        label="Password" 
                                        type="password"
                                        v-model="form.password"
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions class="">
                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <v-layout >
                                            <v-flex xs12 class="text-xs-center">
                                                <v-btn color="success" @click="signUserIn" :loading="loading">Login</v-btn><br /><br />
                                                <v-btn block color="#df4a32" class="white--text" @click="signInWithGoogle">Login with Google</v-btn><br />
                                                <v-btn block color="#3c5a99" class="white--text">Login with Facebook</v-btn><br />
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                    
                                    <v-flex xs12>
                                        <v-layout>
                                            <v-flex xs12 class="text-xs-center">
                                                <br />
                                                <v-btn
                                                    flat
                                                    color="info"
                                                    @click="switchToRegister"
                                                >
                                                    Go to register
                                                </v-btn>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                </v-layout>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm12 style="border: 1px solid green;">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </v-flex>
				</v-layout>
			</v-container>
		</v-flex>
	</v-layout>
</template>

<script>
    import ScoremodeHeader from '~/components/ScoremodeHeader'
	export default {
        components: { ScoremodeHeader },
		layout: 'layoutLandingPage',
		created () {
            },
        mounted () {
            this.$store.commit('setLoading', false)
            this.$store.commit('clearError')
        },
		data() {
            return {
                form: {
                    email: '',
                    password: ''
                }
            }
		},
		computed: {
            loading () {
                return this.$store.getters['loading']
            },
            error () {
                return this.$store.getters['error']
            },
		},
		methods: {
            async signUserIn () {
                console.log('Sign user in')
                await this.$store.dispatch('firebase-auth/signUserIn', this.form)
            },
            async signInWithGoogle () {
                console.log('signInWithGoogle')
                await this.$store.dispatch('firebase-auth/signInWithGooglePopup')
                console.log('done')
                // if (this.$i18n.locale != 'en') {
                //     console.log('done')
                //     this.$router.replace('/' + this.$i18n.locale + '/gamemode_jm')
                // } else {
                //     console.log('done')
                //     this.$router.replace('/gamemode_jm')
                // }
            },
            async signInWithFacebook () {
                console.log('signInWithFacebook')
                return this.$store.dispatch('firebase-auth/signInWithFacebookPopup').then(() => {
                    if (this.$i18n.locale != 'en') {
                        console.log('done')
                        this.$router.replace('/' + this.$i18n.locale + '/gamemode_jm')
                    } else {
                        console.log('done')
                        this.$router.replace('/gamemode_jm')
                    }
                })
            },
            switchToRegister () {
                this.$router.push('/register')
            }
		}
	}
</script>

<style scoped>

</style>