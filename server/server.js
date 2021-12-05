const express = require('express');
const server = express();

const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const routes = require('./routes');

// server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

routes(server);
server.listen(port);

console.log(`Server listening on port ${port}`)