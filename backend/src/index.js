const db = require('./db');
const Hapi = require('hapi');

const main = async () => {
  const people = {
    1: {
      id: 1,
      name: 'Jen Jones'
    }
  };

  const validate = async (decoded, request) => {
    if (!people[decoded.id]) {
      return { isValid: false };
    } else {
      return { isValid: true };
    }
  };

  const server = Hapi.server({ port: 8081 });

  await server.register(require('hapi-auth-jwt2'));
  server.auth.strategy('jwt', 'jwt', {
    key: 'Secret',
    validate: validate,
    verifyOptions: {
      algorithms: ['HS256']
    }
  });

  server.auth.default('jwt');

  await server.register([
    {
      plugin: require('./events/events')
    },
    {
      plugin: require('hapi-cors'),
      options: {
        origins: ['*'],
        methods: ['POST, GET, OPTIONS', 'DELETE']
      }
    },
    {
      plugin: require('./routes/goal/goalRoute')
    },
    {
      plugin: require('./routes/login/loginRoute')
    },
    {
      plugin: require('./routes/register/registerRoute')
    },
    {
      plugin: require('./routes/users/userRoute')
    }
  ]);

  server.events.on('response', function(request) {
    console.log(
      request.info.remoteAddress + ': ' + request.method.toUpperCase() + ' ' + request.path + ' --> ' + request.response.statusCode
    );
  });
  await server.start();

  return server;
};

main()
  .then(server => console.log(`Server listening on ${server.info.uri}`))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
