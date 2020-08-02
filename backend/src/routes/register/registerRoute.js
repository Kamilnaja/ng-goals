const UserModel = require('../../schemas/UserModel');

module.exports = {
  name: 'registerRoute',
  register: async (server, options) => {
    server.route({
      method: ['POST'],
      path: '/api/register',
      handler: async (request, h, options) => {
        try {
          const userToSave = new UserModel({
            name: request.payload['name'],
            password: request.payload['password']
          });
          const result = await userToSave.save().then(() => {
            console.log('user saved!');
          });
          return h.response(result);
        } catch (error) {
          throw new Error(error);
        }
      },
      options: {
        auth: false
      }
    });
  }
};
