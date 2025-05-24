const db = require('../database/models')
const bcrypt = require('bcryptjs')


const loginController ={

    login: 
    function(req, res) {
           if (req.session.usuarioLogueado) {
            return res.redirect('/profile');
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
                return res.redirect('/profile');
       
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
    }
 
}

module.exports = loginController;



