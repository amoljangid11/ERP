var  mongoose = require ('mongoose')
autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
// Create the Testcase Schema.
var fsfiles = new mongoose.Schema({

  fielname: {    type: String },

  contentType: {    type: String },

  length: {    type: String },

  chunkSize: {    type: String  },

  uploadDate: {    type: Date },

  aliases: {    type: String },

    metadata: {    type: String },

    md5: {    type: String }


});



// Duplicate the ID field.
fsfiles.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
fsfiles.set('toJSON', {
    virtuals: true
});




// Export the model.

module.exports = fsfiles;
