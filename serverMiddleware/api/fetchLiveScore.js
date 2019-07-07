const express = require("express"),
      moment = require("moment"),
      admin = require("firebase-admin"),
      slugifyFunction = require("../../helpers/slugify"),
      unirest = require('unirest');

const app = express();

function getLiveScore () {
    const url = "https://api-football-v1.p.rapidapi.com/fixtures/live";
    return unirest.get(url).headers({
        'Accept': 'application/json',
        'X-RapidAPI-Key': 'V5NyybcqoimshrFl7oR8yKKDMyxhp10zkcfjsnGw3uB6ZeMcDI'
    });
}

// To be called every minute
module.exports = app.use(async function(req, res, next) {
    try {
        // 1) First, retrieve all competitions
        // const competitionIdsArray = [];
        const competitionsArray = [];
        const competitions = await admin.database().ref('/competitions').once('value');
        competitions.forEach(competition => {
            if (competition.val().status === 'active') {
                // competitionIdsArray.push(String(competition.val().livescore_api_id))
                competitionsArray.push({
                    name: competition.val().name,
                    slug: competition.val().slug,
                    apifootball_id: competition.val().apifootball_id,
                    status: competition.val().status,
                    countries: competition.val().countries
                });
            }
        });
        console.log('competitionsArray: ', competitionsArray);

        const response = await getLiveScore();

        // console.log('response.status: ', response.status);
        // console.log('response.body.api.fixtures: ', response.body.api.fixtures);

        let updates = {};

        for (let match of Object.values(response.body.api.fixtures)) {

            // console.log('match: ', match);
            // console.log('match.league_id: ', match.league_id);
            if (competitionsArray.find(competition => competition.apifootball_id == match.league_id)) {
                console.log('match: ', match);
                const id = match.fixture_id;
                updates[`/events_new3/${id}/status`] = match.status;
                updates[`/events_new3/${id}/statusShort`] = match.statusShort;
                updates[`/events_new3/${id}/goalsHomeTeam`] = match.goalsHomeTeam;
                updates[`/events_new3/${id}/goalsVisitorTeam`] = match.goalsAwayTeam;
                updates[`/events_new3/${id}/halftime_score`] = match.halftime_score;
                updates[`/events_new3/${id}/final_score`] = match.final_score;
                updates[`/events_new3/${id}/penalty`] = match.penalty;
                updates[`/events_new3/${id}/elapsed`] = match.elapsed;
            }
        }

        const snapshot = await admin.database().ref().update(updates);

        console.log('End of request!');

        res.status(200).send('GET request to APIFootball to fetch live scores succeeded!');

    } catch (error) {
        console.log('error: ', error);
        res.end(`GET request to APIFootball to fetch live scores failed: ${error}`);
    }
});
