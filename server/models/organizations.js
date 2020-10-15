const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 

const organizations= new Schema({

businessunits:{type:Object},
/*department:{type:Object},*/
announcement:{type:Object},
leavemanagementoption:{type:Object},
managecategory:{type:Object},
policydocument:{type:Object},
businessunit_id:{type:Schema.ObjectId,ref:'Oraganizations'}

})


organizations.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
organizations.set('toJSON', {
    virtuals: true
});




organizations.plugin(autoIncrement.plugin, {
    model: 'organizations',
    field: 'organizationsid',
    startAt: 1,
    incrementBy: 1
});



module.exports = organizations; 