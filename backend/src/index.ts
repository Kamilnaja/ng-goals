const mongojs = require('mongojs');
const Boom = require('boom');
const server = require('./server');

const db = mongojs('test', ['goals']);

db.on('connect', () => {
  console.log(' Db connected ');
});

db.on('error', () => {
  console.log(' Db error ');
});

server.route({
  method: 'GET',
  path: '/goals',

  handler: async(request: Request, h: any) => {
    try {
      const goal = await GoalModel.find().exec();
      return h.response(goal);
    } catch (err) {
      throw Boom.badData(err.message);
    }
  }
});


server.start((err: Error) => {
  if (err) {
    throw err;
  }
  console.log(`Server is running on ${server.port}`)
});
