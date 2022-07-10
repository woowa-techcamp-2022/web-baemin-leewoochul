import cookieParser from 'cookie-parser';
import express, { json } from 'express';
import createError from 'http-errors';
import logger from 'morgan';
import apiRouter from './routes/api/index.js';
import indexRouter from './routes/index.js';
import loginRouter from './routes/login.js';
import signupRouter from './routes/signup.js';
import db from './utils/db.js';

await db.read();

db.data ||= {
  sessions: [],
  users: [],
};

const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(json());
app.use(cookieParser());
app.use(express.static('./public'));

app.use('/api', apiRouter);
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

const isDevelopmentMode = (req) => req.app.get('env') === 'development';

function errorHandler(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = isDevelopmentMode(req) ? err : {};
  res.status(err.status || 500);
  res.render('error');
}

app.use(errorHandler);

const port = process.env.PORT || '3000';
app.listen(port);
