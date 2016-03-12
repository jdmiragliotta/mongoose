var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Enter Your Name'
   },

  password: String, // check
  email: String
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
