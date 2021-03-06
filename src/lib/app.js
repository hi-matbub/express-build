require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const {NODE_ENV} = require('./config');
const {examplePost} = require('./example_router');

const app = express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

// middlewear
app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200);
  res.send('Hello, world!');
});

app.post('/', examplePost);

module.exports = app;
