// Set up MySQL connection.
var mysql = require("mysql");

var connection;
// jawsdb for heroku
if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection= mysql.createConnection({
  host: "localhost",
  // make port always remember
  port: 8889,
  user: "root",
  password: "password",
  database: "burgerz_db"
});
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection.
module.exports = connection;
