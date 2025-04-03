const datos = require ('../db/modulodedatos.js');

const headerLougeadoController={
    headerLougeado:
    function(req, res) {
        res.render('headerLougeado', {datos: datos.usuario} );
    }
}

module.exports = headerLougeadoController;