
var friends = require("../data/friends");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  
  app.post("/api/friends", function (req, res) {
   
    var closestmatch = {
      name: "",
      photo: "",
      frienddiff: Infinity
    };

    var totalDifference;
    var userdata = req.body;
    var scores = userdata.scores;


   
    for (var i = 0; i < friends.length; i++) {
      var selectedfriend = friends[i];
      totalDifference = 0;

      console.log(selectedfriend.name);

     
      for (var o = 0; o < selectedfriend.scores.length; o++) {
        var selectedfriendScore = selectedfriend.scores[o];
        var currentuserscore = scores[o];

       
        totalDifference += Math.abs(parseInt(currentuserscore) - parseInt(selectedfriendScore));
      }

     
      if (totalDifference <= closestmatch.frienddiff) {
 
        closestmatch.name = selectedfriend.name;
        closestmatch.photo = selectedfriend.photo;
        closestmatch.frienddiff = totalDifference;
      }
    }

  
    friends.push(userdata);

   
    res.json(closestmatch);
  });
};
