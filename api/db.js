let mysql = require("mysql");
let db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: process.env.NODE_ENV === "test" ? "qa-cinema-test" : "qa-cinema-test"
    }
)

db.connect();


module.exports = db;