const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
const app = express();

require('dotenv/config');

require('./database');

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(morgan('dev'))
app.use(express.json());

app.use('/', require('./routes/product.routes'))
app.use('/user', require('./routes/user.routes'))

app.listen(PORT, () =>{
    console.log('Server is up')
});