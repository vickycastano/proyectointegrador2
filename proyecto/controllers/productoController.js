const { Association } = require('sequelize');
const db = require ('../database/models');
let op = db.Sequelize.Op;

const productoController ={
    productadd: 
    function(req, res) {
        res.render('product-add');
        
      },
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

module.exports = productoController;


