var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var pool  = mysql.createPool({
  connectionLimit : 15,
  host     : '05d33fab1c59e14845dfbc490cb823516ca6eb50.rackspaceclouddb.com',
  user     : 'technogi_bm',
  password : 'technogi1234'
});


function fib(n){
  return (n<=2)?1:fib(n-2)+fib(n-1);
}

router.get('/p1',function(req,res){
  res.json({msg:"Hello World"});
});

router.get('/p2',function(req,res){
  var body = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus enim, egestas eget auctor in, fermentum in neque. Proin et lectus nibh. Maecenas at elementum eros. Etiam orci augue, molestie et porta ut, faucibus in orci. Donec pulvinar eros dictum nunc molestie, id congue ligula elementum. Aenean feugiat pretium nunc ac ornare. Sed est lectus, accumsan facilisis eros vel, mattis blandit felis. Phasellus luctus mattis mauris, tincidunt pharetra ante dapibus non. Aliquam erat volutpat. Morbi eget volutpat metus. Ut pharetra quam turpis, at imperdiet purus convallis adipiscing. Curabitur ut quam dictum, placerat nisi sed, vehicula mauris. Morbi tincidunt posuere iaculis.\nUt nec blandit sapien. Vivamus et fermentum nibh, quis rutrum mauris. Pellentesque ipsum turpis, vulputate ullamcorper lectus sed, consectetur scelerisque magna. Donec vestibulum libero ut sem congue consectetur sit amet sed ipsum. Fusce elit diam, faucibus posuere arcu vel, viverra ullamcorper lacus. Nulla malesuada tristique libero, ac rhoncus velit hendrerit id. Praesent eget nibh erat. Suspendisse tincidunt felis libero, imperdiet vestibulum purus vehicula sit amet. Maecenas porta, dolor vel pretium auctor, ante nunc sagittis velit, eget varius tellus lorem vel nisl. Aliquam ultricies posuere pellentesque. Etiam vel purus quis nibh pulvinar egestas. Quisque tellus nulla, congue at lorem nec, mollis lacinia nunc.\nCurabitur ac leo eu nibh aliquet tincidunt et sed tellus. Aenean mauris ligula, luctus vitae odio sed, pulvinar placerat tortor. Sed ut purus accumsan dolor interdum vulputate. Aenean pretium risus et nibh condimentum, a volutpat massa porta. Sed tristique ipsum nec erat tincidunt viverra. Etiam et tortor tristique quam sollicitudin dignissim. Donec suscipit nulla vel feugiat viverra. Aliquam non est eget risus varius venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius massa non eros varius, vel vehicula velit convallis. Morbi et condimentum quam, id dignissim sapien. Nulla suscipit congue nisi et vestibulum.\nInteger varius eu ante sed vestibulum. Quisque vitae lacus quis augue varius imperdiet. Praesent erat massa, hendrerit ut risus pretium, auctor auctor ante. Proin posuere elit lacus, at convallis leo convallis eu. Pellentesque volutpat sed est sit amet ullamcorper. Maecenas tempor feugiat leo, et laoreet purus imperdiet et. Nunc sed purus ac risus porta mattis in quis velit. Morbi tellus diam, blandit sit amet mi eget, viverra suscipit nulla. Maecenas id dignissim ligula, eget mattis risus. Mauris mattis enim quis nisi fringilla, quis vestibulum leo ultricies. Quisque dolor turpis, egestas id facilisis in, tempor eu quam. Donec a elementum velit. Vestibulum porttitor ligula eu blandit consectetur. \nPraesent aliquam, tellus sed adipiscing pellentesque, magna augue rhoncus augue, eu semper est mauris sed tellus. Aliquam dictum eros in sollicitudin dapibus. Donec sollicitudin tellus ac metus accumsan adipiscing. Praesent iaculis dapibus scelerisque. Mauris sit amet massa diam. Cras interdum orci fermentum varius scelerisque. Curabitur ultrices bibendum erat, eget tempus ante faucibus non. Vestibulum placerat vitae justo id varius. Nullam lobortis dictum luctus. Donec non purus vel augue consectetur faucibus ac id turpis."
   res.json({msg:body});
});

router.post('/p3',function(req,res){
  res.json({msg:req.body.content.length});
});

router.get('/p4',function(req,res){
  res.json({msg:fib(10)});
});

router.get('/p5',function(req,res){
  if(req.headers.test){
    console.log(req.headers.test);
    res.json("OK");
  }else{
    console.log("No Header");
    res.status(400);
    res.json("No Header");
  }
  
});

router.get('/p6',function(req,res){
  pool.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    res.json({msg:rows[0].solution});
  });
});

module.exports = router;
