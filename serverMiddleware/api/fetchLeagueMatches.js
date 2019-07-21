const express = require("express"),
      moment = require("moment"),
      admin = require("firebase-admin"),
      bodyParser = require('body-parser'),
      slugify = require("../../helpers/slugify"),
      unirest = require("unirest");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

function getLeagueMatches (league) {
    const url = `https://api-football-v1.p.rapidapi.com/v2/fixtures/league/${league_id}`;
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
// Switzerland Super League 2019-2020: 576
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
            if (competition.val().active === true) {
                competitionsArray.push({
                    name: competition.val().name,
                    slug: competition.val().slug,
                    apifootball_id: competition.val().apifootball_id,
                    status: competition.val().status,
                    countries: competition.val().countries
                });
            }
		});
		// console.log('competitionsArray: ', competitionsArray)


        // 3) Third, make external request to API-Football to fetch fixtures
        let updates = {};
        const league_id = req.body.league_id;
        console.log('league_id: ', league_id);
        const competition = competitionsArray.find(competition => competition.apifootball_id == league_id);

        const response = await getLeagueMatches(league_id);

        Object.values(response.body.api.fixtures).forEach(match => {
            const homeTeamData = teamsArray.find(team => parseInt(team.apifootball_id) === parseInt(match.homeTeam.team_id));
            let homeTeam_slug = '';
            if (!homeTeamData) {
                console.log('No homeTeamData!');
                homeTeam_slug = slugify(match.homeTeam.team_name);
            } else {
                homeTeam_slug = homeTeamData.slug;
            }

            const visitorTeamData = teamsArray.find(team => parseInt(team.apifootball_id) === parseInt(match.awayTeam.team_id));
            let awayTeam_slug = '';
            if (!visitorTeamData) {
                console.log('No visitorTeamData!')
                awayTeam_slug = slugify(match.awayTeam.team_name);
            } else {
                awayTeam_slug = visitorTeamData.slug;
            }

			const id = match.fixture_id;
			// Provide shortcut for round number
			const roundShort = match.round.substring(match.round.lastIndexOf('-') + 2);
			
            // Only add present and future fixtures to database
            const yesterday = moment().subtract(1, 'days').unix();

            if (match.event_timestamp > yesterday) {
                updates[`/events/${id}/id`] = id;
                updates[`/events/${id}/date_iso8601`] = match.event_date;
                updates[`/events/${id}/date`] = moment(match.event_date).format('YYYY-MM-DD');
                updates[`/events/${id}/time`] = moment(match.event_date).format('HH:mm');
                updates[`/events/${id}/time_utc`] = moment(match.event_date).utc().format('HH:mm');
                updates[`/events/${id}/timestamp`] = match.event_timestamp;
                updates[`/events/${id}/league_id`] = match.league_id;
                updates[`/events/${id}/round`] = match.round;
                updates[`/events/${id}/round_short`] = roundShort;
                updates[`/events/${id}/homeTeam_id`] = match.homeTeam.team_id;
                updates[`/events/${id}/homeTeam_name`] = match.homeTeam.team_name;
                updates[`/events/${id}/homeTeam_slug`] = homeTeam_slug;
                updates[`/events/${id}/homeTeam_score`] = match.goalsHomeTeam;
                updates[`/events/${id}/visitorTeam_id`] = match.awayTeam.team_id;
                updates[`/events/${id}/visitorTeam_name`] = match.awayTeam.team_name;
                updates[`/events/${id}/visitorTeam_slug`] = awayTeam_slug;
                updates[`/events/${id}/visitorTeam_score`] = match.goalsAwayTeam;
                updates[`/events/${id}/score`] = match.score;
				updates[`/events/${id}/elapsed`] = match.elapsed;
				updates[`/events/${id}/venue`] = match.venue;
                updates[`/events/${id}/status`] = match.status;
				updates[`/events/${id}/statusShort`] = match.statusShort;
				updates[`/events/${id}/competition_id`] = match.league_id;
                updates[`/events/${id}/competition_name`] = competition.name;
				updates[`/events/${id}/competition_slug`] = competition.slug;
			}
        });

        await admin.database().ref().update(updates);

        res.send(`GET request to API-Football to fetch league ${league_id} matches succeeded!`);
        
    } catch (error) {
        console.log("APIFootball error: ", error);
        res.end(`GET request to API-Football to fetch league ${league_id} matches failed: ${error}`);
    }
});