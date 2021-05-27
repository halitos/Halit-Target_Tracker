const { Pool } = require("pg");
require("dotenv").config();

let pool;
let db;

if (process.env.DATABASE_URL) {
  const connectionString = process.env.DATABASE_URL;
  db = {
    connectionString: connectionString,
    sslmode: require,
    ssl: {
      rejectUnauthorized: false,
    },
  };
} else {
  db = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_HOST,
    port: process.env.DB_PORT,
  };
}

pool = new Pool(db);

module.exports = pool;
