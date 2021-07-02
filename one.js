var http=require("http");
http.createServer(function (request,response){
 response.writeHead(200,{'Content-Type':'text/plain'});
 response.end('Hello World');
}).listen(8081);
console.log('hello your server at http:12.0.0.1:8081/');