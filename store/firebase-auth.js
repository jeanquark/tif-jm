import {
    Auth,
    GoogleAuthProvider,
    FacebookAuthProvider
} from "~/plugins/firebase-client-init.js"
import * as firebase from 'firebase/app'
import 'firebase/database'

// import * as firebase from '~/plugins/firebase-client-init.js'

// import * as firebase from 'firebase/app'
// import 'firebase/database'
// import 'firebase/auth'

import axios from 'axios'
import Noty from 'noty'
import { createCipher } from "crypto";
// import moment from "moment"

// Some actions require manually building promises (new Promise) because calling the listener function (on) returns a callback, not a promise.

export const state = () => ({})

export const mutations = {}

export const actions = {
    async signUserIn ({ commit }, payload) {
        try {
            commit('setLoading', true, { root: true })
            let authData = await Auth.signInWithEmailAndPassword(payload.email, payload.password)
            console.log('authData: ', authData)
            console.log('authData.user.uid: ', authData.user.uid)
            let userId = authData.user.uid
            
            let that = this
            firebase.database().ref(`users/${userId}`).on('value', function(snapshot) {
                console.log('snapshot.val(): ', snapshot.val())
                // return snapshot.val()
                commit('users/setLoadedUser', snapshot.val(), { root: true })
                console.log('Redirect now!')
                commit('setLoading', false, { root: true })
                that.$router.push('/gamemode_jm')
            })
        } catch(error) {
            commit('setLoading', false, { root: true })
            commit('setError', error, { root: true })
            console.log('error: ', error)
            throw new Error(error)
        }
    },
    async signUserIn2 ({ commit }, payload) {
        console.log(payload)
        try {
            commit('setLoading', true, { root: true })
            let authData = await Auth.signInWithEmailAndPassword(
                payload.email,
                payload.password
            )
            console.log(authData)
            const userId = authData.user.uid
            console.log('userId: ', userId)
            const snapshot = await firebase
                .database()
                .ref(`/users/${userId}`)
                .once('value')
            commit('users/setLoadedUser', snapshot.val(), { root: true })
            commit('setLoading', false, { root: true })
            this.$router.push('/gamemode_jm')
        } catch (error) {
            console.log(error)
            commit('setLoading', false, { root: true })
            commit('setError', error, { root: true })
            throw new Error(error)
        }
    },
    async signUserUp ({ commit }, payload) {
        try {
            commit('setLoading', true, { root: true })
            let authData = await Auth.createUserWithEmailAndPassword(
            // let authData = await firebase.auth().createUserWithEmailAndPassword(
                payload.email,
                payload.password
            )
            console.log('authData: ', authData)
            console.log('authData.uid: ', authData.user.uid)
            const userId = authData.user ? authData.user.uid : null
            
            // Add user id to payload
            payload['id'] = userId
            console.log('payload: ', payload)
            
            const newUser = await axios.post('/register-new-user', {
                type: 'form',
                data: payload
            })
            console.log('newUser: ', newUser)

            commit('users/setLoadedUser', newUser.data, { root: true })
            commit('setLoading', false, { root: true })
        } catch (error) {
            console.log(error)
            commit('setError', error, { root: true })
            commit('setLoading', false, { root: true })
            throw new Error(error)
        }
    },
    async signUserUp2 ({ commit }, payload) {
        try {
            commit('setLoading', true, { root: true })
            let authData = await Auth.createUserWithEmailAndPassword(
            // let authData = await firebase.auth().createUserWithEmailAndPassword(
                payload.email,
                payload.password
            )
            console.log('authData: ', authData)
            console.log('authData.uid: ', authData.user.uid)
            const userId = authData.user ? authData.user.uid : null
            
            // Add user id to payload
            payload['id'] = userId
            console.log('payload: ', payload)
            return 

            return axios
                .post('/register-new-user', {
                    type: 'form',
                    data: payload
                })
                .then(response => {
                    // console.log('success')
                    // console.log(response)
                    commit('users/setLoadedUser', response.data, { root: true })
                    commit('setLoading', false, { root: true })
                    new Noty({
                        type: 'success',
                        text: 'You\'ve just registered successfully',
                        timeout: 5000,
                        theme: 'metroui'
                    }).show()
                    this.$router.push('/gamemode_jm')
                })
                .catch(function(error) {
                    console.log('error: ', error)
                    commit('setLoading', false, { root: true })
                    new Noty({
                        type: 'error',
                        text: 'Sorry, an error occured during your registration process.',
                        timeout: 5000,
                        theme: 'metroui'
                    }).show()
                    throw new Error(error)
                })
        } catch (error) {
            console.log(error)
            commit('setError', error, { root: true })
            commit('setLoading', false, { root: true })
            throw new Error(error)
        }
    },
    async signInWithGooglePopup ({ commit, dispatch }) {
        try {
            commit('setLoading', true, { root: true })
            let authData = await Auth.signInWithPopup(GoogleAuthProvider)
            console.log('authData: ', authData)
            console.log('authData.user.uid: ', authData.user.uid)
            let userId = authData.user ? authData.user.uid : null
            
            const snapshot = await firebase.database().ref(`users/${userId}`).once('value')
            const registeredUser = snapshot.val()
            console.log('registeredUser: ', registeredUser)
            if (!registeredUser) {
                console.log('User is not registered.')
                const registeredNewUser = await axios.post('/register-new-user', {
                    type: 'oauth',
                    data: authData.user
                })
                console.log('registeredNewUser: ', registeredNewUser)
                userId = registeredNewUser.data.id
            }

            let that = this
            firebase.database().ref(`users/${userId}`).on('value', function(snapshot) {
                console.log('snapshot.val(): ', snapshot.val())
                // return snapshot.val()
                commit('users/setLoadedUser', snapshot.val(), { root: true })
                console.log('Redirect now!')
                commit('setLoading', false, { root: true })
                that.$router.push('/gamemode_jm')
            })
        } catch (error) {
            console.log('error2: ', error)
            commit('setError', error, { root: true })
            commit('setLoading', false, { root: true })
            throw new Error(error)
        }
    },
    signInWithGooglePopup2 ({ commit, dispatch }) {
        return new Promise((resolve, reject) => {
            commit('setLoading', true, { root: true })
            // 1) First sign in with Google
            let userId = ''
            Auth.signInWithPopup(GoogleAuthProvider).then(authData => {
                console.log('authData: ', authData)
                console.log('authData.user: ', authData.user)
                userId = authData.user.uid
                console.log('userId: ', userId)
            }).then(() => { // 2) Then update users state
                console.log('userId: ', userId)
                firebase.database().ref(`users/${userId}`).on('value', function(snapshot) {
                    const registeredUser = snapshot.val()
                    console.log('registeredUser: ', registeredUser)

                    // If user does not exists, save user data in database at the users node
                    if (!registeredUser) {
                        return axios
                            .post('/register-new-user', {
                                type: 'oauth',
                                data: authData.user
                            })
                            .then(response => {
                                // Load newly registered user in store
                                commit('users/setLoadedUser', response.data, { root: true })
                                // commit('setLoading', false, { root: true })
                                new Noty({
                                    type: 'success',
                                    text: 'Successful registration',
                                    timeout: 10000,
                                    theme: 'metroui'
                                }).show()
                            })
                            .catch(function(error) {
                                commit('setLoading', false, { root: true })
                                new Noty({
                                    type: 'error',
                                    text: 'Sorry, an error occured during your registration process.',
                                    timeout: 5000,
                                    theme: 'metroui'
                                }).show()
                            })
                    } else {
                        // Load user in store
                        commit('users/setLoadedUser', registeredUser, { root: true })
                        commit('setLoading', false, { root: true })
                        // new Noty({type: 'success', text: this.app.i18n.t('messages.login.success'), timeout: 5000, theme: 'metroui'}).show()
                    }

                    commit('users/setLoadedUser', snapshot.val(), { root: true })
                    commit('setLoading', false, { root: true })
                    resolve()
                })
            }).catch(error => {
                console.log(error)
                reject(error)
            }) 
        })
    },
    async signInWithGooglePopup3({ commit, dispatch }) {
        try {
            commit('setLoading', true, { root: true })
            let authData = await Auth.signInWithPopup(GoogleAuthProvider)
            console.log('authData: ', authData)
            console.log('authData.user: ', authData.user)
            const userId = authData.user ? authData.user.uid : null
            console.log('userId: ', userId)

            // Set authenticated user
            await dispatch('users/fetchAuthenticatedUser', authData.user, { root: true })
            commit('setLoading', false, { root: true })
            // return

            // firebase.database().ref(`/users/${userId}`).on('value', function(snapshot) {
            //     console.log('snapshot.val(): ', snapshot.val())
            //     if (!snapshot.val()) { // User is not registered yet, save user in database

            //     }
            //     commit('users/setLoadedUser', snapshot.val(), { root: true })
            // })
            // return


            // Check if user already exists in database
            // const snapshot = await firebase
            //     .database()
            //     .ref('/users/' + userId)
            //     .once('value')
            // const registeredUser = snapshot.val()

            // If user does not exists, save user data in database at the user node
            // if (!registeredUser) {
            //     return axios
            //         .post('/register-new-user', {
            //             type: 'oauth',
            //             data: authData.user
            //         })
            //         .then(response => {
            //             // Load newly registered user in store
            //             commit('users/setLoadedUser', response.data, {
            //                 root: true
            //             })
            //             // commit('setLoading', false, { root: true })
            //             new Noty({
            //                 type: 'success',
            //                 text: 'Successful registration',
            //                 timeout: 10000,
            //                 theme: 'metroui'
            //             }).show()
            //         })
            //         .catch(function(error) {
            //             commit('setLoading', false, { root: true })
            //             new Noty({
            //                 type: 'error',
            //                 text:
            //                     'Sorry, an error occured during your registration process.',
            //                 timeout: 5000,
            //                 theme: 'metroui'
            //             }).show()
            //         })
            // } else {
            //     // Load user in store
            //     commit('users/setLoadedUser', registeredUser, { root: true })
            //     commit('setLoading', false, { root: true })
            //     // new Noty({type: 'success', text: this.app.i18n.t('messages.login.success'), timeout: 5000, theme: 'metroui'}).show()
            // }
        } catch (error) {
            new Noty({
                type: 'error',
                text: 'Sorry, an error occured during your login process.',
                timeout: 5000,
                theme: 'metroui'
            }).show()
            commit('setError', error, { root: true })
            commit('setLoading', false, { root: true })
        }
    },
    async signInWithFacebookPopup ({ commit }) {
        try {
            commit('setLoading', true, { root: true })
            let authData = await Auth.signInWithPopup(FacebookAuthProvider)
            console.log('authData: ', authData)
            console.log('authData.user.uid: ', authData.user.uid)
            let userId = authData.user ? authData.user.uid : null
            
            const snapshot = await firebase.database().ref(`users/${userId}`).once('value')
            const registeredUser = snapshot.val()
            console.log('registeredUser: ', registeredUser)
            if (!registeredUser) {
                console.log('User is not registered.')
                const registeredNewUser = await axios.post('/register-new-user', {
                    type: 'oauth',
                    data: authData.user
                })
                console.log('registeredNewUser: ', registeredNewUser)
                userId = registeredNewUser.data.id
            }

            let that = this
            firebase.database().ref(`users/${userId}`).on('value', function(snapshot) {
                console.log('snapshot.val(): ', snapshot.val())
                // return snapshot.val()
                commit('users/setLoadedUser', snapshot.val(), { root: true })
                console.log('Redirect now!')
                commit('setLoading', false, { root: true })
                that.$router.push('/gamemode_jm')
            })
        } catch (error) {
            console.log('error2: ', error)
            commit('setError', error, { root: true })
            commit('setLoading', false, { root: true })
            throw new Error(error)
        }
    },
    async signInWithFacebookPopup2 ({ commit }) {
        try {
            commit("setLoading", true, { root: true })
            let authData = await Auth.signInWithPopup(FacebookAuthProvider)
            console.log("authData: ", authData)
            console.log("authData.user: ", authData.user)
            const userId = authData.user.uid
            console.log("userId: ", userId)

            // Check if user already exists in database
            const snapshot = await firebase
                .database()
                .ref("/users/" + userId)
                .once("value")
            const registeredUser = snapshot.val()

            // If user does not exists, save user data in database at the user node
            if (!registeredUser) {
                return axios
                    .post("/register-new-user", {
                        type: "oauth",
                        data: authData.user
                    })
                    .then(response => {
                        // Load newly registered user in store
                        commit("users/setLoadedUser", response.data, {
                            root: true
                        })
                        commit("setLoading", false, { root: true })
                        new Noty({
                            type: "success",
                            text: this.app.i18n.t(
                                "messages.registration.success"
                            ),
                            timeout: 10000,
                            theme: "metroui"
                        }).show()
                    })
                    .catch(function(error) {
                        commit("setLoading", false, { root: true })
                        new Noty({
                            type: "error",
                            text:
                                "Sorry, an error occured during your registration process.",
                            timeout: 5000,
                            theme: "metroui"
                        }).show()
                    })
            } else {
                // Load user in store
                commit("users/setLoadedUser", registeredUser, { root: true })
                commit("setLoading", false, { root: true })
                new Noty({
                    type: "success",
                    text: this.app.i18n.t("messages.login.success"),
                    timeout: 5000,
                    theme: "metroui"
                }).show()
            }
        } catch (error) {
            new Noty({
                type: "error",
                text: this.app.i18n.t("messages.login.error"),
                timeout: 5000,
                theme: "metroui"
            }).show()
            commit("setError", error, { root: true })
            commit("setLoading", false, { root: true })
        }
    },
    async signOut({ commit }) {
        commit('setLoading', true, { root: true })
        await Auth.signOut()
        commit('users/setLoadedUser', null, { root: true })
        commit('setLoading', false, { root: true })
    }
}

export const getters = {}
