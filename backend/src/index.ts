export { };
import { UserSchema, UserModel } from './schemas/UserModel';
const db = require('./db');

const Hapi = require('@hapi/hapi');
const Crypto = require('./Crypto').Crypto;
// todo - remove hardcoded users

const users = {
  john: {
    username: 'john',
    password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',   // 'secret'
    name: 'John Doe',
    id: '2133d32a'
  }
};

const validate = async (request, username, password, h) => {
  if (username === 'help') {
    return { response: h.redirect('https://hapijs.com/help') };     // custom response
  }

  // check if user exists in db
  const fetchUser = await UserModel.find().exec();
  console.log(fetchUser);

  const user = users[ username ];
  if (!user) {
    return { credentials: null, isValid: false };
  }
  const crypto = new Crypto();
  const isValid = crypto.compare(user, password);

  const credentials = { id: user.id, name: user.name };
  console.log(isValid);

  return { isValid, credentials };
};

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

  await server.start();

  return server;
};

main()
  .then((server) => console.log(`Server listening on ${server.info.uri}`))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
