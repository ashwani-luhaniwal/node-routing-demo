var express = require('express'),
    app = express();
    port = process.env.PORT || 8080,
    morgan = require('morgan')
    bodyParser = require('body-parser');

// configure
// order matters here
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(authenticate);  // this is to apply middleware to entire application

// set routes
var router = require('./app/routes');
app.use(router);

// // set middlewares
// function authenticate(req, res, next) {
//     // make sure the user is authenticated
//     // req.params.token

//     console.log('authenticating user');

//     next();
// }

// function checkName(req, res, next) {
//     console.log(req.params, 'this is the middleware');

//     // validation
//     // check the database
//     // var user = User.findOne({ username: req.params.username });
//     // if ( !user )

//     next();
// }

// start the server
app.listen(port, function() {
    console.log('App listening on http://localhost:' + port);
});