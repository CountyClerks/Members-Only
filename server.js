require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const path = require('path')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
const cors = require('cors')

const indexRouter = require('./routes/index');
// const loginRouter = require('./routes/logIn')
// const newMessageRouter = require('./routes/newMessage')
// const signUpRouter = require('./routes/signUp')

const app = express();
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

main().catch((err) => console.log(err))
async function main() {
  await mongoose.connect(process.env.DB_URL)
}

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))
app.use(compression());

//Routes
app.use('/', indexRouter);
// app.use('/login', loginRouter);
// app.use('/new-message', newMessageRouter);
// app.use('/signup', signUpRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(process.env.PORT, () => console.log(`app listening on port ${process.env.PORT}`))

module.exports = app;