<template>
	<v-card class="elevation-12">
        <v-card-title align-center justify-center style="background-color: orangered; min-height: 60px;">
            <h2 class="white--text">Login</h2>
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-alert
                    type="error"
                    :value="error"
                    v-if="error"
                    class="mb-4"
                    >
                    {{ $t(`auth-validation-rules.${error.code}`) }}
                </v-alert>
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
                    <v-flex xs12 class="text-xs-center mb-3">
                        <v-btn color="success" @click="signUserIn">Login</v-btn>
                    </v-flex>
                </v-flex>
                <v-flex xs12 class="mb-2">
                    <v-btn block color="#df4a32" class="white--text" @click="signInWithGoogle">Login with Google</v-btn>
                </v-flex>
                <v-flex xs12 class="mb-3">
                    <v-btn block color="#3c5a99" class="white--text">Login with Facebook</v-btn>
                </v-flex>

                <v-flex xs12>
                    <v-layout>
                        <v-flex xs12 class="text-xs-center">
                            <br />
                            <v-btn
                                flat
                                @click="switchToRegister"
                            >
                                Switch to register
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-flex>
                
            </v-layout>
        </v-card-actions>
    </v-card>
</template>

<script>
	export default {
        mounted () {
            this.$store.commit('clearError')
        },
		data () {
			return {
                form: {
                    email: '',
                    password: ''
                }
			}
		},
        computed: {
            error () {
                return this.$store.getters['error']
            },
        },
        methods: {
            signUserIn () {
                console.log('Sign user in')
                this.$store.dispatch('firebase-auth/signUserIn', this.form)
            },
            async signInWithGoogle () {
                console.log('signInWithGoogle')
                await this.$store.dispatch('firebase-auth/signInWithGooglePopup')
                if (this.$i18n.locale != 'en') {
                    console.log('done')
                    this.$router.replace('/' + this.$i18n.locale + '/gamemode_jm')
                } else {
                    console.log('done')
                    this.$router.replace('/gamemode_jm')
                }
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
                this.$emit('loginChildToParent')
            }
        }
	}
</script>

<style scoped>

</style>