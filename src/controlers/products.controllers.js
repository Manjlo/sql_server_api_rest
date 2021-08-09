import { closeConnetion, getConnection,  } from "../database/connection";


export const getProducts = async (req, res) => {
	 const pool = await getConnection()
	 const result = await pool.request().query('SELECT * FROM Products')
	 res.json(result.recordset)
	 closeConnetion();

 }