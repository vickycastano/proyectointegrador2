const datos = require("../db/modulodedatos");

const productController={
    product:
    function(req, res) {
        res.render('product', {datos: datos});
    }
}

module.exports = productController;