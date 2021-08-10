import { closeConnetion, getConnection, sql, queries} from "../database";

export const getProducts = async (req, res) => {
	try{
		const pool = await getConnection()
		const result = await pool.request().query(queries.getAllProducts);
	        res.json(result.recordset)
	        closeConnetion();
	}catch(error){
		res.status(500).send(error.message);
	}
}

export const CreateNewProducts = async (req, res) => {
	
	const {id, name, description} = req.body;
	let quantity = req.body.quantity
	if (quantity === undefined) quantity = 0;
	if (name === null || description === null || id === null) {
		return res.status(400).json({msg: "bad request, please fill all fields"})
	}
	try {
		const pool = await getConnection();
		await pool
		.request().input("id", sql.Int, id)
		.input("name", sql.VarChar, name)
		.input("description", sql.Text, description)
		.input("quantity", sql.Int, quantity).query(queries.createNewProduct);
		res.json(`New product created ${name} ${description} ${quantity}`);
		closeConnetion();	
	} catch (error) {
		res.status(500).send(error.message);
	}
	
}

export const getProductById = async (req, res) => {
	const {id} = req.params
	const pool = await getConnection()
	const result = await pool.request().input("Id", id).query(queries.getProductsById);
	console.log(result)
	res.send(id)
		//res.json(result.recordset)
	closeConnetion()

}