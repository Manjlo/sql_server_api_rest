import sql from 'mssql'

const dbSettings = {
	user: 'SA',
	password: 'Manjlo#291602$',
	server: 'localhost',
	database: 'webstore',
};

async function getConnection() {
	try {
		const pool = await sql.connect(dbSettings);
	        return pool;
	} 
	catch (error) {
		console.log(error);
		
	}


}
getConnection();