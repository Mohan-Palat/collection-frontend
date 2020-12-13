
// Require necessary NPM packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const db = mongoose.connection;

// Instantiate Express Application Object
const app = express();


// Require Route Files
const indexRouter = require('./app/routes/index');
const newRouter = require('./app/routes/new');

// Require DB Configuration File
// const db = require('./config/db'); //todo

// Establish Database Connection
// mongoose.connect(db, { useNewUrlParser: true });
// mongoose.connection.once('open', () => {
//   console.log('Connected to Mongo');
// });

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/'+ 'PROJECT-4';
// Connect to Mongo
mongoose.connect(MONGODB_URI ,{
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
db.on('open' , ()=>{});





// Define PORT for the API to run on
const PORT = 8000;
const reactPort = 3000;

/*** Middleware ***/

// Add `bodyParser` middleware which will parse JSON requests
// into JS objects before they reach the route files.
//
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}

app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings

// The method `.use` sets up middleware for the Express application
app.use(express.json());

// Set CORS headers on response from this API using the `cors` NPM package.
app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${reactPort}` }));

/*** Routes ***/

// Mount imported Routers
app.use(indexRouter);
app.use(newRouter);

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
