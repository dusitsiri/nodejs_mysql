var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb",
});

//select all data
// con.connect(function(err){
//     if(err) throw err;
//     console.log("Connected");

//     var sql = "select * from customers";
//     con.query(sql, function(err, result){
//         if(err) throw err;
//         console.log(result);
//     });
// });

//select column
con.connect(function(err){
    if(err)throw err;
    console.log("Connected");

    var sql = "select name, address from customers";
    con.query(sql, function(err, result, fields){
        if (err) throw err;
        // console.log(result[0].address);
        console.log(fields[1].name);
    });
});