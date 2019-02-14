const express = require('express');
const router = express.Router();
const User = require('../models/user');

module.exports = function (passport) { 
    router.post('/signup', function (req,  res) {
        User.findOne({ $or: [
            { username: req.body.username  },
            { email: req.body.email  }
          ]}, function (err, doc){
            if(err){
                res.status(500).send('Internal error')
            } else {
                if (doc){
                    res.status(500).send('username or email already exist')
                } else {
                    var newUser = new User()
                    newUser.username = req.body.username;
                    newUser.email = req.body.email;
                    newUser.password = newUser.hashPassword(req.body.password)
                    newUser.save(function(err, user){
                        if (err) {
                            res.status(500).send('Database error')
                        }else{
                            res.send('registered successfully')
                        }
                    })

                }
            }
        })
    });

    router.post('/login', passport.authenticate('local', {
        failWithError: true
    }), function(req, res, next){

        console.log('chido');
         return res.json({ mensaje: 'bien'}); 
    }, function (error, req, res, next) {

        console.log('error');

        return res.json({ mensaje: 'error'}); 

        
        //if (req.xhr) { return res.json({ error: 'error'});}
         // return res.json({error: 'error'});
    });

    return router;
}