// ==============================Prequisite===============================
// Dependencies
var express = require("express");
var router = express.Router();

// Set up the Express App
var app = express();
var PORT = process.env.PORT || 3000;


// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ===========================Routes==================================


var htmlRoutes = require("./routing/htmlRoutes");
var apiRoutes = require("./routing/apiRoutes");

router.route('/').get(htmlRoutes.getHome);
router.route('/survey').get(htmlRoutes.getSurvey);
router.route('/api/friends').get(apiRoutes.getFriends);
router.route('/api/friends').post(apiRoutes.postFriends);


app.use('/', router);
// app.use('/api', router);


// ===========================Listen==================================
// server starts listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

