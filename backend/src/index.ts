'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request: Request, h: any) => {

      return 'Hello World!';
    }
  });


  server.route({
    method: 'GET',
    path: '/goals',
    handler: (request: Request, h: any) => {
      const goal = {
        id: 1,
        name: 'Challenge yourself'
      }
      return goal;
    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();
