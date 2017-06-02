var fs = require('fs');

// read synchronous
var readMe = fs.readFileSync('readMe.txt', 'utf8');
console.log(readMe);

// write synchronous
fs.writeFileSync('writeMe.txt', readMe);

// read asynchronous
var readMe2 = fs.readFile('readMe.txt', 'utf8', function(err, data) {
	console.log(data);
	fs.writeFile('writeMe2.txt', data, (err) => {
		if (err) throw err;
		console.log('It is saved!');
	});
	console.log("Faster than writting!");
});
console.log("I am faster!");
