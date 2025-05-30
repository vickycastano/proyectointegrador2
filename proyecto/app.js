var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

var indexRouter = require('./routes/index');
var usuarioRouter = require('./routes/usuario');
var productoRouter = require('./routes/producto');


var app = express();

app.use(session({secret : "Nuestro mensaje secreto",
  resave: false,
  saveUninitialized: true
}));

//guarda en las vistas el usuario que está logueado durante la sesión, para poder mostrar su información mientras navega.
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

// si el usuario eligió "recordarme", se vuelva a iniciar su sesión automáticamente usando la cookie.
app.use(function (req, res, next) {
  if (req.cookies.usuarioEmail != undefined && req.session.user == undefined) {
    res.locals.user = req.cookies.usuarioEmail
    req.session.user = req.cookies.usuarioEmail
  }
  return next();
});



app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/usuario', usuarioRouter);
app.use ('/producto', productoRouter);



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
