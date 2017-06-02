var http = require('http');

var server = http.createServer(function(request, response){
	 
	console.log('request is made ' + request.url);

	response.writeHead(200, {'Content-Type': 'plain/text'});
	response.write('Hello World!');
	response.end();
}).listen(8888, '127.0.0.1');