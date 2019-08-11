import * as hapi from 'hapi';
import { GoalModel } from '../../schemas/GoalModel';

module.exports = {
  name: 'goalRoute',
  register: async (server: hapi.Server, options: hapi.RouteOptions) => {

    server.route({
      method: 'GET',
      path: '/goals',
      handler:  async (request: hapi.Request, h: hapi.ResponseToolkit) => {
        try {
          const test = await GoalModel.find().exec();
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
      handler: async (request: hapi.Request, h: hapi.ResponseToolkit) => {
        try {
          const goal = await GoalModel.findById(request.params.id).exec();
          return h.response(goal);
        } catch (error) {
          return error;
        }
      }
    });

    server.route({
      method: [ 'POST' ],
      path: '/goals',
      handler: async (request: hapi.Request, h: hapi.ResponseToolkit) => {
        try {
          const goalToSave = new GoalModel({
            description: request.payload[ 'description' ],
            title: request.payload[ 'title' ]
          });
          const result = await goalToSave.save().then(() => {
          });
          return h.response(result);
        } catch (error) {
          throw new Error(error);
        }
      }
    });

    server.route({
      method: [ 'DELETE' ],
      path: '/goals/{id}',
      handler: async (request: hapi.Request, h: hapi.ResponseToolkit) => {
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
  }
};
