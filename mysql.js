const mysql = require('mysql');
const connection =mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'15112002',
    database: 'familyname'
});

module.exports = connection;