import { server } from './server';
const db = require('./db');
// move to separate file todo
const Bcrypt = require('bcryptjs');
const Hapi = require('@hapi/hapi');

interface User {
  username: string;
  password: string;
  name: string;
  id: string;
}
// todo - use interface
// database object
const users = {
  john: {
    username: 'john',
    password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',   // 'secret'
    name: 'Jonh doe',
    id: '2133d32a'
  }
};

const validate = async (request, username, password) => {
  const user = users[username];
  if (!user) {
    return { credentials: null, isValid: false };
  }

  const isValid = await Bcrypt.compare(password, user.password);
  const credentials = { id: user.id, name: user.name };

  return { isValid, credentials };
};

const start = async function () {
  try {
    await server.register([
      {
        plugin: require('./events/events')
      },
      {
        plugin: require('hapi-cors'),
        options: {
          origins: ['*'],
          methods: ['POST, GET, OPTIONS', 'DELETE'],
        }
      },
      {
        plugin: require('@hapi/basic')
      },
      {
        plugin: require('./routes/goal/goalRoute'),
        options: {
          auth: 'simple'
        }
      },
      {
        plugin: require('./routes/login/loginRoute')
      }
    ]);
    server.auth.strategy('simple', 'basic', { validate });
    server.route({
      method: 'GET',
      path: '/api/test',
      options: { auth: 'simple' },
      handler: (request, h) => {
        return 'welcome';
      }
    });
    await server.start();
    console.log(`server is running on ${server.info.uri}`);

  } catch (err) {
    throw new Error(err);
  }
};

start();
