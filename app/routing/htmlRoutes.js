var express = require("express");
var router = express.Router();
var path = require("path");

//_________________ROUTES____________________

	//Basic route --> home page
	router.get("/",function(request,response){
		response.sendFile(path.join(__dirname,"../public/home.html"));
	});

	//Survey Route --> 10 Q survey
	router.get("/survey",function(request,response){
		response.sendFile(path.join(__dirname,"../public/survey.html"));
	});
//___________________________________________
module.exports = router;