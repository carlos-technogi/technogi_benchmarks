var program = require('commander');
var util = require('util');
var client = new (require('node-rest-client').Client)();

var requests = 0;
var total_time = 0;


program
  .version('0.0.1')
  .option('-p, --port', 'Api port')
  .option('-a, --address', 'api server address')
  .option('-P, --path', 'api path')
  .option('-w, --workers', 'workers')
  .option('-t, --time', 'time to ')
.parse(process.argv);


program.address=program.address||'localhost';
program.port=program.port||3000;
program.path=program.path||'benchmark/p1';
program.workers = program.workers || 100;
program.time = program.time || 5;

var api_path = util.format("http://%s:%d/%s",program.address,program.port,program.path);

console.log("Testing "+api_path+ " with "+ program.workers+" during "+program.time + " seconds ");

var runner = require('./runner');
runner.start(program.time*1000,api_path);
