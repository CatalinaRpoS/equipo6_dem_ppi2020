const mysql = require("mysql");
const mysqlConnection = mysql.createConnection({
    host: 'bqbg4aubqsuzxquyffpn-mysql.services.clever-cloud.com',
    user: 'upkikve7yiriq4nn',
    password: 'H0lgEkYn988zVMr1kBix',
    database: 'bqbg4aubqsuzxquyffpn',
    multipleStatements: true
});

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    } else {
        console.log('¡Base de datos conectada!');
    }
});

setInterval(function () { 
    mysqlConnection.query('SELECT 1'); 
}, 5000); 

module.exports = mysqlConnection;