import sql, { pool } from 'mssql'
import config from '../config';

//Se
const dbSettings = {
	user: config.db_user,
	password: config.db_password,
	server: config.db_server,
	database: config.db_database,
	options: {
		encrypt: true,
		trustServiceCertificate: true,

	}
};
//Initialitation of Global Connection
export async function getConnection() {
	try {
		const pool = await sql.connect(dbSettings);
	        return pool
	} 
	catch (error) {
		console.log(error);
		
	}

//Close Connection
}

export function closeConnetion() {
	return sql.close();
}
export {sql};