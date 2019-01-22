const express = require('express');
const app = express();

const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
//const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
var Twitter = require('twitter');

var config = require('./app/Twitter.js');

const { url } = require('./config/database');

mongoose.connect(url, {
	useNewUrlParser: true
});

// Variable que guarda la informacion de 
var T = new Twitter(config);
//require('./config/passport')(passport);

//settings
app.set('port', process.env.PORT || 3000);
//app.set('views', path.join(__dirname, '/views'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//middleware
//app.use(morgan('dev'));
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
require('./app/routes')(app, passport);

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
	console.log('server on port', app.get('port'));
});




var params = {
  q: '#nodejs',
  count: 10,
  result_type: 'recent',
  lang: 'en'
}

//Recoleccion de tweets
T.get('search/tweets', params, function(err, data, response) {
  // If there is no error, proceed
  if(!err){
    
    console.log(data);
     
    
  } else {
    console.log(err);
  }
})
