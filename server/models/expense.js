const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; 

const expense= new Schema({

    categories:{type:Object},
    
    paymode:{type:Object},
    expen:{type:Object},
    trips:{type:Object},
    empadvances: {type:Object},
    
    expenseid:{type:Object}
    


});
expense.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
expense.set('toJSON', {
    virtuals: true
});




expense.plugin(autoIncrement.plugin, {
    model: 'expense',
    field: 'expenseid',
    startAt: 1,
    incrementBy: 1
});



module.exports = expense;