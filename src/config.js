import {config} from 'dotenv'
config()

export default {
	port: process.env.PORT || 4000,
	db_user: process.env.DB_USER || "",
	db_password: process.env.DB_PASSWORD || "",
	db_server: process.env.DB_SERVER || "",
	db_database: process.env.DB_DATABASE || ""
}