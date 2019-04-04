var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY"; //แก้ไขข้อมูลใน table โดยใช้ alter
  con.query(sql, function (err, result) {   
    if (err) throw err;
    console.log("Table altered");
  });
});