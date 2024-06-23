var express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
// 
var model = require('./model/db.js');  //

var app = express();

app.use(cors());

// serves files in public folder
app.use(express.static('public'));

// NB:: this must be included to get JSON content sent with requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

///////////////////////////////////////////////////////////////////////////////////////////

// REST API /teams GET route
app.route('/teams/')
  .get(function (req, res) {  
    model.getTeams(req, res);
  })

  app.route('/players/')
  .get(function (req, res) {  
    model.getPlayers(req, res);
  })

  app.route('/venues/')
  .get(function (req, res) {  
    model.getVenues(req, res);
  })

  app.route('/pools/')
  .get(function (req, res) {  
    model.getPools(req, res);
  })

  app.route('/tap/')
  .get(function (req, res) {  
    model.getTAP(req, res);
  })

  app.route('/results/')
  .get(function (req, res) {  
    model.getResults(req, res);
  })

  app.route('/stats/')
  .get(function (req, res) {  
    model.getPlayerStats(req, res);
  })

  app.route('/tackles/')
  .get(function (req, res) {  
    model.getTackles(req, res);
  })

  app.route('/points/')
  .get(function (req, res) {  
    model.getPoints(req, res);
  })

  app.route('/login/')
  .get(function (req, res) {  
    model.getLogin(req, res);
  })

  app.get('/pools/:poolName', (req, res) => {
    const poolName = req.params.poolName;

    model.getTeamsByPool(poolName, (err, teams) => {
        if (err) {
            res.status(500).json({ error: 'Error fetching teams' });
        } else {
            res.status(200).json(teams);
        }
    });
});


  ///////////////////////////////////////////////////////////////////////////////////////////

// setup REST API /team route VERBS - GET, POST, PUT, DELETE
app.route('/team/:id?')
  .get(function (req, res) {  
    model.getTeam(req, res);
  })
  .post(function (req, res) { // add
    // add solution here
  })
  .put(function (req, res) { // edit
    // add solution here
  })
  .delete(function (req, res) { // delete
    // add solution here
  });  


var myServer = app.listen(3000, function() {
  console.log("Server listening on port 3000");
});
