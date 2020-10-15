var restful = require('node-restful');

module.exports = function(app, route) {

	//setup the controller for REST.
console.log()
	var rest =  restful.model(
	'User',
	app.models.UserSchema
	).methods(['get','put','delete','post']);

	// Register this ednpoint with the application.
	rest.register(app, route);

	//Return Middleware.
	return function(req, res, next) {

		next();
	};
}; 