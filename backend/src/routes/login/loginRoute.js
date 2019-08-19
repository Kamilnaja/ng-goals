const GoalModel = require('../../schemas/GoalModel');

module.exports = {
  name: 'loginRoute',
  register: async (server, options) => {
    server.route({
      method: 'POST',
      path: '/api/login',
      handler: async (request, h) => {
        const item = {};
        return item;
      },
    });

    server.route({
      method: 'GET',
      path: '/',
      handler: async (request, h) => {
        try {
          const goal = await GoalModel.findById(request.params.id).exec();
          return h.response(goal);
        } catch (error) {
          return error;
        }
      },
    });
  }
};
