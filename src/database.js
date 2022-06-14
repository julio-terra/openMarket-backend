const mongoose = require('mongoose');
const URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.rqaja.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set('debug', true);

mongoose
  .connect(URI, { useNewUrlParser: true })
  .then(() => console.log('DB is up.'))
  .catch((err) => console.log(err))