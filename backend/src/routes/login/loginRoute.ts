import * as hapi from 'hapi';

module.exports = {
  name: 'loginRoute',
  register: async (server: hapi.Server, options: hapi.RouteOptions) => {
    server.route({
      method: 'POST',
      path: '/api/login',
      handler: async (request: hapi.Request, h: hapi.ResponseToolkit) => {
        const item = {};
        return item;
      }
    });
  }
};
