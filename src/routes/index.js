const express = require('express');
const router = express.Router();

const home = require('../controller/home')
const post = require('../controller/posts')

module.exports = app => {

    var loggedin = function(req, res, next){
        if(req.isAuthenticated()){
            next()
        } else {
            res.redirect('/login')
        }
        
    }

    router.get('/', home.index);
    router.get('/signup',home.signup);
    router.get('/login',home.login);
    router.get('/logout',home.logout);
    router.get('/post/recent', post.index);
    router.get('/profile/:user_id', post.profile);
    router.post('/post/:user_id', post.create);
    router.post('/post/:post_id/like', post.like);
    router.post('/post/:post_id/comment', post.comment);
    router.delete('/post/:post_id', post.remove);

    app.use(router);

};
