require('babel-register')({ ignore: /\/(build|node_modules)\// });
require('babel-polyfill');
require('dotenv').config('../../.env');
require('./server.js');
