#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require('./server');
const debug = require('debug')('confusionserver:server');
const http = require('http');
const https = require('https');
const fs = require('fs');

/**
 * Get port from environment and store in Express.
 */

// const port = normalizePort(process.env.PORT || '3000');
const port = process.env.PORT || '5000';
app.set('port', port);
// app.set('secPort', port + 443);
/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', (err) => console.log("err", err));
server.on('listening', onListening);

// })();
// const options = {
//   key: fs.readFileSync(__dirname + '/earnieserver.key'),
//   cert: fs.readFileSync(__dirname + '/earnieserver.cert')
// };

// const secureServer = https.createServer(options, app);

// secureServer.listen(app.get('secPort'), () => {
// console.log('Secure server listening on port ', app.get('secPort'));
// });

// secureServer.on('err', onError);
// secureServer.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

// function normalizePort(val) {
//   const port = parseInt(val, 10);

//   if (isNaN(port)) {
//     // named pipe
//     return val;
//   }

//   if (port >= 0) {
//     // port number
//     return port;
//   }

//   return false;
// }

// /**
//  * Event listener for HTTP server "error" event.
//  */

// function onError(error) {
//   if (error.syscall !== 'listen') {
//     throw error;
//   }

//   const bind = typeof port === 'string'
//     ? 'Pipe ' + port
//     : 'Port ' + port;

//   // handle specific listen errors with friendly messages
//   switch (error.code) {
//     case 'EACCES':
//       console.error(bind + ' requires elevated privileges');
//       process.exit(1);
//       break;
//     case 'EADDRINUSE':
//       console.error(bind + ' is already in use');
//       process.exit(1);
//       break;
//     default:
//       throw error;
//   }
// }

// /**
//  * Event listener for HTTP server "listening" event.
//  */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}