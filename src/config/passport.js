const passportlocal = require('passport-local').Strategy;

const User = require('../app/models/users');

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
	passport.use( 'local-signup', new passportlocal ({
		nameField: 'name',
		usernameField: 'username',
		emailField: 'email',
		passwordField: 'password',
		pasaReqToCallback: true
	},

	
	function (req, name, username, email, password, done) {
		user.findOne({'local.username': username}, function(err, user) {
			if ( err ){
				return done( err );
			}
			if ( user ) {
				return done( null, false, req.flash('signupMessage', 'El nombre de usuario ya existe'));

			} else {
				var newUser = new User();
				newUser.local.name = name;
				newUser.local.username = username;
				newUser.local.email = email;
				newUser.local.password = newUser.generateHash(password);
				newUser.save( function ( err ) {
					if ( err ) { 
						throw ( err ); 
					}
					return done( null, newUser );
				});

			}
		})
	}));

	//login
	passport.use( 'local-login', new passportlocal ({
		usernameField: 'username',
		passwordField: 'password',
		pasaReqToCallback: true
	},

	function (req, username, password, done) {
		user.findOne({'local.username': username}, function(err, user) {
			if ( err ){
				return done( err );
			}
			if ( user ) {
				return done( null, false, req.flash('loginMessage', 'Usuario no encontrado'));

			} 
			if ( !user.validatePassword( password ) ) {
			
				return done( null, false, req.flash('loginMessage', 'Contraseña no valida'));				
					
				}
			return done( null, newUser );
			
		} )
	}));

}