const mysql = require('mysql')

const connexao = mysql.createConnection({
    host: 'mysql_db',
    port: 3306,
    user: 'user',
    password: 'pass',
    database: 'course1'
})

module.exports = connexao