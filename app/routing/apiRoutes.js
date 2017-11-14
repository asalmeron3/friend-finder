var express = require("express");
var router = express.Router();
var friends = require("../data/friends.js");

//_________________ROUTES____________________
	
	// Info of current friends in the api
	router.get("/api/friends",function(request,response){
		return response.json(friends);
	});

	// Add to current list of friends
	router.post("/api/friends",function(request,response){
		var addA_friend = request.body;
		friends.push(addA_friend);
		return response.json(friends);
	});
//___________________________________________

module.exports = router;