const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  password: String
});

const UserModel = mongoose.model('model', UserSchema);

module.exports = { UserModel, UserSchema };
