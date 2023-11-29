require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const path = require('path')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
const cors = require('cors')

//Authentication
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const indexRouter = require('./routes/index');

const app = express();

//Mongoose connection
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

main().catch((err) => console.log(err))
async function main() {
  await mongoose.connect(process.env.DB_URL)
}

//View engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))
app.use(compression());

const User = require('./models/user')
const bcrypt = require('bcryptjs')

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({username: username.trim()}, (error, user) => {
      if(error) {
        return done(error)
      }
      if(!user) {
        return done(null, false, {message: "Incorrect username"})
      }
      bcrypt.compare(password, user.password, (error, res) => {
        if(res) {
          return done(null, user)
        } else {
          return done(null, false, {message: "Incorrect password"})
        }
      })
    })
  })
)

passport.serializeUser(function(user, done) {
  done(null, user.id)
})

passport.deserializeUser(function(id, done) {
  User.findById(id, function(error, user) {
    done(error, user)
  })
})

app.use(session({ secret: process.env.JWT_SECRET, resave: false, saveUninitialized: true}))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.urlencoded({ extended: false}))

app.use(function(req, res, next) {
  res.locals.currentUser = req.user
  next()
})

//Route
app.use('/', indexRouter);

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