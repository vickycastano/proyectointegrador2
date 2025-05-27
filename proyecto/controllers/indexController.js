const db = require('../database/models')
const op = db.Sequelize.Op;

const indexController={
    index:
    function(req, res) {
        db.Producto.findAll( {include: [ {association: "usuarios"} ]})
        .then(function(respuesta){
            return res.render('index',{productos:respuesta})
        })
        .catch(function(error){
            console.log(error)
        })

    },
    searchresults: 
    function(req, res) {
          const searchTerm = req.query.search;
    
          db.Producto.findAll({
            where : { 
              nombreDelProducto : { [op.like] : '%' + searchTerm + '%' }
            },
            include :[{ association: 'usuarios' }] }
          )
          .then(function(resultados){
            if (resultados.length == 0){
              return res.render('search-results', {
                productos : [],
                searchTerm : searchTerm,
                mensaje : 'No hay resultados para su criterio de búsqueda'
              });
            } else {
              return res.render('search-results', {
                productos : resultados,
                searchTerm : searchTerm,
                mensaje : null
              });
            }
          })
          .catch(function(error){
            console.log(error);
          })
  }
}

module.exports = indexController;