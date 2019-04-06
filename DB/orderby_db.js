var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb",
});

//order by
// con.connect(function(err){
//     if(err) throw err;
//     con.query("select * from customers order by name", function(err, result){
//         if(err) throw err;
//         console.log(result);
//     });
// });

//order by desc
con.connect(function(err){
    if(err) throw err;
    con.query("select * from customers order by name desc", function(err, result){
        if(err) throw err;
        console.log(result);
    });
});

