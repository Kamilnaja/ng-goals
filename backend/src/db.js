const Mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost/test';
Mongoose.connect(DB_URL, { useNewUrlParser: true })
  .then(() => console.log('Connected to db'))
  .catch(err => console.log('error while connecting : ' + err));

module.exports = Mongoose;
