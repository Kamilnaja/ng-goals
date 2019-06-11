import * as hapi from 'hapi';

const server = require('./../../server');
const GoalModel = require('./../../schemas/GoalModel');
const goalRoute = server;

goalRoute.route({
  method: 'GET',
  path: '/goals',
  handler: async (request: hapi.Request, reply: any) => {
    try {
      const test = await GoalModel.find().exec();
      return reply.response(test);
    } catch (error) {
      return error;
    }
  }
});

goalRoute.route({
  method: 'GET',
  path: '/goals/{id}',
  handler: async (request: hapi.Request, h: any) => {
    try {
      const goal = await GoalModel.findById(request.params.id).exec();
      return h.response(goal);
    } catch (error) {
      return error;
    }
  }
});

goalRoute.route({
  method: ['POST'],
  path: '/goals',
  handler: async (request: Request, h: any) => {
    try {
      const goalToSave = new GoalModel({
        // @ts-ignore
        description: request.payload.description,
        // @ts-ignore todo - fix
        title: request.payload.title
      });
      const result = await goalToSave.save().then(() => {
      });
      return h.response(result);
    } catch (error) {
      throw new Error(error);
    }
  }
});

goalRoute.route({
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

export default goalRoute;
