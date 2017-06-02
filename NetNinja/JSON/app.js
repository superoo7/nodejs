var http = require('http');
var fs = require('fs'); 


var server = http.createServer(function(request, response){
		 
	
	console.log('request is made ' + request.url);
	response.writeHead(200, {'Content-Type': 'application/json'});
	var myObj = {
		name: 'Ryu',
		job: 'Ninja',
		age: 29
	}
	response.end(JSON.stringify(myObj)) 
}).listen(8888, '127.0.0.1');