const UserModel = require('../../schemas/UserModel');

module.exports = {
  name: 'userRoute',
  register: async (server, options) => {

    server.route({
      method: 'POST',
      path: '/api/users',
      options: {
        auth: false
      },
      handler: async (request, h) => {
        try {
          // todo - check if user exists

          // todo - hash password
          console.log(request.payload);

          if (!request.payload) {
            return ('Missing payload');
          } else {
            console.log('successfully saved user ');
            return await saveUser(request, h);
          }
        } catch (error) {
          console.log(error);
          return error();
        }
      }
    });

    server.route({
      method: 'GET',
      path: '/api/users',
      options: {
        auth: false
      },
      handler: async (request, h) => {
        try {
          const allUsers = await UserModel.find().exec();
          return h.response(allUsers);
        } catch (error) {
          console.log(error);
          return error;
        }
      }
    });
  }
};

async function saveUser(request, h) {
  const userToSave = new UserModel({
    password: request.payload[ 'password' ],
    name: request.payload[ 'name' ]
  });
  const result = await userToSave.save().then(() => {
    console.log('user saved ');
  });
  return h.response(result);
}

