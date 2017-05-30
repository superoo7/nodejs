var http = require("http");

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("<!DOCTYPE html><body><h1>Hello World</h1></body></html>");
	response.end();

}).listen(8000);
