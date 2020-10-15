const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 

const asset= new Schema({

  assetcategories:{type:Object} , 
    asset: {type:Object}

});
asset.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
asset.set('toJSON', {
    virtuals: true
});

asset.plugin(autoIncrement.plugin, {
    model: 'asset',
    field: 'assetid',
    startAt: 1,
    incrementBy: 1
});

module.exports = asset;