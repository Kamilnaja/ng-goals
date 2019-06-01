const mongojs = require('mongojs');
const Boom = require('boom');
const server = require('./server');
const db = mongojs('test', ['goals']);
const Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })
.then(() => console.log('Connected to db'))
.catch((err: Error) => console.log('error while connecting : ' + err));

const GoalModel = Mongoose.model('test', {
  id: Number,
  description: String
});

const goal = new GoalModel({
  id: 2,
  description: 'Goal 2'
});
// todo - create a bunch of goals at start
goal.save().then(() => {
  console.log('second goal saved');
})

server.route({
  method: 'GET',
  path: '/goals',
  handler: async (request: any, h: any) => {
    try {
      const test = await GoalModel.find().exec();
      console.log(test);

      return h.response(test);
    } catch (error) {
      console.log(error);

      return error;
    }
  }
});


server.route({
  method: 'GET',
  path: '/goals/{id}',
  handler: async (request: any, h: any) => {
    try {
      const goal = await GoalModel.findById(request.params.id).exec();
      console.log(goal);

      return h.response(goal);
    } catch (error) {
      console.log(error);

      return error;
    }
  }
})

server.start((err: Error) => {
  if (err) {
    throw err;
  }
  console.log(`Server is running on ${server.port}`)
});
