const http = require('http');
const app = require('./config/express')();
const initDb = require('./config/mongoose')();
const {SERVER} = require('./const');

const server = http.createServer(app);
server.listen(SERVER.PORT);
