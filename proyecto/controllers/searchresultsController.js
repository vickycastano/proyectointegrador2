const db = require ('../database/models');
let op = db.Sequelize.Op;

const searchresults ={

    searchresults: 
    function(req, res) {
      const searchTerm = req.query.search;

      db.Producto.findAll({
        where : { 
          nombreDelProducto : { [op.like] : '%' + searchTerm + '%' }
        },

        include : {
          all : true,
          nested : true
        }
      })
      .then(function(resultados){
        if (resultados.length == 0){
          return res.render('search-results', {
            productos : [],
            searchTerm : searchTerm,
            mensaje : 'No se encuentran resultados para su criterio de búsqueda'
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

module.exports = searchresults;