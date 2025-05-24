const { Association } = require('sequelize');
const db = require('../database/models');

const productController={
    detail: function(req, res) {
        const idProducto = req.params.id;

        db.Producto.findByPk(idProducto, {
            include : [{ association: 'creador'}]
        })
        .then(function (producto){
            res.render('product-detail', {producto : producto});
        })
        .catch (function(error){
            console.log(error);
        })
    
    }
}

module.exports = productController;