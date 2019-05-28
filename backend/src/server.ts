const Hapi = require('@hapi/hapi');

// Create a server with a host and port
const hapiServer = new Hapi.Server({
  host: 'localhost',
  port: 8080,
  routes: {
    cors: true
  }
});

module.exports = hapiServer;
