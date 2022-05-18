const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const app = express();

require('dotenv/config');

require('./database');

app.set('port', process.env.PORT || 8000)
app.use(cors());
app.use(morgan('dev'))
app.use(express.json());

app.use('/', require('./routes/product.routes'))
app.use('/user', require('./routes/user.routes'))

app.listen(app.get('port'), () =>{
    console.log('Server is up')
});