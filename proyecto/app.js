var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productaddRouter = require('./routes/product-add');
var productRouter = require('./routes/product');
var profileRouter = require('./routes/profile');
var registerRouter = require('./routes/register');
var searchresultsRouter = require('./routes/search-results');
var loginRouter = require('./routes/login');




var app = express();

app.use(session({secret : "Nuestro mensaje secreto",
  resave: false,
  saveUninitialized: true
}));

//hace que los datos del usuario logueado estén disponibles en las vistas del sitio.
app.use (function(req, res, next){
    if (req.session.usuarioLogueado != undefined){
      res.locals.user = req.session.usuarioLogueado;
    }
    return next();
  })


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


//mantiene al usuario logueado usando la cookie si su sesión aún no está activa
app.use(function (req, res, next) {
  if (req.cookies.usuarioEmail != undefined && req.session.usuarioLogueado == undefined) {
    res.locals.user = req.cookies.usuarioEmail
    req.session.user = req.cookies.usuarioEmail
  }
  return next();
});




app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use ('/login', loginRouter);
app.use('/productadd', productaddRouter);
app.use('/product', productRouter);
app.use('/profile', profileRouter);
app.use('/register', registerRouter);
app.use('/searchresults', searchresultsRouter);



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

module.exports = app;
