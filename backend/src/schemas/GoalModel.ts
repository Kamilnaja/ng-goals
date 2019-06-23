const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GoalSchema = new Schema({
  title: String,
  description: String,
  id: Number
});

export const GoalModel = mongoose.model('test', GoalSchema);
