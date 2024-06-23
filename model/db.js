var mysql = require('mysql');

///////////////////////////////////////////////////////////////////////////////////////////

// Setup MySQL connection
// timezone is very NB

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'rwc2023',
  timezone: 'utc+0'  
});

connection.connect(function(err){
	if(err) throw err;
	console.log(`Sucessfully connected to MySQL database rwc2023`);
});

///////////////////////////////////////////////////////////////////////////////////////////

// GET /teams
exports.getTeams = function(req,res){

    connection.query(`SELECT * FROM teams`, function(err, rows, fields) {
        if (err) throw err;

        res.status(200);
        res.send(JSON.stringify(rows));	  
    });	
}

// GET /team/ID
exports.getVenues = function(req,res){

    connection.query(`SELECT * FROM venues`, function(err, rows, fields) {
        if (err) throw err;

        res.status(200);
        res.send(JSON.stringify(rows));	  
    });	
}

exports.getPlayers = function(req,res){

    connection.query(`SELECT * FROM players`, function(err, rows, fields) {
        if (err) throw err;

        res.status(200);  
        res.send(JSON.stringify(rows));	  
    });	
}

exports.getResults = function(req,res){

    connection.query(`SELECT * FROM results`, function(err, rows, fields) {
        if (err) throw err;

        res.status(200);  
        res.send(JSON.stringify(rows));	  
    });	
}

exports.getPools = function(req, res) {
    connection.query(`
        SELECT teams.*, pools.*
        FROM pools 
        LEFT JOIN teams ON pools.team_name = teams.name`, function(err, rows, fields) {
        if (err) throw err;

        res.status(200);  
        res.send(JSON.stringify(rows));
    });
}

exports.getTAP = function(req, res) {
    connection.query(` SELECT players.id AS player_id, teams.id AS team_id, teams.name AS team_name, players.name
    FROM teams
    JOIN players ON teams.id = players.team_id
    ORDER BY teams.name, players.name
    `, function(err, rows, fields) {
        if (err) throw err;

        res.status(200);  
        res.send(JSON.stringify(rows));
    });
}

exports.getPlayerStats = function(req, res) {
    connection.query(`
        SELECT player_tackles.*, player_points.points AS points
        FROM player_tackles
        LEFT JOIN player_points ON player_tackles.player_id = player_points.player_id
    `, function(err, rows, fields) {
        if (err) throw err;

        res.status(200);  
        res.send(JSON.stringify(rows));
    });
};

exports.getTackles = function(req,res){

    connection.query(`SELECT * FROM player_tackles`, function(err, rows, fields) {
        if (err) throw err;

        res.status(200);  
        res.send(JSON.stringify(rows));	  
    });	
}

exports.getPoints = function(req,res){

    connection.query(`SELECT * FROM player_points`, function(err, rows, fields) {
        if (err) throw err;

        res.status(200);  
        res.send(JSON.stringify(rows));	  
    });	
}

exports.getLogin = function(req,res){

    connection.query(`SELECT * FROM users`, function(err, rows, fields) {
        if (err) throw err;

        res.status(200);  
        res.send(JSON.stringify(rows));	  
    });	
}



exports.getTeamsByPool = function(req, res) {
    connection.query('SELECT * FROM pools WHERE pool = ?', [poolName], function(err, rows, fields) {
        if (err) throw err;

        res.status(200);  
        res.send(JSON.stringify(rows));	  
    });	
}



