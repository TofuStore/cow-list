const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '56505under',
  database: 'cowlist'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

// Your Database Queries Here!!
var getAll = function (callback) {
  connection.query('SELECT * FROM cows', [],  function(err, results) {
    if(err) {
      return err;
    }
    callback(err, results);
  })
}

var insert = function (cow, callback) {
  connection.query('INSERT INTO cows (name, description) VALUES(?, ?)', [cow.name, cow.description], function(err, results) {
    if(err) {
      return err;
    }
    callback(err, results);
  })
}




// Don't forget to export your functions!
module.exports = {
  getAll: getAll,
  insert: insert
};
