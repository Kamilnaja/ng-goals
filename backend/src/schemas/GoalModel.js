const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 const GoalSchema = new Schema({
  title: String,
  description: String,
  id: Number
});

const GoalModel = mongoose.model('test', GoalSchema);

module.exports = { GoalSchema, GoalModel };
