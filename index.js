const express = require('express');
const app = express();

const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

const { url } = require('./config/database');

mongoose.connect(url, {
	useNewUrlParser: true
});

require('./config/passport')(passport);

//settings
app.set('port', process.env.PORT || 3000);


//middleware
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
	secret : 'password',
	resave : false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//routes
//require('./app/routes')(app, passport);




app.listen(app.get('port'), () => {
	console.log('server on port', app.get('port'));
});