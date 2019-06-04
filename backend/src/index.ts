const mongojs = require('mongojs');
const server = require('./server');
const GoalModel = require('./schemas/GoalModel');
const db = require('./db');

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
      const result = await GoalModel.findByIdAndDelete(request.params.id)
        .then(() => {
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
        origins: ['*'],
        methods: ['POST, GET, OPTIONS', 'DELETE']
      }
    });
    await server.start();
  } catch (err) {
    process.exit(1);
  }
};

start();
