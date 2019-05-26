const Hapi = require('@hapi/hapi');
const Mongoose = require('mongoose');
const Joi = require('joi');
const routes = require('./routes');
Mongoose.connect('mongodb://127.0.0.1:27017/test', {useNewUrlParser: true});

const init = async () => {
  const server = Hapi.server({
    port: 8080,
    host: 'localhost',
    routes: {
      cors: true
    }
  });

  server.route(routes);
  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
