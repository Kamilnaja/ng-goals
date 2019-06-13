import * as hapi from 'hapi';

const server = require('./../../server');
const goalRoute = server;

goalRoute.route({
  method: 'POST',
  path: '/api/login',
  handler: async (request: hapi.Request, h: hapi.ResponseToolkit) => {
    const item = {};
    return item;
  }
});

export default(goalRoute);
