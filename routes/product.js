const express = require('express');
const productDetails = require('../controller/product');

const router = express.Router();

router
    .get('/',productDetails.getAllProducts)
    .get('/:id',productDetails.getProducts)
    .post('/',productDetails.createProduct)
    .put('/:id',productDetails.replaceProduct)
    .patch('/:id',productDetails.updateProduct)
    .delete('/:id',productDetails.deleteProduct)

exports.router = router;

// 8eSXGQfLHORtWJ77
// neeraj test123