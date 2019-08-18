const functions = require('firebase-functions'),
	  moment = require('moment'),
	  unirest = require('unirest');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
// exports.helloWorld = functions.https.onRequest((request, response) => {
// 	response.send("Hello from Firebase!");
// });

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

function getBooks(query) {
	console.log('getBooks function called');
	const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyBa1Qqi6JC_VF1z7FpZAG0dYxlAkAax3LQ&country=CH`;
	// const url = 'https://www.googleapis.com/books/v1/volumes?q=advanced+javascript&key=AIzaSyBa1Qqi6JC_VF1z7FpZAG0dYxlAkAax3LQ&country=CH';
    return unirest.get(url).headers({
        Accept: 'application/json'
    })
}

function getDailyMatches(day) {
	console.log('Call de getDailyMatches: ', day);
    const url = `https://api-football-v1.p.rapidapi.com/v2/fixtures/date/${day}`
    return unirest.get(url).headers({
        Accept: 'application/json',
        'X-RapidAPI-Key': process.env.APIFOOTBALL_KEY
    })
}

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
	// Grab the text parameter.
	const original = req.query.text;
	// Push the new message into the Realtime Database using the Firebase Admin SDK.
	const snapshot = await admin.database().ref('/messages').push({original: original});
	// Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
	res.redirect(303, snapshot.ref.toString());
});


exports.makeUppercase = functions.database.ref('/messages/{pushId}/original').onCreate((snapshot, context) => {
	// Grab the current value of what was written to the Realtime Database.
	const original = snapshot.val();
	console.log('Uppercasing', context.params.pushId, original);
	const uppercase = original.toUpperCase();
	// You must return a Promise when performing asynchronous tasks inside a Functions such as
	// writing to the Firebase Realtime Database.
	// Setting an "uppercase" sibling in the Realtime Database returns a Promise.
	return snapshot.ref.parent.child('uppercase').set(uppercase);
});


exports.addBooks = functions.https.onRequest(async (req, res) => {
	// Grab the query parameter.
	const query = req.query.book;
	// console.log('query: ', query);
	// https://us-central1-tif-jm.cloudfunctions.net/addBooks
	const response = await getBooks(query);
	// console.log('response: ', response);
	// console.log('response.body: ', response.body);
	let counter = 0;
	response.body.items.forEach(book => {
		counter += 1
	});

	res.send(`GET request to Google Books API succeeded! query: ${query}, counter: ${counter}, response: ${response}`);
});


exports.addMatches = functions.https.onRequest(async (req, res) => {
	console.log('functions.config().apifootball.key: ', functions.config().apifootball.key);

	const response = await getDailyMatches('2019-08-10');
	console.log('response: ', response);

	res.send(`GET request to APIFootball succeeded! response: ${response}`);
});