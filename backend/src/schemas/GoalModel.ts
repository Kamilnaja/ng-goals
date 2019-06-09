const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GoalSchema = new Schema({
  title: String,
  description: String,
  id: Number
});

module.exports = mongoose.model('test', GoalSchema);
