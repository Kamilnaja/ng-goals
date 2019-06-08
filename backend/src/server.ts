const Hapi = require('@hapi/hapi');

// Create a server with a host and port
const server = new Hapi.Server({
  load: {
    sampleInterval: 1000
  },
  host: 'localhost',
  port: 8080,
  routes: {
    cors: true
  },
});

module.exports = server;
