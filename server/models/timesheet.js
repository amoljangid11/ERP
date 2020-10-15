const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 
 autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);


const timesheet = new Schema({
employee_id:{type:Schema.ObjectId,ref:'createemployee'},
project_id:{type:Schema.ObjectId,ref:'project_time'},
startdate:{type:String},
enddate:{type:String},
weekrequest:{type:Array},
month:{type:String},
year:{type:String},
status:{type:String},
taskname:{type:String},
total:{type:String}

});

// Duplicate the ID field.
timesheet.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
timesheet.set('toJSON', {
    virtuals: true
});


timesheet.plugin(autoIncrement.plugin, {
    model: 'timesheet',
    field: 'timesheetid',
    startAt: 1,
    incrementBy: 1
});




module.exports = timesheet;