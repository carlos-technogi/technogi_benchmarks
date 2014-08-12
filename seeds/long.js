var loremIpsum = require('lorem-ipsum')

var uuid       = require('node-uuid');
var mysql      = require('mysql');
var pool       = mysql.createPool({
  connectionLimit : 20,
  host            : '05d33fab1c59e14845dfbc490cb823516ca6eb50.rackspaceclouddb.com',
  user            : 'technogi_bm',
  password        : 'technogi1234',
  database        : 'benchmarks'
});

var executed = 0;

for(var i = 0; i < 1000; i++){
  executed++;
    var output     = loremIpsum({
      count: 15                      // Number of words, sentences, or paragraphs to generate.
    , units: 'paragraphs'            // Generate words, sentences, or paragraphs.
    , sentenceLowerBound: 5         // Minimum words per sentence.
    , sentenceUpperBound: 15        // Maximum words per sentence.
    , paragraphLowerBound: 3        // Minimum sentences per paragraph.
    , paragraphUpperBound: 7        // Maximum sentences per paragraph.
    , format: 'plain'               // Plain text or html
  });
  var post = {content: "Mensaje "+i+":"+uuid.v1()+" "+output}
  var query = pool.query('INSERT INTO long_data SET ?', post, function(err, result) {
    if(err) throw err;
    else{
      console.log(post.content);
      if(executed===1000){
        showResults();
      }
    }
  });
}

var resultsShown = false;

function showResults(){
  if(resultsShown)return;

  pool.query("SELECT * FROM long_data",function(err,rows){
    if(err) throw err;
    console.log("Inserted "+rows.length+" rows");
    for(var j = 0; j < rows.length;j++){
      console.log(rows[j].id+" "+rows[j].content)
    }
  });
}
