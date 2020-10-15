var restful = require('node-restful');

module.exports = function(app, route) {

	//setup the controller for REST.

var rest =  restful.model(
	'selfservice',
	app.models.selfservice
	).methods(['get','put','delete','post']);

	// Register this ednpoint with the application.
	rest.register(app, route);

	//Return Middleware.
	return function(req, res, next) {

		next();
	};
};