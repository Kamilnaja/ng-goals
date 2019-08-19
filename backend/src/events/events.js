module.exports = {
  'name': 'logger',
  register: async (server) => {
    server.events.on('route', (route) => console.log(`New route added : ${route.path}`));
    server.events.on('response', (request) => {
      console.log(request.info);
      console.log(request.params);
    });
  }
};
