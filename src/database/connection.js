import sql, { pool } from 'mssql'

//Se
const dbSettings = {
	user: 'SA',
	password: 'Manjlo#291602$',
	server: 'localhost',
	database: 'webstore',
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