var mongoose = require('mongoose');



var personSchema = new mongoose.Schema({
    "firstName": String,
    "lastName": String,
    "status": {type: String, enum: ['Current Investigator', 'Inactive Member', 'Inactive Investigator', 'Active Member','Referral']},
    "streetAddress": String,
    "city": String,
    "state": String,
    "zipCode": Number,
    "phoneNumber": Number
});//PERSON SCHEMA END


module.exports = mongoose.model('Person', personSchema);
