const db = require('../database/models')
const Usuario = db.Usuario
const bcryptjs = require('bcryptjs');

const loginController ={

    login: 
    function(req, res) {
        res.render('login',);
    },

    // TIRA ERROR 
    procesar:
    function(req,res){
        let usuario = req.body.username;
        let contrasenia = req.body.password;

    Usuario.findOne(
        {where:{email : usuario}}
    )
    .then(function( usuario){
        if(!usuario){
            return res.send('no existe este mail')
        }else{
            let comparar = bcryptjs.compareSync(contrasenia, usuario.contraseña);

            if (comparar){
                req.session.user = usuario;
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



