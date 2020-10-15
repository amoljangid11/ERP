const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 
 autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);


const projects = new Schema({

        projectname:{type:Object},
		currencyname:{type:Object},
        projecttype:{type:Object},
        projectstatus:{type:Object},
        fromdate:{type:Date},
        description:{type:Object},
        baseproject:{type:Object},
        todate:{type:Date},
        clientname:{type:Object},
        estimatehour:{type:Object},
        
});

// Duplicate the ID field.
projects.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
projects.set('toJSON', {
    virtuals: true
});


projects.plugin(autoIncrement.plugin, {
    model: 'projects',
    field: 'projectsid',
    startAt: 1,
    incrementBy: 1
});




module.exports = projects;