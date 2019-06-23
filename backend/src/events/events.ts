import { RequestRoute } from 'hapi';
import { server } from './../server';
const eventLogger = server.events;

eventLogger.on('route', (route: RequestRoute) => {
  console.log(`New route added: ${route.path}`);
});

module.exports = eventLogger;
