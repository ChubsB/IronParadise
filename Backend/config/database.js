const mysql = require("mysql");

const pool = mysql.createPool;
({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "iron_paradise",
  connectionLimit: 10,
});

module.exports = pool;
