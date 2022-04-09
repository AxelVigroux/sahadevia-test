const mysql = require("mysql");
const util = require("util");

const domain_mysql = process.env.DOMAIN_MYSQL || 'localhost';
const user_mysql = process.env.USER_MYSQL || 'root';
const password_mysql = process.env.PASSWORD_MYSQL || 'azerty';
const database_mysql = process.env.DATABASE_MYSQL || 'azerty';
const port_mysql = process.env.PORT_MYSQL || 3306;

const pool = mysql.createPool({
	host: domain_mysql,
	user: user_mysql,
	password: password_mysql,
	database: database_mysql,
	port: port_mysql,
});
const query = util.promisify(pool.query).bind(pool);

module.exports = query;