const express = require("express"),
      moment = require("moment"),
      admin = require("firebase-admin"),
      bodyParser = require('body-parser'),
      slugifyFunction = require("../../helpers/slugify"),
      unirest = require("unirest");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

function getLeagueMatches (league) {
    const url = `https://api-football-v1.p.rapidapi.com/fixtures/league/${league}`;
    return unirest.get(url).headers({
        'Accept': 'application/json',
        'X-RapidAPI-Key': 'V5NyybcqoimshrFl7oR8yKKDMyxhp10zkcfjsnGw3uB6ZeMcDI'
    });
}

// API-Football league IDs:
// England Premier League: 2
// Spain La Liga: 87
// Germany Bundesliga: 8
// Italy Serie A: 94
// France Ligue 1: 4
// Switzerland Super League: 119
// UEFA Champions League: 132
// UEFA Europa League: 137
// UEFA Nations League: 136

// To be called when new competition is added as a POST request with league_id as body data
module.exports = app.use(async function(req, res, next) {
    try {
        // 1) First, retrieve all teams
        const teamsArray = [];
        const teams = await admin.database().ref('/teams').once('value');
        teams.forEach(team => {
            teamsArray.push({
                apifootball_id: team.val().apifootball_id, 
                name: team.val().name, 
                slug: team.val().slug
            });
        });

        // 2) Second, fetch all active competitions
        const competitionsArray = [];
        const competitions = await admin.database().ref('/competitions').once('value');
        competitions.forEach(competition => {
            if (competition.val().status === 'active') {
                competitionsArray.push({
                    name: competition.val().name,
                    slug: competition.val().slug,
                    apifootball_id: competition.val().apifootball_id,
                    status: competition.val().status,
                    countries: competition.val().countries
                });
            }
        });

        // 3) Third, make request
        let updates = {};
        const league_id = req.body.league_id;
        console.log('league_id: ', league_id);
        const competition = competitionsArray.find(competition => competition.apifootball_id == league_id)

        const response = await getLeagueMatches(league_id);

        Object.values(response.body.api.fixtures).forEach(match => {
            const homeTeamData = teamsArray.find(team => parseInt(team.apifootball_id) === parseInt(match.homeTeam_id));
            let homeTeam_slug = '';
            if (!homeTeamData) {
                console.log('No homeTeamData!');
                homeTeam_slug = slugifyFunction.slugify(match.homeTeam);
            } else {
                homeTeam_slug = homeTeamData.slug;
            }

            const visitorTeamData = teamsArray.find(team => parseInt(team.apifootball_id) === parseInt(match.awayTeam_id));
            let awayTeam_slug = '';
            if (!visitorTeamData) {
                console.log('No visitorTeamData!')
                awayTeam_slug = slugifyFunction.slugify(match.awayTeam);
            } else {
                awayTeam_slug = visitorTeamData.slug;
            }

            const id = match.fixture_id;
            const round_short = match.round.substring(match.round.lastIndexOf('-') + 2);
            // Only add present and future fixtures to database
            // const yesterday = moment().subtract(1, 'days').unix();

            // if (match.event_timestamp > yesterday) {
                updates[`/events_new3/${id}/id`] = id;
                updates[`/events_new3/${id}/date_iso8601`] = match.event_date;
                updates[`/events_new3/${id}/date`] = moment(match.event_date).format('YYYY-MM-DD');
                updates[`/events_new3/${id}/time`] = moment(match.event_date).format('HH:mm');
                updates[`/events_new3/${id}/time_utc`] = moment(match.event_date).utc().format('HH:mm');
                updates[`/events_new3/${id}/timestamp`] = match.event_timestamp;
                updates[`/events_new3/${id}/league_id`] = match.league_id;
                updates[`/events_new3/${id}/round`] = match.round;
                updates[`/events_new3/${id}/round_short`] = round_short;
                updates[`/events_new3/${id}/homeTeam_id`] = match.homeTeam_id;
                updates[`/events_new3/${id}/homeTeam_name`] = match.homeTeam;
                updates[`/events_new3/${id}/homeTeam_slug`] = homeTeam_slug;
                updates[`/events_new3/${id}/homeTeam_score`] = match.goalsHomeTeam;
                updates[`/events_new3/${id}/visitorTeam_id`] = match.awayTeam_id;
                updates[`/events_new3/${id}/visitorTeam_name`] = match.awayTeam;
                updates[`/events_new3/${id}/visitorTeam_slug`] = awayTeam_slug;
                updates[`/events_new3/${id}/visitorTeam_score`] = match.goalsAwayTeam;
                updates[`/events_new3/${id}/halftime_score`] = match.halftime_score;
                updates[`/events_new3/${id}/final_score`] = match.final_score;
                updates[`/events_new3/${id}/penalty`] = match.penalty;
                updates[`/events_new3/${id}/elapsed`] = match.elapsed;
                updates[`/events_new3/${id}/status`] = match.status;
                updates[`/events_new3/${id}/statusShort`] = match.statusShort;
                updates[`/events_new3/${id}/league_name`] = competition.name;
                updates[`/events_new3/${id}/league_slug`] = competition.slug;
            // }
        });

        const snapshot = await admin.database().ref().update(updates);

        res.send(`GET request to APIFootball to fetch league ${league_id} matches succeeded!`);
        
    } catch (error) {
        console.log("APIFootball error: ", error);
        res.end(`GET request to APIFootball to fetch league ${league_id} matches failed: ${error}`);
    }
});