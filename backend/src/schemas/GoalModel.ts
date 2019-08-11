const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('./../db');


export const GoalSchema = new Schema({
  title: String,
  description: String,
  id: Number
});

export const GoalModel = mongoose.model('test', GoalSchema);
