export const queries = {
	getAllProducts: 'SELECT * FROM products',
	createNewProduct: 'INSERT INTO products(Id, name, Description, Quantity)VALUES(@id, @name, @description, @quantity)',
	getProductsById: 'SELECT * FROM products WHERE Id = @Id;'
}