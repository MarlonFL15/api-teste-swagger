const mysql = require('mysql');
const {host, user, password, database} = require('./config.json')


const connection = mysql.createConnection(
    {
        host: host,
        user: user,
        password: password,
        database: database,
        
    }
)

module.exports = connection