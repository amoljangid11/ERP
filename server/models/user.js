const mongoose= require('mongoose');
const bcrypt= require('bcryptjs');
const config= require('../config/database');

//User Schema
const UserSchema = mongoose.Schema({
  
  employee_id:{
   type:String
  },
  email:{
    type:String,
    required: true,
    
  },
  username:{
    type:String,
    required: true
  },
  password:{
    type:String,
    required: true
  },
  employee_OId:{type:String},
  utype:{type:String},
  alternateemail:{type:String}
  
  //   required: true}
});




const User= module.exports= mongoose.model('User',UserSchema);


module.exports.getUserById= function(id, callback){
  User.findById(id, callback);
}


module.exports.getUtype= function(utype, callback){
  const query={utype:utype}
  User.findOne(query, callback);
}
module.exports.getUserByUsername= function(username, callback){
  const query={username:username}
  User.findOne(query, callback);
}
module.exports.getUserByUType= function(utype, callback){
  const query={utype:utype}
  User.findOne(query, callback);
}

module.exports.getUserByEmail= function(username, callback){
 
  const query={email:username}
  User.findOne(query).then((res,err)=>{
    console.log(res,"433333333333333333333333333333")
     callback(err,res)
  });
}

module.exports.newUser= function(email,username,password,utype,employee_OId, callback){
 
  const query={email:email,username:username,password:password,utype:utype,employee_OId:employee_OId}
  User.findOne(query).then((res,err)=>{
    console.log(res,"433333333333333333333333333333")
     callback(err,res)
  });
}

module.exports.leaveapply= function(email,email1,firstname,lastname,no_days,leavetype,from_date,to_date,reason,leavelimit,comments, callback){
 
  const query={email:email,email1:email1,firstname:firstname,lastname:lastname,no_days:no_days,leavetype:leavetype,from_date:from_date,to_date:to_date,reason:reason,leavelimit:leavelimit,comments:comments}
  User.findOne(query).then((res,err)=>{
    console.log(res,"433333333333333333333333333333")
     callback(err,res)
  });
}

module.exports.leaveapproved= function(email,username,leavetype,from_date,to_date,no_days,applied_on,utype,status,comment, callback){
 
  const query={email:email,username:username,leavetype:leavetype,from_date:from_date,to_date:to_date,no_days:no_days,applied_on:applied_on,utype:utype,status:status,comment:comment}
  User.findOne(query).then((res,err)=>{
    console.log(res,"433333333333333333333333333333")
     callback(err,res)
  });
}

module.exports.getUserByUsernameUtypeEmail = function(username, utype, alternateemail, callback){
  const query={username:username,utype:utype,alternateemail:alternateemail}
  User.findOne(query).then((res,err)=>{
    console.log(res,"Good");
    callback(err,res);
  })
}

module.exports.getUserByUsernameUtype = function(username, utype, callback){
  const query={username:username,utype:utype}
  User.findOne(query).then((res,err)=>{
    console.log(res,"Good");
    callback(err,res);
  })
}


module.exports.encrypt= function(password,callback) {
 // console.log("encrypt --------------------")
// console.log(password,"--------------------")
  // Ensure password is new or modified before applying encryption
  // Apply encryption
   bcrypt.genSalt(10,(err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if(err) throw err;
    // console.log(hash,"hjhjjjjjjjjj")
      password= hash;
     // console.log(password,"499999999999999999999999")
     callback(err,password)
      // newUser.save(callback);
    });
  });

}
//Random string generate
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 8; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

console.log(makeid());


module.exports.comparePassword= function( candidatePassword, hash, callback){

  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
  module.exports.initiateexit= function(email,exittype,mailFormat, callback){
 
    const query={email:email,exittype:exittype,mailFormat:mailFormat}
    User.findOne(query).then((res,err)=>{
      console.log(res,"433333333333333333333333333333")
       callback(err,res)
    });
  }
}
