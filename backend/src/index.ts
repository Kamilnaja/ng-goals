const mongojs = require('mongojs');
const server = require('./server');
const Mongoose = require('mongoose');
const HapiCors = require('hapi-cors')

Mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })
  .then(() => console.log('Connected to db'))
  .catch((err: Error) => console.log('error while connecting : ' + err));

const GoalModel = Mongoose.model('test', {
  id: Number,
  description: String
});

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
});

server.route({
  method: ['POST', 'OPTIONS'],
  path: '/goals',
  handler: async (request: any, h: any) => {
    try {
      console.log('handling')
      const goalToSave = new GoalModel(request.payload);
      const result = await goalToSave.save().then(() => {
        console.log('goal saved');
      });
      console.log(goalToSave);
      return h.response(result);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
});

const start = async function () {
  try {
    await server.register({
      plugin: require('hapi-cors'),
      options: {
        origins: ['http://localhost:4200']
      }
    });
    await server.start();
    console.log('server started');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();
