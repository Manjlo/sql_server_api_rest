"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _products = require("../controlers/products.controllers");

var router = (0, _express.Router)();
router.get('/products', _products.getProducts);
router.post('/products', _products.CreateNewProducts);
router["delete"]('/products/:id', _products.deleteProduct);
router.put('/products/:id', _products.updateProductById);
router.get('/products/:id', _products.getProductById);
var _default = router;
exports["default"] = _default;