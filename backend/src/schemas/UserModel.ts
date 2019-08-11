const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  name: String,
  password: String,
});

export const UserModel = mongoose.model('hello', UserSchema);
