const { connect, connection } = require('mongoose');

// connect to the database
const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/flowerShopDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;