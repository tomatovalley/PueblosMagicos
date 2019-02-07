const local = require('passport-local').Strategy;
const mongoose = require ('mongoose');
const User = require('./models/user');

module.exports = function(passport){
    passport.serializeUser(function(user,done) {
        done(null, user)
    })

    passport.deserializeUser(function(user,done) {
        done(null, user)
    })

    passport.use(new local({
        usernameField: 'username',
        passwordField: 'password'
    }, async (username, password, done) => {
        const user = await User.findOne({username: username}); 
        if(!user){
            return done(null,false);
        }
        if(!user.comparePassword(password)){
            return done(null, false);
        }
        done(null, user);
    }));
}