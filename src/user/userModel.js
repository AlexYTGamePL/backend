var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  nickname: {
    type: String,
    required: true
  },
  discordNickName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  job: {
    type: String,
    required: false
  },
  permissions: {
    type: Array,
    required: false
  }
});

module.exports = mongoose.model('user', userSchema);
