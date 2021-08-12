import { closeConnetion, getConnection, sql, queries } from "../database";

export const getProducts = async (req, res) => {
	try {
		const pool = await getConnection()
		const result = await pool.request().query(queries.getAllProducts);
		res.json(result.recordset)
		closeConnetion();
	} catch (error) {
		res.status(500).send(error.message);
	}
}

export const CreateNewProducts = async (req, res) => {

	const { id, name, description } = req.body;
	let quantity = req.body.quantity
	if (quantity === undefined) quantity = 0;
	if (name === null || description === null || id === null) {
		return res.status(400).json({ msg: "bad request, please fill all fields" })
		closeConnetion();
	} else {
		try {
			const pool = await getConnection();
			await pool
				.request().input("id", sql.Int, id)
				.input("name", sql.VarChar, name)
				.input("description", sql.Text, description)
				.input("quantity", sql.Int, quantity).query(queries.createNewProduct);
			res.json(`New product created ${name} ${description} ${quantity}`);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}
}

export const getProductById = async (req, res) => {
	const { id } = req.params
	try {

		const pool = await getConnection()
		const result = await pool.request().input("Id", id).query(queries.getProductsById);
		closeConnetion();
		if (result.rowsAffected[0] === 0) {
			return res.send(`Product was not found with id: ${id}`)
		} else {
			return res.json(result.recordset[0]);
		}
	} catch (error) {
		res.status(500).send(error.message)

	}
}
//Delete product by id from database
export const deleteProduct = async (req, res) => {
	const { id } = req.params
	try {
		const pool = await getConnection()
		const result = await pool
		.request()
		.input("Id", id)
		.query(queries.getProductsById);
		if (result.rowsAffected[0] === 0) {
			res.send(`Product with id: ${id} was not found`)
		} else {
			const name = result.recordset[0].name
			res.send(`Product: ${name} with id: ${id} was deleted`)
		}
		await pool.request().input("Id", id).query(queries.deleteProductById);
		closeConnetion();
	} catch (error) {
		res.status(500).send(error.message)

	}
}

//Update Product

export const updateProductById = async (req, res) => {
	const { name, description, quantity } = req.body;
	const { id } = req.params

	if (name === null || description === null || id === null || quantity === null) {
		return res.status(400).json({ msg: "bad request, please fill all fields" })
	}
	try {
		const pool = await getConnection();
		const result = await pool
			.request()
			.input("Id", id)
			.query(queries.getProductsById)
		await pool
			.request()
			.input("id", id)
			.input("name", sql.VarChar, name)
			.input("description", sql.Text, description)
			.input("quantity", sql.Int, quantity)
			.query(queries.updateProduct);
		closeConnetion();
		if (result.rowsAffected[0] === 0) {
			return res.send(`The product: ${name} with id: ${id} was not found.`)

		} else {
			return res.send(`The product: ${name} by id:${id} was update`)
		}
	} catch (error) {

	}
	getConnection().then(() => closeConnetion)
}