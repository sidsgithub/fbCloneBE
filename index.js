require('dotenv').config();

const express = require('express');

const app = express();// initialize an app

const bodyParser = require('body-parser');
const routes = require('./routes');

app.use(bodyParser.json()); // parse json

const port = process.env.PORT || 4000;
app.use('/', routes);

const server = app.listen(port, (error) => {
  if (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } else {
    // eslint-disable-next-line no-console
    console.log(`Server started on port ${port}`);
  }
});

app.use((error, req, res, next) => {
  res.json({
    success: false,
    error,
  });
});

module.exports = server;
