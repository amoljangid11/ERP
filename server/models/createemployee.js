const mongoose = require('mongoose'); 
mongoose.Promise = global.Promise; 
const Schema = mongoose.Schema; 

const createemployee= new Schema({
    employeemanage:{type:Object},
    official:{type:Object},
    leave:{type:Object},
    contact:{type:Object},
    salary:{type:Object},
    holiday:{type:Object},
    personal:{type:Object},
    skill:{type:Object},
    jobhistory:{type:Object},
    experience:{type:Object},
    education:{type:Object},
    training:{type:Object},
    medicalclaim:{type:Object},
    disability:{type:Object},
    dependency:{type:Object},
    visa:{type:Object},
    corporatecard:{type:Object},
    workeligibility:{type:Object},
    additionaldetail:{type:Object},
    event:{type:Array},
    documents:{type:Object}
    // pdfSrc:{type:String},
    // file:{type:String}
   
})

createemployee.virtual('id').get(function(){
    return this._id.toHexString();
});


createemployee.set('toJSON', {
    virtuals: true
});




createemployee.plugin(autoIncrement.plugin, {
    model: 'createemployee',
    field: 'createemployeeid',
    startAt: 1,
    incrementBy: 1
});



module.exports = createemployee;