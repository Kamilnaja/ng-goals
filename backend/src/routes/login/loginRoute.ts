import * as hapi from 'hapi';

const server = require('./../../server');
const goalRoute = server;

goalRoute.route({
  method: 'POST',
  path: '/api/login',
  handler: async (request: hapi.Request, reply: any) => {
    const item = {};
    return item;
  }
});

export default(goalRoute);
