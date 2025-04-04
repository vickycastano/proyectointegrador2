const datos = require ('../db/modulodedatos.js');

const profile ={

    profile: 
    function(req, res) {
        res.render('profile', {datos: datos});
      }
}

module.exports = profile