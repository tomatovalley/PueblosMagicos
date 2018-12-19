const passportlocal = require('passport-local').Strategy;

const User = require('./app/models/users');

module.exports = function (passport){

	passport.serializeUser( function ( user, done ) {
		done( null, user.id );
	});

	passport.deserializeUser( function ( id, done ) {

		User.findById( id, function ( err, user ) {
			done( err, user );
		});
	});

	//signup
	passport.user( 'local-signup', new passportlocal ({
		nameField: 'name',
		usernameField: 'username',
		emailField: 'email',
		passwordField: 'password',
		pasaReqToCallback: true
	},

	function (req, name, username, email, password, done) {
		user.findOne({$or: [{'local.username': username}, {'local.email': email}]}, function(err, user) {
			if ( err ){
				return done( err );
			}
			if ( user ) {
				return done( null, false, req.flash('signupMessage', ''))
			}
		})
	}
	))

}