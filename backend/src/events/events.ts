const server_ = require('./../server');
const eventLogger = server_.events;

eventLogger.on('response', (request: any) => {
  console.log(request.route);
});

eventLogger.on('route', (route) => {
  console.log(`New route added: ${route.path}`);
});

module.exports = eventLogger;
