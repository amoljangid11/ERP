const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 

const appraisal= new Schema({

    parameter:{type:Object},
    skill:{type:Object},
    question:{type:Object},
    rating:{type:Object},
    initializeappraisal:{type:Object}
    
});
appraisal.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
appraisal.set('toJSON', {
    virtuals: true
});

appraisal.plugin(autoIncrement.plugin, {
    model: 'appraisal',
    field: 'appraisalid',
    startAt: 1,
    incrementBy: 1
});

module.exports = appraisal;