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
                res.status(500).json({mensaje:'Internal error'})
            } else {
                if (doc){
                    res.status(500).json({mensaje:'username or email already exist'})
                } else {
                    var newUser = new User()
                    newUser.username = req.body.username;
                    newUser.email = req.body.email;
                    newUser.password = newUser.hashPassword(req.body.password)
                    newUser.save(function(err, user){
                        if (err) {
                            res.status(500).json({mensaje: 'Database error'})
                        }else{
                            res.json({mensaje:'registered successfully'})
                            console.log('simona');
                        }
                    })

                }
            }
        })
    });

    router.post('/login', passport.authenticate('local', {
        failWithError: true
    }), function(req, res, next){
        return res.json(req.user); 
        return res.json({ mensaje: 'logged in'});
    }, function (error, req, res, next) {
<<<<<<< HEAD

        console.log('error');

        return res.json({ mensaje: 'error'}); 

        
        //if (req.xhr) { return res.json({ error: 'error'});}
         // return res.json({error: 'error'});
=======
        console.log('error');
        return res.json({ mensaje: 'error'}); 
>>>>>>> 351b22a0c0972d6fe9156b06b1670aa1a239138f
    });

    return router;
}