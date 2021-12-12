const mysql = require('mysql');
const {host, user, password, database} = require('./config.json')
const util = require('util')

const connection = mysql.createConnection(
    {
        host: host,
        user: user,
        password: password,
        database: database,
        
    }
)
const query = util.promisify(connection.query).bind(connection);
module.exports = {connection, query}