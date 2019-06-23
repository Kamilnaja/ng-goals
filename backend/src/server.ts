import * as Hapi from '@hapi/hapi';

// Create a server with a host and port
export const server = new Hapi.Server({
  host: 'localhost',
  port: 8080,
  routes: {
    cors: true
  },
});
