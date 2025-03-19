const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    min:8,
    max:16
  }
});
const User = mongoose.model('User', userSchema);
model.exports = {User}