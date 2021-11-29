const mongoose = require('mongoose');
const URI = 'mongodb://localhost/openmarket';

mongoose.set('debug', true);

mongoose
  .connect(URI, { useNewUrlParser: true })
  .then(() => console.log('DB is up.'))
  .catch((err) => console.log(err))