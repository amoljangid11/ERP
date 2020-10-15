const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 
const bcrypt= require('bcryptjs');
const usergenerate= new Schema({

username:{type:String},
mail:{type:String},
password:{type:String},
utype:{type:String},
employee_OId:{type:String}


})

usergenerate.virtual('id').get(function(){
    return this._id.toHexString();
});

// user virtual fields are serialised.
usergenerate.set('toJSON', {
    virtuals: true
});




usergenerate.plugin(autoIncrement.plugin, {
    model: 'usergenerate',
    field: 'usergenerateid',
    startAt: 1,
    incrementBy: 1
});



module.exports = usergenerate;

usergenerate.pre('save', function(next) {
	console.log("111111")
  // Ensure password is new or modified before applying encryption
  if (!this.isModified('password'))
    return next();

  // Apply encryption
  bcrypt.hash(this.password, null, null, (err, hash) => {
    if (err) return next(err); // Ensure no errors
    this.password = hash; // Apply encryption to password
    next(); // Exit middleware
  });
});