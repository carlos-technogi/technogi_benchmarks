exports.start=function(time,api_path){
  var start_time = Date.now();
  test(api_path,Date.now()+time);
}

var requests = 0;
var total_time = 0;

function test(api_path,max_time){
  var client = new (require('node-rest-client').Client)();
  var start_time = Date.now();
  try{
    client.get(api_path,function(data,response){
      requests ++;
      total_time += (Date.now-start_time);
      if(Date.now()<max_time){
        test(api_path,max_time);
      }
      else{
        console.log("LISTO");
        console.log(total_time/requests);
      }
    });
  }catch(e){
    console.log("ERROR");
    test(api_path,max_time);
  }
}