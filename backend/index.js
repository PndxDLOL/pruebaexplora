const express = require ('express');

const app = require('./app/app.js');

const App = express();

let http = require ('http');

App.use("/", app);

// - Normalizando y Seteando puerto -//

let port = normalizePort(process.env.PORT || 3001);
App.set ("port", port);

// -- Creacion servidor HTTP --//

let server = http.createServer(App);

server.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
})

function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // generate a error named pipe
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  }