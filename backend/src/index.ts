const mongojs = require('mongojs');
const server = require('./server');
const Mongoose = require('mongoose');
const HapiCors = require('hapi-cors');
const GoalModel = require('./schemas/GoalModel');

Mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })
  .then(() => console.log('Connected to db'))
  .catch((err: Error) => console.log('error while connecting : ' + err));

server.route({
  method: 'GET',
  path: '/goals',
  handler: async (request: any, h: any) => {
    try {
      const test = await GoalModel.find().exec();
      return h.response(test);
    } catch (error) {
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
      return h.response(goal);
    } catch (error) {
      return error;
    }
  }
});

server.route({
  method: ['POST'],
  path: '/goals',
  handler: async (request: any, h: any) => {
    try {
      const goalToSave = new GoalModel({
        description: request.payload.description,
      });
      const result = await goalToSave.save().then(() => {
      });
      return h.response(result);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
});

server.route({
  method: ['DELETE'],
  path: '/goals/{id}',
  handler: async (request: any, h: any) => {
    try {
      console.log('deleting');
      const result = await GoalModel.findByIdAndDelete(request.params.id).then(() => {
        console.log('success');
      });
      return h.response(result);
    } catch (error) {
      return error;
    }
  }
});

const start = async function () {
  try {
    await server.register({
      plugin: require('hapi-cors'),
      options: {
        origins: ['*']
      }
    });
    await server.start();
  } catch (err) {
    process.exit(1);
  }
};

start();
