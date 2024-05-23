const mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sakshi1234',
    database:'e-commerce'
})


module.exports = connection