const http = require('http');
const {initStorage} = require('./config/fs');
const app = require('./config/express')();
const initDb = require('./config/mongoose')();
const {SERVER} = require('./const');

initStorage();
const server = http.createServer(app);
server.listen(SERVER.PORT);
