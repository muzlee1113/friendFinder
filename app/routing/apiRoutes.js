// require the data file
var friendsArr = require('../data/friend')
// ==============================API Routes===============================

module.exports = {
    //Survey Page Routes
    getFriends: function (req, res) {
        console.log("Running get request on /api/friends route");
        return res.json(friendsArr);
    },
    //Root Routes
    postFriends: function (req, res) {
        console.log("Running post request on /api/friends route")
        // save the survey result object (request body) into a variable
        var newFriend = req.body;
        // the compatibility logic
        var newScoresArr = newFriend.scores;
        console.log(newScoresArr)
        var comparedScoresArr = [];
        var lowestDiff = 100;
        var lowestIndex = [];
        for (let i in friendsArr) {
            comparedScoresArr = friendsArr[i].scores;
            console.log(comparedScoresArr)
            // call the compatibility function on each of the friend object in the arr
            var totalDiff = compatibility(newScoresArr, comparedScoresArr);
            console.log(totalDiff)

            // get the index of friend object with the lowest difference
            if(totalDiff<lowestDiff){
                lowestDiff = totalDiff
                lowestIndex = i
            }
        }
        var compatibilityScore = ((40 - lowestDiff)/40)*100
        console.log("result!")
        console.log(lowestIndex)
        var data = {
            match: friendsArr[lowestIndex],
            compatibility: compatibilityScore
        }
        res.json(data);
    }

}

// Your apiRoutes.js file should contain two routes:

//function that turns out the compatibility bt two scores arrays
function compatibility(arr1, arr2) {
    var totalDiff = 0;
    for (let i in arr1) {
        totalDiff = totalDiff + difference(arr1[i], arr2[i])
    }
    return totalDiff
}
// function that do the math of counting the difference between to number
function difference(a, b) {
    // console.log(Math.abs(a - b))
    a = parseInt(a)
    b = parseInt(b)
    return Math.abs(a - b);
}
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.