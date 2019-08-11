import * as hapi from 'hapi';
import { GoalModel } from '../../schemas/GoalModel';


module.exports = {
  name: 'loginRoute',
  register: async (server: hapi.Server, options: hapi.RouteOptions) => {
    server.route({
      method: 'POST',
      path: '/api/login',
      handler: async (request: hapi.Request, h: hapi.ResponseToolkit) => {
        const item = {};
        return item;
      },
      // options: {
      //   auth: 'simple'
      // }
    });

    server.route({
      method: 'GET',
      path: '/',
      handler: async (request: hapi.Request, h: hapi.ResponseToolkit) => {
        try {
          const goal = await GoalModel.findById(request.params.id).exec();
          return h.response(goal);
        } catch (error) {
          return error;
        }
      },
      options: {
        auth: 'simple'
      }
    });
  }
};
