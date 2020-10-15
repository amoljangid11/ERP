const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 

const organization= new Schema({
    siteconfig:{type:Object},
    organiz:{type:Object},

organization:{type:Object},
country:{type:Object},
fax:{type:Object},
state:{type:Object},
city:{type:Object},
website:{type:Object},
secondaryphn:{type:Object},
orgdescription:{type:Object},
businessdomn:{type:Object},
orgdate:{type:Object},
primaryphn:{type:Object},
totalemp:{type:Object},
mainbrnch:{type:Object},
address1:{type:Object},
address2:{type:Object},
countryname:{type:Object},
statename:{type:Object},
statevalue:{type:Object},
cityvalue:{type:Object},
emplvalue:{type:Object}

})


organization.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
organization.set('toJSON', {
    virtuals: true
});




organization.plugin(autoIncrement.plugin, {
    model: 'organization',
    field: 'organizationid',
    startAt: 1,
    incrementBy: 1
});



module.exports = organization; 