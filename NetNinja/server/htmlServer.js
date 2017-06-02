var http = require('http');
var fs = require('fs'); 


var server = http.createServer(function(request, response){
		 
	
	console.log('request is made ' + request.url);
	response.writeHead(200, {'Content-Type': 'text/html'});
	var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
	myReadStream.pipe(response);
}).listen(8888, '127.0.0.1');