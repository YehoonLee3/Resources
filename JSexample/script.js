const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Server\n');
  var hello = {'func':function(){
    console.log('hi');
  }}
  hello.func();
});
server.listen(port, hostname, function(){ // callback, 비동기
  console.log(`Server running at http://${hostname}:${port}/`);
});

