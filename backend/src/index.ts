import { server } from './server';
const db = require('./db');
const emitter = require('./events/events');
const goalRoute = require('./routes/goal/goalRoute');
const loginRoute = require('./routes/login/loginRoute');

const start = async function () {
  try {
    await server.register([
      {
        plugin: require('hapi-cors'),
        options: {
          origins: ['*'],
          methods: ['POST, GET, OPTIONS', 'DELETE'],
        }
      },
      {
        plugin: require('./routes/goal/goalRoute')
      },
      {
        plugin: require('./routes/login/loginRoute')
      }
    ]);
    await server.start();
  } catch (err) {
    throw new Error(err);
  }
};

start();
