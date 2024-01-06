const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '162.55.100.32',
    user: 'colorzon_game1',
    password: 'colorzon_game1',
    database: 'colorzon_game1'
});

// const connection = mysql.createPool({
//     host: 'localhost',
//     user: 'admin',
//     password: 'Dph51mO5qkS8U1k',
//     database: '92lottery'
// });

export default connection;