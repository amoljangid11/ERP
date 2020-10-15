 var express = require('express');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config/database');

module.exports = function(passport){
  let opts = {};
let next;
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  /*console.log('hdakda');*/
  opts.secretOrKey = config.secret;
   passport.use(new JwtStrategy(opts, (jwt_payload, done) => {


 /*   console.log(jwt_payload,'here');*/
  User.getUserById(jwt_payload._doc._id, (err, user) => {
      /* console.log(jwt_payload._doc._id,'here2');*/
  var usercheck;
  
   if(user){
       /* console.log(user,'done')*/
        userchek = true;  

          done(null,userchek)   
      } else {
      
userchek= false;
  done(null,userchek)

      }

    });

  }));

}





