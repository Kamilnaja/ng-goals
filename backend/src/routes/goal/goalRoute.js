const GoalModel = require('../../schemas/GoalModel');

module.exports = {
  name: 'goalRoute',
  register: async (server, options) => {
    server.route({
      method: 'GET',
      path: '/api/goals',
      handler: async (request, h) => {
        try {
          const test = await GoalModel.find().exec();
          return h.response(test);
        } catch (error) {
          console.log(error);
          return 'there is an error';
        }
      }
    });

    server.route({
      method: 'GET',
      path: '/api/goals/{id}',
      handler: async (request, h) => {
        try {
          const goal = await GoalModel.findById(request.params.id).exec();
          return h.response(goal);
        } catch (error) {
          return error;
        }
      }
    });

    server.route({
      method: ['POST'],
      path: '/api/goals',
      handler: async (request, h) => {
        try {
          const goalToSave = new GoalModel({
            description: request.payload['description'],
            title: request.payload['title']
          });
          const result = await goalToSave.save().then(() => {});
          return h.response(result);
        } catch (error) {
          throw new Error(error);
        }
      }
    });

    server.route({
      method: ['DELETE'],
      path: '/api/goals/{id}',
      handler: async (request, h) => {
        try {
          const result = await GoalModel.findByIdAndDelete(request.params.id).then(() => {
            console.log('success');
          });
          return h.response(result);
        } catch (error) {
          return error;
        }
      }
    });
  }
};
