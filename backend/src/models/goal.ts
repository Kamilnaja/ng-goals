const Mongoose = require('mongoose');

const GoalModel = Mongoose.model('goal', {
  id: Number,
  description: String
});

module.exports = GoalModel;
