// ==============================Prequisite===============================

// Dependencies
var path = require("path");

// ==============================HTML Routes===============================

module.exports = {
    //Root Routes
    getHome: function (req, res) {
        console.log("Running get request on root")
        res.sendFile(path.join(__dirname, "../public/home.html"))
    },
    //Survey Page Routes
    getSurvey: function (req, res) {
        console.log("Running get request on /survey route")
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    }
    
}
