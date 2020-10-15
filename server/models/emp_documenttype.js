const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 
autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);


const emp_documenttype = new Schema({

documenttype:{type:Object},

});




// Duplicate the ID field.
emp_documenttype.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
emp_documenttype.set('toJSON', {
    virtuals: true
});




emp_documenttype.plugin(autoIncrement.plugin, {
    model: 'emp_documenttype',
    field: 'emp_documenttypeid',
    startAt: 1,
    incrementBy: 1
});




module.exports = emp_documenttype;