const { Association } = require('sequelize');
const db = require('../database/models');

const productController={
    detail: function(req, res) {
        db.Producto.findByPk(req.params.id, {
          
        })
        .then(function(producto) {
          return res.render('product', { producto: producto });
        })
        .catch(function(error) {
          console.log(error);
          res.send("Error al buscar el producto");
        });
      }
    }
    
    module.exports = productController;