import cookieParser from 'cookie-parser';
import express, { json, urlencoded } from 'express';
import createError from 'http-errors';
import { JSONFile, Low } from 'lowdb';
import logger from 'morgan';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, 'db.json');
const adapter = new JSONFile(file);
export const db = new Low(adapter);

await db.read();

db.data ||= {
  sessions: [],
  // FIXME: 임시 유저
  users: [
    {
      id: 1,
      email: '',
      username: 'admin',
      password: '123',
      birthDate: '',
      phoneNumber: '',
    },
  ],
};

import apiRouter from './routes/api/index.js';
import indexRouter from './routes/index.js';
import loginRouter from './routes/login.js';
import signupRouter from './routes/signup.js';

const app = express();

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/api', apiRouter);
app.use('/signup', signupRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || '3000';
app.listen(port);
