var http = require('http');
var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/lorem.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + 'writeMe.txt');

// Readable Stream

// Without Pipe
// myReadStream.on('data', function(chunk){
// 	console.log('new chunck received');
// 	// write
// 	myWriteStream.write(chunk);	

// });

// Pipe
// 	myReadStream.pipe(myWriteString);

var server = http.createServer(function(request, response){
		 
	
	console.log('request is made ' + request.url);
	response.writeHead(200, {'Content-Type': 'plain/text'});
	var myReadStream = fs.createReadStream(__dirname + '/lorem.txt', 'utf8');
	myReadStream.pipe(response);
}).listen(8888, '127.0.0.1');

