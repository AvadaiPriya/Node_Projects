const { createPool } = require('mysql');

const db = createPool({
    port: "3306",
    host: "us-cdbr-east-04.cleardb.com",
    user: "b832c4d3d25164",
    password: "78bcb0f8",
    database: "heroku_f9c1b4de6b95b63",
    connectionLimit: 10
});

module.exports = db;