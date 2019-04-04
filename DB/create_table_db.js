var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"      //identify database
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";     //สร้าง query โดยมี id เป็น PK
  con.query(sql, function (err, result) {   //โยน query เข้าไปในการเชื่อมต่อแล้วทำงาน
    if (err) throw err;     //ถ้ามี error ก็โยน error ออกมา
    console.log("Table created");   //ถ้าไม่มี error ก็แสดง log ว่าตารางถูกสร้างเรียบร้อย
  });
});