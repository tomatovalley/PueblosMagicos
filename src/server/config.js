const path = require('path');
const morgan = require('morgan');
const multer = require('multer');
const express = require('express');
const routes = require('../routes/index')
const errorHandler = require('errorhandler')
const session = require('express-session');
const passport = require('passport');
const bodyparser = require('body-parser');



var auth = require('../routes/auth')(passport);

module.exports = app => {


    //settings
    app.set('port', process.env.PORT || 5000);
    app.set('views', path.join(__dirname, 'views'));
    


    //middlewares
    app.use(morgan('dev'));
    app.use(multer({dest: path.join(__dirname, '../public/upload/temp')}).single('image'));
    app.use(bodyparser.urlencoded({extended: true}));
    app.use(bodyparser.json());
    app.use(session({
        secret: 'umaewamou',
        saveUninitialized: false,
        resave: false
    }))
    app.use(passport.initialize());
    app.use(passport.session());
    require('../passport')(passport);
    

    //routes
    routes(app);
    app.use('/auth',auth);
    


    //static files
    app.use(express.static(path.join(__dirname, '../public')));

    //errorhandlers
    if ('development' === app.get('env')){
        app.use(errorHandler);
    }

    return app;

}