const express = require("express");
const prodRouter = express.Router();
const products = require('./product.controller.js');


function router() {

    prodRouter.route('/products')
        .post(products.create)
        .get(products.findAll);

    prodRouter.route('/products/:productId')
        .put(products.update)
        .get(products.findOne);

    prodRouter.route('/products/delete/:productId')
        .delete(products.delete)
    
    return prodRouter;
}

module.exports = router;
