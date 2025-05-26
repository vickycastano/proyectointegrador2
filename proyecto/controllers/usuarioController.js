const db = require('../database/models');
const bcrypt = require('bcryptjs');

const usuarioController = {

  register: function(req, res) {
      if (req.session.usuarioLogueado) {
        return res.redirect('/usuario/profile');
      };
      res.render('register');
    },

  create: function(req,res){
    if (req.session.usuarioLogueado) {
        return res.redirect('/usuario/profile')
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
        res.redirect('/usuario/login')
      });

    });

  },
  login: function(req, res) {
             if (req.session.usuarioLogueado) {
              return res.redirect('/usuario/profile');
          }else{
              return res.render("login");
          }
      }, procesa:
      function(req,res){
          let emailIngresado = req.body.username;
          let claveIngresada = req.body.password;
          let recordame = req.body.remember;
  
  
      db.Usuario.findOne({
      where: { email: emailIngresado }
      })
      .then(function(usuarioEncontrado) {
          if (!usuarioEncontrado) {
              return res.send("El usuario no existe");
          } else {
              let claveCorrecta = bcrypt.compareSync(claveIngresada, usuarioEncontrado.contraseña);
              if (claveCorrecta) {
                  req.session.usuarioLogueado = usuarioEncontrado;
  
  
                  if (recordame != undefined){
                   res.cookie('usuarioEmail', usuarioEncontrado.email, { maxAge: 1000 * 60 * 60 });
                  }
                  return res.redirect('/usuario/profile');
         
          } else {
              return res.send("Contraseña incorrecta");
          }
      }
      })
      .catch(function(error) {
        console.log(error);
        return res.send("Error al intentar loguear");
      });
     
      },
      logout: function(req,res){
          req.session.destroy(function() {
              res.clearCookie('usuarioEmail');
              return res.redirect('/');
          });
      },
      profile: function(req, res) {
        if (!req.session.usuarioLogueado) {
          return res.redirect('/usuario/login'); // o lo que uses como ruta de login
        }
    
        const userId = req.session.usuarioLogueado.id;
    
        db.Usuario.findByPk(userId, {
          include: [
            {
              association: 'productos'
            }
          ]
        })
        .then(usuario => {
          if (!usuario) {
            return res.send('Usuario no encontrado');
          }
    
          return res.render('profile', {
            usuario: usuario,
            productos: usuario.productos // asegurate de que esto exista
          });
        })
        .catch(error => {
          console.error('Error al obtener perfil:', error);
          res.send('Error al cargar el perfil del usuario');
        });
  }
};

module.exports = usuarioController;