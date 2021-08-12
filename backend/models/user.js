const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var User = new Schema({
	username: {
		type: String,
    default: '',
  },
  address: {
    type: String,
    unique: true
  },
  nonce: {
    type: String
  }
  
}, {
    timestamps: true
});

module.exports = mongoose.model('User', User);