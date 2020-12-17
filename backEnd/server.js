const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const db = mongoose.connection;

const app = express();


// Routes
const indexRouter = require('./app/routes/index');
const newRouter = require('./app/routes/new');
const updateRouter = require('./app/routes/update');
const deleteRouter = require('./app/routes/delete')

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/' + 'PROJECT-4';
// Connect to Mongo
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
// open the connection to mongo
db.on('open', () => { });

// Define PORT for the API to run on
const PORT = process.env.PORT || 8000;
const reactPort = 3000;

/*** Middleware ***/

app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings

app.use(express.json());

app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${reactPort}` }));

/*** Routes ***/

// Mount the Routers
app.use(indexRouter);
app.use(newRouter);
app.use(updateRouter);
app.use(deleteRouter);

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log('Listening on port:', PORT));
