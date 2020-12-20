const mysql = require('mysql')

const connexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'user',
    password: 'pass',
    database: 'course1'
})

module.exports = connexao