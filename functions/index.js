const functions = require('firebase-functions'),
    moment = require('moment'),
    unirest = require('unirest'),
    webpush = require('web-push')

// Log messages are accessible online on the Firebase console

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin')
admin.initializeApp()

// function getBooks(query) {
// 	console.log('getBooks function called');
// 	const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyBa1Qqi6JC_VF1z7FpZAG0dYxlAkAax3LQ&country=CH`;
// 	// const url = 'https://www.googleapis.com/books/v1/volumes?q=advanced+javascript&key=AIzaSyBa1Qqi6JC_VF1z7FpZAG0dYxlAkAax3LQ&country=CH';
//     return unirest.get(url).headers({
//         Accept: 'application/json'
//     })
// }

// function getDailyMatches(day) {
// 	console.log('Call de getDailyMatches: ', day);
//     const url = `https://api-football-v1.p.rapidapi.com/v2/fixtures/date/${day}`
//     return unirest.get(url).headers({
//         Accept: 'application/json',
//         'X-RapidAPI-Key': process.env.APIFOOTBALL_KEY
//     })
// }

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
    // Grab the text parameter.
    const original = req.query.text
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    const snapshot = await admin
        .database()
        .ref('/messages')
        .push({ original: original })
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    res.redirect(303, snapshot.ref.toString())
})

exports.makeUppercase = functions.database.ref('/messages/{pushId}/original').onCreate((snapshot, context) => {
    // Grab the current value of what was written to the Realtime Database.
    const original = snapshot.val()
    console.log('Uppercasing', context.params.pushId, original)
    const uppercase = original.toUpperCase()
    // You must return a Promise when performing asynchronous tasks inside a Functions such as
    // writing to the Firebase Realtime Database.
    // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
    return snapshot.ref.parent.child('uppercase').set(uppercase)
})

// exports.addBooks = functions.https.onRequest(async (req, res) => {
// 	const query = req.query.book;
// 	const response = await getBooks(query);
// 	let counter = 0;
// 	response.body.items.forEach(book => {
// 		counter += 1
// 	});

// 	res.send(`GET request to Google Books API succeeded! query: ${query}, counter: ${counter}, response: ${response}`);
// });

// exports.addMatches = functions.https.onRequest(async (req, res) => {
// 	console.log('functions.config().apifootball.key: ', functions.config().apifootball.key);

// 	const response = await getDailyMatches('2019-08-10');
// 	console.log('response: ', response);

// 	res.send(`GET request to APIFootball succeeded! response: ${response}`);
// });

// Cloud functions that reacts to update in events node and triggers a push notification to subscribed users
exports.listenToEventUpdate = functions.database.ref('/events/{eventId}').onUpdate(async (change, context) => {
    const VapidPrivateKey = functions.config().vapid.private_key
    // console.log('change.before.val(): ', change.before.val())
    // console.log('change.after.val(): ', change.after.val())
    // console.log('context: ', context)
    const event = change.after.val()
    const oldStatusShort = change.before.val().statusShort
    const newStatusShort = change.after.val().statusShort
    const oldHomeTeamGoals = change.before.val().homeTeam_goals
    const newHomeTeamGoals = change.after.val().homeTeam_goals
    const oldVisitorTeamGoals = change.before.val().visitorTeam_goals
    const newVisitorTeamGoals = change.after.val().visitorTeam_goals
    // console.log('oldStatusShort', oldStatusShort)
    // console.log('newStatusShort', newStatusShort)
    // console.log('oldHomeTeamGoals', oldHomeTeamGoals)
    // console.log('newHomeTeamGoals', newHomeTeamGoals)
    // console.log('oldVisitorTeamGoals', oldVisitorTeamGoals)
	// console.log('newVisitorTeamGoals', newVisitorTeamGoals)
	if (oldStatusShort !== newStatusShort) {
		console.log('Status changed!')
	}
	if (oldHomeTeamGoals !== newHomeTeamGoals) {
		console.log('HomeTeam scored!')
	}
	if (oldVisitorTeamGoals !== newVisitorTeamGoals) {
		console.log('VisitorTeam scored!')
	}


    // 1) Initialize Webpush module with our Vapid keys
    const vapidPublicKey = 'BIdvJRwfx8ZszCttOq2AAdlVNd_SviDOI3aYaJgSOkATP4RHu3QfKYyeJVuOFWdlGDnwRYRYZSFZNU2SENyMVRk'
    const vapidPrivateKey = functions.config().vapid.private_key
    webpush.setVapidDetails('mailto:thisisfan2018@gmail.com', vapidPublicKey, vapidPrivateKey)


	// 2) Fetch all users subscribed to this
	const subscriptions = await admin
        .database()
        .ref('/subscriptions')
        .orderByChild('team_slug')
        .equalTo('neuchatel_xamax_fc')
		.once('value')
	
	// subscriptions.forEach(subscription => {
	// 	console.log('subscription.val(): ', subscription.val())
	// 	console.log('subscription.val().keys: ', subscription.val().keys)
	// 	console.log('subscription.val().keys.auth: ', subscription.val().keys.auth)
	// })
		
    // console.log('subscription.val(): ', subscription.val())
    // console.log('subscription.val().keys: ', subscription.val().keys)
    // console.log('subscription.val().keys.auth: ', subscription.val().keys.auth)


	// 3) Send notifications to all subscribers of both teams
	subscriptions.forEach(subscription => {
		const pushConfig = {
			endpoint: subscription.val().endpoint,
			keys: {
				auth: subscription.val().keys.auth,
				p256dh: subscription.val().keys.p256dh
			}
		}
		// console.log("pushConfig: ", pushConfig)
		webpush
			.sendNotification(
				pushConfig,
				JSON.stringify({
					title: `${event.homeTeam_abbrev} vs ${event.visitorTeam_abbrev}: ${event.homeTeam_goals}-${event.visitorTeam_goals}`,
					content: "Congratulations, you've earned 20$fans!",
					icon: '/static/images/icons/icon_256x256.png',
					badge: '/static/images/icons/icon_96x96.png',
					vibrate: [100, 50, 100]
				})
			)
			.catch(function(error) {
				console.log('Send notification error: ', error)
			})
	})
})

// exports.listenToEventHomeTeamGoalsUpdate = functions.database.ref('/events/{eventId}/homeTeam_goals').onUpdate((change, context) => {
//     console.log('change.before.val(): ', change.before.val())
//     console.log('change.after.val(): ', change.after.val())
//     console.log('context: ', context)
// })

// exports.listenToEventsVisitorTeamGoalsUpdate = functions.database.ref('/events/{eventId}/visitorTeam_goals').onUpdate((change, context) => {
//     console.log('change.before.val(): ', change.before.val())
//     console.log('change.after.val(): ', change.after.val())
//     console.log('context: ', context)
// })
