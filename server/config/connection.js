//connection file mongoose hookup
//UPDATE W mongodb://127.0.0.1:27017/XXXXXX
const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || '',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;