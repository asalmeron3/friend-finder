//____________Dependencies________________
	var express = require("express");
	var bodyParser = require("body-parser");
//________________________________________


//___________Express Application_____________
	var app = express();
	//process.env.PORT for Heroku to make a port
	var PORT  = process.env.PORT || 3000;

	//app should handle data parsing
	app.use(bodyParser.urlencoded({extended:false}));
	app.use(bodyParser.json());

	//require our routes from different directories
	var htmlRoutes = require("./app/routing/htmlRoutes.js");
	app.use("/",htmlRoutes);

	var apiRoutes = require("./app/routing/apiRoutes.js");
	app.use("/",apiRoutes); 
//___________________________________________



//_____________Start the Server______________
	app.listen(PORT,function(){
		console.log("Friend Finder is ready to find you a buddy! (Port: " + PORT+" )");
	});
//___________________________________________

