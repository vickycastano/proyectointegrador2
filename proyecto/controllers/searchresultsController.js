const datos = require ('../db/modulodedatos.js');

const searchresults ={

    searchresults: 
    function(req, res) {
        res.render('search-results', {datos: datos});
      }
}

module.exports = searchresults;