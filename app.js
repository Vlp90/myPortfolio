require("dotenv").config();
require("./config/mongodb"); // database initial setup


const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const app = express();
const hbs = require("hbs");
const moment = require("moment");


// Server Started
// const listener = app.listen(process.env.PORT, () => {
//   console.log(`app started at ${process.env.SITE_URL}:${process.env.PORT}`);
// });

// mongoose.connect('mongodb://localhost/myportfolio');

// SESSION SETUP
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 600000 }, // in millisec
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60, // 1 day
    }),
    saveUninitialized: true,
    resave: true,
  })
);


//HBS HELPERS
// hbs.registerHelper("formatDate", function (date) {
//   return moment(date).format("dddd DD MMMM YYYY");
// });

hbs.registerHelper("formatDate", function (date) {
  return moment(date).fromNow();
});




hbs.registerHelper("textFormat", function (str) {
  if ((str===null) || (str===''))
  return false;
  else
  str = str.toString();
  return str.replace(/<(?:.|\n)*?>/gm, '');
});

// hbs.registerHelper('textFormat', function (text) {

//   let string = text; 
//   let testhtml = string.toHtmlObject
//   return testhtml
// })

hbs.registerHelper("formatDateForInput", function (date, compare, options) {
  if (compare === "current") return moment(date).format("YYYY-MM-DDTkk:mm");
  if (compare === "min") return moment().format("YYYY-MM-DDTkk:mm");
});

// initial config
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static("public"));
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// default value for title local
app.locals.title = 'Welcome into my world';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




const index = require('./routes/index');
const adminsRouter = require('./routes/dashboard')

// CHECK THE STATUS OF SESSION
app.use((req, res, next) => {
  // console.log(req.session.currentUser, "----- user session");
  // we defined this key inside router.post("/signin").
  if (req.session.currentUser) {
    // res.locals.YOURVARIABLE is a way to define variables accessible
    // to the template (hbs) during the request / response cycle.
    // We can reference this variable in our template, it allows us to
    // Know if a user is loggedIn, can be used to do render certain parts of the layout :)
    res.locals.user = req.session.currentUser; // Allows us to access user info with the user key in the template
    res.locals.isLoggedIn = true;
  } else {
    res.locals.isLoggedIn = false;
  }
  next();
});

app.use('/', index);
// app.use("/", require("./routes/dashboard"));
app.use('/dashboard', adminsRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
