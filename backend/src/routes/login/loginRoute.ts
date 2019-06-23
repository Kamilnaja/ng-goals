import * as hapi from 'hapi';
import { server } from './../../server';

server.route({
  method: 'POST',
  path: '/api/login',
  handler: async (request: hapi.Request, h: hapi.ResponseToolkit) => {
    const item = {};
    return item;
  }
});

export default server;
