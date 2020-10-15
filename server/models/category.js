const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 

const category= new Schema({

categories:{type:Object},
sitecat:{type:Object},
requesttype:{type:Object},
settings:{type:Object},
employee_id:{type:String},
reporting_mid:{type:String},
selected1_id:{type:String},
selected2_id:{type:String},
selected3_id:{type:String},
executors_id:{type:Object},
allservicereq:{type:Object}



})


category.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
category.set('toJSON', {
    virtuals: true
});

category.plugin(autoIncrement.plugin, {
    model: 'category',
    field: 'categoryid',
    startAt: 1,
    incrementBy: 1
});



module.exports = category; 

