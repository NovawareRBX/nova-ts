import mariadb from "mariadb";

let pool: mariadb.Pool;

function initalise(): void {
	console.log("Initialising MariaDB pool");
	pool = mariadb.createPool({
		host: "172.18.0.4",
		port: 3306,
		user: process.env.MARIADB_USER,
		password: process.env.MARIADB_PASSWORD,
		database: "NovawareDiscord",
		connectionLimit: 30,
	});
}

export async function getMariaConnection() {
	if (!pool) {
		initalise();
	}

	return pool.getConnection();
}
