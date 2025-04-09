const datos = require("../db/modulodedatos");

const productadd ={

    productadd: 
    function(req, res) {
        res.render('product-add',{datos: datos});
      }
}

module.exports = productadd