const { Association } = require('sequelize');
const db = require ('../database/models');
let op = db.Sequelize.Op;

const productoController ={
    productadd: 
    function(req, res) {
       if (req.session.usuarioLogueado) {
            return res.render("product-add");
        }else{
            return res.redirect('/usuario/login');
        }

    },
    nuevoproducto:
    function(req,res){

      db.Producto.create({
        usuarioId: req.session.usuarioLogueado.id,
        imagenDelProducto: req.body.image,
        nombreDelProducto: req.body.productname,
        descripcion: req.body.descripcion,
      })
      .then(function(){
        res.redirect('/usuario/profile')
      })
      .catch(function(error){
        console.log(error)
      })

    },
    detail: 
    function(req, res) {
              db.Producto.findByPk(req.params.id, {
                  include: [
                      { association: 'usuarios' }, 
                      { association: 'comentarios', include: [{ association: 'usuarios' }]}
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
    },
}

module.exports = productoController;


