const Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })
  .then(() => console.log('Connected to db'))
  .catch((err) => console.log('error while connecting : ' + err));

  module.exports = Mongoose;
