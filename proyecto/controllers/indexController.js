const datos = require("../db/modulodedatos");

const indexController={
    index:
    function(req, res) {
        res.render('index',{datos: datos});
    }
}

module.exports = indexController;