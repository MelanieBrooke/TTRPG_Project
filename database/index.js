const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// if (process.env.NODE_ENV === 'development') {
//   MONGO_URI = 'mongodb://localhost:27017/steam';
// }

// var user = process.env.MONGO_USER;
// var password = process.env.MONGO_PASSWORD;
var uri = process.env.MONGO_URI;

var options = {
  user: user,
  pass: password,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
};

mongoose.connect(
  uri, options
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`Connected to ${uri}`);
});