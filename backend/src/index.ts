export { };
const db = require('./db');
import { validate } from './auth/Validator';
const Hapi = require('@hapi/hapi');

const main = async () => {

  const server = Hapi.server({ port: 8080 });

  await server.register(require('@hapi/basic'));

  server.auth.strategy('simple', 'basic', { validate });
  server.auth.default('simple');

  await server.register([
    {
      plugin: require('./events/events')
    },
    {
      plugin: require('hapi-cors'),
      options: {
        origins: [ '*' ],
        methods: [ 'POST, GET, OPTIONS', 'DELETE' ],
      },
    },
    {
      plugin: require('./routes/goal/goalRoute'),
    },
    {
      plugin: require('./routes/login/loginRoute')
    },
    {
      plugin: require('./routes/users/userRoute')
    }
  ]);
  server.events.on('response', function (request) {
    console.log(
      request.info.remoteAddress + ': ' + request.method.toUpperCase() + ' ' + request.path + ' --> ' + request.response.statusCode
    );
  });
  await server.start();

  return server;
};

main()
  .then((server) => console.log(`Server listening on ${server.info.uri}`))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
