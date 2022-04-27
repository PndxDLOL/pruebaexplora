require ('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

require('../models/Experiencias_Model');


const app = express();
app.use(cors());


//---- Configuracion base de datos----//

const mongoose = require ('mongoose');
const MONGO_URI = process.env.MONGO_URI;



mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on("connecting", function () {});
db.on("error", function (error) {
  console.error(`Error: ${error} al conectar`);
  mongoose.disconnect();
});
db.on("disconnected", function () {
  mongoose.connect(MONGO_URI);
});

mongoose.connect(MONGO_URI, (err, success) => {
  if (success) console.log("Conectado con exito");
  if (err) console.log(err);
});


//---------Extras configs ------------//

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/json" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


//----------Rutas--------------------//

const routes = require('./routes/index');
app.use('/api/', routes)

module.exports = app;


