const mysql = require('mysql2')

const connectDB = mysql.createPool({
        host: 'localhost', // host name
        user: 'root', // user name
        password: "", // password
        database: "case_legal" // database name
});

module.exports = connectDB