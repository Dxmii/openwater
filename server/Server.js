const express = require('express');
const path = require('path');
class Server {
  constructor(config) {
    this.app = express();
    this.app.use(express.static('static'));
    console.log('use static');
  }
}

module.exports = Server;
