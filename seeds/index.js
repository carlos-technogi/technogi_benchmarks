var uuid = require('node-uuid');
var mysql      = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 20,
  host            : '05d33fab1c59e14845dfbc490cb823516ca6eb50.rackspaceclouddb.com',
  user            : 'technogi_bm',
  password        : 'technogi1234',
  database        : 'benchmarks'
});
/*
var pool  = mysql.createPool({
  connectionLimit : 20,
  host            : '127.0.0.1',
  user            : 'root',
  password        : '',
  database        : 'benchmarks'
});*/


var executed = 0;

for(var i = 0; i < 1000; i++){
  executed++;
  var post = {content: "Mensaje "+i+":"+uuid.v1()}
  var query = pool.query('INSERT INTO small_data SET ?', post, function(err, result) {
    if(err) throw err;
    else{
      console.log(post.content);
      if(executed===1000){
        pool.query("SELECT * FROM small_data",function(err,rows){
          if(err) throw err;
          console.log("Inserted "+rows.length+" rows");
          for(var j = 0; j < rows.length;j++){
            console.log(rows[j].id+" "+rows[j].content)
          }
        });
      }
    }
  });
}

