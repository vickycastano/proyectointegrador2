const db = require('../database/models');
const bcrypt = require('bcryptjs');

const register ={

  register: function(req, res) {
      if (req.session.usuarioLogueado) {
        return res.redirect('/profile');
      };
      res.render('register');
    },

  create: function(req,res){
    if (req.session.usuarioLogueado) {
        return res.redirect('/profile')
    }

    //validaciones 
    if (req.body.email == '' || req.body.email == undefined){
        return res.send('El email es obligatorio')
    }


    if (req.body.password == '' || req.body.password == undefined) {
        return res.send('La contraseña es obligatoria')
    }
    if (req.body.password.length < 3) {
        return res.send('La contraseña debe tener al menos 3 caracteres')
    }


    db.Usuario.findOne({
      where : {email : req.body.email}
    })
    .then (function(usuario){
      if (usuario){
        return res.send('El email ya existe')
      }

      const contraseñaHasheada = bcrypt.hashSync(req.body.password, 10);

      db.Usuario.create({
        email: req.body.email,
        contraseña: contraseñaHasheada,
        fechaNacimiento: req.body.fechaDeNacimiento,
        nombreUsuario: req.body.nombreUsuario,
        dni: req.body.dni,
        fotoDePerfil: req.body.fotoDePerfil
      })
      .then (function(usuarioCreado){
        res.redirect('/login')
      });

    });

  }
};
// prueba de commit 22222

module.exports = register;