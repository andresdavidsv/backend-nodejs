const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require('./utils/middleware/errorHandlers');

const corsHandler = require('./utils/middleware/corsHandler');

const notFoundHandler = require('./utils/middleware/notFoundHandler')

// body parser
app.use(express.json());
app.use(corsHandler());


//routes
moviesApi(app);

// catch 404 error
app.use(notFoundHandler);

//Error middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

moviesApi(app);

app.listen(config.dbPort, function () {
  const debug = require('debug')('app:server');
  debug(`Listening http://localhost:${config.dbPort}`);
});