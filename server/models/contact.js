let mongoose = require('mongoose');

// create a model class
// contact class, structure 
let contactModel = mongoose.Schema({ 
    name: String,
    phoneNumber: String,
    email: String
},{
    collection: "contacts" 
});

module.exports = mongoose.model('Contact', contactModel);