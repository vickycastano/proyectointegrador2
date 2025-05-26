
const db = require('../database/models');

const productController={
    detail: function(req, res) {
        db.Producto.findByPk(req.params.id, {
            include: [
                { association: 'usuarios' }, 
                { association: 'comentarios', include: [{ association: 'usuarios' }] }
              ]
        })
        .then(function(producto) {
            console.log(producto.imagenDelProducto);
            
          return res.render('product', { producto: producto });
        })
        .catch(function(error) {
          console.log(error);
          res.send("Error al buscar el producto");
        });
      }


    }
    
    module.exports = productController;