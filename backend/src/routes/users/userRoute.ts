import * as hapi from 'hapi';
import { UserModel } from '../../schemas/UserModel';

module.exports = {
  name: 'userRoute',
  register: async (server: hapi.Server, options: hapi.RouteOptions) => {

    server.route({
      method: 'POST',
      path: '/api/users',
      handler: async (request: hapi.Request, h: hapi.ResponseToolkit) => {
        try {
          // todo - check if user exists
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
      handler: async (request: hapi.Request, h: hapi.ResponseToolkit) => {
        try {
          const test = await UserModel.find().exec();
          return h.response(test);
        } catch (error) {
          console.log(error);
          return error;
        }
      }
    });
  }
};

async function saveUser(request: hapi.Request, h: hapi.ResponseToolkit) {
  const userToSave = new UserModel({
    password: request.payload[ 'password' ],
    name: request.payload[ 'name' ]
  });
  const result = await userToSave.save().then(() => {
    console.log('user saved ');
  });
  return h.response(result);
}

