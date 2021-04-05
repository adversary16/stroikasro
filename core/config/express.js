const bodyParser = require('body-parser');
const express = require('express');
const router = require('../routes');
const {SERVER: {PORT: port}} = require('../const/');

const init = () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({extended: false}));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use('/', router);
  app.set('port', port);
  return app;
};

module.exports = init;
