var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    name: String,
    password: String
})
var user = mongoose.model('user', userSchema);
module.exports =  user;