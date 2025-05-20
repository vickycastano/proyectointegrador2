const db = require('../database/models')
const Usuario = db.Usuario
const bcryptjs = require('bcryptjs');

const loginController ={

    login: 
    function(req, res) {
        res.render('login',);
    },
 
    procesar:
    function(req,res){
        let usuario = req.body.username;
        let contrasenia = req.body.password;
        let recordame = req.body.remember

    Usuario.findOne(
        {where:{email : usuario}}
    )
    .then(function( usuarioEncontrado){
        if(!usuarioEncontrado){
            return res.send('no existe este mail')
        }else{
            let comparar = bcryptjs.compareSync(contrasenia,usuarioEncontrado.contraseña);
                // aca aunq ponga la contrasena correcta, me pone q esta mal VER 
            if (comparar){
                req.session.user = usuarioEncontrado;

                //ver si cookie funciona 
                if (recordame){
                    res.cookie('userEmail', usuarioEncontrado.email, { maxAge: 1000 * 60 * 60 });
                }
                return res.redirect('/profile')

            }else{
                return res.send('contraseña incorrecta')
            }
        }
    })
    .catch(function(error) {
            console.log(error);
            return res.send('Error en el login');
        });

    }

}

module.exports = loginController;



