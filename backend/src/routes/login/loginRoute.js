module.exports = {
  name: 'loginRoute',
  register: async (server, options) => {
    server.route({
      method: 'POST',
      path: '/api/login',
      handler: async (request, h) => {
        const payload = request.payload;
        return payload;
      },
      options: {
        auth: false
      }
    });
  }
};
