var mongoose = require('mongoose');



var areaSchema = new mongoose.Schema({
    "name": String,
    "people": [{type: mongoose.Schema.Types.ObjectId, ref: 'Person'}]
    
});//AREA SCHEMA END


module.exports = mongoose.model('Area', areaSchema);