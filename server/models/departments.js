const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 
 autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);


const departments = new Schema({

        departmentname:{type:Object},
		departmentcode:{type:Object},
        businessunit:{type:Object},
        departmenthead:{type:Object},
        starton:{type:String},
        cityname:{type:Object},
        statename:{type:Object},
        countryname:{type:Object},
        description:{type:Object},
        timezones:{type:Object},
        dstreet1:{type:Object},
        dstreet2:{type:Object},
        dstreet3:{type:Object},
        department:{type:Object}
        
});

// Duplicate the ID field.
departments.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
departments.set('toJSON', {
    virtuals: true
});


departments.plugin(autoIncrement.plugin, {
    model: 'departments',
    field: 'departmentsid',
    startAt: 1,
    incrementBy: 1
});




module.exports = departments;