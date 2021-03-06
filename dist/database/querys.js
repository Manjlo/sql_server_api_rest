"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
var queries = {
  getAllProducts: 'SELECT * FROM products',
  createNewProduct: 'INSERT INTO products(Id, name, Description, Quantity)VALUES(@id, @name, @description, @quantity)',
  getProductsById: 'SELECT * FROM products WHERE Id = @Id;',
  deleteProductById: 'DELETE FROM products WHERE Id= @Id;',
  updateProduct: "UPDATE webstore.dbo.products SET name= @name, Description=@description, Quantity=@quantity WHERE Id=@id;"
};
exports.queries = queries;