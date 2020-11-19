const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
  host: 'bqbg4aubqsuzxquyffpn-mysql.services.clever-cloud.com',
  user: 'upkikve7yiriq4nn',
  password: 'H0lgEkYn988zVMr1kBix',
  database: 'bqbg4aubqsuzxquyffpn',
  multipleStatements: true

  // host:'bz6uvndcnhfr7mavr9f2-mysql.services.clever-cloud.com',
// user:'ueeuwupkuykeozg6',
  // password:'xOSqBorgS9GXqXcO0gdp',
  // database:'bz6uvndcnhfr7mavr9f2',
  // multipleStatements: true
});
mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('¡Base de datos conectada!');
  }
});

module.exports = mysqlConnection;